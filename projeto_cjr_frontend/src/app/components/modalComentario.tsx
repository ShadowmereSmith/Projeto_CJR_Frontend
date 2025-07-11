import React from 'react';
import { Bold, Italic, Heading, Link, Image, HelpCircle } from "lucide-react";
import { useState } from 'react';
import { apiService } from '@/utils/api';
import { jwtDecode } from 'jwt-decode';

type ModalProps = {
  isOpen: boolean; // Controla se o modal está aberto ou fechado
  idAvaliacao: number;
  onClose: () => void; // Função para fechar o modal (deve receber setIsOpen(false) como parâmetro, ele executa essa função quando o botão de fechar é clicado)
}

export default function ModalComentario({isOpen, idAvaliacao , onClose}: ModalProps) { // modal recebe props para controlar seu estado
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

  const [comentario, setComentario] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!comentario.trim()) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      const token = localStorage.getItem('token');
      
      if (token) {
        const decoded = jwtDecode(token);
  
        const response = await apiService.createComentario({
          usuarioID: parseInt(decoded.sub || '0'),
          avaliacaoID: idAvaliacao,
          conteudo: comentario.trim(),
        });
  
        setComentario('');
  
        alert('Comentário enviado com sucesso!');
  
        console.log('Formulário enviado!');
        console.log({
          idAvaliacao,
        });
  
        onClose();
      } else {
        console.error('Token não encontrado');
        alert('Erro ao enviar o comentário. Tente novamente mais tarde.');
      }
    };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative min-w-[45%] max-w-[70%] h-[55vh] bg-blue-900 p-6 rounded-xl flex flex-col overflow-hidden z-50">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
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
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
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
        </form>
      </div>
    </div>
  );
}