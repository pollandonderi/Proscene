import React from "react";
import logo from './assets/logo.png';

function UCCHeader() {
    return (
    <div className="bg-gray-100 flex items-center justify-center py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left side */}
            <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Unified communications
            </h1>
            <p className="text-gray-700 mb-4">
                Unified communications and collaboration (UCC) enables anywhere,
                anytime work environments. With one solution, you can power
                synchronous and asynchronous communication from all devices and
                locations.
            </p>
            <p className="font-semibold text-lg text-gray-900">
                Proscene helps plan, deploy, operate, and optimize UCC solutions to
                keep your teams connected.
            </p>
            </div>

        {/* Right side */}
            <div className="flex flex-col items-center">
            <img
                src={logo}
                alt="Unified communications example"
                className="rounded-lg shadow-lg w-full object-cover"
            />
            <p className="mt-6 text-center text-lg text-gray-800 font-semibold border-t border-green-500 pt-4">
                UCC provides frictionless collaboration from anywhere at any time,
                using any device
            </p>
            </div>
      </div>
    </div>
    );
}

export default UCCHeader;