import { useState } from "react";

function ShoppingItem(props) {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrease = () => {
        setQuantity(quantity - 1)
    }

    return (
        <div className="shopping-item">
            <p className="item-info">
                <strong>{props.name}</strong>
                <div className="buttons">
                    <button className="btn-decrement" onClick={handleDecrease}>-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="btn-increment" onClick={handleIncrease}>+</button>
                </div>
            </p>
        </div>
    );
}
export default ShoppingItem