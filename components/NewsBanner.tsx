export default function NewsBanner() {
  return (
    <div className="relative bg-black py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Scrolling text */}
          <div className="whitespace-nowrap animate-scroll text-white text-lg font-semibold">
            <span className="mr-10">
              🚗 Roadworthy Testing: Required annually for heavy motor vehicles exceeding 3500 kgs.
            </span>
            <span className="mr-10">
              🔧 Multi-Point Check: Additional checks recommended for private purchases.
            </span>
            <span className="mr-10">
              📝 Pre-Purchase Condition Report: Get a detailed condition assessment with electronic diagnostics.
            </span>
            <span className="mr-10">
              ⚡ Electrical Diagnostics: Report information on malfunctioning systems.
            </span>
            <span className="mr-10">
              🚦 Brake & Suspension Test: Ensure your vehicle passes all safety checks.
            </span>
            <span className="mr-10">
              🛠️ Pre-Loading Inspection: Includes additional checks with a brake test report.
            </span>
            <span className="mr-10">
              🔑 Registration Services: Change of ownership and license renewal available.
            </span>
            <span className="mr-10">
              🪪 Number Plates: Perspex and aluminium number plates available for your vehicle.
            </span>
            <span className="mr-10">
              🛡️ Free Safety Test: Offered before the festive season to ensure your vehicle's safety.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
