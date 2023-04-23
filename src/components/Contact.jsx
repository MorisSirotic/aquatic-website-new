export const Contact = () => {
  return (
    <div className="flex w-full flex-col mt-28">
      <div className="bg-slate-300">
        <h1 className="text-3xl self-center justify-self-center text-center font-bold text-slate-700">
          Contact
        </h1>
      </div>

      <div className="flex w-full justify-between  flex-wrap  p-9  bg-slate-200">
        {/* Personal Contact */}
        <div className="w-52 border-l-8 border-l-slate-400 border">
          <div className="flex flex-col ml-2">
            <span>Tonči Mašković</span>
            <a className="hover:text-blue-700" href="tel:+385 92 166 0453">
              +385 92 166 0453
            </a>

            <a
              className="hover:text-blue-700"
              href="mailto:umag@aquatic.com.hr"
            >
              umag@aquatic.com.hr
            </a>
            <a
              className="hover:text-blue-700"
              href="mailto:aquatic.umag@gmail.com"
            >
              aquatic.umag@gmail.com
            </a>
          </div>
        </div>

        {/* Location */}

        <div className="border-r-8 border-r-slate-400 ml-auto sm:ml-0">
          <div className="w-fit flex  flex-col mr-2">
            <a
              className="flex flex-col hover:text-blue-700"
              target="_blank"
              href="https://www.google.com/maps/dir//Radni%C4%8Dka+Ul.+16,+52470,+Umag/@45.4399962,13.527876,17z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x477b7d2716876bb7:0x60e96c04f040c32b!2m2!1d13.5300647!2d45.4399962"
            >
              Radnička 16
              <span>52470</span>
              <span>Umag</span>
              <span>Croatia</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
