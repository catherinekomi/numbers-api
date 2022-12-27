import React from "react";

function Numbers() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5a9bd2a937msh9f2e26ac34c3f54p187f54jsn63deb22d51f8",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  fetch(
    "https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=90&fragment=true&json=true",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <div>Numbers Logic</div>;
}

export default Numbers;
