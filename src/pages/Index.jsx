import React from "react";
import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link to="/form" className="bg-black px-2 py-3 text-white rounded-sm">
        Go to main page
      </Link>
    </div>
  );
};
