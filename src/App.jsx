import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/HomeOne"));
const Register = React.lazy(() => import("./pages/Register"));
const Filter = React.lazy(() => import("./pages/Filter"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <div className="flex flex-col items-center justify-center min-h-screen gap-2">
                <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin flex items-center justify-center" />
                <p className="text-white text-2xl text-center">
                  Loading... Please wait
                </p>
              </div>
            </>
          }
        >
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/filter" element={<Filter />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
