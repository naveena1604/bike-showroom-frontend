import React, { useState } from "react";
import BikeShowroom from "./BikeShowroom";
import BookingForm from "./BookingForm";

function App() {
  const [selectedBike, setSelectedBike] = useState(null);

  return (
    <>
      <BikeShowroom onSelect={setSelectedBike} />
      <BookingForm selectedBike={selectedBike} />
    </>
  );
}

export default App;