import React from "react";
import { motion } from "framer-motion";

const VideoModal = ({ showVideo, setShowVideo }) => {
  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        showVideo ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showVideo ? 1 : 0 }}
      onClick={() => setShowVideo(false)}
    >
      <div className="bg-white rounded-lg p-4">
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={() => setShowVideo(false)}
        >
          X
        </button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default VideoModal;
