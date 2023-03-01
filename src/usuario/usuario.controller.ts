import { Body, Controller, Post, Get, Put, Param, Delete } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from "uuid";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";

@Controller("/usuarios")
export class UsuarioController {
    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    public async criaUsuario(@Body() dadosDouUsuario: CriaUsuarioDTO) {
        const usuario = new UsuarioEntity();
        usuario.nome = dadosDouUsuario.nome;
        usuario.email = dadosDouUsuario.email;
        usuario.senha = dadosDouUsuario.senha;
        usuario.id = uuid();

        this.usuarioRepository.salvar(usuario);
        return { usuario: new ListaUsuarioDTO(usuario.id, usuario.nome), message: "Usuário criado com sucesso" };
    }

    @Get()
    public async listaUsuarios() {
        const usuarioSalvos = await this.usuarioRepository.listar();
        const usuarioLista = usuarioSalvos.map(usuario => new ListaUsuarioDTO(usuario.id, usuario.nome));

        return usuarioLista;
    }

    @Put("/:id")
    public async AtualizaUsuario(@Param("id") id: string, @Body() dadosParaAtualizar: AtualizaUsuarioDTO) {
        const usuarioAtualizado = await this.usuarioRepository.atualizar(id, dadosParaAtualizar);

        return {
            usuario: usuarioAtualizado,
            message: "Usuário atualizado com sucesso",
        };
    }

    @Delete("/:id")
    public async deletaUsuario(@Param("id") id: string) {
        const usuario = await this.usuarioRepository.deleta(id);

        return {
            usuario,
            message: "Usuário deletado com sucesso",
        };
    }
}
