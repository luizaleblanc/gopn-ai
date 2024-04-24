import React from "react";
import { useAuth } from "../../context/AuthContext";

const MenuModal = () => {
    const { setOpenModal, openModal, openDelete, setOpenDelete, navigate } = useAuth();
    const deleteMenu = () =>{
        setOpenModal(!openModal);
        setOpenDelete(!openDelete);
    }
    return(
        <div className="w-screen h-screen absolute z-10 bg-border bg-opacity-100 flex items-center justify-center">
            <div className="w-[375px] h-[275px] rounded-[20px] bg-white flex flex-col">
                <div className="w-full flex px-5 py-3 justify-between items-center">
                    <p className="text-tertiary font-medium">Ações</p>
                    <p className="text-tertiary font-medium cursor-pointer" onClick={() => {setOpenModal(!openModal)}}>X</p>
                </div>
                <div className="h-full w-full flex flex-col">
                    <p className="text-tertiary font-medium w-full flex items-center justify-center py-5 border-t border-b cursor-pointer" onClick={() => {navigate("/dashboard/edit"); setOpenModal(!openModal)}}>Editar Produto</p>
                    <p className="text-red2 font-medium w-full flex items-center justify-center py-5 border-b cursor-pointer" onClick={() => deleteMenu()}>Excluir Produto</p>
                </div>
            </div>
        </div>
    )
}

export default MenuModal;