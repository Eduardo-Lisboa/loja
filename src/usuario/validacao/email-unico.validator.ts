import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
    constructor(private usuarioRepository: UsuarioRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuario = await this.usuarioRepository.existeComEmail(value);
        return !usuario;
    }
}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: object, proprieadade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: proprieadade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUnicoValidator,
        });
    };
};
