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
                    imagem_1: inputAtualizarViagem.imagem_1 || viagem.imagem_1,
                    imagem_2: inputAtualizarViagem.imagem_2 || viagem.imagem_2,
                    imagem_3: inputAtualizarViagem.imagem_3 || viagem.imagem_3,
                    hora_partida: inputAtualizarViagem.hora_partida || viagem.hora_partida,
                    hora_volta: inputAtualizarViagem.hora_volta || viagem.hora_volta,
                    local_partida: inputAtualizarViagem.local_partida || viagem.local_partida
                },
              })
              
            return { idViagemAlterado: atualizarViagem.id_viagem };
        } catch (err) {
            throw err;
        }
    }
}