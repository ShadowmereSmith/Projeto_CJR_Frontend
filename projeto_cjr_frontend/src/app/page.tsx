'use client';

import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  const handleVerSite = () => {
    router.push('/feed-deslogado');
  };

  const handleEntrar = () => {
    router.push('/login');
  };

  return (
    /* conteiner principal da tela */
    <div className="flex h-screen">
      {/* lado esquerdo da tela*/}
      <div
        className="w-4/7 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/imagens/placeholder.jpg')" }}
      />

      {/* lado direito da tela */}
      <div className="w-3/7 flex flex-col items-center justify-center h-full bg-blue-900 p-16">
        <h1 className="text-center font-bold text-5xl text-white mb-8">
          Bem-vindo ao Avaliação de Professores
        </h1>
        <p className="text-center text-lg text-blue-100 max-w-md mb-12">
          Descubra avaliações reais, compartilhe experiências e escolha seus professores com confiança.
        </p>
        <div className="flex space-x-6">
          <button
            onClick={handleVerSite}
            className="rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold w-40 h-12 py-2 px-4 transition"
          >
            Ver Avaliações
          </button>
          <button
            onClick={handleEntrar}
            className="rounded-md bg-white hover:bg-gray-100 active:bg-gray-200 text-blue-900 font-bold w-40 h-12 py-2 px-4 transition"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
