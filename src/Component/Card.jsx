import React from "react";
import ico1 from "../Assets/figma/Group 8.png";
import ico2 from "../Assets/figma/Frame5.png";
import ico3 from "../Assets/figma/Frame6.png";
import ico4 from "../Assets/figma/Frame.png";
const Card = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card" style={{ width: "18rem", borderRadius: 20 }}>
              <div class="card-body">
                <h5 class="card-title">
                  <img src={ico1} />
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">Search doctor</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card" style={{ width: "18rem", borderRadius: 20 }}>
              <div class="card-body">
                <h5 class="card-title">
                  <img src={ico3} />
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card" style={{ width: "18rem", borderRadius: 20 }}>
              <div class="card-body">
                <h5 class="card-title">
                  <img src={ico2} />
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm">
            <div class="card" style={{ width: "18rem", borderRadius: 20 }}>
              <div class="card-body">
                <h5 class="card-title">
                  <img src={ico4} />
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card" style={{ width: "18rem", borderRadius: 20 }}>
              <div class="card-body">
                <h5 class="card-title">
                  <img src={ico1} />
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card" style={{ width: "18rem", borderRadius: 20 }}>
              <div class="card-body">
                <h5 class="card-title">
                  <img src={ico4} />
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
