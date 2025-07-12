'use client';

import * as FaIcons from 'react-icons/fa'

import HeaderLogado from '../components/HeaderLogado'
import CardProfessor from '../components/cardProfessorLogado';

import ModalAvaliacao from '../components/modalAvaliacao';
import ModalComentario from 'app/components/modalComentario';
import ModalEdicao from 'app/components/modalEdicao';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { apiService } from '@/utils/api';
import { jwtDecode } from 'jwt-decode';
import { Professor } from "@/types/professor"
import { Disciplina } from "@/types/disciplina"


export default function Page() {

  const router = useRouter();

  const [professores, setProfessores] = useState<Professor[]>([]);
  const [professoresOriginais, setProfessoresOriginais] = useState<Professor[]>([]); // salva o array original dos professores vindo do back
  const [ordenarPorNome, setOrdenarPorNome] = useState(false); // booleano que diz se está ordenando por nome ou não
  const [isOpenAvaliacao, setIsOpenAvaliacao] = useState(false);
  const [pesquisa, setPesquisa] = useState('');
  const [resultadoPesquisa, setResultadoPesquisa] = useState<Professor[]>(professoresOriginais);
  const [isPesquisaAtiva, setIsPesquisaAtiva] = useState(false);

  const professoresOrdenados = ordenarPorNome
    ? [...professoresOriginais].sort((a, b) => a.nome.localeCompare(b.nome))
    : professoresOriginais;

  const professoresAtuais = isPesquisaAtiva && pesquisa.length > 0 && resultadoPesquisa.length > 0
    ? resultadoPesquisa
    : professoresOrdenados

  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiService.getProfessores();
        setProfessores(response);
        setProfessoresOriginais(response); // salva a ordem original dos professores em ordem de adição
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, );

  useEffect(() => { // Filtra os professores com base na pesquisa
    const filtrados = professoresOriginais.filter((profs) => 
      profs.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setResultadoPesquisa(filtrados);
  }, [pesquisa]);

  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col bg-emerald-50 w-screen h-screen overflow-y-auto pb-10">

        <HeaderLogado/>

        <div>

          <div className="flex flex-row h-10 items-top justify-around pt-10">

            <div>
              <h1 className="font-bold text-4xl text-black">Novos Professores</h1>
            </div>

          </div>

          <div className="flex flex-row justify-center-safe pt-20 gap-10">

            {professores.slice(-5).map((r, i) => (
              <CardProfessor key={i} professor={r} />
            ))}

          </div>

          <div className="flex flex-col items-center justify-center pt-3 font-extrabold font-serif text-3xl text-black">
            <p>_____________________________________________</p>
          </div>

          <div className="flex flex-row items-center justify-around pt-10">

            <h1 className="font-bold text-4xl text-black">Todos os Professores</h1>

            <div className="flex flex-row items-center justify-center gap-5 pr-5">

                <input 
                type="text" 
                placeholder="  Digite o nome do professor" 
                className="h-8 w-70 bg-blue-300 text-black
                  rounded-xl border-3 border-blue-900 hover:scale-102 duration-300"
                value = {pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                />

                <button
                  className={`cursor-pointer p-2 rounded-lg w-40 h-10 border-3 border-blue-900 text-sm transition-all duration-300
                    ${isPesquisaAtiva ? 'bg-red-500 hover:bg-red-400' : 'bg-green-500 hover:bg-green-400'} text-white`}
                  onClick={() => setIsPesquisaAtiva(!isPesquisaAtiva)}
                >
                  {isPesquisaAtiva ? 'Desativar Pesquisa' : 'Ativar Pesquisa'}
                </button>

                <button 
                  onClick={() => setIsOpenAvaliacao(true)}
                  className="cursor-pointer bg-blue-500 text-white p-2 rounded-lg w-50 h-12 border-3 border-blue-900 hover:bg-blue-400 hover:scale-105 transition-all duration-300 text-xl"
                >
                  Nova Publicação
                </button>
                <ModalAvaliacao professores={professores} isOpen={isOpenAvaliacao} onClose={() => setIsOpenAvaliacao(false)}/>

                <button 
                  className="cursor-pointer bg-blue-500 text-white p-2 rounded-lg w-35 h-12 border-3 border-blue-900 hover:bg-blue-400 hover:scale-105 transition-all duration-300 text-xl"
                  onClick={() => setOrdenarPorNome(!ordenarPorNome)} // inverte o booleano para ordenar ou não
                >
                    Ordenar
                </button>
            </div>
          </div>

          <div className="grid grid-cols-5 pl-10 pr-10 pt-10  gap-10">

            {professoresAtuais.length > 0 ? (
                professoresAtuais.map((professor, id) => (
                <CardProfessor key={id} professor={professor} />
                ))
              ) : (
                (isPesquisaAtiva && pesquisa.length > 0 && resultadoPesquisa.length === 0) ? (
                  <p className="col-span-5 text-center text-black text-xl">Nenhum professor encontrado com este nome.</p>
                ) : (
                professoresOrdenados.map((r, i) => (
                <CardProfessor key={i} professor={r} />
              ))
              )
            )}

          </div>

        </div>

      </main>
    </div>
  );
}
