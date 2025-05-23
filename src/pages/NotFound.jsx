import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-100 cursor-crosshair hover:text-blue-400">
            404
          </h1>
          <p className="mt-4 text-5xl font-semibold tracking-tight text-balance text-zinc-300 sm:text-7xl">
            Page not found
          </p>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div className="mt-8">
            <button
              className="bg-white text-center w-40 mt-6 rounded-2xl h-10 relative text-black text-sm font-semibold cursor-pointer group"
              type="button"
              onClick={() => navigate("/")}
            >
              <div className="bg-blue-400 rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-0 top-[0px] group-hover:w-[160px] z-10 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="16px"
                  width="16px"
                >
                  <path
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    fill="#000000"
                  ></path>
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#000000"
                  ></path>
                </svg>
              </div>
              <p className="translate-x-2">Go Home</p>
            </button>
            <a
              href="#"
              className="text-sm font-semibold text-white mt-4 ml-8 hover:text-blue-400"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
