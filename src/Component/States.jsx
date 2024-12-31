// components/Stats.js
import React from "react";

const Stats = () => {
    const stats = [
        { number: "2,543,341", label: "Businesses Helped" },
        { number: "43,328", label: "Active Users" },
        { number: "1,038,408", label: "Secure Solutions" },
    ];

    return (
        <section className="stats">
            {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                    <h3>{stat.number}</h3>
                    <p>{stat.label}</p>
                </div>
            ))}
        </section>
    );
};

export default Stats;
