import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class CriaUsuarioDTO {
    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    nome: string;

    @IsEmail({}, { message: "O email deve ser válido" })
    @EmailUnico({ message: "O email já está em uso" })
    email: string;

    @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres" })
    senha: string;
}
