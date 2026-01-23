import React from "react";
import { Card } from "./assets/components/card";
import "./App.css";

export const App = () => {
  return (
    <>
      <h1>My Team</h1>
      <div className="mainCard">
        <Card name="Piyush" role="Frontend Developer" city="Baroda" img=" https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card name="Jayraj" role="Full Stack Developer" city="Vapi" img="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
        <Card name="Parth" role="Backend Developer" city="Bangalore" img="https://plus.unsplash.com/premium_photo-1681426478241-11b262dd1d21?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </>
  );
};
