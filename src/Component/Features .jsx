// components/Features.js
import React from "react";  
import img1 from '../Img/1.jpeg';
import img2 from '../Img/2.jpeg';
import img3 from '../Img/3.jpeg';
import img4 from '../Img/4.jpeg';

const Features = () => {
    const features = [
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img1,
        },
        {
            image:img3,
        },
        {
            image:img4,
        },
    ];
    

    return (
        <section className="features">
            <h2>Manage your entire organization from one place</h2>
            <div className="feature-list">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <img src={feature.image} alt={feature.title} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
