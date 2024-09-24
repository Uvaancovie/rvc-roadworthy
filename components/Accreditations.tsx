export default function Accreditations() {
    return (
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            We Are Trusted
          </h2>
          <p className="text-gray-300 mb-12">
            RVC Roadworthy is proudly accredited by leading industry standards. We are approved by SABS, SASSETA, and RMI.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* RMI Logo */}
            <div className="flex justify-center">
              <img src="/rmi-logo.png" alt="RMI Approved" className="w-32 h-auto" />
            </div>
  
            {/* SABS Logo */}
            <div className="flex justify-center">
              <img src="/SABS_logo.png" alt="SABS Approved" className="w-32 h-auto" />
            </div>
  
            {/* SASSETA Logo */}
            <div className="flex justify-center">
              <img src="/SASSETA-LOGO.jpg" alt="SASSETA Approved" className="w-32 h-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  