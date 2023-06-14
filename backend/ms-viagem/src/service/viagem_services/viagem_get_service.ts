import { PrismaClient } from '@prisma/client'
import { UsuarioService } from '../usuario_services/usuario_get_service';
import { IViagem } from '../../model/IViagem';

export class ViagemGetService {
    private prisma = new PrismaClient();

    async buscarTodasViagem(): Promise<Array<object>> {
        try {            
            const todasViagem = await this.prisma.viagem.findMany();

            return todasViagem;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async buscarUmaViagem(idViagem: number): Promise<IViagem> {
        try {            
            const viagem = await this.prisma.viagem.findUnique({
                where: {
                    id_viagem: idViagem,
                },
            });

            if (viagem) {
                return viagem;
            }    

            throw "Viagem não encontrada"; 
        } catch (error) {
            throw error;
        }
    }

    async buscarViagemVinculadaAoUsuario(idUsuario: number): Promise<Array<object>> {
        try {
            const viagensVinculadasAoUsuario = [];

            const viagemPessoa = await this.prisma.viagem_pessoa.findMany({
                where: {
                    fk_pessoa: idUsuario,
                }
            })

            for(let i = 0; i < viagemPessoa.length; i++) {
                let viagemAtual = viagemPessoa[i];
                const viagem = await this.buscarUmaViagem(viagemAtual.fk_viagem);
                const usuario = await UsuarioService.retornarDadosDoUsuario(viagemAtual.fk_pessoa);
                
                // @ts-ignore
                delete viagem.vagas;

                viagensVinculadasAoUsuario.push({
                    viagem,
                    nomeUsuario: usuario.nome,
                    idUsuario: usuario.id_pessoa,
                });
            }


            return viagensVinculadasAoUsuario;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}