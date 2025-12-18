import React, { useEffect, useState } from "react";
import axios from "axios";
import DealerCard from "../components/DealerCard";

export default function Dealers() {
  const [dealers, setDealers] = useState([]);
  const [state, setState] = useState("");

  const fetchDealers = async () => {
    const res = await axios.get("/api/dealers/");
    setDealers(res.data);
  };

  useEffect(() => { fetchDealers(); }, []);

  const filterByState = async (e) => {
    e.preventDefault();
    const res = await axios.get(`/api/dealers/?state=${state}`);
    setDealers(res.data);
  };

  return (
    <div>
      <h2 className="mb-4 text-center">Find a Dealership</h2>
      <form className="row g-2 justify-content-center mb-4" onSubmit={filterByState}>
        <div className="col-auto">
          <input
            type="text"
            placeholder="Enter State (e.g. Texas)"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Filter</button>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary" type="button" onClick={fetchDealers}>Show All</button>
        </div>
      </form>

      <div className="row">
        {dealers.length > 0 ? (
          dealers.map((dealer) => <DealerCard key={dealer.id} dealer={dealer} />)
        ) : (
          <p className="text-center text-muted">No dealerships found for this state.</p>
        )}
      </div>
    </div>
  );
}
