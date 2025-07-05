export interface Professor {
  id: number;
  nome: string;
  departamento: string;
  createdAt: string;
  updatedAt: string;
  disciplinas: ProfessorDisciplina[];
  avaliacoes: Avaliacao[];
}

// Tipo para criação (omitindo campos auto-gerados)
export type CreateProfessorDto = Omit<Professor, 'id' | 'createdAt' | 'updatedAt' | 'disciplinas' | 'avaliacoes'>;

// Tipo para atualização (todos campos opcionais exceto id)
export type UpdateProfessorDto = Partial<Omit<Professor, 'id'>> & { id: number };