import React from "react";
import OrderCard from "./OrderCard";
import { useAuth } from "../../context/AuthContext";

const OrdersList = () => {
    const { orders } = useAuth();
    
    return(
        <ul className="w-full h-3/4 overflow-x-auto flex flex-col gap-5">
            {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}
        </ul>
    )
}

export default OrdersList;