import React, { useEffect } from "react";
import DashboardTemplate from "../../../../components/DashboardTemplate";
import { useAuth } from "../../../../context/AuthContext";
import ProductsMenu from "../../../../components/ProductsMenu";
import MenuModal from "../../../../components/menuModal";
import DeleteModal from "../../../../components/DeleteModal";
import CategoriesModal from "../../../../components/CategoriesModal";

const Products = () => {
    const { getAllProducts, openModal, openDelete, openCategories } = useAuth();
    useEffect(()=>{
        getAllProducts()
        // eslint-disable-next-line
    },[])
    return(
        <>
            {openModal ? <MenuModal /> : null}
            {openDelete ? <DeleteModal /> : null}
            {openCategories ? <CategoriesModal /> : null}
            <DashboardTemplate>
                <ProductsMenu />
            </DashboardTemplate>
        </>
    )
}

export default Products;
