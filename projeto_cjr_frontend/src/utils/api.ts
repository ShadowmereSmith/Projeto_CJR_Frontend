import axios from 'axios';
import { User } from '../types/user';
import { CreateUsuarioDto } from '../types/user';
import { UpdateUsuarioDto } from '../types/user';
import { Professor } from '../types/professor';
import { CreateProfessorDto } from '../types/professor';
import { UpdateProfessorDto } from '../types/professor';
import { Disciplina } from '../types/disciplina';
import { CreateDisciplinaDto } from '../types/disciplina';
import { UpdateDisciplinaDto } from '../types/disciplina';
import { ProfessorDisciplina } from '../types/professorDisciplina';
import { CreateProfessorDisciplinaDto } from '../types/professorDisciplina';
import { UpdateProfessorDisciplinaDto } from '../types/professorDisciplina';
import { Comentario } from '../types/comentario';
import { CreateComentarioDto } from '../types/comentario';
import { UpdateComentarioDto } from '../types/comentario';
import { Avaliacao } from '../types/avaliacao';
import { CreateAvaliacaoDto } from '../types/avaliacao';
import { UpdateAvaliacaoDto } from '../types/avaliacao';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

//
// USUÁRIO
//

const createUser = async (dados: CreateUsuarioDto): Promise<User> => {
  const response = await api.post('/usuarios', dados);
  return response.data;
};

const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/usuarios');
  return response.data;
};

const getUser = async (id: number): Promise<User> => {
  const response = await api.get(`/usuarios/${id}`);
  return response.data;
};

const updateUser = async (dados: UpdateUsuarioDto, id: number): Promise<User> => {
  const response = await api.put(`/usuarios/${id}`, dados);
  return response.data;
};

const deleteUser = async (id: number): Promise<User> => {
  const response = await api.delete(`/usuarios/${id}`);
  return response.data;
};

//
// PROFESSOR
//

const createProfessor = async (dados: CreateProfessorDto): Promise<Professor> => {
  const response = await api.post('/professores', dados);
  return response.data;
};

const getProfessores = async (): Promise<Professor[]> => {
  const response = await api.get('/professores');
  return response.data;
};

const getProfessor = async (id: number): Promise<Professor> => {
  const response = await api.get(`/professores/${id}`);
  return response.data;
};

const updateProfessor = async (dados: UpdateProfessorDto, id: number): Promise<Professor> => {
  const response = await api.put(`/professores/${id}`, dados);
  return response.data;
};

const deleteProfessor = async (id: number): Promise<Professor> => {
  const response = await api.delete(`/professores/${id}`);
  return response.data;
};

//
// DISCIPLINA
//

const createDisciplina = async (dados: CreateDisciplinaDto): Promise<Disciplina> => {
  const response = await api.post('/disciplinas', dados);
  return response.data;
};

const getDisciplinas = async (): Promise<Disciplina[]> => {
  const response = await api.get('/disciplinas');
  return response.data;
};

const getDisciplina = async (id: number): Promise<Disciplina> => {
  const response = await api.get(`/disciplinas/${id}`);
  return response.data;
};

const updateDisciplina = async (dados: UpdateDisciplinaDto, id: number): Promise<Disciplina> => {
  const response = await api.put(`/disciplinas/${id}`, dados);
  return response.data;
};

const deleteDisciplina = async (id: number): Promise<Disciplina> => {
  const response = await api.delete(`/disciplinas/${id}`);
  return response.data;
};

//
// PROFESSORDISCIPLINA
//

const createProfessorDisciplina = async (dados: CreateProfessorDisciplinaDto): Promise<ProfessorDisciplina> => {
  const response = await api.post('/professores-disciplinas', dados);
  return response.data;
};

const getProfessoresDisciplinas = async (): Promise<ProfessorDisciplina[]> => {
  const response = await api.get('/professores-disciplinas');
  return response.data;
};

const getProfessorDisciplina = async (
  professorID: number,
  disciplinaID: number
): Promise<ProfessorDisciplina> => {
  const response = await api.get(`/professores-disciplinas/${professorID}/${disciplinaID}`);
  return response.data;
};

const updateProfessorDisciplina = async (
  dados: UpdateProfessorDisciplinaDto,
  professorID: number,
  disciplinaID: number
): Promise<ProfessorDisciplina> => {
  const response = await api.put(`/professores-disciplinas/${professorID}/${disciplinaID}`, dados);
  return response.data;
};

const deleteProfessorDisciplina = async (
  professorID: number,
  disciplinaID: number
): Promise<ProfessorDisciplina> => {
  const response = await api.delete(`/professores-disciplinas/${professorID}/${disciplinaID}`);
  return response.data;
};

//
// COMENTÁRIO
//

const createComentario = async (dados: CreateComentarioDto): Promise<Comentario> => {
  const response = await api.post('/comentarios', dados);
  return response.data;
};

const getComentarios = async (): Promise<Comentario[]> => {
  const response = await api.get('/comentarios');
  return response.data;
};

const getComentario = async (id: number): Promise<Comentario> => {
  const response = await api.get(`/comentarios/${id}`);
  return response.data;
};

const updateComentario = async (dados: UpdateComentarioDto, id: number): Promise<Comentario> => {
  const response = await api.put(`/comentarios/${id}`, dados);
  return response.data;
};

// -------- ATENÇÃO AQUI: deleteComentario RECEBE O TOKEN E USA NO HEADER
const deleteComentario = async (id: number, token: string) => {
  const response = await api.delete(`/comentarios/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

//
// AVALIAÇÃO
//

const createAvaliacao = async (dados: CreateAvaliacaoDto): Promise<Avaliacao> => {
  const response = await api.post('/avaliacoes', dados);
  return response.data;
};

const getAvaliacoes = async (): Promise<Avaliacao[]> => {
  const response = await api.get('/avaliacoes');
  return response.data;
};

const getAvaliacao = async (id: number): Promise<Avaliacao> => {
  const response = await api.get(`/avaliacoes/${id}`);
  return response.data;
};

const updateAvaliacao = async (dados: UpdateAvaliacaoDto, id: number): Promise<Avaliacao> => {
  const response = await api.put(`/avaliacoes/${id}`, dados);
  return response.data;
};

const deleteAvaliacao = async (id: number): Promise<Avaliacao> => {
  const response = await api.delete(`/avaliacoes/${id}`);
  return response.data;
};

//
// LOGIN
//

const login = async (email: string, senha: string): Promise<{ token: string }> => {
  const response = await api.post('/auth/login', { email, senha });
  return response.data;
};

//
// REGISTER
//

const register = async (email: string, senha: string, nome: string, curso: string, departamento: string): Promise<{ id: number, email: string }> => {
  const response = await api.post('/auth/register', { email, senha, nome, curso, departamento });
  return response.data;
};

//
// EXPORT
//

export const apiService = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createProfessor,
  getProfessores,
  getProfessor,
  updateProfessor,
  deleteProfessor,
  createDisciplina,
  getDisciplinas,
  getDisciplina,
  updateDisciplina,
  deleteDisciplina,
  createProfessorDisciplina,
  getProfessoresDisciplinas,
  getProfessorDisciplina,
  updateProfessorDisciplina,
  deleteProfessorDisciplina,
  createComentario,
  getComentarios,
  getComentario,
  updateComentario,
  deleteComentario, // <-- ATUALIZADO PARA RECEBER TOKEN!
  createAvaliacao,
  getAvaliacoes,
  getAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
  login,
  register
};
