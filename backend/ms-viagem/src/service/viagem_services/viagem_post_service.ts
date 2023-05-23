import { PrismaClient } from '@prisma/client'
import { IInputViagem } from '../../model/InputViagem';
import { UsuarioService } from '../usuario_services/usuario_get_service';

export class ViagemPostService {
    private prisma = new PrismaClient();
    
    async criarViagem(inputViagem: IInputViagem): Promise<object> {
        try {
            const usuario = await UsuarioService.retornarDadosDoUsuario(inputViagem.idUsuario);

            const viagem = await this.prisma.viagem.create({
                data: {       
                    local: inputViagem.local,
                    vagas: inputViagem.vagas,
                    local_partida: inputViagem.localPartida,                          
                    hora_partida: inputViagem.horaPartida,
                    hora_volta: inputViagem.horaVolta,
                    imagem_1: inputViagem.imagem1 || "",  
                    imagem_2: inputViagem.imagem2,
                    imagem_3: inputViagem.imagem3,
                    viagem_cancelada: false
                },
            });

            return { idViagem: viagem.id_viagem };
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}