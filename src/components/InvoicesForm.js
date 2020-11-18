import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addInvoice } from "../actions";

export function InvoicesForm() {
  const [client, setClient] = useState("");
  const [poNumber, setPoNumber] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = e => {
    e.preventDefault();
    dispatch(addInvoice({ client, poNumber }));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label>Client: </label>
        <select
          name="client"
          value={client}
          onChange={e => setClient(e.target.value)}
          className="form-control"
        >
          <option value="CircleCi">CircleCi</option>
          <option value="New Relic">New Relic</option>
        </select>
      </div>
      <div className="form-group">
        <label>Purchase Order Number: </label>
        <input
          type="text"
          name="ponumber"
          value={poNumber}
          onChange={e => setPoNumber(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}
