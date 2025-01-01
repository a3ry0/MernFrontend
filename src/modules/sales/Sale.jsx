import React from 'react';
import { TiDelete } from "react-icons/ti";
import { RiEdit2Fill } from "react-icons/ri";

function Sale({ sale, onEdit, onDelete }) {
    return (
        <tr className="sales-table">
            <td data-label="Product Name">{sale.product_name}</td>
            <td data-label="Date Bought">{new Date(sale.date_bought).toLocaleDateString()}</td>
            <td data-label="Date Sold">{new Date(sale.date_sold).toLocaleDateString()}</td>
            <td data-label="Price Bought For">${sale.price_bought_for.toFixed(2)}</td>
            <td data-label="Price Sold For">${sale.price_sold_for.toFixed(2)}</td>
            <td data-label="Delete">
                <TiDelete  className="delete-button" onClick={() => onDelete(sale._id)} />
            </td>
            <td data-label="Edit">
                <RiEdit2Fill className="edit-button" onClick={() => onEdit(sale)} title="Edit" />
            </td>
        </tr>
    );
}

export default Sale;