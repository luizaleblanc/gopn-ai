import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";


const OrderCard = ({ order }) => {
    const { searchProduct } = useAuth();
    const product = searchProduct(order.productId);
    const date = new Date(order.createdAt);
    const [show, setShow] = useState(false);

    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return(
        <li className="w-full flex flex-col bg-white rounded-xl border border-solid px-[40px]">
            <div className="flex justify-between py-[20px] items-center">
                <div className="flex flex-col justify-between h-[44px] items-center">
                    <p className="text-black font-semibold text-sm">{order.id}</p>
                    <p className="text-gray-600 text-xs">Número do pedido</p>
                </div>
                <div className="flex flex-col justify-between h-[44px] items-center">
                    <p className="text-black font-semibold text-sm">{formattedDate}</p>
                    <p className="text-gray-600 text-xs">data do pedido</p>
                </div>
                <div className="flex flex-col justify-between h-[44px] items-center">
                    <p className="text-black font-semibold text-sm">{order.clientName}</p>
                    <p className="text-gray-600 text-xs">Nome</p>
                </div>

                <button className="w-[22px] h-[22px] rounded-full border-blue1 border-solid border-[2px] bg-white flex items-center justify-center" onClick={() => {setShow(!show)}}>
                    {show ?
                    <SlArrowUp className="text-blue1" size={10}/>:
                    <SlArrowDown className="text-blue1" size={10}/>
                    }
                </button>
            </div>
            {show ?
            <div className="w-full bg-white border-t-[2px] flex gap-5 justify-between items-center relative py-[20px]">
                <div className="w-1/4 flex py-3 items-center">
                    <img
                        loading="lazy"
                        src={product.photoStrings}
                        alt={product.name}
                        className="shrink-0 border border-solid aspect-square border-zinc-300 w-[60px] h-[60px] rounded-xl"
                    />
                    <p className="text-black font-semibold text-sm border-r border-solid border-gray-300 h-[50px] flex items-center w-full text-center w-full flex justify-center">{product.name}</p>
                </div>

                <div className="w-1/4 h-[50px] flex flex-col justify-between items-center border-r border-solid border-gray-300">
                    <p className="text-gray-800 text-sm font-medium">{product.category}</p>
                    <p className="text-gray-600 text-xs">Categoria</p>
                </div>

                <div className="w-1/4 h-[50px] flex flex-col justify-between items-center border-r border-solid border-gray-300">
                    <p className="text-gray-800 text-sm font-medium">R$ {product.price}</p>
                    <p className="text-gray-600 text-xs">Preço</p>
                </div>

                <div className="w-1/4 h-[50px] flex flex-col justify-between items-center">
                    <p className="text-gray-800 text-sm font-medium">{product.stock}</p>
                    <p className="text-gray-600 text-xs">Estoque</p>
                </div>
            </div>:
            null
            }
        </li>
    )
}

export default OrderCard;