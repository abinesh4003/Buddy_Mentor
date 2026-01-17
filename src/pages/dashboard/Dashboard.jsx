import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";

import MentoringCircleD3 from "./sections/MentoringCircle";
import IntroMentoringCircle from "./sections/IntroMentoringCircle";
import VideoPlayer from "../session/tabs/PepTalk/components/VideoPlayer";

import { startCourse } from "../../store/progressSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);
  const unlockedModules = progress.unlockedModules;

  const [isIntro, setIsIntro] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-2">
      {/* MAIN CIRCLE */}
      {unlockedModules === 0 ? (
        <IntroMentoringCircle onStart={() => dispatch(startCourse())} />
      ) : (
        <MentoringCircleD3
          data={EPC_CORE_FOUNDATION}
          unlockedModules={unlockedModules}
          progress={90}
        />
      )}

      {/* INTRO + LEGEND */}
      <div className="mt-4 flex flex-col items-center text-center">
        {unlockedModules === 0 && (
          <button
            className="px-3 py-[3px] text-[12px] text-primary font-[520]
                       border border-gray-300 rounded-lg hover:bg-gray-100"
            onClick={() => setIsIntro(true)}
          >
            INTRO
          </button>
        )}

        <div className="mt-3 text-sm text-slate-600">
          ● Completed<br />
          ○ Pending
        </div>
      </div>

      {/* INTRO VIDEO MODAL */}
      {isIntro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-[95vw] sm:max-w-[720px] bg-white rounded-lg p-6">
            <X
              className="absolute top-1 right-1 w-4 h-4 cursor-pointer text-slate-600"
              onClick={() => setIsIntro(false)}
            />
            <VideoPlayer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

const EPC_CORE_FOUNDATION = {
  subject: "EPC Core",
  
  modules: [
    {
      id: "m001",
      moduleName: "Intro EPC",
      chapters: [
        { id: "c00101", title: "What is EPC" },
        { id: "c00102", title: "EPC vs EPCM" },
        { id: "c00103", title: "Project Life" },
        { id: "c00104", title: "Stakeholders" },
        { id: "c00105", title: "Market" }
      ]
    },
    {
      id: "m002",
      moduleName: "Project Phases",
      chapters: [
        { id: "c00201", title: "Concept" },
        { id: "c00202", title: "FEED" },
        { id: "c00203", title: "Detail Eng" },
        { id: "c00204", title: "Procurement" },
        { id: "c00205", title: "Construction" }
      ]
    },
    {
      id: "m003",
      moduleName: "Eng Basics",
      chapters: [
        { id: "c00301", title: "Disciplines" },
        { id: "c00302", title: "Codes" },
        { id: "c00303", title: "Deliverables" },
        { id: "c00304", title: "Coordination" },
        { id: "c00305", title: "Review" }
      ]
    },
    {
      id: "m004",
      moduleName: "Civil & Struct",
      chapters: [
        { id: "c00401", title: "Layout" },
        { id: "c00402", title: "Foundations" },
        { id: "c00403", title: "Steel" },
        { id: "c00404", title: "Concrete" },
        { id: "c00405", title: "Seismic" }
      ]
    },
    {
      id: "m005",
      moduleName: "Mechanical",
      chapters: [
        { id: "c00501", title: "Equip Overview" },
        { id: "c00502", title: "Vessels" },
        { id: "c00503", title: "Pumps & Turb" },
        { id: "c00504", title: "Datasheets" },
        { id: "c00505", title: "Materials" }
      ]
    },
    {
      id: "m006",
      moduleName: "Piping",
      chapters: [
        { id: "c00601", title: "Design" },
        { id: "c00602", title: "Routing" },
        { id: "c00603", title: "P&ID" },
        { id: "c00604", title: "Stress" },
        { id: "c00605", title: "Supports" }
      ]
    },
    {
      id: "m007",
      moduleName: "Electrical",
      chapters: [
        { id: "c00701", title: "Loads" },
        { id: "c00702", title: "Power Dist" },
        { id: "c00703", title: "SLD" },
        { id: "c00704", title: "Earthing" },
        { id: "c00705", title: "Hazard Area" }
      ]
    },
    {
      id: "m008",
      moduleName: "Instr & Ctrl",
      chapters: [
        { id: "c00801", title: "Instruments" },
        { id: "c00802", title: "Control" },
        { id: "c00803", title: "Field Dev" },
        { id: "c00804", title: "DCS/PLC" },
        { id: "c00805", title: "Loops" }
      ]
    },
    {
      id: "m009",
      moduleName: "Process Eng",
      chapters: [
        { id: "c00901", title: "PFD" },
        { id: "c00902", title: "Mass/Energy" },
        { id: "c00903", title: "Simulations" },
        { id: "c00904", title: "Heat/Mass" },
        { id: "c00905", title: "Basis Docs" }
      ]
    },
    {
      id: "m010",
      moduleName: "Procurement",
      chapters: [
        { id: "c01001", title: "Vendors" },
        { id: "c01002", title: "Tech Bid" },
        { id: "c01003", title: "Comm Bid" },
        { id: "c01004", title: "POs" },
        { id: "c01005", title: "Expediting" }
      ]
    },
    {
      id: "m011",
      moduleName: "Construction",
      chapters: [
        { id: "c01101", title: "Planning" },
        { id: "c01102", title: "Mobilization" },
        { id: "c01103", title: "Safety" },
        { id: "c01104", title: "Progress" },
        { id: "c01105", title: "Quality" }
      ]
    },
    {
      id: "m012",
      moduleName: "Commissioning",
      chapters: [
        { id: "c01201", title: "Pre-Comm" },
        { id: "c01202", title: "Mech Complete" },
        { id: "c01203", title: "Cold/Hot" },
        { id: "c01204", title: "Testing" },
        { id: "c01205", title: "Handover" }
      ]
    },
    {
      id: "m013",
      moduleName: "Planning",
      chapters: [
        { id: "c01301", title: "WBS" },
        { id: "c01302", title: "Scheduling" },
        { id: "c01303", title: "CPM" },
        { id: "c01304", title: "Resources" },
        { id: "c01305", title: "Progress" }
      ]
    },
    {
      id: "m014",
      moduleName: "Cost & Risk",
      chapters: [
        { id: "c01401", title: "Estimation" },
        { id: "c01402", title: "Control" },
        { id: "c01403", title: "Changes" },
        { id: "c01404", title: "Risks" },
        { id: "c01405", title: "Mitigation" }
      ]
    },
    {
      id: "m015",
      moduleName: "HSE",
      chapters: [
        { id: "c01501", title: "HSE Sys" },
        { id: "c01502", title: "Hazards" },
        { id: "c01503", title: "Permits" },
        { id: "c01504", title: "Env" },
        { id: "c01505", title: "Incidents" }
      ]
    },
    {
      id: "m016",
      moduleName: "Contracts",
      chapters: [
        { id: "c01601", title: "EPC Types" },
        { id: "c01602", title: "Terms" },
        { id: "c01603", title: "Claims" },
        { id: "c01604", title: "Damages" },
        { id: "c01605", title: "Closeout" }
      ]
    }
  ]
};

