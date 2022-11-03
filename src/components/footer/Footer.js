import React from "react";
import { list } from "../../datas/Cars";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="containter-footer">
          {list.map((car) => {
            return (
              <div key={car.id}>
                <h3 className="footer-title">{car.title}</h3>
                <ul className="footer-ul">
                  {car.items.map((option) => (
                    <li className="footer-item">{option}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
};
