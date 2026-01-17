import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import tree from "../../../assets/images/tree-bg.png";
import { ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SVG_WIDTH = 900;
const SVG_HEIGHT = 600;

const WisdomTree = ( {subjectid,moduleid ,chapterid}) => {
  const svgRef = useRef();
  const navigate =useNavigate();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll(".node-layer").remove();

    const nodeGroup = svg
      .append("g")
      .attr("class", "node-layer");
    const node = nodeGroup
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `
        translate(${d.xPct * SVG_WIDTH}, ${d.yPct * SVG_HEIGHT})
      `);

    /* Text */
    const textElements = node.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("fill", d => d.position === "left" ? "#1f3a5f" : "#fff")
      .style("font-size", "11px")
      .style("font-weight", "600")
      .text(d => d.label);

    /* Label Box */
    node.insert("rect", "text")
      .each(function(d) {
        const textNode = d3.select(this.parentNode).select("text").node();
        const bbox = textNode.getBBox();
        const padding = 12;
        
        d3.select(this)
          .attr("x", -bbox.width / 2 - padding)
          .attr("y", -12)
          .attr("width", bbox.width + padding * 2)
          .attr("height", 24)
        //   .attr("rx", 5)
          .attr("fill", d.position === "left" ? "#fff" : "#1f3a5f")
          .attr("stroke", "#1f3a5f")
          .attr("stroke-width", 2);
      });

    /* Hover */
    node
      .style("cursor", "pointer")
      .on("mouseenter", function (event, d) {
        d3.select(this).select("rect").attr("fill", "#1f3a5f");
        d3.select(this).select("text").attr("fill", "#fff");
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).select("rect").attr("fill", d.position === "left" ? "#fff" : "#1f3a5f");
        d3.select(this).select("text").attr("fill", d.position === "left" ? "#1f3a5f" : "#fff");
      });

  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative max-w-[1000px] mx-auto">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto"
        >
          {/* Background Tree */}
          <image
            href={tree}
            x="0"
            y="0"
            width={SVG_WIDTH}
            height={SVG_HEIGHT}
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
        <div onClick={()=>navigate( `/chapter/${subjectid}/${moduleid}/${chapterid}/sessionplan`)} className="absolute bottom-6 right-20 flex items-center gap-2 text-primary font-bold p-4 cursor-pointer"> 
          Buddy Mentor wisdom Tree <ArrowRightCircle className="w-8 h-8 text-white" fill="primary"/>
        </div>
      </div>
    </div>
  );
};

export default WisdomTree;


const nodes = [
  // ROOT
  { id: "site", label: "Site Data", xPct: 0.46, yPct: 0.77, position: "right" },

  // LEFT – Global Data
  { id: "global", label: "Global data", xPct: 0.32, yPct: 0.18, position: "right" },
  { id: "coordinates", label: "Coordinates", xPct: 0.35, yPct: 0.28, position: "right" },
  { id: "datum", label: "Datum", xPct: 0.30, yPct: 0.42, position: "right" },
  { id: "cartography", label: "Cartography", xPct: 0.35, yPct: 0.50, position: "right" },

  // RIGHT – Local Data
  { id: "local", label: "Local data", xPct: 0.52, yPct: 0.07, position: "left" },
  { id: "soil", label: "Soil Data", xPct: 0.57, yPct: 0.14, position: "left" },
  { id: "temperature", label: "Temperature", xPct: 0.62, yPct: 0.22, position: "left" },
  { id: "pressure", label: "Pressure", xPct: 0.52, yPct: 0.28, position: "left" },

  { id: "weather", label: "Weather", xPct: 0.69, yPct: 0.43, position: "left" },
  { id: "humidity", label: "Relative Humidity", xPct: 0.67, yPct: 0.29, position: "left" },
  { id: "static electricoty", label: "Static Electricoty", xPct: 0.53, yPct: 0.40, position: "left" },
  { id: "winds", label: "Winds", xPct: 0.64, yPct: 0.37, position: "left" },
  { id: "rainfall", label: "Rainfall", xPct: 0.64, yPct: 0.53, position: "left" },
];
