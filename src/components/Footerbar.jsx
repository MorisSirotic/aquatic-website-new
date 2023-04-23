import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";
export const Footerbar = () => {
  return (
    <div className="bg-slate-500">
      <div className="flex w-full  border justify-between p-2 items-center">
        <div className="flex sm justify-self-start">
          <div className="self-center">
            <a href="/">
              <img className="w-24 bg-transparent via-neutral-800" src={Logo} />
            </a>
          </div>
          <div className="flex flex-col p-2  ">
            <a
              className="ml-2 self-start text-white font-serif text-base"
              href="/"
            >
              Aquatic d.o.o
            </a>

            <span className="ml-2 text-white font-serif text-SM">
              COMMERCIAL DIVING
            </span>
            <span className="ml-2 text-white font-serif text-base">
              Tonči Mašković
            </span>
            <span className="ml-2 text-white font-serif text-base">
              OIB: 99187837521
            </span>
          </div>
        </div>

        <div className="flex items-center text-white font-mono"></div>

        <div className="flex justify-evenly">
          <a target="_blank" href="https://www.facebook.com/tonci.maskovic">
            <div className="self-center w-12 text-white hover:text-blue-800">
              <FaFacebook style={{ width: "32px", height: "54px" }} />
            </div>
          </a>
          <a
            target="_blank"
            href="https://hr.linkedin.com/in/ton%C4%8Di-maskovi%C4%87-4153039a"
          >
            <div className="self-center w-12  text-white hover:text-blue-800">
              <FaLinkedin
                style={{ width: "32px", height: "54px" }}
              
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footerbar;
