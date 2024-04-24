import React from "react";
import LoginForm from "../../../../components/LoginForm";
import Logo from "../../../../images/Logo.svg";


const Login = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-sm">
      <div className="flex flex-col text-sm w-[418px] space-y-8">
        <img
          loading="lazy"
          src={Logo}
          className="w-full aspect-[2.86] max-w-[202px]"
          alt="Logo"
        />
        <h1 className="text-2xl font-medium tracking-wider text-black max-w-[215px]">
          Dados de acesso
        </h1>
        <LoginForm />
      </div>
    </div>
    );
};

export default Login;
