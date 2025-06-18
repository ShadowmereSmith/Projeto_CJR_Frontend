"use client"; // não funciona sem isso, pois o componente é um client component

import ModalComentario from "@/app/components/modalComentario";
import ModalAvaliacao from "@/app/components/modalAvaliacao";
import ModalEdicao from "@/app/components/modalEdicao";
import { useState } from "react";

export default function Home() {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="flex flex-col justify-center gap-10 bg-blue-900 h-screen p-10">
        <h1 className="text-5xl text-white">Teste</h1>

        <button
            type="button"
            className="btn btn-primary bg-blue-600 text-white w-30"
            onClick={() => setIsOpen1(true)} // Abre o modal ao clicar no botão
        >
            Abrir Modal Comentario
        </button>
        <ModalComentario isOpen={isOpen1} onClose={() => setIsOpen1(false)}/>

        <button
            type="button"
            className="btn btn-primary bg-blue-600 text-white w-30"
            onClick={() => setIsOpen2(true)} // Abre o modal ao clicar no botão
        >
            Abrir Modal Avaliacao
        </button>
        <ModalAvaliacao isOpen={isOpen2} onClose={() => setIsOpen2(false)}/>

        <button
            type="button"
            className="btn btn-primary bg-blue-600 text-white w-30"
            onClick={() => setIsOpen3(true)} // Abre o modal ao clicar no botão
        >
            Abrir Modal Editar
        </button>
        <ModalEdicao isOpen={isOpen3} onClose={() => setIsOpen3(false)}/>
    </div>
  );
}