"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Login() {
  return (
    <main style={{ display: "flex", height: "100dvh" }}>
      <SignupRedirect>
        <Image
          src="/logo.png"
          alt="Logo Cronos Conecta"
          width={406}
          height={203}
        />
        <h2>Você ainda não é usuário?</h2>
        <p>Crie sua conta agora e otimize seus estudos!</p>
        <Link href="/signup">Criar conta</Link>
      </SignupRedirect>

      <FormLogin>
        <form action="">
          <h1>Faça login em sua conta</h1>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              required
            />
            <label htmlFor="password">Senha</label>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </FormLogin>
    </main>
  );
}

const FormLogin = styled.section`
  display: flex;
  flex-direction: column;
  width: 60dvw;
  padding-top: 7rem;
  align-items: center;
  font-family: "Inter", sans-serif;
  background: linear-gradient(to top right, #1e4788, #07cbfd);

  form {
    padding: 5rem;
    border-radius: 1rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 3.2rem;
    color: #191970;
  }

  div {
    position: relative;
    width: 30dvw;
    margin-bottom: 2rem;
    color: white;

    input {
      border: none;
      border-bottom: 1px solid white;
      outline: none;
      font-size: 1.2rem;
      padding-top: 1.2rem;
      background: transparent;
      width: 100%;
      color: white;
    }

    label {
      position: absolute;
      top: 0.8rem;
      left: 0;
      font-size: 1.2rem;
      pointer-events: none;
      transition: all 0.2s ease;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
      top: -0.8rem;
      font-size: 1.1rem;
    }
  }

  button {
    background-color: transparent;
    border: 1px solid #191970;
    font-size: 1.3rem;
    padding: 0.7rem 1.4rem;
    border-radius: 0.8rem;
    cursor: pointer;
    background-color: #191970;
    color: #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #19197060;
    }
  }
`;

const SignupRedirect = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  align-items: center;
  font-family: "Inter", sans-serif;
  width: 40dvw;
  height: calc(100dvh - 8rem);
  background: #191970;
  color: white;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: #00cffe;
    border: 1px solid #00cffe;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    margin-top: 1.7rem;
    font-weight: 500;
    text-decoration: none;
    transition: all ease-in-out 0.3s;
    font-size: 1.15rem;

    &:hover {
      background-color: #00cffe;
      color: white;
    }
  }
`;
