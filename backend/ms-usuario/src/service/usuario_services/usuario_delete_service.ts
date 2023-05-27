import { PrismaClient } from '@prisma/client'
import { UsuarioGetService } from './usuario_get_service';

export class UsuarioDeleteService {
    private prisma = new PrismaClient();
    private UsuarioGetService = new UsuarioGetService();

    async desativarUsuario(idUsuario: number): Promise<string> {
        try {            
            const usuario = await this.UsuarioGetService.buscarUmUsuario(idUsuario);
            
            if(usuario && !usuario.ativo) {
                await this.prisma.pessoa.update({
                    where: {
                      id_pessoa: idUsuario,
                    },
                    data: {
                        ativo: true,
                    },
                  })

                return "Usuário ativado";
            }

            if(usuario && usuario.ativo) {
                await this.prisma.pessoa.update({
                    where: {
                      id_pessoa: idUsuario,
                    },
                    data: {
                        ativo: false,
                    },
                  })

                return "Usuário desativado";
            }

            return "Usuário não encontrado";
        } catch (err) {
            throw err;
        }
    }
}