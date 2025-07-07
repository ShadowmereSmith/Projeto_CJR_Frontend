'use client';

import { useState } from 'react';
import HeaderLogado from '../../components/HeaderLogado';
import { useRouter } from 'next/navigation';
import { apiService } from '@/utils/api';
import { jwtDecode } from 'jwt-decode';

export default function Home() {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (novaSenha !== confirmaSenha) {
      alert('A nova senha e a confirmação não coincidem!');
      return;
    }

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const decoded = jwtDecode(token);
      const userId = decoded.sub;
      
      const response = await apiService.updateUser({
        id: Number(userId),
        senhaAtual: senhaAtual,
        novaSenha: novaSenha,
      }, Number(userId));

      alert('Senha atualizada com sucesso!');
      setSenhaAtual('');
      setNovaSenha('');
      setConfirmaSenha('');
    } catch (error) {
      console.log('Email ou senha incorretos');
      alert('Erro ao atualizar senha. Verifique sua senha atual.');
    }
  };

  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col items-center justify-center place-items-center bg-emerald-50 w-screen h-screen overflow-y-auto">
        
        <HeaderLogado />

        <div className="flex flex-row">

          <div className="mt-5 mr-5 h-20 w-20 cursor-pointer">
            <button className="cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-emerald-200 transition-all duration-300">
              <img src="/seta-voltar.png" alt="Voltar" />
            </button>
          </div>

          <div className="flex flex-col min-h-screen w-2xl items-center bg-white border-r-3 border-l-3 border-gray-800">
            <div className="flex flex-col bg-blue-500 h-45 w-full items-center">
              <img
                src="/Perfil_default.png"
                alt="Perfil do usuário"
                className="w-50 h-50 mt-25"
              />
            </div>

            <div className="flex flex-col items-center mt-40 gap-10 w-full">
              <h1 className="text-4xl text-black font-bold">
                Trocar Senha
              </h1>

              <form
                className="flex flex-col items-center w-full gap-10"
                onSubmit={handleSubmit}
              >
                <div>
                  <h2 className="text-black font-bold text-xl">
                    Senha atual:
                  </h2>
                  <input
                    type="password"
                    placeholder="Digite sua Senha Atual"
                    className="border-3 border-black bg-blue-200 w-90 h-10 text-black placeholder-gray-600 text-center text-xl rounded-xl"
                    value={senhaAtual}
                    onChange={(e) => setSenhaAtual(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <h2 className="text-black font-bold text-xl">
                    Nova senha:
                  </h2>
                  <input
                    type="password"
                    placeholder="Digite a nova senha"
                    className="border-3 border-black bg-blue-200 w-90 h-10 text-black placeholder-gray-600 text-center text-xl rounded-xl"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <h2 className="text-black font-bold text-xl">
                    Confirme a senha:
                  </h2>
                  <input
                    type="password"
                    placeholder="Confirme a senha nova"
                    className="border-3 border-black bg-blue-200 w-90 h-10 text-black placeholder-gray-600 text-center text-xl rounded-xl"
                    value={confirmaSenha}
                    onChange={(e) => setConfirmaSenha(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 w-40 rounded-lg border-3 border-blue-950 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                >
                  Confirmar
                </button>
              </form>

            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
