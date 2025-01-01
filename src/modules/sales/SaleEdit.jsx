import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

export const SaleEdit = ({ saleToEdit }) => {
    const [product_name, setProductName] = useState(saleToEdit?.product_name || '');
    const [date_bought, setDateBought] = useState(saleToEdit?.date_bought || '');
    const [date_sold, setDateSold] = useState(saleToEdit?.date_sold || '');
    const [price_bought_for, setPriceBoughtFor] = useState(saleToEdit?.price_bought_for || '');
    const [price_sold_for, setPriceSoldFor] = useState(saleToEdit?.price_sold_for || '');

    const redirect = useNavigate();

    const editSale = async () => {
        if (!saleToEdit || !saleToEdit._id) {
            alert("No sale selected for editing.");
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/sales/${saleToEdit._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    product_name,
                    date_bought,
                    date_sold,
                    price_bought_for,
                    price_sold_for,
                }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                alert(`Sale successfully updated!`);
                redirect("/salesPage");
            } else {
                const errMessage = await response.json();
                alert(`Error updating sale: ${response.status}. ${errMessage.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error("Error updating sale:", error);
            alert("Failed to update the sale. Please try again later.");
        }
    };

    return (
        <>
            <h2>Edit a Sale</h2>
            <article>
                <p>Use this form to edit the details of the selected sale.</p>
                <form
                    className="sale-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        editSale();
                    }}
                >
                    <table className="sales-table">
                        <caption>Edit this Sale:</caption>
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
                                        placeholder="Product Name"
                                        value={product_name}
                                        onChange={(e) => setProductName(e.target.value)}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        value={date_bought}
                                        onChange={(e) => setDateBought(e.target.value)}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        value={date_sold}
                                        onChange={(e) => setDateSold(e.target.value)}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        placeholder="Price Bought For"
                                        value={price_bought_for}
                                        onChange={(e) => setPriceBoughtFor(e.target.value)}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        placeholder="Price Sold For"
                                        value={price_sold_for}
                                        onChange={(e) => setPriceSoldFor(e.target.value)}
                                        required
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

export default SaleEdit;