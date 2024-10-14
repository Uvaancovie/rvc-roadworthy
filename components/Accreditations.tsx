export default function Accreditations() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">
            We Are Trusted
          </h2>
          <p className="text-gray-900 mb-12">
            Vehicle Roadworthy Centre is proudly accredited by leading industry standards. We are approved by SABS,RMI , AA and Department Of Transport
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* RMI Logo */}
            <div className="flex justify-center">
              <img src="/rmi-logo.png" alt="RMI Approved" className="w-32 h-auto" />
            </div>

            {/* Department of Transport */}
            <div className="flex justify-center">
              <img src="/proudly-southafrica.png" alt="RMI Approved" className="w-32 h-auto" />
            </div>

            {/* Department of Transport */}
            <div className="flex justify-center">
              <img src="/department-transport.png" alt="RMI Approved" className="w-32 h-auto" />
            </div>

             {/* AA */}
             <div className="flex justify-center">
              <img src="/2.png" alt="RMI Approved" className="w-32 h-auto" />
            </div>
  
            {/* SABS Logo */}
            <div className="flex justify-center">
              <img src="/SABS_logo.png" alt="SABS Approved" className="w-32 h-auto" />
            </div>
  
            {/* SASSETA Logo */}
           
          </div>
        </div>
      </section>
    );
  }
  