import React from "react";
import CardsDisplay from "./CardsDisplay";

export default function Main(props) {
  return (
    <main className="main">
      <CardsDisplay setScores={props.setScores} />
    </main>
  );
}
