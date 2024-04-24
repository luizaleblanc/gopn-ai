import React from "react";
import { useAuth } from "../../context/AuthContext";

const DeleteModal = () => {
    const { openDelete, setOpenDelete, handleProduct, deleteProduct } = useAuth();
    const deleteHandle = () =>{
        setOpenDelete(!openDelete);
    }
    return(
        <div className="w-screen h-screen absolute z-10 bg-border bg-opacity-100 flex items-center justify-center">
            <div className="w-[375px] h-[275px] rounded-[20px] bg-white flex flex-col">
                <div className="w-full flex px-5 py-3 gap-3 items-center relative">
                    <p className="text-tertiary font-medium cursor-pointer" onClick={() => deleteHandle()}>X</p>
                    <p className="text-tertiary font-medium">Excluir produto</p>
                    <p className="text-[#EA0000] bg-[#FFE1F1] w-[82px] h-[37px] flex justify-center items-center rounded-full cursor-pointer absolute right-5" onClick={() => {
                        deleteProduct(handleProduct.id);
                        deleteHandle()
                    }}>Excluir</p>
                </div>
                <div className="h-full w-full flex flex-col border-t items-center py-10">
                    <p className="text-tertiary leading-7 w-full text-center max-w-[80%]">Tem certeza que deseja excluir o produto 
                    <span className="font-semibold text-tertiary"> {handleProduct.name}?</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;