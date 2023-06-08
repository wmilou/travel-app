import { PrismaClient } from '@prisma/client'
import { ViagemGetService } from './viagem_get_service';

export class ViagemDeleteService {
    private prisma = new PrismaClient();
    private ViagemGetService = new ViagemGetService();

    async cancelarViagem(idViagem: number): Promise<string> {
        try {            
            const viagem = await this.ViagemGetService.buscarUmaViagem(idViagem);

            if(viagem && viagem.viagem_cancelada) {
                await this.prisma.viagem.update({
                    where: {
                      id_viagem: idViagem,
                    },
                    data: {
                        viagem_cancelada: false,
                    },
                });

                return "Viagem Registrata Novamente";
            }
            
            if(viagem && !viagem.viagem_cancelada) {
                await this.prisma.viagem.update({
                    where: {
                      id_viagem: idViagem,
                    },
                    data: {
                        viagem_cancelada: true,
                    },
                });

                return "Viagem cancelada";
            }

            return "Viagem não encontrada";
        } catch (err) {
            throw err;
        }
    }
}