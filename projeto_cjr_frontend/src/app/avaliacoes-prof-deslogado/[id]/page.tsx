'use client';
export const dynamic = 'force-dynamic';

import { Professor } from '../../../types/professor'
import { useState, useEffect, use } from 'react'
import { apiService } from '../../../utils/api'
import AvaliacaoCardProfessor from '@/app/components/AvaliacaoCardProfessor'
import HeaderDeslogado from '@/app/components/HeaderDeslogado'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>
}

export default function Home({ params }: Props) {
  const { id } = use(params)
  const [professor, setProfessor] = useState<Professor | null>(null);
  const router = useRouter();

  const handleVoltar = () => {
    router.back();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiService.getProfessor(parseInt(id));
        setProfessor(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col items-center justify-center place-items-center bg-emerald-50 w-screen h-screen overflow-y-auto">
        <HeaderDeslogado />
        <div className="flex flex-row">
          <div className="mt-5 mr-5 h-20 w-20">
            <button
              onClick={handleVoltar}
              className="cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-emerald-200 transition-all duration-300"
            >
              <Image src="/seta-voltar.png" alt="Voltar" width={40} height={40} />
            </button>
          </div>
          <div className="flex flex-col min-h-screen w-2xl bg-white border-r-3 border-l-3 border-gray-800">
            <div className="bg-blue-500 h-45 w-full flex items-center">
              <Image
                src="/Perfil_default.png"
                alt="Perfil do Professor"
                width={160}
                height={160}
                className="rounded-full ml-10 mt-5"
              />
            </div>
            <div className="flex flex-row items-start justify-between p-10 border-b-3 border-gray-800">
              <div className="flex flex-col items-start justify-start gap-2 pt-5">
                <h1 className="text-3xl font-bold text-blue-900">{professor?.nome}</h1>

                <div className="flex flex-row items-center justify-start gap-2">
                  <Image src="/icone-dept.webp" alt="Departamento" width={28} height={24} />
                  <p className="text-lg text-gray-800">{professor?.departamento}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 text-center mt-5 mb-5">
                Avaliações
              </h2>
              <div className="flex flex-col items-center justify-center gap-5 p-2">
                {professor?.avaliacoes.map((r, i) => (
                  <AvaliacaoCardProfessor key={i} avaliacao={r} isEditavel={false} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
