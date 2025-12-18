import React from "react";

export default function ReviewCard({ review }) {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5>{review.user_name}</h5>
        <p>{review.review}</p>
        <small>{review.time}</small>
      </div>
    </div>
  );
}
