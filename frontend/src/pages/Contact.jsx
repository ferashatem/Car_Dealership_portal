import React from "react";

export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Dealership Contact"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4>Get in Touch</h4>
          <p>We’d love to hear from you. Whether it’s feedback, questions, or partnership inquiries — reach out anytime.</p>
          <ul className="list-unstyled">
            <li><strong>Email:</strong> support@dealershipreviews.com</li>
            <li><strong>Phone:</strong> +1 (800) 555-2727</li>
            <li><strong>Address:</strong> 123 Auto Plaza, Detroit, MI, USA</li>
          </ul>
          <h5 className="mt-4">Follow Us</h5>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="me-3">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="me-3">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
