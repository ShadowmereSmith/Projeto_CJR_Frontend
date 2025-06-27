export type Comentario = {
  autor: string
  data: string
  professor: string
  disciplina: string
  texto: string
  respostas: {
    nome: string
    texto: string
  }[]
}
