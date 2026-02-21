import { FaCalendarAlt } from "react-icons/fa";

export default function FeatureShowcase() {
  const handleBookDemo = () => {
    console.log("Book a demo clicked");
  };

  return (
    <section className="bg-gradient-to-b from-white via-white  to-[#e8dff5] pb-12 px-8 flex flex-col">
      {/* Top Section */}
      <div className="flex items-center justify-center gap-6 mb-12 text-center flex-col md:flex-row">
        <p className="text-[0.95rem] italic text-[#4a5568] leading-[1.6] max-w-[800px]">
          Gain valuable insights into your business operations with our in-depth
          reporting tools. Track performance, monitor growth, and make
          data-driven decisions with ease.
        </p>
      </div>

      {/* Decorative Circle */}
      <div className="flex justify-center mb-10">
        <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#FFD580] to-[#FFC266] shadow-[0_4px_12px_rgba(255,205,86,0.2)]"></div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1300px] mx-auto items-center md:gap-8">
        {/* Left Side */}
        <div className="flex justify-center items-center">
          <div className="relative w-full h-[500px] flex items-center justify-center lg:h-[400px] md:h-[300px]">
            {/* Orange Dotted Circle */}
            <div className="absolute bottom-[100px] w-[300px] h-[300px] border-[4px] border-dashed border-[#FFB84D] rounded-full opacity-60 z-10"></div>

            {/* Illustration */}
            <img
              src="/assets/scndcomp/comp2.png"
              alt="Lesson Scheduling Illustration"
              className="w-full h-full object-contain p-4 relative z-20"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 flex flex-col gap-6 lg:p-4">
          {/* Header */}
          <div className="flex flex-col gap-3">
            <span className="text-[0.75rem] font-bold tracking-[2px] text-[#1abc9c] uppercase">
              Hassle Free Management
            </span>

            <h2 className="text-[2.2rem] font-bold text-[#2d3748] leading-[1.3] lg:text-[1.8rem] md:text-[1.4rem] flex items-center gap-3">
              <FaCalendarAlt className="text-[#5555cc]" />
              Lesson Scheduling & Calendar
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <p className="text-[1rem] text-[#4a5568] leading-[1.7] md:text-[0.9rem]">
              Effortlessly organize and manage lessons with an intuitive
              drag-and-drop calendar designed for ultimate convenience. Set up
              recurring sessions, adjust tutor availability with ease, and
              minimize missed appointments using automated reminders.
            </p>

            <p className="text-[0.95rem] text-[#718096] leading-[1.6] md:text-[0.85rem]">
              This streamlined scheduling system ensures a smooth experience for
              both students and tutors, reducing administrative burdens and
              maximizing efficiency.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleBookDemo}
            className="self-start mt-4 px-9 py-4 bg-gradient-to-br from-[#5555cc] to-[#4747bb] text-white rounded-[6px] font-bold text-[0.85rem] tracking-[1px] uppercase transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_24px_rgba(85,85,204,0.3)] active:translate-y-0 md:px-7 md:py-3 md:text-[0.8rem]"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
