import { useState } from "react";
import { FaCheckSquare, FaTimes, FaEnvelope, FaSearch } from "react-icons/fa";

// ── Reusable Search Bar ──
const SearchBar = () => (
  <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
    <FaSearch className="text-gray-300 text-[10px] flex-shrink-0" />
    <span className="text-[11px] text-gray-300">Search</span>
  </div>
);

// ── Sparkle Star SVG ──
const Star = ({ color = "#7B61FF", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 0 L11.8 8.2 L20 10 L11.8 11.8 L10 20 L8.2 11.8 L0 10 L8.2 8.2 Z" />
  </svg>
);

// ── Avatar with graceful gradient fallback ──
const Avatar = ({
  src,
  alt = "",
  className = "",
  fallback = "from-orange-200 to-amber-300",
}: {
  src: string;
  alt?: string;
  className?: string;
  fallback?: string;
}) => {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    return <div className={`${className} bg-gradient-to-br ${fallback}`} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

// ── Badge number circle ──
const Badge = ({
  num,
  bg = "bg-white",
}: {
  num: string | number;
  bg?: string;
}) => (
  <div
    className={`w-9 h-9 flex items-center justify-center ${bg} rounded-full shadow-sm text-gray-700 font-bold text-[13px] mb-5 flex-shrink-0`}
  >
    {num}
  </div>
);

// ── Dotted ring decoration ──
const DottedRing = ({ color = "border-purple-400" }) => (
  <div
    className={`absolute -bottom-8 -right-8 w-24 h-24 border-[3px] border-dashed ${color} rounded-full opacity-60 pointer-events-none`}
  />
);

// ── Team Members Tracking inner panel (reused in cards 2, 4, 5) ──
const TeamTrackingPanel = ({}) => (
  <div className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-sm p-3">
    <div className="flex items-start justify-between mb-3">
      <div>
        <div className="text-[12px] font-semibold text-gray-800">
          Team Members Tracking
        </div>
        <div className="text-[10px] text-gray-400">Collaborative Space</div>
      </div>
      <img
        src="/assets/thirdcomp/green-arrow.png"
        alt="avatar-2"
        className=" rounded-full object-cover"
      />
    </div>
    <SearchBar />
  </div>
);
const TeamTrackingPanelPink = ({}) => (
  <div className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-sm p-3">
    <div className="flex items-start justify-between mb-3">
      <div>
        <div className="text-[12px] font-semibold text-gray-800">
          Team Members Tracking
        </div>
        <div className="text-[10px] text-gray-400">Collaborative Space</div>
      </div>
      <img
        src="/assets/thirdcomp/pink-arrow.png"
        alt="avatar-2"
        className=" rounded-full object-cover"
      />
    </div>
    <SearchBar />
  </div>
);

// ── Feedback card (reused in cards 3 and 6) ──
const FeedbackCard = ({
  girlFallback = "from-pink-200 to-rose-400",
  boyFallback = "from-blue-200 to-blue-400",
}) => (
  <div className="relative bg-white border border-gray-100 rounded-2xl shadow-sm p-3 mb-4 pr-24">
    <div className="text-[12px] font-bold text-gray-900 mb-1">
      Tutor Feedback & Review
    </div>
    <p className="text-[10px] text-gray-500 leading-snug mb-1.5">
      Offer feedback to students and parents in a structured manner.
    </p>
    <a href="#" className="text-[10px] text-gray-800 font-medium">
      View Details →
    </a>
    <div className="absolute right-2 top-2 flex gap-1">
      <Avatar
        src="/assets/thirdcomp/girl-image.png"
        className="w-9 h-9 rounded-lg object-cover"
        fallback={girlFallback}
      />
      <Avatar
        src="/assets/thirdcomp/boy-image.png"
        className="w-9 h-9 rounded-lg object-cover"
        fallback={boyFallback}
      />
    </div>
    <span className="absolute -top-2.5 right-20 text-yellow-400 text-xl leading-none">
      ✦
    </span>
  </div>
);

// ════════════════════════════════════════════════
//  MAIN COMPONENT
// ════════════════════════════════════════════════
export default function GridSection() {
  return (
    <section className="bg-gradient-to-br from-[#e8dff5] to-[#f0ebf8] py-14 px-6 md:px-14 lg:px-20">
      {/* Section Header */}
      <div className="mb-10 max-w-3xl">
        <span className="text-[11px] font-bold tracking-widest text-[#26C485] uppercase mb-3 block">
          PERFORMANCE INSIGHTS
        </span>
        <h2 className="text-[30px] font-bold text-gray-900 leading-tight mb-3">
          Seamless Business Integrations
        </h2>
        <p className="text-gray-500 text-[13px] leading-relaxed">
          Seemi seamlessly integrates with popular payment gateways like Stripe,
          allowing businesses to process transactions securely and efficiently.
        </p>
      </div>

      {/* 3-column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px]">
        {/* ══ CARD 1 · Lesson Scheduling & Calendar ══ */}
        <div className="relative bg-[#FEECEC] rounded-3xl p-6 flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <Badge num="01" />

          <h3 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug">
            Lesson Scheduling & Calendar
          </h3>
          <p className="text-gray-500 text-[12px] leading-relaxed mb-5">
            Effortlessly organize and manage lessons with an intuitive
            drag‑and‑drop calendar designed for ultimate convenience.
          </p>

          <div className="flex flex-col gap-3 mt-auto">
            {/* Yellow checkbox row */}
            <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2.5 shadow-sm -rotate-1">
              <FaCheckSquare className="text-yellow-400 text-[15px] flex-shrink-0" />
              <span className="text-gray-800 font-medium text-[12px]">
                Intuitive drag-and-drop calendar.
              </span>
            </div>

            {/* Unchecked + X row */}
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-3 py-2.5 shadow-sm -rotate-1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded-sm flex-shrink-0" />
                <span className="text-gray-800 font-medium text-[12px]">
                  Manage Tutor Availability
                </span>
              </div>
              <FaTimes className="text-green-400 text-[15px]" />
            </div>

            {/* Two-line tilted card */}
            <div className="bg-white border border-gray-100 rounded-xl px-3 py-3 shadow-sm rotate-1">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded-sm flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-800 font-semibold text-[12px]">
                    Effortless Scheduling
                  </div>
                  <p className="text-gray-400 text-[11px] leading-snug mt-0.5">
                    Easily schedule lessons with an intuitive drag-and-drop
                    calendar.
                  </p>
                </div>
              </div>
              <div className="w-1/2 h-2 bg-green-400 rounded mx-auto mt-2"></div>
            </div>
          </div>

          <div className="absolute bottom-6 left-5">
            <Star color="#7B61FF" size={22} />
          </div>
          <DottedRing color="border-purple-400" />
        </div>

        {/* ══ CARD 2 · Billing & Payments ══ */}
        <div className="relative bg-[#FAFCEE] rounded-3xl p-6 flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <Badge num="02" />

          <h3 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug">
            Billing & Payments
          </h3>
          <p className="text-gray-500 text-[12px] leading-relaxed mb-5">
            Generate and send invoices instantly, accept secure online payments
            through multiple gateways, and track outstanding balances with
            real-time financial insights.
          </p>

          {/* Team tracking + girl avatar */}
          <div className="flex items-start gap-3 mb-4">
            <TeamTrackingPanel />
            <div className="flex flex-col items-center gap-2 pt-1 flex-shrink-0">
              <Avatar
                src="/assets/thirdcomp/girl-image.png"
                className="w-10 h-10 rounded-full object-cover"
                fallback="from-orange-200 to-amber-300"
              />
              <img
                src="/assets/thirdcomp/Vector.png"
                alt="decor"
                className="w-8 h-8"
              />
            </div>
          </div>

          {/* User chip row */}
          <div className="flex items-center gap-2">
            <Avatar
              src="/assets/thirdcomp/boy-image.png"
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              fallback="from-amber-200 to-orange-300"
            />
            <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-2xl shadow-sm px-3 py-2 flex-1 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                NK
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] font-semibold text-gray-800 truncate">
                  Nouman Khan
                </div>
                <div className="text-[10px] text-gray-400 truncate">
                  mohammadnouman524@gmail.com
                </div>
              </div>
              <FaEnvelope className="text-gray-300 text-[12px] flex-shrink-0" />
            </div>
          </div>

          <DottedRing color="border-blue-400" />
        </div>

        {/* ══ CARD 3 · Student & Lesson Tracking ══ */}
        <div className="relative bg-[#E9F5FF] rounded-3xl p-6 flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <Badge num="03" />

          <h3 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug">
            Student & Lesson Tracking
          </h3>
          <p className="text-gray-500 text-[12px] leading-relaxed mb-4">
            Maintain detailed lesson logs and progress reports, track attendance
            and performance metrics, and provide structured feedback to students
            and parents.
          </p>

          <FeedbackCard
            girlFallback="from-pink-200 to-rose-400"
            boyFallback="from-blue-200 to-blue-400"
          />

          {/* Seemii logo + date badges */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-1 text-white rounded-lg px-2.5 py-1.5 text-[11px] font-bold flex-shrink-0">
              <img
                src="/assets/thirdcomp/Seemii-Logo.png"
                alt="seemli"
                className="seemli-logo"
              />
            </div>
            <div className="flex gap-1.5">
              <div className="bg-purple-600 text-white rounded-lg px-2.5 py-1.5 text-center text-[10px] font-bold leading-snug">
                <div>Thus</div>
                <div>08</div>
              </div>
              <div className="bg-white border border-gray-200 text-gray-700 rounded-lg px-2.5 py-1.5 text-center text-[10px] font-bold leading-snug shadow-sm">
                <div>Thus</div>
                <div>08</div>
              </div>
            </div>
          </div>

          {/* Add New Tutor */}
          <div className="flex items-center justify-center gap-1.5 bg-white border border-dashed border-gray-200 rounded-xl px-3 py-2 mb-3 shadow-sm">
            <span className="text-gray-400 text-[11px]">+</span>
            <span className="text-gray-400 text-[11px] font-medium">
              Add New Tutor
            </span>
          </div>

          {/* Tutor Dashboard row */}
          <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-3 py-2.5 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center text-[10px]">
                📊
              </div>
              <div>
                <div className="text-[11px] font-semibold text-gray-800">
                  Tutor Dashboard
                </div>
                <div className="text-[9px] text-gray-400">Nav Nav</div>
              </div>
            </div>
            <div className="flex gap-4 text-[9px] text-right">
              <div>
                <div className="text-gray-400">Class</div>
                <div className="text-gray-500 text-[8px]">In Progress</div>
              </div>
              <div>
                <div className="text-gray-400">Tar</div>
                <div className="font-bold text-gray-700 text-[10px]">555</div>
              </div>
            </div>
          </div>

          <DottedRing color="border-teal-400" />
        </div>

        {/* ══ CARD 4 · Parents & Students Portal ══ */}
        <div className="relative bg-[#ECFEF1] rounded-3xl p-6 flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <Badge num="04" />

          <h3 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug">
            Parents & Students Portal
          </h3>
          <p className="text-gray-500 text-[12px] leading-relaxed mb-5">
            Provide an easy-to-use dashboard for parents and students to view
            schedules, progress reports, and payments, while enabling direct
            messaging for seamless communication.
          </p>

          {/* Yellow solid checkbox row */}
          <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2.5 shadow-sm -rotate-1 mb-4">
            <div className="w-5 h-5 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6l3 3 5-5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-[12px]">
              Intuitive drag-and-drop calendar.
            </span>
          </div>

          {/* Team tracking + X + curl */}
          <div className="flex items-start gap-3">
            <TeamTrackingPanelPink />
            <div className="flex flex-col items-center gap-3 pt-2 flex-shrink-0">
              <FaTimes className="text-green-400 text-[18px]" />
              <img
                src="/assets/thirdcomp/Vector.png"
                alt="decor"
                className="w-8 h-8"
              />
            </div>
          </div>

          <div className="absolute bottom-5 left-5">
            <Star color="#7B61FF" size={22} />
          </div>
          <DottedRing color="border-yellow-500" />
        </div>

        {/* ══ CARD 5 · Automated Communication ══ */}
        <div className="relative bg-[#EEEEFC] rounded-3xl p-6 flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <Badge num="05" />

          <h3 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug">
            Automated Communication
          </h3>
          <p className="text-gray-500 text-[12px] leading-relaxed mb-5">
            Send automated email and SMS reminders for lessons and payments,
            ensuring timely notifications, while keeping parents informed with
            regular progress updates for better engagement.
          </p>

          {/* Purple date block + user chip */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 text-white rounded-xl px-3 py-2.5 text-center text-[11px] font-bold leading-snug flex-shrink-0">
              <div>Thus</div>
              <div>08</div>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-2xl shadow-sm px-3 py-2 flex-1 min-w-0">
              <Avatar
                src="/assets/thirdcomp/boy-image.png"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                fallback="from-amber-200 to-orange-300"
              />
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-semibold text-gray-800 truncate">
                  Nouman Khan
                </div>
                <div className="text-[10px] text-gray-400 truncate">
                  mohammadnouman524@gmail.com
                </div>
              </div>
              <FaEnvelope className="text-gray-300 text-[11px] flex-shrink-0" />
            </div>
          </div>

          {/* Team tracking + girl avatar + curl */}
          <div className="flex items-start gap-3">
            <TeamTrackingPanel />
            <div className="flex flex-col items-center gap-2 pt-1 flex-shrink-0">
              <Avatar
                src="/assets/thirdcomp/girl-image.png"
                className="w-10 h-10 rounded-full object-cover"
                fallback="from-pink-200 to-rose-300"
              />
              <img
                src="/assets/thirdcomp/Vector.png"
                alt="decor"
                className="w-8 h-8"
              />
            </div>
          </div>

          <DottedRing color="border-pink-500" />
          <div className="absolute -bottom-5 -left-5 w-16 h-16 border-[3px] border-dashed border-blue-200 rounded-full opacity-45 pointer-events-none" />
        </div>

        {/* ══ CARD 6 · Business Reports & Insights ══ */}
        <div className="relative bg-[#FBEEEE] rounded-3xl p-6 flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <Badge num="06" />

          <h3 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug">
            Business Reports & Insights
          </h3>
          <p className="text-gray-500 text-[12px] leading-relaxed mb-4">
            Gain valuable insights into your business operations with our
            in-depth reporting tools. Track performance, monitor growth, and
            make data-driven decisions with ease.
          </p>

          <FeedbackCard
            girlFallback="from-pink-200 to-rose-400"
            boyFallback="from-amber-100 to-orange-300"
          />

          {/* Effortless Scheduling – tilted */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-4 py-3 mb-4 rotate-1">
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-sm flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-gray-800 font-semibold text-[12px]">
                  Effortless Scheduling
                </div>
                <p className="text-gray-400 text-[11px] leading-snug mt-0.5">
                  Easily schedule lessons with an intuitive drag-and-drop
                  calendar.
                </p>
              </div>
            </div>
          </div>

          {/* Tutor Dashboard row */}
          <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl shadow-sm px-3 py-2.5">
            <div className="w-7 h-7 bg-emerald-50 rounded-lg flex items-center justify-center text-[10px] flex-shrink-0">
              📊
            </div>
            <div>
              <div className="text-[11px] font-semibold text-gray-800">
                Tutor Dashboard
              </div>
              <div className="text-[9px] text-gray-400">Nav Nav</div>
            </div>
          </div>

          <DottedRing color="border-teal-400" />
        </div>
      </div>
    </section>
  );
}
