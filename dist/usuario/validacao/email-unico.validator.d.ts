import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
export declare class EmailUnicoValidator implements ValidatorConstraintInterface {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const EmailUnico: (opcoesDeValidacao: ValidationOptions) => (objeto: object, proprieadade: string) => void;
