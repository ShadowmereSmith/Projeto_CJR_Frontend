export interface Disciplina {
  id: number;
  nome: string;
  createdAt: string;
  updatedAt: string;
  professores: ProfessorDisciplina[];
  avaliacoes: Avaliacao[];
}

// Tipo para criação (omitindo campos auto-gerados)
export type CreateDisciplinaDto = Omit<Disciplina, 'id' | 'createdAt' | 'updatedAt' | 'professores' | 'avaliacoes'>;

// Tipo para atualização (todos campos opcionais exceto id)
export type UpdateDisciplinaDto = Partial<Omit<Disciplina, 'id'>> & { id: number };