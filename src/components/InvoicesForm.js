import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addInvoice } from "../actions";

export function InvoicesForm() {
  const history = useHistory();
  const [client, setClient] = useState("");
  const [attn, setAttn] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = e => {
    e.preventDefault();
    if (client) {
      dispatch(addInvoice({ client, attn, notes, due_date: dueDate }));
      history.push("/");
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <FormGroup label="Client" htmlFor="client-input">
          <select
            id="client-input"
            name="client"
            value={client}
            onChange={e => setClient(e.target.value)}
            className="form-control"
          >
            <option value="">--</option>
            <option value="CircleCi">CircleCi</option>
            <option value="New Relic">New Relic</option>
          </select>
        </FormGroup>
        <FormGroup label="Attn" htmlFor="attn-input">
          <input
            id="attn-input"
            type="text"
            name="attn"
            value={attn}
            onChange={e => setAttn(e.target.value)}
            className="form-control"
          />
        </FormGroup>
        <FormGroup label="Due Date" htmlFor="duedate-input">
          <input
            input="duedate-input"
            type="text"
            name="duedate"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            className="form-control"
          />
        </FormGroup>
        <FormGroup label="Notes" htmlFor="notes-input">
          <textarea
            id="notes-input"
            name="notes"
            value={notes}
            onChange={e => setNotes(e.target.value)}
            className="form-control"
          />
        </FormGroup>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

function FormGroup({ label, htmlFor, children }) {
  return (
    <div className="form-group">
      <label style={{ display: "block" }} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}
