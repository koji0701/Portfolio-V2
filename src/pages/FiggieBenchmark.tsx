import figgieBlogHtml from './figgie-blog.html?raw';

export default function FiggieBenchmark() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        srcDoc={figgieBlogHtml}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Figgie Benchmark"
      />
    </div>
  );
}
