export interface Comentario {
  id: number;
  usuarioID: number;
  avaliacaoID: number;
  conteudo: string;
  createdAt: string;
  updatedAt: string;
  usuario: User;
  avaliacao: Avaliacao;
}

// Tipo para criação (omitindo campos auto-gerados)
export type CreateComentarioDto = Omit<Comentario, 'id' | 'createdAt' | 'updatedAt' | 'usuario' | 'avaliacao'>;

// Tipo para atualização (todos campos opcionais exceto id)
export type UpdateComentarioDto = Partial<Omit<Comentario, 'id'>> & { id: number };