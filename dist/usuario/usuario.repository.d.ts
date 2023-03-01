import { UsuarioEntity } from "./usuario.entity";
export declare class UsuarioRepository {
    private usuarios;
    private buscarUsuarioPorId;
    salvar(usuario: UsuarioEntity): Promise<void>;
    listar(): Promise<UsuarioEntity[]>;
    existeComEmail(email: string): Promise<boolean>;
    atualizar(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
    deleta(id: string): Promise<UsuarioEntity>;
}
