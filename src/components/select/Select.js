import React from "react";

export const Select = () => {
  return (
    <div>
      <form>
        <label className="config__label">
          Color
          <select className="config__select">
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </select>
        </label>
        <label className="config__label">
          Fuel type
          <select className="config__select">
            <option value="petrol">Petrol</option>
            <option value="electric">Electric</option>
          </select>
        </label>
      </form>
    </div>
  );
};
