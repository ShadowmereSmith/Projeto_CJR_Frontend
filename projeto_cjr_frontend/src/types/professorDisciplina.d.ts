export interface ProfessorDisciplina {
  professorID: number;
  disciplinaID: number;
  professor: Professor;
  disciplina: Disciplina;
}

// Tipo para criação (omitindo campos auto-gerados)
export type CreateProfessorDisciplinaDto = {
  professorID: number;
  disciplinaID: number;
}

// Tipo para atualização (todos campos opcionais exceto id)
export type UpdateProfessorDisciplinaDto = Partial<ProfessorDisciplina> & { 
  professorID: number;
  disciplinaID: number;
};