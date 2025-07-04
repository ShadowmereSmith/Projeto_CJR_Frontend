export interface Disciplina {
  id: number;
  nome: string;
  createdAt: string;
  updatedAt: string;
  professores?: ProfessorDisciplina[];
  avaliacoes?: Avaliacao[];
}