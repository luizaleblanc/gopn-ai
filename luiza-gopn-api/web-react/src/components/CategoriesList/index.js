import React from "react";
import CategoryCard from "./CategoryCard";
import { useAuth } from "../../context/AuthContext";

const CategoriesList = ({ name, setName, newCategory }) => {
    const { categories, openCategForm } = useAuth();
    
    const fakeCategory = {
        id: "teste",
        name: name,
    }
    return(
        <ul className="w-full overflow-x-auto flex flex-col gap-5 px-[30px] py-[10px]">
            {categories.map((categories, index) => (
                <CategoryCard key={categories.id} category={categories} disabled={true} number={index} />
            ))}
            {openCategForm ? <CategoryCard key={"create"} category={fakeCategory} setName={setName} disabled={false} number={categories.length} /> : null}
        </ul>
    )
}

export default CategoriesList;