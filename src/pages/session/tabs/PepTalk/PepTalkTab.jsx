import VideoPlayer from "./components/VideoPlayer";
import RatingBadge from "./components/RatingBadge";
import DescriptionSection from "./components/DescriptionSection";
import DownloadButton from "./components/DownloadButton";

const PrepTalkTab = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      
      {/* Video */}
      <VideoPlayer />

      {/* Actions */}
      <div className="flex items-center justify-end">
        <DownloadButton />
        <RatingBadge rating={4.9} reviews={32254} />
      </div>

      {/* Description */}
      <DescriptionSection />
    </div>
  );
};

export default PrepTalkTab;
