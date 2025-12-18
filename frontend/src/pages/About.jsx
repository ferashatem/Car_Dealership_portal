import React from "react";

export default function About() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-center mb-5">
        We are a nationwide network of trusted car dealerships committed to transparency and customer satisfaction.
        This platform allows our customers to explore reviews and share their experiences to help others make informed decisions.
      </p>

      <div className="row justify-content-center">
        {[
          { name: "Berkly Shepley", role: "Lead Full-Stack Developer", email: "berkly@dealerships.com" },
          { name: "Lavanya", role: "Frontend Engineer", email: "lavanya@dealerships.com" },
          { name: "Upkar Lidder", role: "Backend Specialist", email: "upkar@dealerships.com" },
        ].map((member, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100 text-center shadow">
              <img
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${10 + i}.jpg`}
                className="card-img-top"
                alt={member.name}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
                <a href={`mailto:${member.email}`} className="btn btn-outline-primary">
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
