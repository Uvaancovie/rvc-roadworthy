export default function NewsBanner() {
    return (
      <div className="relative bg-black py-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Scrolling text */}
            <div className="whitespace-nowrap animate-scroll text-white text-lg font-semibold">
              <span className="mr-10">
                🚨 New Road Law: All vehicles must pass the accreditation process by the end of the year.
              </span>
              <span className="mr-10">
                ⚠️ Important: Accreditations must now include updated safety checks for all vehicles.
              </span>
              <span className="mr-10">
                🚗 Ensure your vehicle meets the new standards. Book your accreditation now!
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  