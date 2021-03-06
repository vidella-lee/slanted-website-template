import React from "react";

const SmallScaleneHero = ({title, heading, subheading, image, description, logo, buttonLabel}) => (
  <div className="d-flex flex-column bg-primary vh-75 shadow">
    <div className="d-flex flex-row w-100 justify-content-between z-index-3">
      <div className="d-flex flex-row align-self-center justify-content-center align-items-end text-white hero-left-content-mobile vh-75 w-50 testing-border">
        <div className="d-flex flex-column justify-content-center testing-border2" data-aos="fade-down" data-aos-delay="500">
            <h1 
             style={{display: `${heading ? "inline" : "none"}`}} 
             className="ms-3 ms-md-5">
          <b>{heading}</b>
        </h1>
        <h2 
         style={{display: `${subheading ? "inline" : "none"}`}}  
         className="ms-3 ms-md-5">
          {subheading}
        </h2>
        <p
         style={{display: `${description ? "block" : "none"}`}} 
         className="ms-3 ms-md-5">
          {description}
        </p>
        <div class="d-grid gap-2 d-md-block">
          <button
           style={{display: `${buttonLabel ? "inline" : "none"}`}} 
           type="button" 
           className="btn btn-info btn-md mt-4 mb-4 ms-3 ms-md-5 shadow">
            {buttonLabel}
          </button>
        </div>
        </div>
        
      </div>
      <div className="d-flex flex-column w-50 align-self-end justify-content-start text-light vh-75 p-3 testing-border2">
        <div
         style={{display: `${logo ? "inline" : "none"}`}}
         className="mb-4 mt-3 me-2 align-self-end d-none d-sm-inline"
         data-aos="fade-down" data-aos-delay="300"
        >
          {logo} 
        </div>
          <div
           className="text-end mt-5 w-60 align-self-end testing-border"
           style={{display: `${title ? "inline" : "none"}`}}
          >
             <h1 className="display-5 me-md-4 " data-aos="fade-down" data-aos-delay="500">{title}</h1>
           </div>
      </div>
    </div>
    <div className="d-flex flex-row w-100 z-index-2">
        <div className="small-hero-overlay"></div>
    
    </div>
    <img src={image} className="small-scalene-hero-img"/>
  </div>

)
export default SmallScaleneHero;