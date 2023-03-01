import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {
    private usuarios: Array<UsuarioEntity> = [];

    private buscarUsuarioPorId(id: string) {
        const usuario = this.usuarios.find(usuario => usuario.id === id);

        if (!usuario) {
            throw new Error("Usuário não encontrado");
        }

        return usuario;
    }

    public async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    public async listar() {
        return this.usuarios;
    }

    public async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(usuario => usuario.email === email);

        return possivelUsuario !== undefined;
    }

    public async atualizar(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
        const usuario = this.buscarUsuarioPorId(id);

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === "id") {
                return;
            }
            usuario[chave] = valor;
        });

        return usuario;
    }

    public async deleta(id: string) {
        const usuario = this.buscarUsuarioPorId(id);
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);

        return usuario;
    }
}
