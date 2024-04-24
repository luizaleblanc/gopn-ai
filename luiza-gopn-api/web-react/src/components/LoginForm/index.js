import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import PasswordInput from "../PasswordInput";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    login(email, password);
  };

  return (
    <form className="flex flex-col text-sm max-w-[418px]" onSubmit={handleSubmit}>
      <Input
        label="E-mail"
        id="email"
        name="email"
        type="email"
        placeholder="Insira seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-5 mt-4 w-full font-medium bg-white rounded-xl border border-solid  border-zinc-300 leading-[143%] text-neutral-400"
      />
      <PasswordInput
        label="Senha"
        id="password"
        name="senha"
        placeholder="Insira sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-5 mt-4 w-full font-medium bg-white rounded-xl border border-solid border-zinc-300 leading-[143%] text-neutral-400"
        divClassName={"mt-5"}
      />
      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}
      <Button className={"mt-8"} type="submit">
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
