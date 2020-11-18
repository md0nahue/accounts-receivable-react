import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./Header";
import { Invoice } from "./Invoice";
import { InvoicesForm } from "./InvoicesForm";
import { InvoiceList } from "./InvoiceList";

export function App() {
  return (
    <Router>
      <div className="App container">
        <Header />
        <div className="sidebar">
          <InvoiceList />
        </div>
        <div className="main">
          <Switch>
            <Route path="/invoices/add" component={InvoicesForm} />
            <Route path="/invoices/:id" component={Invoice} />
            <Route exact path="/">
              <h3>Select an invoice</h3>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
