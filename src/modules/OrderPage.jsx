import React, { useState } from 'react';
import OrderRow from './OrderRow.jsx';

function OrderPage({ products }) {
    const [runningTotal, setRunningTotal] = useState(0);

    return (
        <>
            <h2>Order Pet Products</h2>
            <article>
                <p>Use this form to place pet product orders. Choose your item and specify a quantity. The subtotal will continuously update in real time.</p>
                <table id="order">
                    <caption>Available Products</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price (USD)</th>
                            <th>Quantity</th>
                            <th>Subtotal</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => (
                            <OrderRow
                                product={product}
                                key={i}
                                setRunningTotal={setRunningTotal}
                            />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'right' }}>Total:</td>
                            <td>
                                {runningTotal.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 2,
                                })}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </article>
        </>
    );
}

export default OrderPage;