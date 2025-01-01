import React from 'react';
import Sale from './Sale.jsx';
import { Link } from 'react-router-dom';
import { MdNoteAdd } from "react-icons/md";

function SaleList({ sales, onDelete, onEdit }) {
    return (
        <>
            <Link to="/create" className="add-sale-link" title="Add Sale">
                <MdNoteAdd/>
            </Link>

            <table className="sales-table">
                <caption>Manage Sales Records</caption>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Date Bought</th>
                        <th>Date Sold</th>
                        <th>Price Bought For</th>
                        <th>Price Sold For</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, i) => (
                        <Sale
                            sale={sale}
                            key={i}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
} 

export default SaleList;