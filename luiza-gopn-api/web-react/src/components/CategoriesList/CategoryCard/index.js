import React from "react";
import Input from "../../Input";
import { FaRegTrashCan } from "react-icons/fa6";
import { useAuth } from "../../../context/AuthContext";


const CategoryCard = ({ category, setName, disabled, number }) => {
    const { deleteCategory, setOpenCategories } = useAuth();
    const DeleteIcon = () =>{
        if (category.id === "teste") {
            return null  
        } else {
            return(
                <FaRegTrashCan size={25} className="cursor-pointer hover:text-red2" onClick={() => {deleteCategory(category.id); setOpenCategories(false)}}/>
            )
        }
    }
    return(
        <li className="flex gap-[32px] items-end">
            <span className="w-[34px] h-[34px] rounded-full bg-blue2 text-white flex justify-center items-center text-xl  ">{number+1}</span>
            <Input 
            disabled={disabled}
            label="Nome"
            name="Name"
            type="text"
            placeholder="Insira o nome do produto"
            value={category.name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 mt-3 border "
            />
            <DeleteIcon />
        </li>
    )
}

export default CategoryCard;