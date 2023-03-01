import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class AtualizaUsuarioDTO {
    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    @IsOptional()
    nome: string;

    @IsEmail({}, { message: "O email deve ser válido" })
    @EmailUnico({ message: "O email já está em uso" })
    @IsOptional()
    email: string;

    @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres" })
    @IsOptional()
    senha: string;
}
