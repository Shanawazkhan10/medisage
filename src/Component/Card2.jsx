import React from "react";
import img1 from "../Assets/figma/4.png";
import img2 from "../Assets/figma/i2.png";
import img3 from "../Assets/figma/i3.png";
const Card2 = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">
                  Disease detection, check up in the laboratory
                </h5>
                <p className="card-text">
                  In this case, the role of the health laboratory is very
                  important to do a disease detection...
                </p>
                <a href="#">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img2} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">
                  Herbal medicines that are safe for consumption
                </h5>
                <p className="card-text">
                  Herbal medicine is very widely used at this time because of
                  its very good for your health...
                </p>
                <a href="#">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img3} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">
                  Natural care for healthy facial skin
                </h5>
                <p className="card-text">
                  A healthy lifestyle should start from now and also for your
                  skin health. There are some...
                </p>
                <a href="#">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
