import React from "react";
import { type BenefitType, SelectedPage } from "@/shared/types.ts";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

interface SetSelectedPage {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({
  description,
  icon,
  title,
  setSelectedPage,
}: BenefitType & SetSelectedPage) => {
  return (
    <motion.div
      className="flex-1 mt-5 px-5 py-16 border-2 border-gray-100 rounded-md text-center"
      variants={childVariant}
    >
      <div className="flex justify-center mb-4">
        <div className="bg-primary-100 p-4 border-2 border-gray-100 rounded-full">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="font-bold text-primary-500 hover:text-secondary-500 text-sm underline"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
