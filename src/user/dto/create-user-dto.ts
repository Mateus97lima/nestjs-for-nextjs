import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome precisa ser uma string' })
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'E-mail não pode estar vazio' })
  email: string;

  @IsString({ message: 'Senha precisa ser uma string' })
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  @MinLength(6, { message: 'Senha no minimo seis caracteres' })
  @MaxLength(8, { message: 'no maximo oito caracteres' })
  password: string;
}
