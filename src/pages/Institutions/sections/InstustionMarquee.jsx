import React from "react";
import PartnersMarquee from "../../../components/PartnersMarquee";


const InstustionMarquee = () => {
  return (
    <section className="w-full bg-white pt-4 overflow-hidden">

      <h3 className="text-center text-lg sm:text-2xl text-primary font-semibold">
       Collaborations from Institutions
      </h3>

        <PartnersMarquee/>
    </section>
  );
};

export default InstustionMarquee;
