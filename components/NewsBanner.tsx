export default function NewsBanner() {
  return (
    <div className="relative bg-black py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Scrolling text */}
          <div className="whitespace-nowrap animate-scroll text-white text-lg font-semibold">
            <span className="mr-10">
              🚨 Roadworthy Testing • Multi-Point Checks • Pre-Condition Reports  🚨
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
