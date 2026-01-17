import { useParams } from "react-router-dom";
import SessionTabs from "./components/SessionTabs";

import PepTalkTab from "./tabs/PepTalk/PepTalkTab";
import SessionTitleTab from "./tabs/SessionTitle/SessionTitleTab";
import StandardsTab from "./tabs/Standards/StandardsTab";
import LessonsTab from "./tabs/Lessons/LessonsTab";
import DrillTab from "./tabs/Drill/DrillTab";
import ScienceTab from "./tabs/Science/ScienceTab";
import CuriosityTab from "./tabs/Curiosity/CuriosityTab";
import TechDiaryTab from "./tabs/TechDiary/TechDiaryTab";

const SessionPage = () => {
  const { sessionId } = useParams();

  const renderTab = () => {
    switch (sessionId) {
      case "pep-talk":
        return <PepTalkTab  />;
      case "session-title":
        return <SessionTitleTab />;
      case "standards":
        return <StandardsTab />;
      case "lessons":
        return <LessonsTab />;
      case "drill":
        return <DrillTab />;
      case "science":
        return <ScienceTab />;
      case "curiosity":
        return <CuriosityTab />;
      case "tech-diary":
        return <TechDiaryTab />;
      default:
        return <PepTalkTab />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <SessionTabs activeTab={sessionId} />
      {renderTab()}
    </div>
  );
};

export default SessionPage;
