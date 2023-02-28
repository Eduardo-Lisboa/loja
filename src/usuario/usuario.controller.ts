import { Body, Controller, Post, Get } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller("/usuarios")
export class UsuarioController {
    
    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    public async criaUsuario(@Body() dadosDouUsuario) {
        this.usuarioRepository.salvar(dadosDouUsuario);
        return dadosDouUsuario;
    }

    @Get()
    public async listaUsuarios() {
        return this.usuarioRepository.listar();
    }
}
