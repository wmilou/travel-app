import { PrismaClient } from '@prisma/client'
import { IDadosParaAtualizar } from '../../model/DadosParaAtualizar';
import { UsuarioGetService } from './usuario_get_service';

export class UsuarioPutService {
    private prisma = new PrismaClient();
    private UsuarioGetService = new UsuarioGetService();
    
    async atualizarUsuario(idUsuario: number, dadosDeAtualizacao: IDadosParaAtualizar): Promise<object> {
        try {
            const usuario = await this.UsuarioGetService.buscarUmUsuario(idUsuario);

            const atualizarUsuario = await this.prisma.pessoa.update({
                where: {
                  id_pessoa: idUsuario,
                },
                data: {
                    telefone: dadosDeAtualizacao.telefone || usuario.telefone,
                    email: dadosDeAtualizacao.email || usuario.email,
                    senha: dadosDeAtualizacao.senha || usuario.senha
                },
              })
              
            return { idUsuarioAlterado: atualizarUsuario.id_pessoa };
        } catch (err) {
            throw err;
        }
    }
}