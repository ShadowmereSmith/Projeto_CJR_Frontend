'use client';

import HeaderDeslogado from "../components/HeaderDeslogado";
import CardProfessor from "../components/cardProfessorDeslogado";
import { Professor } from "@/types/professor"
import { apiService } from '@/utils/api';
import { useState, useEffect } from 'react';

export default function Home() {

  const [professores, setProfessores] = useState<Professor[]>([]);
  const [professoresOriginais, setProfessoresOriginais] = useState<Professor[]>([]);
  const [ordenarPorNome, setOrdenarPorNome] = useState(false);
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
        setProfessoresOriginais(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => { // Filtra os professores com base na pesquisa
    const filtrados = professoresOriginais.filter((profs) => 
      profs.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setResultadoPesquisa(filtrados);
  }, [pesquisa]);

  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col bg-emerald-50 w-screen h-screen overflow-y-auto pb-10">
        
        <HeaderDeslogado />

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

          <div className="cursor-default flex flex-col items-center justify-center pt-3 text-black font-extrabold font-serif text-3xl">
            <p>_____________________________________________</p>
          </div>

          <div className="flex flex-row items-center justify-around pt-10">

            <h1 className="font-bold text-4xl text-black">Todos os Professores</h1>

            <div className="relative flex flex-row items-center justify-center pt-5 gap-3">

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
              className="cursor-pointer bg-blue-500 text-white p-2 rounded-lg w-35 h-12 border-3 border-blue-900 hover:bg-blue-400 hover:scale-105 transition-all duration-300 text-xl"
              onClick={() => setOrdenarPorNome(!ordenarPorNome)}
            >
              Ordenar
            </button>

            </div>

          </div>

          <div className="grid grid-cols-5 pl-10 pr-10 pt-10 gap-10">

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
