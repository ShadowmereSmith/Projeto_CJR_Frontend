import React from 'react';
import { Bold, Italic, Heading, Link, Image, HelpCircle, Trash2 } from "lucide-react";
import { Avaliacao } from '@/types/avaliacao';
import { useState } from 'react';
import { apiService } from '@/utils/api';

type ModalProps = {
  isOpen: boolean;
  avaliacao: Avaliacao;
  onClose: () => void;
  onEdit?: () => void; // Callback opcional para atualizar a lista de avaliações após edição
}

export default function ModalEdicao({isOpen, avaliacao, onClose, onEdit}: ModalProps) {
  if (!isOpen) return null;

  const [comentario, setComentario] = useState(avaliacao.conteudo || '');
  const comentarioOriginal = avaliacao.conteudo || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comentario.trim()) {
      alert('Por favor, adicione um comentário válido.');
      return;
    }
    if (comentario.trim() === comentarioOriginal.trim()) {
      alert('Por favor, edite o comentário original.');
      return;
    }

    try{
      await apiService.updateAvaliacao({
        conteudo: comentario.trim(),
      }, avaliacao.id);
    } catch (error) {
      console.error('Erro ao atualizar a avaliação:', error);
      alert('Erro ao atualizar a avaliação. Tente novamente.');
    }

    alert('Avaliação editada com sucesso!');
    onEdit?.(); // Chama o callback para atualizar a lista de avaliações, se fornecido
    onClose();
    console.log('Formulário enviado!'); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative min-w-[45%] max-w-[70%] h-[55vh] bg-blue-900 p-6 rounded-xl flex flex-col overflow-hidden z-50">
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          <div className="rounded-xl flex flex-col flex-grow items-center justify-center bg-blue-300 mb-4">
            <div className="w-full flex flex-row justify-start items-center px-2">
              <button 
                title="Negrito" 
                type="button"
                className="py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Bold size={24} strokeWidth={4}/>
              </button>
              <button
                title="Itálico" 
                type="button"
                className="pl-1 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Italic size={24} strokeWidth={4}/>
              </button>
              <button 
                title="Título"
                type="button"
                className="pl-1 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Heading size={24} strokeWidth={4}/>
              </button>
              <button
                title="Link" 
                type="button"
                className="pl-2 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Link size={24} strokeWidth={4}/>
              </button>
              <button 
                title="Imagem"
                type="button"
                className="pl-2 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Image size={24} strokeWidth={4}/>
              </button>
              <button 
                title="Ajuda"
                type="button"
                className="pl-2 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><HelpCircle size={24} strokeWidth={4}/>
              </button>
            </div>
            <div className="h-px bg-blue-900 w-full"></div>
            <textarea
              className="flex-grow w-full p-4 rounded-lg font-normal focus:outline-none resize-none"
              placeholder="Escreva seu comentário aqui..."
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            />
          </div>
          <div className="flex w-full items-center mr-24 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-blue-900 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-3 mx-4"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-3"
            >
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
