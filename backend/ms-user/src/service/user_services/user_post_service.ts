import { PrismaClient } from '@prisma/client'
import { IDataForRegistration } from '../../model/DataForRegistration';

export class UserPostService {
    private prisma = new PrismaClient();
    
    async registerUser(dataForRegistration: IDataForRegistration): Promise<object> {
        try {
            const user = await this.prisma.pessoa.create({
                data: {
                    nome: dataForRegistration.nome,
                    dat_nasc: dataForRegistration.dat_nasc,
                    rg: dataForRegistration.rg,
                    cpf_cnpj: dataForRegistration.cpf_cnpj,
                    telefone: dataForRegistration.telefone,
                    email: dataForRegistration.email,
                    senha: dataForRegistration.senha,
                },
            });
            
            return { idUsuarioSalvo: user.id_pessoa };
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}