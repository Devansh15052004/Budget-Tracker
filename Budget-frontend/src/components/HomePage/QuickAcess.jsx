// import React from "react";
import { useNavigate } from "react-router-dom";
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import "./QuickAcess.css";

const QuickAccess = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            border: "1px solid black",
            width: "900px",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            margin: "20px auto"
        }}>
            <h3>Quick Access</h3>
            <hr />

            {/* FLEXBOX FIX APPLIED */}
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "15px"
            }}>
                <button 
                    onClick={() => navigate('/Add')}
                    style={{
                        width: "180px",
                        height: "70px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        borderRadius: "5px"
                    }}
                >
                    <GiTakeMyMoney size={20} />
                    +Expense
                </button>

                <button 
                    onClick={() => navigate('/Loans')}
                    style={{
                        width: "180px",
                        height: "70px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: "#2196F3",
                        color: "white",
                        borderRadius: "5px"
                    }}
                >
                    <GiReceiveMoney size={20} />
                    +Loan
                </button>

                <button 
                    onClick={() => navigate('/Budget')}
                    style={{
                        width: "180px",
                        height: "70px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: "#FF9800",
                        color: "white",
                        borderRadius: "5px"
                    }}
                >
                    <TbReportMoney size={20} />
                    +Budget
                </button>
            </div>
        </div>
    );
};

export default QuickAccess;
