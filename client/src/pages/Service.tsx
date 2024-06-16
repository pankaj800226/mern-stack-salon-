import { Link } from "react-router-dom";
import { service } from "../components/api/serviceApi";

const Service = () => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        Service
      </h2>
      <div className="service_container">
        {service.map((item) => (
          <div className="section" key={item.id}>
            <img src={item.img} alt="" />
            <div className="text-content">
              <h1>{item.num}</h1>
              <h2>{item.text}</h2>
              <p>{item.decription}</p>
              <Link to={`/serviceD/${item.id}`} className="learn-more">
                LEARN MORE
              </Link>
              {/* <p>{item.facility?.one}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
