import React, { FC, useState, useEffect } from "react";
import "./styles.css";

export const Chuck: FC = () => {
  const [joke, setJoke] = useState("");

  const fetched = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random").then(
      (response) => response.json()
    );
    setJoke(res.value);
  };
  useEffect(() => {
    fetched();
  }, []);

  return (
    <div className="chuck__container chuck" onClick={fetched}>
      {joke}
    </div>
  );
};
