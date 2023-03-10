"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const common_1 = require("@nestjs/common");
let UsuarioRepository = class UsuarioRepository {
    constructor() {
        this.usuarios = [];
    }
    buscarUsuarioPorId(id) {
        const usuario = this.usuarios.find(usuario => usuario.id === id);
        if (!usuario) {
            throw new Error("Usuário não encontrado");
        }
        return usuario;
    }
    async salvar(usuario) {
        this.usuarios.push(usuario);
    }
    async listar() {
        return this.usuarios;
    }
    async existeComEmail(email) {
        const possivelUsuario = this.usuarios.find(usuario => usuario.email === email);
        return possivelUsuario !== undefined;
    }
    async atualizar(id, dadosDeAtualizacao) {
        const usuario = this.buscarUsuarioPorId(id);
        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === "id") {
                return;
            }
            usuario[chave] = valor;
        });
        return usuario;
    }
    async deleta(id) {
        const usuario = this.buscarUsuarioPorId(id);
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
        return usuario;
    }
};
UsuarioRepository = __decorate([
    (0, common_1.Injectable)()
], UsuarioRepository);
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map