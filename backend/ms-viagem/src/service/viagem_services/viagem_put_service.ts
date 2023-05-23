import { PrismaClient } from '@prisma/client'
import { ViagemGetService } from './viagem_get_service';
import { IInputAtualizarViagem } from '../../model/InputAtualizarViagem';

export class ViagemPutService {
    private prisma = new PrismaClient();
    private ViagemGetService = new ViagemGetService();
    
    async atualizarViagem(idViagem: number, inputAtualizarViagem: IInputAtualizarViagem): Promise<object> {
        try {
            const viagem = await this.ViagemGetService.buscarUmaViagem(idViagem);

            const atualizarViagem = await this.prisma.viagem.update({
                where: {
                  id_viagem: idViagem,
                },
                data: {
                    imagem_1: inputAtualizarViagem.imagem1 || viagem.imagem_1,
                    imagem_2: inputAtualizarViagem.imagem2 || viagem.imagem_2,
                    imagem_3: inputAtualizarViagem.imagem3 || viagem.imagem_3,
                    hora_partida: inputAtualizarViagem.horaPartida || viagem.hora_partida,
                    hora_volta: inputAtualizarViagem.horaVolta || viagem.hora_volta,
                    local_partida: inputAtualizarViagem.localPartida || viagem.local_partida,
                    vagas: inputAtualizarViagem.vagas || viagem.vagas
                },
              })
              
            return { idViagemAlterado: atualizarViagem.id_viagem };
        } catch (err) {
            throw err;
        }
    }
}