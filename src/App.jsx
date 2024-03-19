// Import required  hooks
import { DogFact } from "./components/DogFact";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState({});

  // Hint: Define the API endpoint
  const apiURL = "https://dogapi.dog/api/v2/facts";

  // Hint: Create a function to fetch the dog fact
  const fetchDogFact = async () => {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      if (Array.isArray(data.data) && data.data.length > 0) {
        setDogFact(data.data[0]);
      } else {
        console.error("No dog facts found");
      }
    } catch (error) {
      console.error("Error fetching dog facts: ", error);
    }
  };

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    fetchDogFact();
  }, []);

  return (
    <div className="App">
      <DogFact fact={dogFact} />
    </div>
  );
};

DogFact.propTypes = {
  fact: PropTypes.shape({
    attributes: PropTypes.shape({
      body: PropTypes.string,
    }),
  }),
};
