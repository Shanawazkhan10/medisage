import React from "react";
import Card from "../Component/Card";
import Card2 from "../Component/Card2";
import Corousal from "../Component/Corousal";
import img1 from "../Assets/figma/illustration.png";
import img2 from "../Assets/figma/img2.png";
import img3 from "../Assets/figma/img3.png";
const Body = () => {
  return (
    <div style={{ padding: 100 }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="div1" style={{ marginTop: 180 }}>
              <h1>Virtual healthcare for you </h1>
              <span>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </span>
              <br />
              <br />
              <button
                style={{
                  borderRadius: 30,
                  backgroundColor: "#458FF6",
                  color: "white",
                }}
                type="button"
                className="btn "
              >
                Consult today
              </button>
            </div>
          </div>
          <div className="col">
            <img style={{ height: 500 }} src={img1} />
          </div>
        </div>
      </div>
      {/* card component */}
      <div className="container ">
        <div className="text-center">
          {" "}
          <h3>OUR SERVICES</h3>
          <br />
          <small>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </small>
        </div>
        <br />
        <Card />
        <br />
        <div className="text-center">
          <button
            style={{ borderRadius: 30 }}
            type="button"
            className="btn btn-outline-primary "
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img style={{ height: 500 }} src={img2} />
          </div>
          <div className="col">
            <div style={{ marginTop: 180 }}>
              <h1>Leading healthcare providers</h1>
              <span>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </span>
              <br />
              <br />
              <button
                style={{ borderRadius: 30 }}
                type="button"
                className="btn btn-outline-primary "
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div style={{ marginTop: 180 }}>
              <h1>Download our mobile apps</h1>
              <span>
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </span>{" "}
              <br />
              <br />
              <button
                style={{ borderRadius: 30 }}
                type="button"
                className="btn btn-outline-primary "
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="col">
            <img style={{ height: 500 }} src={img3} />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <Corousal />
      </div>
      <div className="container text-center mt-5">
        <h3>Check out our Latest Articles</h3>
        <Card2 />
        <div className="text-center mt-5">
          <button
            style={{ borderRadius: 30 }}
            type="button"
            className="btn btn-outline-primary "
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
