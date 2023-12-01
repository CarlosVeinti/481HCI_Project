import React, { useState } from 'react';
import IngredientButtonGroup from '../../components/IngredientButtons/ToggleButton'
import ServingCounter from '../../components/IngredientButtons/ServingButton'
import './EditSingleItemPage.css';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import BackButton from '../../components/BackButton/BackButton';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function EditSingleItemPage() {


    


    /*const { itemName, description, imageSrc, price } = location.state*/
    const location = useLocation();
    const { itemName, imageSrc, price, longDescri } = location.state || {};
    //console.log(itemName)
    const  [editMode,setEditMode]= useState(true)
    return (
        <div>
        
        
        <div className="nav_Header" style={customBackgroundStyle}>
            <NavigationHeader/>

            <div className="content-container">
                <div className="image-container">
                    <img src={imageSrc} alt="Item" className="item-image"/>
                    <div className="item-name">{itemName}</div>
                    <div className="item-price">{price}</div>
                </div>

                <div className="description-container">
                    <p>{longDescri}</p>
                </div>
            </div>

            <div className="ingredients-box">
                {editMode&&
                <ul>
                
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
                        <IngredientButtonGroup groupId="ingredient4" />
                    </div>
                </li>
            </ul>
            }
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