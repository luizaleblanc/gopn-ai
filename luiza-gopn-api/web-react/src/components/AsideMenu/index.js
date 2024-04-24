import React from "react";
import Logo from "../../images/Logo.svg"
import { CiBoxes } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { useAuth } from "../../context/AuthContext";

const AsideMenu = () => {
    const { logout, navigate, getAllOrders } = useAuth();
    const handleLogout = () => {
        logout();
    };
    

    return(
        <aside className="flex flex-col p-5 md:p-10 gap-80 h-screen">
            <div className="flex flex-col gap-7">
                <img
                loading="lazy"
                src={Logo}
                className="w-full aspect-[2.86] max-w-[202px]"
                alt="Logo"
                />

                <button className="flex gap-4 px-3 py-2.5 text-base font-medium whitespace-nowrap bg-white rounded-lg text-zinc-500 hover:bg-[#F9F9FF] items-center hover:text-[#002e97] hover:text-blue-500" onClick={() => navigate("/dashboard/products")}>
                    <CiBoxes className="hover:text-blue-500" />
                    <span className="">Produtos</span>
                </button>

                <button className="flex gap-4 px-3 py-2.5 text-base font-medium whitespace-nowrap bg-white rounded-lg text-zinc-500 hover:bg-[#F9F9FF] items-center hover:text-[#002e97] hover:text-blue-500" onClick={() => {navigate("/dashboard/orders"); getAllOrders()}}>
                    <IoCartOutline className="hover:text-blue-500" />
                    <span className="">Pedidos</span>
                </button>



            </div>

            <button className="flex gap-4 px-3 py-2.5 text-base font-medium whitespace-nowrap bg-white rounded-lg text-zinc-500 hover:bg-[#F9F9FF] items-center hover:text-[#002e97] hover:text-blue-500" onClick={handleLogout}>
                <RxExit className="hover:text-blue-500" />
                <span className="">Sair</span>
            </button>
            
        </aside>
    )
}

export default AsideMenu;
