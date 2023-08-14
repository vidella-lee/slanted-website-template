import React from "react";
// import styles from "./SplitHero.module.scss"
import UpperTriangle from "./UpperTriangle"
import LowerTriangle from "./LowerTriangle"

const SplitHero = ({ title, heading, subheading, image, description, logo, buttonLabel }) => (
    <div className="position-relative d-flex flex-column vh-100 w-100 justify-content-end p-3 overflow-hidden">
        <LowerTriangle image={image} heading={heading} description={description} fill="#132B33" subheading={subheading} buttonLabel={buttonLabel} />
        <UpperTriangle title={title} description={description} buttonLabel={buttonLabel} fill="#132B33" logo={logo} />
        {/* <div className={`${styles.upperTriangle} d-flex flex-column bg-secondary shadow border border-danger`}>
            <div className="d-flex flex-row w-100 justify-content-between z-index-3">
                <div className="d-flex flex-row align-self-end justify-content-end align-items-end text-white hero-left-content-mobile h-100 w-50">
                    <div
                        className="d-flex flex-column ps-2 ps-sm-0 w-100"
                        data-aos="fade-down"
                        data-aos-delay="500"
                    >
                        <h1
                            style={{ display: `${heading ? "inline" : "none"}` }}
                            className="ms-3 ms-md-5">
                            <b>{heading}</b>
                        </h1>
                        <h2
                            style={{ display: `${subheading ? "inline" : "none"}` }}
                            className={`${styles.subheading} ms-3 ms-md-5`}>
                            {subheading}
                        </h2>
                        <p
                            style={{ display: `${description ? "block" : "none"}` }}
                            className={`${styles.description} ms-3 ms-md-5`}
                        >
                            {description}
                        </p>
                        <div class="d-grid gap-2 d-md-block">
                            <button
                                style={{ display: `${buttonLabel ? "inline" : "none"}` }}
                                type="button"
                                className="btn btn-info btn-md mt-4 mb-4 ms-3 ms-md-5 shadow">
                                {buttonLabel}
                            </button>
                        </div>
                    </div>

                </div>
                <div className="d-flex flex-column w-50 align-self-end justify-content-center text-light vh-80 p-3">
                    <div
                        style={{ display: `${logo ? "inline" : "none"}` }}
                        className="mb-4 mt-3 me-2 align-self-end d-none d-sm-inline"
                        data-aos="fade-down" data-aos-delay="300"
                    >
                        {logo}
                    </div>
                    <div
                        className="text-end w-60 align-self-end pe-2 pe-sm-0"
                        style={{ display: `${title ? "inline" : "none"}` }}
                    >
                        <h1 className="display-5 me-md-4 " data-aos="fade-down" data-aos-delay="500">{title}</h1>
                    </div>
                </div>
            </div>

        </div> */}


        {/* <div className="d-flex flex-row w-100 z-index-2">
            <div className="left-overlay"></div>

        </div>
        <img
            src={image}
            className="scalene-hero-img"
            alt="demo"
        /> */}
    </div>

)
export default SplitHero;