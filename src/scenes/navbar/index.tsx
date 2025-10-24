import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link.tsx";
import { SelectedPage } from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/shared/ActionButton.tsx";


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "":"bg-primary-100 drop-shadow"

  return (
    <nav>
      <div className={`${navbarBackground} top-0 z-30 fixed flex-between py-6 w-full`}>
        <div className="flex-between mx-auto w-5/6">
          <div className="flex-between gap-16 w-full">
            {/* LEFT SIDE */}
            <img src={Logo} alt="Evogym logo" />
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className="flex-between w-full">
                <div className="flex-between gap-8 text-sm">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex-between gap-8">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become A Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="bg-secondary-500 p-2 rounded-full"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="right-0 bottom-0 z-40 fixed bg-primary-100 drop-shadow-xl w-[300px] h-full">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button
              type="button"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="size-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
