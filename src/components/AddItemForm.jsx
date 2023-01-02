import React, { useState } from "react";
import '../styles/AddItem.css';

const AddItemForm = ({ addItem }) => {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
  
    const handleSubmit = (event) => {
        event.preventDefault();
        addItem({
            id: Date.now(),
            name,
            value: parseInt(value, 10)
        });
        setName("");
        setValue("");
    };

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>
            Name:
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="form-control"
            />
            </label>
            <label>
            Value:
            <input
                type="number"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className="form-control"
            />
            </label>
        </div>
        <button type="submit" className="btnSubmit">
            Add item
        </button>
    </form>
  );
};

export default AddItemForm;
