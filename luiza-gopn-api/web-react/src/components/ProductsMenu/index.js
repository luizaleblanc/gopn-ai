import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { TfiMenuAlt } from "react-icons/tfi";
import ProductList from "../ProductList";
import { useAuth } from "../../context/AuthContext";

const ProductsMenu = () => {
    const { navigate, openCategories, setOpenCategories, getAllCategories } = useAuth();
    const handleCategories = () => {
        setOpenCategories(!openCategories)
    }
    return(
        <div className="w-full h-screen bg-[#F7F9FB] p-10 py-10 flex flex-col justify-between">
            <div className="flex gap-5 px-5 whitespace-nowrap max-md:flex-wrap">
                <h1 className="flex-auto my-auto text-3xl font-semibold tracking-normal leading-6 text-blue-700">
                    Produtos
                </h1>
                <button className="justify-center items-start px-14 py-3 text-sm text-black bg-white border border-solid border-zinc-300 rounded-[60px] max-md:px-5">
                    Admin
                </button>
            </div>

            <div className="flex justify-between">
                <div className="flex relative items-center">
                    <HiMiniMagnifyingGlass className="shrink-0 w-6 aspect-square absolute left-3"/>
                    <input
                    type="text"
                    placeholder="Pesquisar"
                    className="flex gap-5 px-12 py-2.5 bg-white border border-solid border-zinc-300 rounded-[60px]"
                    ></input>
                </div>

                <div className="flex gap-5">
                    <button className="justify-center px-4 py-2.5 text-base font-medium tracking-wide leading-6 text-center text-white bg-blue-700 rounded-[15px] max-md:px-5" onClick={() => {handleCategories(); getAllCategories()}}>
                    <TfiMenuAlt size={25}/>
                    </button>
                    <button className="justify-center px-11 py-2.5 text-base font-medium tracking-wide leading-6 text-center text-white bg-blue-700 rounded-[60px] max-md:px-5" onClick={() => {navigate("/dashboard/create"); getAllCategories()}}>
                        Novo Produto
                    </button>
                </div>
            </div>
                <ProductList />
        </div>
    )
}

export default ProductsMenu;