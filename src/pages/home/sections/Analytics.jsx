import { motion } from "framer-motion";
import Mentees from "../../../assets/images/homesections/mentees.png";
import Badges from "../../../assets/images/homesections/badges.png";
import StatsCard from "../../../components/StatsCard";

const Analytics = () => {
  return (
    <section className="w-full py-16">
      <div
        className="
          max-w-6xl mx-auto
          flex 
          gap-4
          md:gap-12 lg:gap-16
          justify-center
          items-center
        "
      >
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <StatsCard img={Mentees} label="Mentees" value="6678" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <StatsCard img={Badges} label="Badges" value="1234" />
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;
