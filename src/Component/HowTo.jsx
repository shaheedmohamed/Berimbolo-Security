import React from "react";

const HowTo = () => {
    return (
        <section className="how-to">
            <div className="container">
                <h2>How to design your site footer like we did</h2>
                <p>
                    Follow these simple steps to create a professional footer
                    for your website:
                </p>
                <div className="how-to-steps d-flex justify-content-between">
                    <div className="step">
                        <img src={`/Img/1.jpeg`} alt="Step 1" />
                        <h3>Step 1</h3>
                        <p>Design a clean layout.</p>
                    </div>
                    <div className="step">
                        <img src={`/Img/2.jpeg`} alt="Step 2" />
                        <h3>Step 2</h3>
                        <p>Choose the right colors.</p>
                    </div>
                    <div className="step">
                        <img src={`/Img/3.jpeg`} alt="Step 3" />
                        <h3>Step 3</h3>
                        <p>Optimize for responsiveness.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowTo;
