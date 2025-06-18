import React from 'react';

type ModalProps = {
  isOpen: boolean; // Controla se o modal está aberto ou fechado
  onClose: () => void; // Função para fechar o modal (deve receber setIsOpen(false) como parâmetro, ele executa essa função quando o botão de fechar é clicado)
}

export default function ModalComentario({isOpen, onClose}: ModalProps) { // modal recebe props para controlar seu estado
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="rounded-xl fixed top-24 bottom-24 left-80 right-80 flex flex-col bg-blue-900 p-10">
        <div className="rounded-xl flex flex-col flex-grow items-center justify-center bg-blue-300 mb-4">
          <div className="w-full flex flex-row justify-start items-center px-2">
            <button className="p-1 my-1 pl-4 bg-green-500 hover:bg-green-900">  
              B
            </button>
            <button className="p-1 my-1 pl-4 bg-blue-500 hover:bg-blue-900">  
              I
            </button>
            <button className="p-1 my-1 pl-4 bg-blue-500 hover:bg-blue-900">  
              I
            </button>
            <button className="p-1 my-1 pl-4 bg-blue-500 hover:bg-blue-900">  
              I
            </button>
            <button className="p-1 my-1 pl-4 bg-blue-500 hover:bg-blue-900">  
              I
            </button>
          </div>
          <div className="h-px bg-blue-900 w-full"></div>
          <textarea
            className="flex-grow w-full p-4 rounded-lg font-normal focus:outline-none resize-none"
            placeholder="Escreva seu comentário aqui..."
          >
          </textarea>
        </div>
        <div className="flex w-full justify-end items-center mr-24">
          <button
            onClick={onClose}
            className="rounded-md bg-blue-900 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-3 mx-4"
          >
            Cancelar
          </button>
          <button
            className="rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-3"
          >
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
}