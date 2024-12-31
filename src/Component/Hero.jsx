// components/HeroSection.js
import React from "react";
import img from "../Img/Screenshot 2024-12-24 221739.png";

const HeroSection = () => {
    return (
        <section className="hero  ">
            <div className="container d-flex justify-content-between">
                <div>
                    <h1 className="">
                        <span className=" text-success">Shaheed</span> platform
                        the best <br /> platforms for{" "}
                        <span className=" text-success">
                            Security <br />
                            devices
                        </span>{" "}
                    </h1>
                    <p>
                        {" "}
                        is one of the best platforms for selling security
                        devices
                    </p>
                    <button>Learn More</button>
                </div>
                <img src={img} alt="" />
            </div>
        </section>
    );
};

export default HeroSection;
