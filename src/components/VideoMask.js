import React, { useRef, useEffect } from "react";
import hensley from "./assets/hensley.mp4";
const VideoShape = ({ shape, videoRef }) => {
  const shapeStyles = {
    clipPath: shape,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };

  return (
    <div style={shapeStyles} className="relative">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

const VideoWithMask = () => {
  const videoRef = useRef(null); 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = hensley;
      videoRef.current.play();
    }
  }, []);

  const shapes = [
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    "polygon(50% 0%, 0% 100%, 100% 100%)",
    "circle(50% at 50% 50%)", 
    "ellipse(50% 40% at 50% 50%)",
    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
        {/* left Section */}
        <div className="bg-blue-600 text-white p-10 rounded-lg text-center">
            <h1 className="text-4xl font-bold leading-tight">
              We’re in the business of enhancing your business.
            </h1>
          </div>

        {/* right Section */}
        <div className="md:w-1/2 flex flex-col items-center gap-4">         

          {/* diff shhapes */}
          <div className="grid grid-cols-2 gap-4 w-full h-[400px]">
            {shapes.map((shape, index) => (
              <div key={index} className="w-full h-full">
                <VideoShape shape={shape} videoRef={videoRef} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoWithMask;
