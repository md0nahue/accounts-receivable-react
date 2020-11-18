import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import { Invoice } from "./Invoice";
import { InvoicesForm } from "./InvoicesForm";
import { InvoiceList } from "./InvoiceList";

function App() {
  return (
    <Router>
      <div className="App container">
        <Header />
        <div className="sidebar">
          <InvoiceList />
        </div>
        <div className="main">
          <Route path="/invoices/:id" component={Invoice} />
          <Route path="/invoices/add" component={InvoicesForm} />
        </div>
      </div>
    </Router>
  );
}

export default App;
