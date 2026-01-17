import { Play } from "lucide-react";

const VideoPlayer = () => {
  return (
    <div className="relative w-full h-[360px] border rounded-xl flex items-center justify-center">
      
      {/* Play icon */}
      <Play className="w-16 h-16 text-[#16385e]" fill=" #16385e " />

      {/* Timeline */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
        <span className="text-xs text-gray-500">12:34</span>
        <div className="flex-1 h-[2px] bg-gray-300 relative">
          <div className="absolute left-0 w-2 h-2 bg-[#16385e] rounded-full -top-[3px]" />
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-3 text-gray-500 text-sm">
        🔊 ⛶
      </div>
    </div>
  );
};

export default VideoPlayer;
