import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { type BenefitType, SelectedPage } from "@/shared/types.ts";
import HText from "@/shared/HText.tsx";
import Benefit from "./Benefit.tsx";

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="size-6" />,
    title: "State of the Art Facilities",
    description:
      "Our gym is equipped with the latest fitness technology and equipment.",
  },
  {
    icon: <UserGroupIcon className="size-6" />,
    title: "Community Support",
    description:
      "Join a community of fitness enthusiasts who motivate and support each other.",
  },
  {
    icon: <AcademicCapIcon className="size-6" />,
    title: "Expert Trainers",
    description:
      "Our certified trainers are here to guide you on your fitness journey.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto py-20 w-5/6 min-h-full">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <HText>MORE THAN JUST AN GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you your ultimate fitness goals with ease. We provide true care
            into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex justify-between items-center gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
