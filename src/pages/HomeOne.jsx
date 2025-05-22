import { NavLink } from "react-router-dom";

export default function HomeOne() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full text-white">
        <NavLink
          to="/register"
          className="relative rounded-3xl overflow-hidden col-span-2 p-7 min-h-[180px] bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 border border-purple-900 flex items-start hover:scale-105 hover:contrast-125 transition-transform duration-300 group"
        >
          <span className="absolute bottom-2 right-2 font-bold text-2xl">
            Register
          </span>

          <svg
            className="absolute -left-3 -bottom-3 size-30 -rotate-4 group-hover:-rotate-12 group-hover:scale-125 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 21a8 8 0 0 1 13.292-6" />
            <circle cx="10" cy="8" r="5" />
            <path d="M19 16v6" />
            <path d="M22 19h-6" />
          </svg>

          <span className="absolute top-2 left-2 text-xs border rounded-xl px-2 py-0.5">
            Register a new employee
          </span>
        </NavLink>

        <NavLink
          to={"/filter"}
          className="relative rounded-3xl overflow-hidden col-span-1 p-7 min-h-[180px] bg-gradient-to-br from-[#263b36] via-[#30554e] to-[#498375] border border-[#263b36] flex items-start hover:scale-105 hover:contrast-125 transition-transform duration-300 group"
        >
          <span className="absolute bottom-2 left-2 font-bold text-2xl">
            Filters
          </span>

          <svg
            className="absolute -right-3 -bottom-3 size-30 -rotate-4 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>

          <span className="absolute top-2 left-2 text-xs border rounded-xl px-2 py-0.5">
            Filters for employees
          </span>
        </NavLink>

        <a className="relative rounded-3xl overflow-hidden col-span-1 p-7 min-h-[180px] bg-gradient-to-br from-[#5a3634] via-[#884b46] to-[#b16e5e] border border-[#5a3634] flex items-start hover:scale-105 hover:contrast-125 transition-transform duration-300 cursor-not-allowed group">
          <span className="absolute bottom-2 left-2 font-bold text-2xl">
            Update
          </span>

          <svg
            className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-45 group-hover:scale-125 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
          </svg>

          <span className="absolute top-2 left-2 text-xs border rounded-xl px-2 py-0.5 text-cyan-600">
            Invalid
          </span>
        </a>

        <a className="relative rounded-3xl overflow-hidden col-span-1 p-7 min-h-[180px] bg-gradient-to-br from-red-500 via-red-700 to-red-500 border border-[#920a0a] flex items-start hover:scale-105 hover:contrast-125 transition-transform duration-300 cursor-not-allowed group">
          <span className="absolute bottom-2 left-2 font-bold text-2xl">
            Delete
          </span>

          <svg
            className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 9-6 6" />
            <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
            <path d="m9 9 6 6" />
          </svg>

          <span className="absolute top-2 left-2 text-xs border rounded-xl px-2 py-0.5 text-black">
            Invalid
          </span>
        </a>

        <a className="relative rounded-3xl overflow-hidden col-span-1 p-7 min-h-[180px] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 border border-gray-900 flex items-start hover:scale-105 hover:contrast-125 transition-transform duration-300 cursor-not-allowed group">
          <span className="absolute bottom-2 left-2 font-bold text-2xl">
            Settings
          </span>

          <svg
            className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-45 group-hover:scale-125 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="absolute top-2 left-2 text-xs border rounded-xl px-2 py-0.5 text-red-600">
            Invalid
          </span>
        </a>
      </div>
    </>
  );
}
