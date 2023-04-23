import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="bg-slate-500">
      <div className="flex w-full  border justify-between p-2 items-center">
        <div className="flex self-center justify-self-start ">
          <div className="self-center">
            <a href="/">
              <img
                className="w-14 self-center  justify-self-center bg-transparent via-neutral-800"
                src={Logo}
              />
            </a>
          </div>

          <div className="flex flex-col p-2  ">
            <a
              className="ml-2 self-start text-white font-serif text-base"
              href="/"
            >
              Aquatic d.o.o
            </a>

            <span className="ml-2 text-white font-serif text-sm">
              COMMERCIAL DIVING
            </span>
            <span className="ml-2 text-white font-serif text-base">
              Tonči Mašković
            </span>
          </div>
        </div>

        <div className="sm:flex max-w-sm self-center text-center text-white font-mono"></div>

        <div className="flex justify-evenly">
          <a target="_blank" href="https://www.facebook.com/tonci.maskovic">
            <div className="self-center w-12  text-white hover:text-blue-800">
              <FaFacebook style={{ width: "32px", height: "54px" }} />
            </div>
          </a>
          <a
            target="_blank"
            href="https://hr.linkedin.com/in/ton%C4%8Di-maskovi%C4%87-4153039a"
          >
            <div className="self-center w-12  text-white hover:text-blue-800">
              <FaLinkedin style={{ width: "32px", height: "54px" }} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*export const Navbar = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "540px",
          display: "flex",
          flexDirection:"column",
       
          border: "1px solid black",
        }}
      >
        <div class="child">Child 1</div>
        <div class="child">Child 2</div>
        <div
          class="child move-me"
          style={{ justifySelf: "center", alignSelf: "flex-end" }}
        >
          Child 3
        </div>
        <div class="child">Child 4</div>
      </div>

      <div className="container  inline-flex border">
        <div className="sm justify-self-start">Item 1</div>
        <div className="sm">Item 2</div>
        <div className="sm justify-self-end self-end">Item 3</div>
      </div>
    </div>
  );
};

export default Navbar;
*/

/**   <div>
      <div
      className="w-full flex flex-col border"
    
      >
        <div class="child">Child 1</div>
        <div class="child">Child 2</div>
        <div
          className="justify-self-auto self-end"
        
        >
          Child 3
        </div>
        <div class="child">Child 4</div>
      </div>

      <div className="container  inline-flex border">
        <div className="sm justify-self-start">Item 1</div>
        <div className="sm">Item 2</div>
        <div className="sm justify-self-end self-end">Item 3</div>
      </div>
    </div> */
