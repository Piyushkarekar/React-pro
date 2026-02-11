import React from "react";
import { Section1 } from "./component/Section-1/Section1";
export const App = () => {
  const users = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satified",
      intro: "",
      color:"blue"
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Dicovered",
      intro: "",
      color:"grey"
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1744632154221-81f8c5919529?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Grind",
      intro: "",
      color:"green"
    },
  ];
  return (
    <>
      <div>
        <Section1 users={users} />
       
      </div>
    </>
  );
};
