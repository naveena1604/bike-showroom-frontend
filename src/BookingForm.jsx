import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({ selectedBike }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const bookRide = () => {
    if (!selectedBike) {
      setMessage("❌ Please select a bike first.");
      return;
    }

    if (!date || !time) {
      setMessage("❌ Please select date and time.");
      return;
    }

    setMessage(
      `✅ Your Test Ride for ${selectedBike} is Booked on ${date} at ${time}!`
    );

    // Reset fields
    setDate("");
    setTime("");
  };

  return (
    <div className="booking">
      <h2>📅 Book Test Ride</h2>
      <p><strong>Selected Bike:</strong> {selectedBike || "None"}</p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={bookRide}>Book Now</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default BookingForm;