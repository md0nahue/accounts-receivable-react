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
      <FormGroup label="Client">
        <select
          name="client"
          value={client}
          onChange={e => setClient(e.target.value)}
          className="form-control"
        >
          <option value="CircleCi">CircleCi</option>
          <option value="New Relic">New Relic</option>
        </select>
      </FormGroup>
      <FormGroup label="Purchase Order Number">
        <input
          type="text"
          name="ponumber"
          value={poNumber}
          onChange={e => setPoNumber(e.target.value)}
        />
      </FormGroup>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

function FormGroup({ label, children }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      {children}
    </div>
  );
}
