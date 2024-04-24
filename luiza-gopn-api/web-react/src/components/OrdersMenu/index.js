import React from "react";
import OrdersList from "../OrdersList";

const OrdersMenu = () => {
    
    return(
        <div className="w-full h-screen bg-[#F7F9FB]  p-10 py-10 flex flex-col justify-between">
            <div className="flex gap-5 px-5 whitespace-nowrap max-md:flex-wrap">
                <h1 className="flex-auto my-auto text-3xl font-semibold tracking-normal leading-6 text-blue-700">
                    Produtos
                </h1>
                <button className="justify-center items-start px-14 py-3 text-sm text-black bg-white border border-solid border-zinc-300 rounded-[60px] max-md:px-5">
                    Admin
                </button>
            </div>
            <OrdersList />
        </div>
    )
}

export default OrdersMenu;