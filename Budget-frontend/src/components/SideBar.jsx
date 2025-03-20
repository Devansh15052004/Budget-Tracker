// import React from 'react';
import { Link } from 'react-router-dom';
import { TbHomeDollar, TbLogout2, TbReportMoney } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="avatar"></div>
            <h3 className="username">User</h3>
            <div className="sidebar-links">
                <Link to="/" className="sidebar-link">
                    <TbHomeDollar className="icon" />
                    <span>Home</span>
                </Link>
                <Link to="/Add" className="sidebar-link">
                    <GiMoneyStack className="icon" />
                    <span>Expenses</span>
                </Link>
                <Link to="/Transaction" className="sidebar-link">
                    <FaMoneyBillTransfer className="icon" />
                    <span>History</span>
                </Link>
                <Link to="/Budget" className="sidebar-link">
                    <TbReportMoney className="icon" />
                    <span>Budget</span>
                </Link>
            </div>
            <div className="logout">
                <TbLogout2 className="icon" />
                <span>Log Out</span>
            </div>
        </div>
    );
};

export default SideBar;
