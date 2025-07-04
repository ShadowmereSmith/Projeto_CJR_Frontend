export interface Avaliacao {
  id: number;
  usuarioID: number;
  professorID: number;
  disciplinaID: number;
  conteudo: string;
  createdAt: string;
  updatedAt: string;
  usuario?: User;
  professor?: Professor;
  disciplina?: Disciplina;
  comentarios?: Comentario[];
}