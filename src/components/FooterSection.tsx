import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer
      className="w-full bg-cover bg-top bg-no-repeat text-white pt-60 px-20 md:px-16 lg:px-24"
      style={{ backgroundImage: `url(/assets/thirdcomp/blue-background.png)` }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-16">

        {/* Left Section */}
        <div className="max-w-[320px] flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Get Ready to started?</h2>
          <p className="text-sm text-[#dbe7f3] mb-6">
            Create your <strong>30-day free trial</strong> and <br />
            get started with TutorBird today!
          </p>
          <button className="bg-[#ff7a2f] text-white font-semibold py-3 px-7 rounded-[25px] mb-6 hover:opacity-80 transition-opacity">
            Get started
          </button>

          <div className="flex gap-4">
            <div className="bg-white text-[#0b3556] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"><FaFacebookF size={14} /></div>
            <div className="bg-white text-[#0b3556] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"><FaTwitter size={14} /></div>
            <div className="bg-white text-[#0b3556] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"><FaLinkedinIn size={14} /></div>
            <div className="bg-white text-[#0b3556] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"><FaInstagram size={14} /></div>
          </div>
        </div>

        {/* Features Column */}
        <div className="flex-1">
          <h4 className="text-[#ff7a2f] mb-4 text-lg">Features</h4>
          <ul className="space-y-2">
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Student Management</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Calendar & Attendance</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Invoices & Payments</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Business Features</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Learning Management</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Multi-Tutor</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Student Portal</li>
          </ul>
        </div>

        {/* Useful Links Column */}
        <div className="flex-1">
          <h4 className="text-[#ff7a2f] mb-4 text-lg">Useful Links</h4>
          <ul className="space-y-2">
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Pricing</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Contact</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Support</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Getting Started Guide</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Book a Demo</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Product Updates</li>
            <li className="text-[#dbe7f3] hover:text-white cursor-pointer text-sm">Free Worksheets</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex-1">
          <h4 className="text-[#ff7a2f] mb-4 text-lg">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><FaEnvelope className="mt-1" /> support@seemi.com</li>
            <li className="flex items-start gap-2"><FaPhone className="mt-1" /> Toll Free (US & Canada): 1 234 567 8901</li>
            <li className="flex items-start gap-2"><FaPhone className="mt-1" /> UK: 0123 456 7890</li>
            <li className="flex items-start gap-2"><FaPhone className="mt-1" /> International: +1 234 567 8901</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
