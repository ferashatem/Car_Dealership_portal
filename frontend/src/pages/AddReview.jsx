import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    review: "",
    purchase: false,
    purchase_date: "",
    car_make: "",
    car_model: "",
    car_year: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/review/", { ...form, dealership: id });
    navigate(`/dealer/${id}`);
  };

  return (
    <div>
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit}>
        <textarea className="form-control mb-2" name="review"
          placeholder="Write your review..." value={form.review} onChange={handleChange}></textarea>
        <input type="checkbox" name="purchase" checked={form.purchase} onChange={handleChange}/> Purchased Vehicle?
        <input type="date" name="purchase_date" className="form-control mb-2" onChange={handleChange}/>
        <input type="text" name="car_make" placeholder="Make" className="form-control mb-2" onChange={handleChange}/>
        <input type="text" name="car_model" placeholder="Model" className="form-control mb-2" onChange={handleChange}/>
        <input type="number" name="car_year" placeholder="Year" className="form-control mb-2" onChange={handleChange}/>
        <button className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
}
