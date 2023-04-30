import { Contact } from "./components/Contact";
import Footerbar from "./components/Footerbar";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Service from "./components/Service";
import davor from "./assets/davor.png";

function App() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col   mt-28 max-w-6xl">
          <div className="flex flex-col m-1">
            <div className="flex bg-slate-300">
              <h1 className="text-3xl font-bold m-auto self-center text-slate-700">
                Our Services
              </h1>
            </div>

            <div className="flex flex-wrap items-center">
              <Offer
                props={{
                  title: "Underwater Inspection and Monitoring",
                  content:
                    "CVI, GVI, NDT and monitoring Diving activities in offshore and inshore enviroment.",
                  url: "https://aquatic.com.hr/static/media/1_3.30504d7da7e3518e18a6.webp",
                }}
              />

              <Offer
                props={{
                  title: "Hazmat Diving",
                  content:
                    "Hazmat diving requires precision, expertise and courage - my team brings all three.",
                  url: "https://aquatic.com.hr/static/media/hazmat.5af66ed033211084d3eb.jpeg",
                }}
              />

              <Offer
                props={{
                  title: "Aquaculture Diving",
                  content:
                    "Commercial diving in aquaculture - it's basic activity of our Diving team.",
                  url: "https://aquatic.com.hr/static/media/1_2.8688c734c885a1204e90.webp",
                }}
              />

              <Offer
                props={{
                  title: "Inland Underwater Construction",
                  content:
                    "Our team has vast experience in all manner of underwater construction tasks.",
                  url: "https://aquatic.com.hr/static/media/inshore.4d37a8f3dc1252c55b20.jpeg",
                }}
              />
            </div>
          </div>

          {/* -------------------------------------------------------------------- */}

          <Service />

          <div className="flex flex-col m-1 mt-28 max-w-6xl">
            <div className="flex bg-slate-300">
              <h1 className="text-3xl font-bold m-auto self-center text-slate-700">
                We Also Offer
              </h1>
            </div>
            <div className="flex flex-wrap items-center">
              <Offer
                props={{
                  title:
                    "Compressed Air Work at The Tunnel Boring Machine (TBM)",
                  content:
                    "When it comes to Compressed air work at the TBM, you need a team with the expertise and skill to get the job done right. Trust us to deliver the results you need.",
                  url: "https://aquatic.com.hr/static/media/mask.ca3d3c5cccc48f40d183.jpeg",
                }}
              />
              <Offer
                props={{
                  title:
                    "Underwater Inspection and Hull Maintenance Activities",
                  content:
                    "Maximizing vessel performance and lifespan requires top-notch underwater inspection and maintenance. Our skilled team has the expertise to keep your fleet in top condition.",
                  url: "https://aquatic.com.hr/static/media/3.9e28b62d92ec465eb806.jpg",
                }}
              />
              <Offer
                props={{
                  title: "Technical SCUBA Diving",
                  content:
                    "When it comes to technical SCUBA diving, experience and safety are paramount. Our team of experts brings both to every dive, ensuring success and peace of mind.",
                  url: "https://aquatic.com.hr/static/media/technical.304d8476fa917026a387.jpeg",
                }}
              />
              <Offer
                props={{
                  title: "Offshore & Inshore Commercial Diving Activities",
                  content:
                    "By IMCA guidelines using SSD equipment, with certificated IMCA Class II SSDE 50m Air Diver provided with OPITO-BOSIET & H2S updated.",
                  url: "https://aquatic.com.hr/static/media/1_1.08e69fe29973a8cd6be8.webp",
                }}
              />
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}

          <div className="flex flex-col sm:flex-row justify-between  mt-20  items-center bg-slate-200 p-4 text-slate-700">
            <div className="text-3xl font-semibold">
              In close collaboration with:{" "}
            </div>
            <img src={davor} />
          </div>
        </div>
      </div>

      <Contact />

      <Footerbar />
    </div>
  );
}

export default App;
