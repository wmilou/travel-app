import axios from "axios";
import { enviroment } from "../../config/environment";
import { IUsuario } from "../../model/Usuario/Usuario";
import { Pessoa } from "@prisma/client";

export class UsuarioService {
    public static async retornarDadosDoUsuario(idUsuario: number): Promise<Pessoa> {
        try {
            const endpoint = `${enviroment.hostMSUsuario}/usuario/buscarUsuarioUnico`;

            const result = await axios({
                method: "get",
                url: endpoint,
                headers: {
                    "id-usuario": Number(idUsuario) || "",
                },
            });
    
            return result.data;
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }
}