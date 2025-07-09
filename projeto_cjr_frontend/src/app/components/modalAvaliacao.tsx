import React from 'react';
import { useState } from 'react';
import { Bold, Italic, Heading, Link, Image, HelpCircle } from "lucide-react";
import { Professor } from '@/types/professor';
import { apiService } from '@/utils/api';
import { jwtDecode } from 'jwt-decode';

type ModalProps = {
  professores: Professor[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAvaliacao({ professores, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const [professor, setProfessor] = useState<Professor | null>(null);
  const [professorId, setProfessorId] = useState<string>('');
  const [disciplina, setDisciplina] = useState("");
  const [comentario, setComentario] = useState('');

  const handleProfessorChange = (id: string) => {
    setProfessorId(id);
    setDisciplina('');
    const found = professores.find(p => p.id === parseInt(id));
    console.log('Professor selecionado:', found);
    setProfessor(found || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!professorId || !disciplina || !comentario.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const token = localStorage.getItem('token');
    
    if (token) {
      const decoded = jwtDecode(token);

      const response = await apiService.createAvaliacao({
        usuarioID: parseInt(decoded.sub || '0'),
        professorID: parseInt(professorId),
        disciplinaID: parseInt(disciplina),
        conteudo: comentario.trim(),
      });

      setComentario('');
      setProfessorId('');
      setDisciplina('');
      setProfessor(null);

      alert('Avaliação enviada com sucesso!');

      console.log('Formulário enviado!');
      console.log({
        professorId,
        disciplina,
      });

      onClose();
    } else {
      console.error('Token não encontrado');
      alert('Erro ao enviar a avaliação. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative min-w-[45%] max-w-[70%] h-[55vh] bg-blue-900 p-6 rounded-xl flex flex-col overflow-hidden z-50">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <select
            className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 h-8 mb-2 px-2 focus:outline-none invalid:text-gray-400"
            required
            value={professorId}
            onChange={e => handleProfessorChange(e.target.value)}
          >
            <option value="" disabled>Nome do Professor</option>
            {professores.map(p => (
              <option key={p.id} value={p.id} className="text-black">
                {p.nome}
              </option>
            ))}
          </select>

          <select
            className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 h-8 mb-2 px-2 focus:outline-none invalid:text-gray-400"
            required
            value={disciplina}
            onChange={e => setDisciplina(e.target.value)}
          >
            <option value="" disabled>Disciplina</option>
            {professor?.disciplinas?.map(pd => (
              <option key={pd.disciplina.id} value={pd.disciplina.id}>
                {pd.disciplina.nome}
              </option>
            ))}
          </select>

          <div className="rounded-xl flex flex-col flex-grow items-center justify-center bg-blue-300 mb-4">
            <div className="w-full flex flex-row justify-start items-center px-2">
              <button
                type="button"
                title="Negrito"
                className="py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Bold size={24} strokeWidth={4} />
              </button>
              <button
                type="button"
                title="Itálico"
                className="pl-1 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Italic size={24} strokeWidth={4} />
              </button>
              <button
                type="button"
                title="Título"
                className="pl-1 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Heading size={24} strokeWidth={4} />
              </button>
              <button
                type="button"
                title="Link"
                className="pl-2 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Link size={24} strokeWidth={4} />
              </button>
              <button
                type="button"
                title="Imagem"
                className="pl-2 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><Image size={24} strokeWidth={4} />
              </button>
              <button
                type="button"
                title="Ajuda"
                className="pl-2 py-1 text-blue-900 hover:text-blue-800 active:text-blue-700"><HelpCircle size={24} strokeWidth={4} />
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
              Avaliar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
