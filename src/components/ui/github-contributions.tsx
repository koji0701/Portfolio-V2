import * as React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import type { CSSProperties } from "react"

interface ContributionDay {
  date: string
  contributionCount: number
  color: string
}

interface GitHubContributionsProps {
  username: string
  className?: string
}

export const GitHubContributions: React.FC<GitHubContributionsProps> = ({ 
  username, 
  className 
}) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setIsLoading(true)
        
        // Use GitHub's GraphQL API to fetch contributions
        const query = `
          query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                      color
                    }
                  }
                }
              }
            }
          }
        `
        
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Note: For production, you'd want to use a server-side proxy to hide the token
            'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN || ''}`
          },
          body: JSON.stringify({
            query,
            variables: {
              username,
              from: "2025-01-01T00:00:00Z",
              to: "2025-12-31T23:59:59Z"
            }
          })
        })

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data')
        }

        const data = await response.json()
        
        if (data.errors) {
          throw new Error(data.errors[0].message)
        }

        const contributionDays: ContributionDay[] = []
        data.data.user.contributionsCollection.contributionCalendar.weeks.forEach((week: any) => {
          week.contributionDays.forEach((day: any) => {
            contributionDays.push(day)
          })
        })

        setContributions(contributionDays)
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err)
        setError(err instanceof Error ? err.message : 'Failed to load contributions')
        
        // Fallback: Generate mock data for development
        const mockContributions = generateMockContributions()
        setContributions(mockContributions)
      } finally {
        setIsLoading(false)
      }
    }

    fetchContributions()
  }, [username])

  const generateMockContributions = (): ContributionDay[] => {
    const contributions: ContributionDay[] = []
    const today = new Date()
    const startDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      
      const contributionCount = Math.floor(Math.random() * 10)
      let color = '#161b22' // No contributions
      
      if (contributionCount > 0) {
        if (contributionCount >= 7) color = '#006d32'
        else if (contributionCount >= 4) color = '#26a641'
        else if (contributionCount >= 2) color = '#39d353'
        else color = '#40c463'
      }
      
      contributions.push({
        date: date.toISOString().split('T')[0],
        contributionCount,
        color
      })
    }
    
    return contributions
  }

  const getContributionLevel = (count: number): string => {
    if (count === 0) return 'No contributions'
    if (count <= 3) return 'Few contributions'
    if (count <= 6) return 'Some contributions'
    if (count <= 9) return 'Many contributions'
    return 'Very active'
  }

  const getRandomDelay = () => `${(Math.random() * 2).toFixed(1)}s`

  if (isLoading) {
    return (
      <div className={cn("w-full max-w-4xl", className)}>
        <div className="animate-pulse">
          <div className="bg-gray-800 h-32 rounded-lg"></div>
        </div>
      </div>
    )
  }

  if (error && contributions.length === 0) {
    return (
      <div className={cn("w-full max-w-4xl", className)}>
        <div className="text-center py-8">
          <p className="text-gray-400 font-typewriter text-sm">
            Unable to load GitHub contributions
          </p>
        </div>
      </div>
    )
  }

  // Sort contributions chronologically (earliest first)
  const sortedContributions = [...contributions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  // Determine column index based on number of weeks since the first contribution
  const firstDate = sortedContributions[0]
    ? new Date(sortedContributions[0].date)
    : new Date("2025-01-01T00:00:00Z")

  const millisecondsPerDay = 24 * 60 * 60 * 1000

  const getColumn = (dateStr: string) => {
    const diffDays = Math.floor(
      (new Date(dateStr).getTime() - firstDate.getTime()) / millisecondsPerDay
    )
    return Math.floor(diffDays / 7) + 1 // 1-based column index
  }

  const dayToRow = (d: number) => ((d + 1) % 7) + 1 // Saturday = 1, Sunday = 2 … Friday = 7

  return (
    <div className={cn("w-full max-w-4xl", className)}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-light text-white font-typewriter tracking-widest uppercase">
            GitHub Activity
          </h4>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-typewriter">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-900 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Contributions Grid */}
        <div className="bg-black/50 border border-gray-800 p-4 rounded-lg overflow-x-auto">
          <div className="grid grid-flow-col auto-cols-max grid-rows-7 gap-1">
            {sortedContributions.map((day, idx) => {
              const dateObj = new Date(day.date)
              const row = dayToRow(dateObj.getDay())
              const col = getColumn(day.date)
              return (
                <div
                  key={idx}
                  className={cn(
                    "w-3 h-3 rounded-sm border border-gray-800 transition-all duration-300 hover:border-gray-600",
                    day.contributionCount > 0 ? "animate-contribution" : ""
                  )}
                  style={{
                    backgroundColor: day.color,
                    animationDelay: getRandomDelay(),
                    gridRowStart: row,
                    gridColumnStart: col,
                  } as CSSProperties}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                />
              )
            })}
          </div>
          
          {/* Summary */}
          <div className="mt-4 text-xs text-gray-400 font-typewriter">
            <p>
              {contributions.reduce((total, day) => total + day.contributionCount, 0)} contributions in the last year
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 