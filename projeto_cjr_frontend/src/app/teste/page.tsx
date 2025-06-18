"use client"; // não funciona sem isso, pois o componente é um client component

import ModalComentario from "@/app/components/modalComentario";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <h1>Teste</h1>
        <button
            type="button"
            className="btn btn-primary bg-black text-white"
            onClick={() => setIsOpen(true)} // Abre o modal ao clicar no botão
        >
            Abrir Modal Professor
        </button>
        <ModalComentario isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  );
}