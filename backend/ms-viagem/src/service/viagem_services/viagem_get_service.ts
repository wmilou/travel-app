import { PrismaClient, Viagem } from '@prisma/client'

export class ViagemGetService {
    private prisma = new PrismaClient();

    async buscarTodasViagem(): Promise<Array<Viagem>> {
        try {            
            const todasViagem = await this.prisma.viagem.findMany();

            return todasViagem;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async buscarUmaViagem(idViagem: number): Promise<Viagem> {
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
}