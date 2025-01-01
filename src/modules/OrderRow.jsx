import React, { useState, useEffect } from 'react';
import OrderQuantity from './OrderQuantity.jsx';

function OrderRow({ product, setRunningTotal }) {
    const [quantity, setQuantity] = useState(0); // State for the quantity
    const [subtotal, setSubtotal] = useState(0); // State for the subtotal

    useEffect(() => {
        const calculatedSubtotal = quantity * product.price;
        setSubtotal(calculatedSubtotal);
    }, [quantity, product.price]);

    useEffect(() => {
        setRunningTotal((prevTotal) => prevTotal + subtotal); // Update the running total
        return () => setRunningTotal((prevTotal) => prevTotal - subtotal); // Clean up when unmounting
    }, [subtotal, setRunningTotal]);

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>
                {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                })}
            </td>
            <td>
                <OrderQuantity quantity={quantity} setQuantity={setQuantity} />
            </td>
            <td>
                {subtotal.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                })}
            </td>
        </tr>
    );
}

export default OrderRow;