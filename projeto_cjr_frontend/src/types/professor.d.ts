export interface Professor {
  id: number;
  nome: string;
  departamento: string;
  createdAt: string;
  updatedAt: string;
  disciplinas?: ProfessorDisciplina[];
  avaliacoes?: Avaliacao[];
}