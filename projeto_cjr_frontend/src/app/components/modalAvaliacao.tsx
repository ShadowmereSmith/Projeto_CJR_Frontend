import React from 'react';
import { useState} from 'react';
import { Bold, Italic, Heading, Link, Image, HelpCircle } from "lucide-react";

type ModalProps = {
  isOpen: boolean; // Controla se o modal está aberto ou fechado
  onClose: () => void; // Função para fechar o modal (deve receber setIsOpen(false) como parâmetro, ele executa essa função quando o botão de fechar é clicado)
}

export default function ModalAvaliacao({isOpen, onClose}: ModalProps) { // modal recebe props para controlar seu estado
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

  const [professor, setProfessor] = useState("");
  const [disciplina, setDisciplina] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative min-w-[45%] max-w-[70%] h-[55vh] bg-blue-900 p-6 rounded-xl flex flex-col overflow-hidden z-50">
        <select 
          className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 h-8 mb-2 px-2 focus:outline-none invalid:text-gray-400"
          required
          value={professor}
          onChange={e => setProfessor(e.target.value)}
        >  
          <option value="" disabled>Nome do Professor</option>
          <option value="id-13" className="text-black">Mauro Patrão</option> {/* Exemplo de professor, pode ser substituído por uma lista dinâmica */}
          <option value="id-14" className="text-black">Exemplo</option>
        </select>
        <select 
          className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 h-8 mb-2 px-2 focus:outline-none invalid:text-gray-400"
          required
          value={disciplina}
          onChange={e => setDisciplina(e.target.value)}
        >
          <option value="" disabled>Disciplina</option>
          <option value="id-13" className="text-black">Cálculo 2</option> {/* Exemplo de disciplina, pode ser substituído por uma lista dinâmica */}
          <option value="id-14" className="text-black">Poledance</option>
          <option value="id-14" className="text-black">FORRÓ</option>
        </select>
        <div className="rounded-xl flex flex-col flex-grow items-center justify-center bg-blue-300 mb-4">
          <div className="w-full flex flex-row justify-start items-center px-2">
            <button 
              title="Negrito" 
              className="py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Bold size={24} strokeWidth={4}/>
            </button>
            <button
              title="Itálico" 
              className="pl-1 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Italic size={24} strokeWidth={4}/>
            </button>
            <button 
              title="Título"
              className="pl-1 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Heading size={24} strokeWidth={4}/>
            </button>
            <button
              title="Link" 
              className="pl-2 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Link size={24} strokeWidth={4}/>
            </button>
            <button 
              title="Imagem"
              className="pl-2 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Image size={24} strokeWidth={4}/>
            </button>
            <button 
              title="Ajuda"
              className="pl-2 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><HelpCircle size={24} strokeWidth={4}/>
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