import React from "react";

export default function Extra() {
  return (
    <div>
      <div
        className=" d-flex flex-column justify-content-center flex-wrap align-items-center"
        style={{
          color: "black",
          width: "100%",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ flexFlow: "row", flexWrap: "wrap" }}
        >
          <div id="mail">
            <Link
              to={"mailto:kumardhiraj609@gmail.com"}
              className="skillItems"
              style={{ color: theme.textColor }}
            >
              <div
                className="d-flex flex-row flex-column justify-content-center align-items-center skillBox"
                style={{
                  backgroundColor: theme.boxColor,
                }}
              >
                <EmailIcon
                  fontSize="large"
                  className="skillItems"
                  style={{ color: theme.textColor }}
                />
              </div>
            </Link>
          </div>
          <div
            id="phone"
            className="d-flex"
            style={{ flexFlow: "row", flexWrap: "wrap" }}
          >
            <Link to={"tel:+919598560187"} style={{ color: theme.textColor }}>
              <div
                className="d-flex flex-row flex-column justify-content-center align-items-center skillBox"
                style={{
                  backgroundColor: theme.boxColor,
                }}
              >
                <CallIcon
                  fontSize="large"
                  className="skillItems"
                  style={{ color: theme.textColor }}
                />
              </div>
            </Link>
          </div>
          {/* <div>
                <div
                  id="location"
                  className="d-flex "
                  style={{ flexFlow: "row", flexWrap: "wrap" }}
                >
                  <div
                    className="d-flex flex-row  flex-column justify-content-center align-items-center skillBox"
                    style={{
                      padding: "3vh",
                      margin: "3vh",
                      backgroundColor: theme.boxColor,
                      borderRadius: "3vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon
                      fontSize="large"
                      className="skillItems"
                      style={{ color: theme.textColor }}
                    />
                    <h5
                      className="skillItems"
                      style={{ color: theme.textColor }}
                    ></h5>
                  </div>
                </div>
              </div> */}
        </div>
        <div
          id="social"
          className="d-flex justify-content-center align-items-center flex-wrap"
          style={{ color: "whitesmoke" }}
        >
          <div>
            <Link
              to="https://instagram.com/_dhiraj.kr?igshid=NzZlODBkYWE4Ng=="
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.boxColor,
              }}
              className="skillBox"
            >
              <InstagramIcon
                fontSize="large"
                className="skillItems"
                style={{ color: theme.textColor }}
              />
              {/* <h6 className="skillItems" style={{ color: theme.textColor }}>
                    Instagram
                  </h6> */}
            </Link>
          </div>
          <div>
            <Link
              to="https://www.linkedin.com/in/dhirendra-kr/"
              className="skillBox"
              style={{
                textDecoration: "none",
                color: theme.textColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.boxColor,
              }}
            >
              <LinkedInIcon
                fontSize="large"
                className="skillItems"
                style={{ color: theme.textColor }}
              />
              {/* <h6 className="skillItems" style={{ color: theme.textColor }}>
                    Linkedin
                  </h6> */}
            </Link>
          </div>
          <div>
            <Link
              to="https://github.com/dhirendra-kumar9598"
              className="skillBox"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.boxColor,
              }}
            >
              <GitHubIcon
                fontSize="large"
                className="skillItems"
                style={{ color: theme.textColor }}
              />
              {/* <h6 className="skillItems" style={{ color: theme.textColor }}>
                    Github
                  </h6> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
