import { SelectedPage } from "@/shared/types.ts";
import { images } from "@/assets/index.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/shared/ActionButton.tsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediaScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-primary-100 py-10 md:pb-0 md:h-full">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="md:flex justify-center items-center mx-auto w-5/6 md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:-top-20 before:-left-20 before:-z-1 before:absolute before:w-full before:h-full md:before:evolve-text">
                <img src={images.homePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of. Get your Dream
              Body Now.
            </p>
          </motion.div>
          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex md:justify-start items-center gap-8 mt-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="font-bold text-primary-500 hover:text-secondary-500 text-sm underline"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="md:z-10 flex justify-center md:justify-items-end md:mt-16 md:ml-40 basis-3/5">
          <img src={images.homePageGraphic} alt="home page graphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediaScreen && (
        <div className="bg-primary-100 py-10 h-[150px]w-full">
          <div className="mx-auto w-5/6">
            <div className="flex justify-between items-center gap-8 w-3/5">
              <img src={images.sponsorRedBull} alt="redbull logo" />
              <img src={images.sponsorForbes} alt="forbes logo" />
              <img src={images.sponsorFortune} alt="fortune logo" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
