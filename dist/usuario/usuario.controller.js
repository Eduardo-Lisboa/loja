"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_repository_1 = require("./usuario.repository");
const CriaUsuario_dto_1 = require("./dto/CriaUsuario.dto");
const usuario_entity_1 = require("./usuario.entity");
const uuid_1 = require("uuid");
const ListaUsuario_dto_1 = require("./dto/ListaUsuario.dto");
const AtualizaUsuario_dto_1 = require("./dto/AtualizaUsuario.dto");
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async criaUsuario(dadosDouUsuario) {
        const usuario = new usuario_entity_1.UsuarioEntity();
        usuario.nome = dadosDouUsuario.nome;
        usuario.email = dadosDouUsuario.email;
        usuario.senha = dadosDouUsuario.senha;
        usuario.id = (0, uuid_1.v4)();
        this.usuarioRepository.salvar(usuario);
        return { usuario: new ListaUsuario_dto_1.ListaUsuarioDTO(usuario.id, usuario.nome), message: "Usuário criado com sucesso" };
    }
    async listaUsuarios() {
        const usuarioSalvos = await this.usuarioRepository.listar();
        const usuarioLista = usuarioSalvos.map(usuario => new ListaUsuario_dto_1.ListaUsuarioDTO(usuario.id, usuario.nome));
        return usuarioLista;
    }
    async AtualizaUsuario(id, dadosParaAtualizar) {
        const usuarioAtualizado = await this.usuarioRepository.atualizar(id, dadosParaAtualizar);
        return {
            usuario: usuarioAtualizado,
            message: "Usuário atualizado com sucesso",
        };
    }
    async deletaUsuario(id) {
        const usuario = await this.usuarioRepository.deleta(id);
        return {
            usuario,
            message: "Usuário deletado com sucesso",
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaUsuario_dto_1.CriaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criaUsuario", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listaUsuarios", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AtualizaUsuario_dto_1.AtualizaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "AtualizaUsuario", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deletaUsuario", null);
UsuarioController = __decorate([
    (0, common_1.Controller)("/usuarios"),
    __metadata("design:paramtypes", [usuario_repository_1.UsuarioRepository])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map