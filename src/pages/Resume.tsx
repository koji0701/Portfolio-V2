import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ResumePage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-luxurious-black flex flex-col items-center justify-start pt-24 pb-12 px-4">
      {/* Back to home */}
      <div className="w-full max-w-6xl mb-4">
        <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" /> Back Home
          </Link>
        </Button>
      </div>

      {/* PDF embed */}
      <div className="w-full max-w-6xl flex-1 border border-gray-800">
        <iframe
          title="Koji Wong Resume"
          src="/Koji%20Wong%20Fullstack%20Resume%20(1).pdf#toolbar=0&navpanes=0&view=FitH"
          className="w-full h-[calc(100vh-8rem)]"
        />
      </div>
    </div>
  );
};

export default ResumePage;