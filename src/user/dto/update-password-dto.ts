import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdatePassowordDto {
  @IsString({ message: 'Senha precisa ser uma string' })
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  currentPassword: string;

  @IsString({ message: 'Nova Senha precisa ser uma string' })
  @IsNotEmpty({ message: 'Nova Senha não pode estar vazia' })
  @MinLength(6, { message: 'Nova Senha no minimo seis caracteres' })
  @MaxLength(8, { message: 'Nova Senha no maximo oito caracteres' })
  newPassword: string;
}
