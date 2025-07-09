export interface Avaliacao {
  id: number;
  usuarioID: number;
  professorID: number;
  disciplinaID: number;
  conteudo: string;
  createdAt: string;
  updatedAt: string;
  usuario: User;
  professor: Professor;
  disciplina: Disciplina;
  comentarios: Comentario[];
}

// Tipo para criação (omitindo campos auto-gerados)
export type CreateAvaliacaoDto = {
  usuarioID: number;
  professorID: number;
  disciplinaID: number;
  conteudo: string;
};

// Tipo para atualização (todos campos opcionais exceto id)
export type UpdateAvaliacaoDto = Partial<Omit<Avaliacao, 'id'>> & { id: number };