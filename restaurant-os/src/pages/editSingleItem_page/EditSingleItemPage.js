import React, { useState } from 'react';
import IngredientButtonGroup from '../../components/IngredientButtons/ToggleButton'
import ServingCounter from '../../components/IngredientButtons/ServingButton'
import './EditSingleItemPage.css';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import BackButton from '../../components/BackButton/BackButton';
import { Button } from 'react-bootstrap';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function EditSingleItemPage() {
    const  [editMode,setEditMode]= useState(false)
    return (
        <div>
        <div>
          <img src="/noodles.jpeg" alt="Background Image" className='cover-image-single'></img>
        </div>
        
        <div className="nav_Header" style={customBackgroundStyle}>
            <NavigationHeader/>

            <div className="content-container">
                <div className="image-container">
                    <img src="noodles.jpeg" alt="Item" className="item-image"/>
                    <div className="item-name">Uptown Ramen</div>
                    <div className="item-price">$12.99</div>
                    
                </div>

                <div className="description-container">
                    <p>A luxurious bowl featuring rich Tonkotsu broth, tender marinated pork belly, and homemade wavy noodles. Topped with a soft-boiled marinated egg, crispy nori, fresh green onions, bamboo shoots, sesame seeds, and a hint of chili oil for a refined finish.</p>
                </div>
            </div>
            <div class="ingredients-box">
          {!editMode&&      <Button size="lg" onClick={()=>{setEditMode(!editMode)}}> Edit</Button>}
          {editMode&&      <Button variant="danger" onClick={()=>{setEditMode(!editMode)}}> Cancel</Button>}
      {editMode&&  <ul>
            <li>
                <div className="ingredient-name">Noodles</div>
                <div className="action-buttons">
                    <IngredientButtonGroup groupId="ingredient1" />
                </div>
            </li>

            <li>
                <div className="ingredient-name">Broth</div>
                <div className="action-buttons">
                    <IngredientButtonGroup groupId="ingredient2" />
                </div>
            </li>


            <li>
                <div className="ingredient-name">Pork</div>
                <div className="action-buttons">
                    <IngredientButtonGroup groupId="ingredient3" />
                </div>
            </li>


            <li>
                <div className="ingredient-name">Green Scallion</div>
                <div className="action-buttons">
                    <IngredientButtonGroup groupId="ingredient" />
                </div>
            </li>
        </ul>}
        
            <div className="add-to-cart-section">
                <ServingCounter />
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    </div>
    </div>
    );
}

export default EditSingleItemPage;