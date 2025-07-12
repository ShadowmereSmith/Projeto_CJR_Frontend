'use client';

import { useRouter } from 'next/navigation';

export default function BotaoVoltar() {
  const router = useRouter();
  return (
    <div className="mt-5 mr-5 h-20 w-20 cursor-pointer">
      <button
        className="cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-emerald-200 transition-all duration-300"
        onClick={() => router.back()}
      >
        <img src="/seta-voltar.png" alt="Voltar" />
      </button>
    </div>
  );
}
