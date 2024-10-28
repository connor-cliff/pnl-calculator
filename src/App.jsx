import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import DateDetails from './DateDetails';

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();

  // Format date
  const handleDateClick = (date) => {
    const formattedDate = date.toLocaleDateString('en-GB').split('/').reverse().join('-'); // Format date to 'YYYY-MM-DD'
    navigate(`/date/${formattedDate}`);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={handleDateClick}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/date/:date" element={<DateDetails />} />
      </Routes>
    </Router>
  );
}

export default App;