import { logo } from "@/assets/index.ts";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="md:flex justify-content gap-16 mx-auto w-5/6">
        <div className="mt-16 md:mt-0 basis-1/2">
          <img src={logo} alt="logo" />
          <p className="my-5">
            Empowering your fitness journey with personalized workouts, expert
            coaching, and a supportive community.
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 md:mt-0 basis-1/4">
          <h4 className="font-bold">Links</h4>

          <p className="my-5">Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="mt-16 md:mt-0 basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">ogheneteiriamrasa@gmail.com</p>
          <p className="my-5">(234)8073137928</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
