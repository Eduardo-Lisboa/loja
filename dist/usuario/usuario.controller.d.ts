import { UsuarioRepository } from "./usuario.repository";
export declare class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    criaUsuario(dadosDouUsuario: any): Promise<any>;
    listaUsuarios(): Promise<import("./usuario.entity").Usuario[]>;
}
