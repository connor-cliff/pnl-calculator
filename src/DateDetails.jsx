import React from 'react';
import { useParams } from 'react-router-dom';

function DateDetails() {
  const { date } = useParams();

  return (
    <div>
      <h2>Details for {date}</h2>
      <p>Add option to create and input trades</p>
      <p>Add api for real time asset prices</p>
    </div>
  );
}

export default DateDetails;