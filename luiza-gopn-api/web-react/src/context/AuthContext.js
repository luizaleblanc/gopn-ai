import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const TOKEN_KEY = 'auth_token';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || "");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [savedProducts, setSavedProduct] = useState([]);
  const [handleProduct, setHandleProduct] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openCategForm, setOpenCategForm] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    }
    if (authenticated === false) {
        navigate("/")
    }else{
      navigate("/dashboard/products")
    }
    // eslint-disable-next-line
  }, [token]);

  const searchProduct = (id) => {
    return products.find(product => product.id === id)
  }

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/admin", {
        mail: email,
        password: password
      });

      if (response.status >= 200 && response.status < 300) {
        const { token } = response.data;
        setToken(token);
        localStorage.setItem(TOKEN_KEY, token);
        setAuthenticated(true);
        setError("");
        navigate("/dashboard/products");
      } else {
        throw new Error(response.data.message || "Erro ao fazer login");
      }

    } catch (error) {
      setError(error.message || "Erro ao fazer login");
      console.log(error);
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setToken("");
    localStorage.removeItem(TOKEN_KEY);
    setProducts([]);
    navigate("/");
  };

  const getAllProducts = async () => {
    try {
      const response = await api.get("/product", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setProducts(response.data);
      setSavedProduct(response.data);
      getAllCategories();
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      throw new Error("Erro ao buscar produtos");
    }
  };

  const toggleForSale = async (productId) => {
    const token = localStorage.getItem(TOKEN_KEY);
    console.log(token);
    try {
        const response = await api.put(`/product/forsale/${productId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        console.log(response.data);
        getAllProducts()
        return response.data;
    } catch (error) {
        console.error("Erro ao alternar o status do produto à venda:", error);
        throw new Error("Erro ao alternar o status do produto à venda");
    }
};

const deleteProduct = async (productId) => {
  const token = localStorage.getItem(TOKEN_KEY);
  console.log(token);
  try {
      const response = await api.delete(`/product/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      getAllProducts()
      return response.data;
  } catch (error) {
      console.error("Erro ao alternar o status do produto à venda:", error);
      throw new Error("Erro ao alternar o status do produto à venda");
  }
};

const createProduct = async (productData) => {
  try {
      const response = await api.post("/product", productData, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      return response.data;
  } catch (error) {
      console.error("Erro ao criar produto:", error);
      throw new Error("Erro ao criar produto");
  }
};
const getAllCategories = async () => {
  try {
    const response = await api.get("/category");
    setCategories(response.data);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw new Error("Erro ao buscar categorias");
  }
};


const createCategory = async (categoryData) => {
  try {
    const response = await api.post("/category", categoryData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    throw new Error("Erro ao criar categoria");
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const response = await api.delete(`/category/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    throw new Error("Erro ao excluir categoria");
  }
};

const getAllOrders = async () => {
  try {
    const response = await api.get("/order", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setOrders(response.data)
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
    throw new Error("Erro ao buscar pedidos");
  }
};

  return (
    <AuthContext.Provider value={{ authenticated, login, logout, error, token, navigate, products, getAllProducts, savedProducts, toggleForSale, openDelete, setOpenDelete, openModal, setOpenModal, handleProduct, setHandleProduct, deleteProduct, createProduct, deleteCategory, getAllCategories, createCategory, categories, openCategories, setOpenCategories, openCategForm, setOpenCategForm, searchProduct, getAllOrders, orders}}>
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = () => {
  return useContext(AuthContext);
};
