import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useNavigate } from "react-router-dom";

const SIZE = 520;
const RADIUS = SIZE / 2;
const INNER_RADIUS = 0;
const OUTER_RADIUS = 250;

const COLORS = {
  completed: "#16385e",
  pending: "#ffffff",
};

const SessionPlanCircle = ({ data, subjectId, moduleId, chapterId }) => {
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3
      .select(ref.current)
      .attr("width", SIZE)
      .attr("height", SIZE)
      .append("g")
      .attr("transform", `translate(${RADIUS}, ${RADIUS})`);

    /* ================= PIE SETUP ================= */
    const pie = d3
      .pie()
      .value(1)
      .sort(null);

    const arcs = pie(data);

    const arcGenerator = d3
      .arc()
      .innerRadius(INNER_RADIUS)
      .outerRadius(OUTER_RADIUS);

    /* ================= SLICES ================= */
    const slice = svg
      .selectAll(".slice")
      .data(arcs)
      .enter()
      .append("g")
      .attr("class", "slice")
      .style("cursor", "pointer");

    slice
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => COLORS[d.data.status])
      .attr("stroke", "#16385e")
      .attr("stroke-width", 1);

    /* ================= LABELS ================= */
    slice
      .append("text")
      .attr("transform", (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      })
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "11px")
      .style("font-weight", "600")
      .style("fill", (d) =>
        d.data.status === "completed" ? "#ffffff" : "#16385e"
      )
      .text((d) => d.data.label)
      .call(wrapText, 80);

    /* ================= INTERACTION ================= */
   slice
  .on("mouseenter", function () {
    d3.select(this)
      .select("path")
      .attr("fill", "#16385e");

    d3.select(this)
      .selectAll("text tspan")
      .attr("fill", "#ffffff");
  })
  .on("mouseleave", function (event, d) {
    d3.select(this)
      .select("path")
      .attr("fill", COLORS[d.data.status]);

    d3.select(this)
      .selectAll("text tspan")
      .attr(
        "fill",
        d.data.status === "completed" ? "#ffffff" : "#16385e"
      );
  })

      .on("click", (_, d) => {
        navigate(`/session/${subjectId}/${moduleId}/${chapterId}/${d.data.id}`);
      });
  }, [data, navigate, subjectId, moduleId, chapterId]);

  return <svg ref={ref} />;
};

export default SessionPlanCircle;


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

