import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  // navigation link to countries export page
  let route = useNavigate();
  const routeChange = () => {
    route("/country-export");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center text-primary mt-5 pt-5 pb-5">
            Data Kernel_
          </h1>
          <p className="text-center lead pb-5 mb-5">
            Welcome to the Data Kernel App
          </p>
          <div className="d-flex flex-row p-5 justify-content-center">
            <div
              role="button"
              className="border rounded bg-primary text-white m-2"
              onClick={routeChange}
              style={{
                textAlign: "left",
                paddingTop: "11rem",
                paddingLeft: "1rem",
                cursor: "pointer",
                width: "15rem",
                height: "15rem",
              }}
            >
              <h2
                style={{
                  verticalAlign: "bottom",
                }}
              >
                Countries
              </h2>
            </div>
            <div className="col-md-3">
              <div
                className="border rounded bg-secondary text-white m-2"
                style={{
                  textAlign: "left",
                  paddingTop: "11rem",
                  paddingLeft: "1rem",
                  width: "15rem",
                  height: "15rem",
                }}
              >
                <h2
                  style={{
                    verticalAlign: "bottom",
                  }}
                >
                  TBC
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
