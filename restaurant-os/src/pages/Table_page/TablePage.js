import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton'; // Import the CircleButton component
import './TablePage.css';



function TablePage() {
  return (
    <div>
      <div className="parent">
        <div className="button-container">
          <div className="button-column">
            <CircleButton className="occupied" status="Occupied">Table 1</CircleButton>
            <CircleButton className="occupied" status="Occupied">Table 2</CircleButton>
            <CircleButton className="free" status="Free">Table 3</CircleButton>
            <CircleButton className="occupied" status="Occupied">Table 4</CircleButton>
            
            

            {/* ... Add more CircleButton components with different colors and class names as needed */}
          </div >
          <div className="button-column">
            <CircleButton className="occupied" status="Occupied">Table 5</CircleButton>
            <CircleButton className="free" status="Free">Table 6</CircleButton>
            <CircleButton className="free" status="Free">Table 7</CircleButton>
            <CircleButton className="free" status="Free">Table 8</CircleButton>
          </div>


          <div className="button-column">
            <CircleButton className="occupied" status="Occupied">Table 9</CircleButton>
            <CircleButton className="occupied" status="Occupied">Table 10</CircleButton>
            <CircleButton className="occupied" status="Occupied">Table 11</CircleButton>
            <CircleButton className="occupied" status="Occupied">Table 12</CircleButton>
          </div>

          <div className="button-column">
            <CircleButton className="free" status="Free">Table 13</CircleButton>
            <CircleButton className="occupied" status="Occupied">Table 14</CircleButton>
            <CircleButton className="occupied" status="Occupied">Table 15</CircleButton>
            <CircleButton className="free" status="Free">Table 16</CircleButton>
          </div>

            
          {/* ... Repeat the structure for other columns */}
        </div>
      </div>
    </div>
  );
}

export default TablePage;