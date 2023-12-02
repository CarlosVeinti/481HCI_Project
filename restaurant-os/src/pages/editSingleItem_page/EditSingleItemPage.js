import React, { useState } from 'react';
import IngredientButtonGroup from '../../components/IngredientButtons/ToggleButton';
import ServingCounter from '../../components/IngredientButtons/ServingButton';
import './EditSingleItemPage.css';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import BackButton from '../../components/BackButton/BackButton';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import itemData from '../browseItems_page/Data_Items_Structures';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee',
};

function EditSingleItemPage() {
    const { itemName: urlItemName } = useParams(); // This will get the itemName from the URL
    const decodedItemName = decodeURIComponent(urlItemName); // Decoding the URL-encoded itemName
    // Find the item data based on itemName from the URL
    const item = Object.values(itemData).flat().find(i => i.itemName === decodedItemName);

    const location = useLocation();
    const { itemName, imageSrc, price, longDescri } = location.state || {};
    const [editMode, setEditMode] = useState(true);

    const initialIngredientSelections = item.ingredients.reduce((acc, ingredient) => {
        acc[ingredient] = 'regular'; // Initialize all as 'regular'
        return acc;
    }, {});

    const [ingredientSelections, setIngredientSelections] = useState({
        ingredient1: 'regular',
        ingredient2: 'regular',
        ingredient3: 'regular',
        ingredient4: 'regular',
        ingredient5: 'regular'
    });
    
    const [servings, setServings] = useState(1);

    const prices = {
        regular: 1.00,
        remove: 0.00,
        double: 2.00,
        triple: 3.00,
    };
    
    // Function to handle selection change
    const handleSelectionChange = (ingredientId, selection) => {
        setIngredientSelections(prev => {
            const newState = { ...prev, [ingredientId]: selection };
            console.log("Updated selections:", newState);  // Debugging line
            return newState;
        });
    };

    const handleServingChange = (newServings) => {
        setServings(newServings);
    };

    const calculateTotalPrice = () => {
        let basePrice = parseFloat(price);
    
        let additionalPrice = 0;
        Object.values(ingredientSelections).forEach(selection => {
            if (selection === 'double' || selection === 'triple') {
                additionalPrice += prices[selection];
                console.log(selection)
                console.log(`Added ${prices[selection]} for ${selection}`);  // Debugging line
            }
        });
    
        let totalPrice = (basePrice + additionalPrice) * servings;
        console.log("Total Price Calculation:", basePrice, "+", additionalPrice, "*", servings, "=", totalPrice);  // Debugging line
        return totalPrice;
    };

    return (
        <div>
            <div className="nav_Header" style={customBackgroundStyle}>
                <NavigationHeader />

                <div className="content-container">
                    <div className="image-container">
                        <img src={imageSrc} alt="Item" className="item-image" />
                        <div className="item-name">{itemName}</div>
                        <div className="item-price">Base Price: ${price}</div>
                    </div>

                    <div className="description-container">
                        <p>{longDescri}</p>
                    </div>
                </div>

                <div className="ingredients-box">
            {editMode && item && item.ingredients && (
                <ul>
                    {item.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <div className="ingredient-name">{ingredient}</div>
                            <div className="action-buttons">
                                <IngredientButtonGroup 
                                    groupId={`ingredient${index + 1}`} // Unique ID for each ingredient
                                    onSelect={handleSelectionChange}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
                    <div className="add-to-cart-section">
                        <ServingCounter onServingChange={handleServingChange} />
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <div className="total-price">
                            Total Price: ${calculateTotalPrice().toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditSingleItemPage;
