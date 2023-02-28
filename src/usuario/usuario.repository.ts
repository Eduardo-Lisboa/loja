import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {
    private usuarios: Array<Usuario> = [];

    public async salvar(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    public async listar() {
        return this.usuarios;
    }
}
