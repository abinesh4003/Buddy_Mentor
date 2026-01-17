import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { unlockNextModule, resetProgress } from "../../../store/progressSlice";

/* ================= CONSTANTS ================= */
const SIZE = 600;
const RADIUS = SIZE / 2;

const CORE_RADIUS = 70;
const MODULE_INNER = 70;
const MODULE_OUTER = 160;
const CHAPTER_OUTER = 270;
const CHAPTER_RADIUS = 250;

const MentoringCircleD3 = ({ data, unlockedModules = 1, progress = 0 }) => {
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    d3.select(ref.current).selectAll("*").remove();

    const subjectId = data.subject
      .toLowerCase()
      .replace(/\s+/g, "-");

    /* ================= SVG SETUP (RESPONSIVE) ================= */
    const svg = d3
      .select(ref.current)
      .attr("viewBox", `0 0 ${SIZE} ${SIZE}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("width", "100%")
      .style("height", "auto")
      .append("g")
      .attr("transform", `translate(${RADIUS},${RADIUS})`);

    /* ================= MODULE SETUP ================= */
    const moduleAngle = (2 * Math.PI) / data.modules.length;

    const modules = data.modules.map((m, i) => ({
      ...m,
      locked: i >= unlockedModules,
      start: i * moduleAngle,
      end: (i + 1) * moduleAngle,
      mid: (i + 0.5) * moduleAngle,
    }));

    /* ================= MODULE ARC ================= */
    const moduleArc = d3
      .arc()
      .innerRadius(MODULE_INNER)
      .outerRadius(MODULE_OUTER)
      .startAngle((d) => d.start)
      .endAngle((d) => d.end);

    svg
      .selectAll(".module")
      .data(modules)
      .enter()
      .append("path")
      .attr("d", moduleArc)
      .attr("fill", (d) => (d.locked ? "#e5e7eb" : "#ffffff"))
      .attr("stroke", "#16385e");

    /* ================= CHAPTER BACKGROUND ARC ================= */
    const chapterArc = d3
      .arc()
      .innerRadius(MODULE_OUTER)
      .outerRadius(CHAPTER_OUTER)
      .startAngle((d) => d.start)
      .endAngle((d) => d.end);

    svg
      .selectAll(".chapter-bg")
      .data(modules)
      .enter()
      .append("path")
      .attr("d", chapterArc)
      .attr("fill", (d) => (d.locked ? "#f9fafb" : "#ffffff"))
      .attr("stroke", "#16385e")
      .attr("stroke-width", 1);

    /* ================= MODULE LABEL ================= */
    svg
      .selectAll(".module-label")
      .data(modules)
      .enter()
      .append("text")
      .attr("transform", (d) => {
        const r = (MODULE_INNER + MODULE_OUTER) / 2;
        return `
          rotate(${(d.mid * 180) / Math.PI - 90})
          translate(${r},0)
          rotate(${d.mid > Math.PI ? 180 : 0})
        `;
      })
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "11px")
      .style("font-weight", "600")
      .style("fill", "#16385e")
      .text((d) => d.moduleName)
      .call(wrapText, 90);

    /* ================= CHAPTER LIST ================= */
    const CHAPTER_GAP = 18;

    const chapterGroups = svg
      .selectAll(".chapter-group")
      .data(modules.filter((m) => !m.locked))
      .enter()
      .append("g")
      .attr("transform", (m) =>
        `rotate(${(m.mid * 180) / Math.PI - 90})`
      );

    chapterGroups
      .selectAll("text")
      .data((m) =>
        m.chapters.map((c, i) => ({
          ...c,
          index: i,
          module: m,
        }))
      )
      .enter()
      .append("text")
      .attr("transform", (d) =>
        `translate(${CHAPTER_RADIUS - d.index * CHAPTER_GAP},0) rotate(90)`
      )
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .style("font-weight", "600")
      .style("fill", "#16385e")
      .style("cursor", "pointer")
      .style("font-family", "Montserrat")
      .text((d) => d.title)
      .on("click", (_, d) => {
        navigate(`/chapter/${subjectId}/${d.module.id}/${d.id}`);
      })
      .on("mouseenter", function () {
        d3.select(this).style("fill", "#ffffff")
        .style("font-weight", "700");
        
      })
      .on("mouseleave", function () {
        d3.select(this).style("fill", "#16385e");
      });

    /* ================= CENTER CORE ================= */
    svg.append("circle").attr("r", CORE_RADIUS).attr("fill", "#16385e");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("fill", "#ffffff")
      .attr("dy", "-6")
      .style("font-size", "16px")
      .style("font-weight", "600")
      .style("font-family", "Montserrat")
      .text(data.subject);
  }, [data, unlockedModules, progress, navigate]);

  return (
    <motion.div
      className="flex flex-col items-center gap-3 w-full"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* RESPONSIVE SVG WRAPPER */}
      <div className="w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[600px]">
        <svg ref={ref} />
      </div>

      <div className="flex gap-2">
        <button
          className="px-2 py-[2px] text-[12px] text-primary font-[520] border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={() => dispatch(unlockNextModule())}
        >
          next week →
        </button>

        <button
          className="px-2 py-[2px] text-[12px] text-primary font-[520] border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={() => dispatch(resetProgress())}
        >
          Reset
        </button>
      </div>
    </motion.div>
  );
};

export default MentoringCircleD3;

/* ================= TEXT WRAP ================= */
function wrapText(text, width) {
  text.each(function () {
    const textSel = d3.select(this);
    const words = textSel.text().split(/\s+/).reverse();
    let word;
    let line = [];
    let lineNumber = 0;
    const lineHeight = 1.1;
    const y = textSel.attr("y");
    const dy = 0;

    let tspan = textSel
      .text(null)
      .append("tspan")
      .attr("x", 0)
      .attr("y", y)
      .attr("dy", dy + "em");

    while ((word = words.pop())) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = textSel
          .append("tspan")
          .attr("x", 0)
          .attr("y", y)
          .attr("dy", ++lineNumber * lineHeight + dy + "em")
          .text(word);
      }
    }
  });
}
