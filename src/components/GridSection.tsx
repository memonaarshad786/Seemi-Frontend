import { FaCheckSquare, FaTimes, FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function GridSection() {
  return (
    <section className="bg-gradient-to-br from-[#e8dff5] to-[#f0ebf8] py-16 px-8 md:px-24 min-h-auto">
      <div className="text-left mb-16 max-w-3xl">
        <span className="inline-block text-xs font-bold tracking-widest text-[#26C485] uppercase mb-4">
          PERFORMANCE INSIGHTS
        </span>
        <h2 className="text-4xl font-bold text-gray-800 my-4 leading-snug">
          Seamless Business Integrations
        </h2>
        <p className="text-gray-600 leading-relaxed mt-6">
          Seemi seamlessly integrates with popular payment gateways like Stripe,
          allowing businesses to process transactions securely and efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
        {/* CARD 1 */}
        <div className="relative bg-[#FEECEC] rounded-2xl p-8 flex flex-col gap-4 shadow-md hover:translate-y-[-4px] hover:shadow-lg transition">
          <div className="w-15 h-15 flex items-center justify-center bg-white rounded-full text-gray-800 font-bold text-lg mb-2">
            01
          </div>
          <h3 className="text-lg font-bold text-gray-800 leading-snug">
            Lesson Scheduling & Calendar
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            Effortlessly organize and manage lessons with an intuitive
            drag-and-drop calendar designed for ultimate convenience.
          </p>

          <div className="flex flex-col gap-5 mt-2">
            <div className="flex items-start gap-3 bg-white p-4 rounded-md -rotate-1 relative">
              <FaCheckSquare className="text-yellow-400 text-xl" />
              <span className="text-gray-800 font-medium text-sm">
                Intuitive drag-and-drop calendar.
              </span>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-md -rotate-2 relative">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-800 font-medium text-sm">
                Manage Tutor Availability
              </span>
              <FaTimes className="absolute right-6 top-1/2 transform -translate-y-1/2 text-green-400 text-2xl cursor-not-allowed" />
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-md rotate-1 relative mt-5">
              <input type="checkbox" className="w-5 h-5" />
              <div className="flex flex-col gap-1">
                <span className="text-gray-800 font-medium text-sm">
                  Effortless Scheduling
                </span>
                <p className="text-gray-500 text-xs leading-snug">
                  Easily schedule lessons with an intuitive drag-and-drop
                  calendar.
                </p>
              </div>
            </div>

            <div className="w-1/2 h-2 bg-green-400 rounded mx-auto mt-2"></div>
          </div>

          {/* dotted border circle */}
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-dotted border-purple-400 rounded-full opacity-60"></div>
        </div>

        {/* CARD 2 */}
        <div className="relative bg-[#FAFCEE] rounded-2xl p-8 flex flex-col gap-4 shadow-md hover:translate-y-[-4px] hover:shadow-lg transition">
          <div className="w-15 h-15 flex items-center justify-center bg-white rounded-full text-gray-800 font-bold text-lg mb-2">
            02
          </div>
          <h3 className="text-lg font-bold text-gray-800 leading-snug">
            Billing & Payments
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            Generate and send invoices instantly, accept secure online payments
            through multiple gateways, and track outstanding balances with
            real-time financial insights.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center  rounded-md">
              <img
                src="/assets/thirdcomp/team-member.png"
                alt="team"
                className="h-18 w-full"
              />
                 <div className="">
 <img
                src="/assets/thirdcomp/girl-image.png"
                alt="team"
                className="h-10 w-10 rounded-full object-cover"
              />
              <img
                src="/assets/thirdcomp/Vector.png"
                alt="decor"
                className="h-10 w-10"
              />                </div>
             
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-dotted border-blue-400 rounded-full opacity-60"></div>
        </div>

        {/* CARD 3 */}
        <div className="relative bg-[#E9F5FF] rounded-2xl p-7 flex flex-col gap-4 shadow-md hover:translate-y-[-4px] hover:shadow-lg transition">
          <div className="w-15 h-15 flex items-center justify-center bg-white rounded-full text-gray-800 font-bold text-lg mb-2">
            03
          </div>
          <h3 className="text-lg font-bold text-gray-800 leading-snug">
            Student & Lesson Tracking
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            Maintain detailed lesson logs and progress reports, track attendance
            and performance metrics, and provide valuable feedback to students
            and parents.
          </p>

          <div className="flex flex-col gap-4 mt-4 relative">
            <FiArrowRight className="absolute right-0 w-5 h-5 text-yellow-500" />
            <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-sm max-w-[460px]">
              <h4 className="text-gray-900 font-bold text-sm mb-1">
                Tutor Feedback & Review
              </h4>
              <p className="text-gray-600 text-xs">
                Offer feedback to students and parents in a structured manner.
              </p>
              <a href="#" className="text-green-500 text-xs font-medium">
                View Details →
              </a>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-dotted border-green-400 rounded-full opacity-60"></div>
        </div>

        {/* CARD 4 */}
        <div className="relative bg-[#ECFEF1] rounded-2xl p-8 flex flex-col gap-4 shadow-md hover:translate-y-[-4px] hover:shadow-lg transition">
          <div className="w-15 h-15 flex items-center justify-center bg-white rounded-full text-gray-800 font-bold text-lg mb-2">
            04
          </div>
          <h3 className="text-lg font-bold text-gray-800 leading-snug">
            Parents & Students Portal
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            Provide secure portal access for students to view schedules,
            progress reports, and payments, while enabling direct messaging for
            seamless communication.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-md">
              <FaCheckSquare className="text-yellow-400 text-xl" />
              <span className="text-gray-800 font-medium text-sm">
                Intuitive drag-and-drop calendar.
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-md">
              <img
                src="/assets/thirdcomp/team-member2.png"
                alt="team"
                className="h-10 w-10 rounded-full"
              />
              <FaTimes className="text-green-400 text-2xl" />
              <img
                src="/assets/thirdcomp/Vector.png"
                alt="decor"
                className="h-10 w-10"
              />
            </div>
            <div className="text-center text-yellow-400 text-2xl opacity-60">
              <FaStar />
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-dotted border-yellow-500 rounded-full opacity-60"></div>
        </div>

        {/* CARD 5 */}
        <div className="relative bg-[#EEEEFC] rounded-2xl p-8 flex flex-col gap-4 shadow-md hover:translate-y-[-4px] hover:shadow-lg transition">
          <div className="w-15 h-15 flex items-center justify-center bg-white rounded-full text-gray-800 font-bold text-lg mb-2">
            05
          </div>
          <h3 className="text-lg font-bold text-gray-800 leading-snug">
            Automated Communication
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            Send automated email and SMS reminders for lessons and payments,
            ensuring timely notifications, while keeping parents informed with
            regular progress updates for better engagement.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-md">
              <div className="bg-purple-700 text-white w-12 h-14 rounded-md flex flex-col items-center justify-center text-xs font-bold">
                <span>Thus</span>
                <span>08</span>
              </div>
              <img
                src="/assets/thirdcomp/msg-member.png"
                alt="msg"
                className="h-10 w-10"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-dotted border-pink-500 rounded-full opacity-60"></div>
        </div>

        {/* CARD 6 */}
        <div className="relative bg-[#FBEEEE] rounded-2xl p-8 flex flex-col gap-4 shadow-md hover:translate-y-[-4px] hover:shadow-lg transition">
          <div className="w-15 h-15 flex items-center justify-center bg-white rounded-full text-gray-800 font-bold text-lg mb-2">
            06
          </div>
          <h3 className="text-lg font-bold text-gray-800 leading-snug">
            Business Reports & Insights
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            Gain valuable insights into your business operations with our
            in-depth reporting tools. Track performance, monitor growth, and
            make data-driven decisions with ease.
          </p>

          <div className="flex flex-col gap-4 mt-4 relative">
            <FiArrowRight className="absolute right-0 w-5 h-5 text-yellow-500" />
            <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-sm max-w-[460px]">
              <h4 className="text-gray-900 font-bold text-sm mb-1">
                Tutor Feedback & Review
              </h4>
              <p className="text-gray-600 text-xs">
                Offer feedback to students and parents in a structured manner.
              </p>
              <a href="#" className="text-yellow-500 text-xs font-medium">
                View Details →
              </a>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-dotted border-teal-400 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
