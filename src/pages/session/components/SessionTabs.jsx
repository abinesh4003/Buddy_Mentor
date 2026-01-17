import { useNavigate, useParams } from "react-router-dom";

const tabs = [
  { id: "pep-talk", label: "Pep Talk" },
  { id: "session-title", label: "Session Title" },
  { id: "standards", label: "Standards & Practices" },
  { id: "lessons", label: "Lessons Learnt" },
  { id: "drill", label: "Drill" },
  { id: "science", label: "Science & Math" },
  { id: "curiosity", label: "Curiosity Seeker" },
  { id: "tech-diary", label: "Tech Diary" },
];

const SessionTabs = ({ activeTab }) => {
  const navigate = useNavigate();
  const { subjectId, moduleId, chapterId } = useParams();

  return (
    <div className="flex gap-2 flex-wrap bg-gray-100 p-2 justify-around ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => navigate(`/session/${subjectId}/${moduleId}/${chapterId}/${tab.id}`)}
          className={`px-3 py-1 rounded text-xs font-semibold
            ${activeTab === tab.id
              ? "bg-[#16385e] text-white"
              : "bg-gray-100 text-gray-600"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SessionTabs;
