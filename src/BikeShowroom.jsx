import React from "react";
import "./BikeShowroom.css";

const bikes = [
  { id: 1, name: "Yamaha R15", price: "₹1,80,000", img: "/r15.jpg" },
  { id: 2, name: "KTM Duke 200", price: "₹1,95,000", img: "/duke.jpg" },
  { id: 3, name: "Royal Enfield Classic", price: "₹2,10,000", img: "/re.jpg" },
  { id: 4, name: "Apache RTR 160", price: "₹1,65,000", img: "/apache.jpg" },
  { id: 5, name: "BMW G310R", price: "₹2,90,000", img: "/bmw.jpg" },
  { id: 6, name: "Honda CBR", price: "₹2,50,000", img: "/honda.jpg" },
  { id: 7, name: "MT 15", price: "₹1,70,000", img: "/mt15.jpg" },
  { id: 8, name: "Kawasaki Ninja", price: "₹3,20,000", img: "/ninja.jpg" },
  { id: 9, name: "Hayabusa", price: "₹16,00,000", img: "/hayabusa.jpg" },
  { id: 10, name: "Benelli 300", price: "₹3,50,000", img: "/benelli.jpg" }
];

function BikeShowroom({ onSelect }) {
  return (
    <div className="showroom-container">
      <h1 className="showroom-title"> Bike Showroom</h1>

      <div className="grid">
        {bikes.map((bike) => (
          <div key={bike.id} className="card">
            <img src={bike.img} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.price}</p>
            <button onClick={() => onSelect(bike.name)}>
              Select Bike
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BikeShowroom;