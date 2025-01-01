import React from 'react';
import { TbArrowUpBar, TbArrowDownBar } from 'react-icons/tb';

function OrderQuantity({ quantity, setQuantity }) {
    const increment = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="clicker">
            <i onClick={decrement}>
                <TbArrowDownBar />
            </i>
            <span>{quantity}</span>
            <i onClick={increment}>
                <TbArrowUpBar />
            </i>
        </div>
    );
}

export default OrderQuantity;