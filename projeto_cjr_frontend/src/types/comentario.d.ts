export interface Comentario {
  id: number;
  usuarioID: number;
  avaliacaoID: number;
  conteudo: string;
  createdAt: string;
  updatedAt: string;
  usuario?: User;
  avaliacao?: Avaliacao;
}