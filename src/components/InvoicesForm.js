import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addInvoice } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    addInvoice: (invoice) => {
      dispatch(addInvoice(invoice));
    },
  };
}

function InvoicesForm({ addInvoice }) {
  let [client, setClient] = useState("");
  let [poNumber, setPoNumber] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addInvoice({ client, poNumber });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label>Client: </label>
        <select
          name="client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          class="form-control"
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
          onChange={(e) => setPoNumber(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

InvoicesForm.propTypes = {
  addInvoice: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(InvoicesForm);
