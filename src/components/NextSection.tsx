
export default function NextSection() {
  return (
    <section className="bg-white py-16 px-5 md:px-16 lg:px-24">
      {/* Card Image */}
      <div className="max-w-[1100px] mx-auto mb-12">
        <img
          src="/assets/thirdcomp/Background.png"
          alt="App mock"
          className="mx-auto w-full h-auto rounded-[40px]"
        />
      </div>

      {/* Management Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-7 md:gap-10">
        {/* Decorative Left */}
        <img
          src="/assets/thirdcomp/Container.png"
          alt="decor"
          className="hidden md:block absolute left-5 bottom-0 w-[140px] opacity-95 pointer-events-none"
        />

        {/* Content */}
        <div className="text-center md:text-center max-w-[680px] px-4 md:px-0">
          <div className="text-[#ff7a3d] text-xs mb-2 font-semibold">Management</div>
          <h2 className="text-[#0b2433] text-2xl md:text-3xl font-bold mb-4">
            Simplified Management
          </h2>
          <p className="text-gray-500 leading-relaxed mb-5">
            Seemi efficiently manages the profiles and data of students, tutors,
            and staff in one centralised platform. It allows administrators to
            create, update, and track individual profiles, ensuring that all
            relevant information—such as schedules, performance records, and
            contact details—is easily accessible.
          </p>
          <button className="bg-gradient-to-b from-[#5b5cff] to-[#4a43d8] text-white rounded-[28px] py-2.5 px-6 shadow-md hover:shadow-lg transition-all">
            Book A Demo
          </button>
        </div>

        {/* Decorative Right */}
        <img
          src="/assets/thirdcomp/SVG.png"
          alt="decor"
          className="hidden md:block absolute right-5 bottom-[-10px] w-[140px] opacity-95 pointer-events-none"
        />
      </div>
    </section>
  );
}
