import { Link } from "react-router-dom";
import svgText from "../assets/text.svg";
import Service from "./Service";
import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import PriceSection from "./PriceSection";
import Instructoe from "./Instructoe";

const Home = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const hour = new Date().getHours();
      if (hour >= 9 && hour < 21) {
        setTimeOfDay("Open");
      } else {
        setTimeOfDay("Closed");
      }
    };

    updateTime();
  }, []);

  return (
    <>
      <div className="home">
        <Link to={"/"}>
          <img src={svgText} alt="Salon Logo" />
        </Link>
        <h2 style={{ marginTop: "10px" }}>Salon: {timeOfDay}</h2>
        <h3>Welcome to my salon (Ara Bihar)</h3>
        <h1>Pankaj's Best Beauty Salon</h1>
        <p>
          Want to look your best?
          <br /> Curly Locks makes you gorgeous in a jiffy!
        </p>
        <Link to={"/book"}>BOOK AN APPOINTMENT</Link>
      </div>
      <Service />
      <Gallery />
      <Instructoe />
      <PriceSection />
    </>
  );
};

export default Home;
