import React from "react";

import Button from "./Button";

export default function App() {
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    alert("I've been clicked");
  }

  return (
    <div>
      <Button value="Click Me" onClick={handleClick} />
    </div>
  );
}
