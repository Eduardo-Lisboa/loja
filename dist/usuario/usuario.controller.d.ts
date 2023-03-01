import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
export declare class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    criaUsuario(dadosDouUsuario: CriaUsuarioDTO): Promise<{
        usuario: ListaUsuarioDTO;
        message: string;
    }>;
    listaUsuarios(): Promise<ListaUsuarioDTO[]>;
    AtualizaUsuario(id: string, dadosParaAtualizar: AtualizaUsuarioDTO): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
    deletaUsuario(id: string): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
}
