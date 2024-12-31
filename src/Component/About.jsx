import React from 'react';
import Img from '../Img/Screenshot 2024-12-24 221739.png'

const Card = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center rounded p-4 shadow-sm">
        {/* Image Section */}
        <div className="col-md-4 text-center">
          <img
            src={Img}
            alt="Illustration"
            className="img-fluid"
          />
        </div>

        {/* Content Section */}
        <div className="col-md-8">
          <h2 className="mb-3">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet lacus justo. Sed accumsan quam vel velit euismod fringilla.
          </p>
          <button className="btn btn-success">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
