export class Usuario {
    private nome: string;
    private email: string;
    private senha: string;

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public get getNome() {
        return this.nome;
    }

    public get getEmail() {
        return this.email;
    }

    public get getSenha() {
        return this.senha;
    }
}
