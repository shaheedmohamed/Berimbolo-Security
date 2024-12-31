import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../Img/pro1.jpeg'
import img2 from '../Img/pro3.jpeg'

const App = () => {
  const blogs = [
    {
      image: img1, // Replace with actual image URL
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      description: "",
    },
    {
      image: img2, // Replace with actual image URL
      title: "What are your safeguarding responsibilities and how can you manage them?",
      description: "",
    },
    {
      image: img1, // Replace with actual image URL
      title: "Revamping the Membership Model with Triathlon Australia",
      description: "",
    },
  ];

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">Caring is the new marketing</h1>
      <p className="mb-5 text-muted">
        The NexGen blog is the best place to read about the latest membership
        insights, trends, and more. See what's driving the community.
      </p>
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm">
              <img
                src={blog.image}
                className="card-img-top cardImg"
                alt={blog.title}
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="btn btn-primary">
                  Read more →
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
