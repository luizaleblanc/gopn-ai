import React, { useEffect, useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import Button from "../Button";
import Input from "../Input";
import InputSelect from "../InputSelect";

const CreateMenu = () => {
  const { navigate, createProduct, categories, getAllCategories } = useAuth();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [photoStrings, setPhotoStrings] = useState("");
  const renderCategory = () => {
    getAllCategories();
    if (categories.length > 0) {
      setCategory(categories[0].name);
      console.log(category);
    }
  };
  useEffect(() => {
    renderCategory();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const price = parseFloat(priceInput).toFixed(2);
    console.log(category);
    console.log(categories[0].name);
    try {
      await createProduct({
        name,
        category,
        price,
        stock,
        description,
        photoStrings,
      });
      navigate("/dashboard/products");
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  return (
    <form
      className="w-full h-screen bg-[#F7F9FB] p-10 py-8 flex flex-col justify-between items-end"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full justify-between h-[54px] gap-5 items-center">
        <div className="flex gap-5 items-center h-[54px]">
          <button className="w-[26px] h-[26px] rounded-full bg-blue3 text-white relative top-[5px]">
            <FaLessThan
              className="absolute top-[5px] left-[3px]"
              onClick={() => {
                navigate("/dashboard/products");
              }}
            />
          </button>
          <h1 className="text-5xl font-semibold text-blue3 m-[-20]">Adicionar Produto</h1>
        </div>
        <button className="justify-center items-start px-14 py-3 text-sm text-black bg-white border border-solid border-zinc-300 rounded-[60px] max-md:px-5">
          Admin
        </button>
      </div>
      <div className="h-[80%] flex w-full justify-between">
        <div className="w-[49%] bg-white flex flex-col rounded-[10px] border">
          <p className="py-[12px] px-[30px] border-b text-black font-medium text-base">
            Informações do produto
          </p>
          <div className="p-[31px] w-full h-full flex flex-col gap-3">
            <Input
              label="Nome do produto*"
              id="name"
              name="name"
              type="text"
              placeholder="Insira o nome do produto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 mt-3 border"
            />
            <Input
              label="Descrição do produto*"
              id="description"
              name="description"
              type="text"
              placeholder="Insira a descrição do produto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 mt-3 border "
            />
            <InputSelect
              label="Categoria*"
              id="name"
              name="category"
              type="category"
              placeholder="Insira a categoria do produto"
              onInput={(e) => {
                setCategory(e.target.value);
              }}
              className="px-4 py-2 mt-3 border "
            />
            <div className="flex justify-between">
              <Input
                label="Estoque*"
                id="stock"
                name="stock"
                type="number"
                placeholder="Insira o estoque disponivel"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="px-4 py-2 mt-3 border"
              />
              <Input
                label="Valor*"
                id="priceInput"
                name="priceInput"
                type="number"
                placeholder="Insira o valor do produto"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
                className="px-4 py-2 mt-3 border "
              />
            </div>
            <Input
              label="link imagem do produto*"
              id="photoStrings"
              name="photoStrings"
              type="text"
              placeholder="Insira o link da imagem do produto"
              value={photoStrings}
              onChange={(e) => setPhotoStrings(e.target.value)}
              className="px-4 py-2 mt-3 border "
            />
          </div>
        </div>
        <div className="w-[49%] bg-white flex flex-col rounded-[10px] border"></div>
      </div>
      <Button className={"h-[45px] flex justify-center items-center w-[200px]"} type="submit">
        Criar produto
      </Button>
    </form>
  );
};

export default CreateMenu;
