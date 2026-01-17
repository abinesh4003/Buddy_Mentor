import SessionPlanCircle from "./sections/SessionPlanCircle";
import { useParams } from "react-router-dom";

const SessionPlanPage = () => {
  const { subjectId,moduleId,chapterId } = useParams();
  return (
    <div className="flex flex-col items-center gap-4">
      <SessionPlanCircle data={sessionPlan} 
        subjectId={subjectId} moduleId={moduleId} chapterId={chapterId} />

      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#16385e]" />
          Completed
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full border border-[#16385e]" />
          Pending
        </div>
      </div>
    </div>
  );
};

export default SessionPlanPage;



const sessionPlan = [
 
  { id: "pep-talk", label: "Pep Talk",status:"pending" },
  { id: "session-title", label: "Session Title",status:"pending"  },
  { id: "standards", label: "Standards & Practices",status:"pending"  },
  { id: "lessons", label: "Lessons Learnt",status:"pending"  },
  { id: "drill", label: "Drill",status:"pending"  },
  { id: "science", label: "Science & Math",status:"pending"  },
  { id: "curiosity", label: "Curiosity Seeker",status:"pending"  },
  { id: "tech-diary", label: "Tech Diary",status:"pending"  },
];
