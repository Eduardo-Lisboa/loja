export class Usuario {
    private nome: string;
    private email: string;
    private senha: string;

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public getNome() {
        return this.nome;
    }

    public getEmail() {
        return this.email;
    }

    public getSenha() {
        return this.senha;
    }
}
