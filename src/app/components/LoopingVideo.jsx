"use client"

import React, { useState, useRef } from "react";

const LoopingVideo = () => {
  // State to track if the video is muted
  const [isMuted, setIsMuted] = useState(true);

  // Ref to access the video element
  const videoRef = useRef(null);

  // Toggle mute/unmute functionality
  const toggleSound = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="video-background w-full h-full object-cover"
      >
        <source src="/videos/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold drop-shadow-lg">
          Welcome to My App
        </h1>
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full text-lg"
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
};

export default LoopingVideo;


