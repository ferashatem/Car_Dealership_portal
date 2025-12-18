import React from "react";
import { Link } from "react-router-dom";

export default function DealerCard({ dealer }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{dealer.name}</h5>
          <p>{dealer.state} | {dealer.address}</p>
          <Link to={`/dealer/${dealer.id}`} className="btn btn-primary">View Reviews</Link>
        </div>
      </div>
    </div>
  );
}
