import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SaleList from './SaleList';
import { Link } from 'react-router-dom';
import { BiPlus } from "react-icons/bi";

function SalesPage({ setSale }) {
    const redirect = useNavigate();

    const [sales, setSales] = useState([]);

    const loadSales = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/sales`);
            if (response.ok) {
                const sales = await response.json();
                setSales(sales);
            } else {
                console.error("Failed to fetch sales. Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching sales:", error);
        }
    };

    const onEditSale = async sale => {
        setSale(sale);
        redirect("/update");
    };

    const onDeleteSale = async _id => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/sales/${_id}`, { method: 'DELETE' });
            if (response.ok) {
                const updatedSales = await fetch(`${process.env.REACT_APP_API_URL}/sales`);
                const sales = await updatedSales.json();
                setSales(sales);
            } else {
                console.error(`Failed to delete sale with ID = ${_id}, status code = ${response.status}`);
            }
        } catch (error) {
            console.error(`Error deleting sale with ID = ${_id}:`, error);
        }
    };

    useEffect(() => {
        loadSales();
    }, []);

    return (
        <>
            <h2>Sales Tracker</h2>
            <article>
                {/* Conditional Rendering */}
                {sales.length > 0 ? (
                    <>
                        <p>Manage your sales below. You can add, edit, or delete records as needed.</p>
                        <SaleList
                            sales={sales}
                            onDelete={onDeleteSale}
                            onEdit={onEditSale}
                        />
                    </>
                ) : (
                    <>
                        {/* Fallback Content */}
                        <p>No sales recorded yet. Add your first sale to get started!</p>
                        <Link to="/create" className="add-sale-link" title="Add Sale">
                            <BiPlus />
                        </Link>
                    </>
                )}
            </article>
        </>
    );
}

export default SalesPage;