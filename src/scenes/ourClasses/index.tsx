import { SelectedPage } from "@/shared/types.ts";
import React from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "@/assets/index.ts";
import { motion } from "framer-motion";
import HText from "@/shared/HText.tsx";
import Class from "./Class.tsx";

type ClassesType = {
  name: string;
  description: string;
  image: string;
};

const classes: ClassesType[] = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and muscle with our comprehensive weight training program. Expert guidance on proper form and technique for all experience levels.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find balance and flexibility through our rejuvenating yoga sessions. Perfect for stress relief and improving overall mind-body wellness.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core and improve posture with targeted ab exercises. High-intensity workouts designed for visible results.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Challenge yourself with our dynamic outdoor training sessions. Experience varied workouts that combine cardio and strength in nature.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Join our high-energy fitness classes for a full-body workout. Combine cardio and resistance training for optimal results.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Personalized training sessions tailored to your goals. Work one-on-one with certified trainers for maximum efficiency.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="bg-primary-100 py-40 w-full" id="ourClasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText>OUR CLASSES</HText>
            <p className="py-5 text-sm">
              Choose from a variety of classes — strength, cardio, yoga,
              pilates, and HIIT — led by experienced trainers. Suitable for all
              fitness levels and designed to help you build strength, improve
              endurance, and stay motivated.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 w-full h-[353px] overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassesType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
