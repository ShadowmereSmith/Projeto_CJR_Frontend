import { Comentario } from './comentarios'

const comentarios: Comentario[] = [
  {
    autor: 'Lucas Andrade',
    data: '10/06/2024',
    horario: '19:23',
    professor: 'Profa. Cláudia Silva',
    disciplina: 'Álgebra Linear',
    texto: 'A professora explica bem, mas é rígida com os prazos.',
    respostas: [
      { nome: 'Fernanda Lopes', texto: 'Concordo! Correção é muito pesada.' },
      { nome: 'Tiago Costa', texto: 'Já vi gente perder ponto por 1 min de atraso.' }
    ]
  }
]
export default comentarios
