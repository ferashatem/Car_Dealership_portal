import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

export default function DealerDetails() {
  const { id } = useParams();
  const [dealer, setDealer] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dealerRes = await axios.get(`/api/dealer/${id}/`);
      const reviewRes = await axios.get(`/api/reviews/${id}/`);
      setDealer(dealerRes.data);
      setReviews(reviewRes.data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {dealer && (
        <>
          <h2>{dealer.name}</h2>
          <p>{dealer.state} | {dealer.address}</p>
          <Link to={`/review/${dealer.id}`} className="btn btn-success">Add Review</Link>
          <h4 className="mt-4">Customer Reviews</h4>
          {reviews.map((r) => <ReviewCard key={r.id} review={r} />)}
        </>
      )}
    </div>
  );
}
