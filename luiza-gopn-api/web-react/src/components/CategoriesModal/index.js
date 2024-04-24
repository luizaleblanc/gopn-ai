import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CategoriesList from "../CategoriesList";

const CategoriesModal = () => {
    const { openCategories, setOpenCategories, categories, openCategForm, setOpenCategForm, createCategory, getAllCategories } = useAuth();
    const categoriesHandle = () =>{
        setOpenCategories(!openCategories);
    }
    const newCategory = (name) => {
        const category = {name: name}
        createCategory(category)
        getAllCategories()
    }
    const [name, setName] = useState("");
    return(
        <div className="w-screen h-screen absolute z-10 bg-border bg-opacity-100 flex items-center justify-center">
            <div className="w-[375px] h-[80%] rounded-[20px] bg-white flex flex-col">
                <div className="w-full flex px-5 py-5 gap-3 items-center relative border-b">
                    <p className="text-tertiary font-medium cursor-pointer" onClick={() => categoriesHandle()}>X</p>
                    <p className="text-tertiary font-medium" onClick={() => {console.log(categories);}}>Categorias</p>
                    {openCategForm ? 
                    <p className="text-white bg-blue2 w-[82px] h-[37px] flex justify-center items-center rounded-full cursor-pointer absolute right-5" onClick={() => {
                        newCategory(name); setOpenCategories(false); setOpenCategForm(false);
                    }}>Salvar</p> : null}
                </div>
                <CategoriesList name={name} setName={setName} newCategory={newCategory} />
                <div className="flex flex-col px-[20px] py-[10px]">
                        <p className="text-blue2 font-medium text-base cursor-pointer" onClick={() => {setOpenCategForm(!openCategForm)}}>+ Adicionar nova categoria</p>
                </div>

            </div>
        </div>
    )
}

export default CategoriesModal;