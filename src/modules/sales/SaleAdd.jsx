import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

export const SaleAdd = () => {

    const [product_name, setProductName] = useState('');
    const [date_bought, setDateBought] = useState('');
    const [date_sold, setDateSold] = useState('');
    const [price_bought_for, setPriceBoughtFor] = useState('');
    const [price_sold_for, setPriceSoldFor] = useState('');

    const redirect = useNavigate();

    const addSale = async (event) => {
        event.preventDefault();
        const newSale = { product_name, date_bought, date_sold, price_bought_for, price_sold_for };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/sales`, {
                method: 'POST',
                body: JSON.stringify(newSale),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                alert(`Sale added successfully!`);
                redirect("/salesPage");
            } else {
                alert(`Error adding sale: ${response.status}`);
            }
        } catch (error) {
            console.error("Error adding sale:", error);
            alert('Failed to add sale. Please try again later.');
        }
    };

    return (
        <>
            <h2>Add a Sale</h2>
            <article>
                <p>Fill in the details below to add a new sale to the tracker.</p>
                <form className="sale-form" onSubmit={addSale}>
                    <table className='sales-table'>
                        <caption>Record a new sale</caption>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Date Bought</th>
                                <th>Date Sold</th>
                                <th>Price Bought For</th>
                                <th>Price Sold For</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Product"
                                        value={product_name}
                                        required
                                        onChange={e => setProductName(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        value={date_bought}
                                        required
                                        onChange={e => setDateBought(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        value={date_sold}
                                        required
                                        onChange={e => setDateSold(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        placeholder="$"
                                        value={price_bought_for}
                                        required
                                        onChange={e => setPriceBoughtFor(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        placeholder="$"
                                        value={price_sold_for}
                                        required
                                        onChange={e => setPriceSoldFor(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button type="submit" className="icon-button">
                                        <BiPlus className="icon"/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </article>
        </>
    );
};

export default SaleAdd;