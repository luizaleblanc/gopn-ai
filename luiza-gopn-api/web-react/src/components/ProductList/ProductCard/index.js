import React from "react";
import { RxSwitch } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAuth } from "../../../context/AuthContext";
function ProductCard({ product }) {
    const { toggleForSale, setHandleProduct, setOpenModal, openModal } = useAuth();
    const openMenuModal = () => {
        setHandleProduct(product);
        setOpenModal(!openModal);
    }
    return (
        <li className="w-full px-4 bg-white rounded-xl border border-solid border-zinc-300 flex gap-5 justify-between items-center relative">
            <div className="w-1/5 flex py-3 items-center">
                <img
                    loading="lazy"
                    src={product.photoStrings}
                    alt={product.name}
                    className="shrink-0 border border-solid aspect-square border-zinc-300 w-[60px] h-[60px] rounded-xl"
                />
                <p className="text-black font-semibold text-sm border-r border-solid border-gray-300 h-[50px] flex items-center w-full text-center w-full flex justify-center">{product.name}</p>
            </div>

            <div className="w-1/5 h-[50px] flex flex-col justify-between items-center border-r border-solid border-gray-300">
                <p className="text-gray-800 text-sm font-medium">{product.category}</p>
                <p className="text-gray-600 text-xs">Categoria</p>
            </div>

            <div className="w-1/5 h-[50px] flex flex-col justify-between items-center border-r border-solid border-gray-300">
                <p className="text-gray-800 text-sm font-medium">R$ {product.price}</p>
                <p className="text-gray-600 text-xs">Preço</p>
            </div>

            <div className="w-1/5 h-[50px] flex flex-col justify-between items-center border-r border-solid border-gray-300">
                <p className="text-gray-800 text-sm font-medium">{product.stock}</p>
                <p className="text-gray-600 text-xs">Estoque</p>
            </div>

            <div className="w-1/5 h-[50px] flex flex-col justify-between items-center">
                <RxSwitch 
                    size={30}
                    onClick={() => toggleForSale(product.id)}
                    className={product.forSale ? 'text-blue-500' : 'text-gray-500'}
                    style={product.forSale ? null : { transform: 'scaleX(-1)' }}
                />
                <p className="text-gray-600 text-xs">Status</p>
            </div>

            <BsThreeDotsVertical className="absolute items-center right-3 cursor-pointer" size={20} onClick={() => {
                openMenuModal()
            }}/>

        </li>
    );
    }

export default ProductCard;