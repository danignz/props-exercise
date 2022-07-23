import React from "react";

export default function Card(props) {
  let greeting;

  switch (props.client.country) {
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "es":
      greeting = "Hola";
      break;
    default:
      greeting = "Hello";
  }

  const isPremium = props.client.isPremium ? "Yes" : "No";
  const background = props.client.isPremium ? "premium" : "";

  return (
    <div className={`card ${background}`}>
      <h3>
        {greeting} {props.children}!
      </h3>
      <p>Age: {props.client.age}</p>
      <p>Is it a premium client? {isPremium}</p>
    </div>
  );
}
