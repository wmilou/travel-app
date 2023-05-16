import { PrismaClient } from '@prisma/client'
import { IDadosParaCriacao} from '../../model/DadosParaCriacao';
import { IRegex } from '../../model/Regex';

export class UsuarioPostService {
    private prisma = new PrismaClient();
    
    async criarUsuario(dadosDeCriacao: IDadosParaCriacao): Promise<object> {
        try {
            await this.verificarInput(dadosDeCriacao);

            const verificarSeUsuarioExiste = await this.verificarSeUsuarioExiste(dadosDeCriacao.cpf_cnpj);

            if (verificarSeUsuarioExiste) throw "ERRO!! Usuário já existe!!!";

            const usuario = await this.prisma.pessoa.create({
                data: {
                    nome: dadosDeCriacao.nome,
                    dat_nasc: dadosDeCriacao.dat_nasc,
                    rg: dadosDeCriacao.rg,
                    cpf_cnpj: dadosDeCriacao.cpf_cnpj,
                    telefone: dadosDeCriacao.telefone,
                    email: dadosDeCriacao.email,
                    senha: dadosDeCriacao.senha,
                    ativo: true,
                },
            });
            
            return { idUsuarioSalvo: usuario.id_pessoa };
        } catch (error) {
            throw error;
        }
    }

    verificarInput(dadosDeCriacao: IDadosParaCriacao): any {
        const regex: IRegex = {
            cpf_cnpj: /[0-9]{3}|\d{2}/g,
            email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        }

        const chaveRegex = Object.keys(regex);

        chaveRegex.forEach((key) => {
            const keyAtual = key as keyof IRegex;

            if (!regex[keyAtual].test(dadosDeCriacao[keyAtual])) {
                throw `${key} INVÁLIDO`.toUpperCase();
            } 
        });
    }

    async verificarSeUsuarioExiste(cpf_cnpj: string): Promise<boolean> {
        const usuario = await this.prisma.pessoa.findUnique({
            where: {
                cpf_cnpj,
            },
        });

        if (usuario) return true;

       return false;
    }
}