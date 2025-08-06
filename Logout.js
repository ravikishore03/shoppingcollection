import React, { Component } from 'react';

export default class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("emailId");
    localStorage.clear();

    setTimeout(() => {
      window.open("/login", "_self");
    }, 1000);
  }

  render() {
    return (
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <h4>Logging out…</h4>
        <p>Redirecting to login page. Please wait!</p>
      </div>
    );
  }
}