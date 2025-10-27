import { SelectedPage } from "@/shared/types.ts";
import { motion } from "framer-motion";
import { contactUsPageGraphic } from "@/assets/index.ts";
import HText from "@/shared/HText.tsx";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle: string =
    "bg-primary-300 px-5 py-3 mb-5 rounded-lg w-full placeholder-white";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: FormEvent) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  };

  return (
    <section id="contactUs" className="mx-auto pt-24 pb-32 w-5/6">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span>
          </HText>
          <p className="my-5">
            Ready to take the next step? Fill out the form below and our team
            will get back to you within 24 hours. Whether you have questions
            about membership, classes, or personal training, we're here to help
            you reach your fitness goals.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="md:flex justify-between gap-8 mt-10">
          <motion.div
            className="mt-10 md:mt-8 basis-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action={"https://formsubmit.co/oghenetejiriamrasa@gmail.com"}
            >
              {/* NAME */}
              <input
                type="text"
                className={inputStyle}
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 1000 characters"}
                </p>
              )}
              {/* EMAIL ADDRESS */}
              <input
                type="email"
                className={inputStyle}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              {/* MESSAGE */}
              <textarea
                rows={4}
                cols={50}
                className={`${inputStyle} resize-none`}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters"}
                </p>
              )}
              <button
                type="submit"
                className="bg-secondary-500 mt-5 px-20 py-3 rounded-lg hover:text-white transition duration-500"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 md:mt-0 basis-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          ><div className="before:-right-10 before:-bottom-20 before:-z-1 before:absolute w-full md:before:evolve-text"><img className="w-full" src={contactUsPageGraphic} alt="contact us page graphic" /></div></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
