import React from "react";
export default ({ title, subtitle, image }) => (
  <div className="columns header">
    {image ? (
      <div className="column">
        <div
          className="header-image"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`
          }}
        ></div>
      </div>
    ) : null}

    <div className="column is-8">
      <div
        style={{
          lineHeight: "1",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <h1
          className={`is-size-3-mobile 
                      is-size-2-tablet 
                      is-size-1-widescreen`}
        >
          {title}
        </h1>
        {subtitle ? (
          <h2
            className={`is-size-5-mobile 
                        is-size-5-tablet 
                        is-size-4-widescreen`}
          >
            {subtitle}
          </h2>
        ) : null}
      </div>
    </div>
  </div>
);
