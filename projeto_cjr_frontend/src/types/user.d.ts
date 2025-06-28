export interface User {
    id: number;
    nome: string;
    email: string;
    senha: string;
    departamento: string;
    curso: string;
    foto_perfil?: Buffer | null;
    createdAt: string;
    updatedAt: string;
    avaliacoes?: Avaliacao[];
    comentarios?: Comentario[];
}

// Tipo para criação (omitindo campos auto-gerados)
export type CreateUsuarioDto = Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'avaliacoes' | 'comentarios'>;

// Tipo para atualização (todos campos opcionais exceto id)
export type UpdateUsuarioDto = Partial<Omit<Usuario, 'id'>> & { id: number };

// Tipo seguro para retorno (excluindo a senha)
export type SafeUsuario = Omit<Usuario, 'senha'>;