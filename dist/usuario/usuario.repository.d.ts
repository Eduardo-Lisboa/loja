import { Usuario } from "./usuario.entity";
export declare class UsuarioRepository {
    private usuarios;
    salvar(usuario: Usuario): Promise<void>;
    listar(): Promise<Usuario[]>;
}
