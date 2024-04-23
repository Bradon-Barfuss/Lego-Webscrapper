import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';


function App() {

  const [listOfUsers, setListofUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) =>{
      setListofUsers(response.data);
    })
  }, [])

  const [clothingType, setClothingType] = useState('');
  const [size, setSize] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [shirtSize, setShirtSize] = useState('');

  const handleSearch = () => {
    // You can perform a search based on the selected clothing type and size here
    console.log('Searching for', clothingType, 'in', size, 'with width', width, 'and height', height, 'and shirt size', shirtSize);
  };

  const renderInputFields = () => {
    switch (clothingType) {
      case 'jeans':
        return (
          <>
            <input
              type="text"
              placeholder="Width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            <input
              type="text"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </>
        );
      case 't-shirts':
        return (
          <select
            value={shirtSize}
            onChange={(e) => setShirtSize(e.target.value)}
          >
            <option value="">Select Shirt Size</option>
            <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="app-container">
      <div className="content">
        <h1>Select your clothing</h1>
        <div className="select-container">
          <select
            value={clothingType}
            onChange={(e) => setClothingType(e.target.value)}
          >
            <option value="">Select Clothing Type</option>
            <option value="jeans">Jeans</option>
            <option value="t-shirts">T-Shirts</option>
          </select>
        </div>
        <div className="input-container">
          {renderInputFields()}
          <input
            type="text"
            placeholder="Enter size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );

}

export default App;
