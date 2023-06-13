export interface IEnvionment {
    name: string,
    host: string,
    hostMSUsuario: string,
    hostMSFormaDePagamento: string,
    port: number,
    env: string,
}

export const enviroment: IEnvionment = {
    name: "ms-viagem",
    host: process.env.MS_HOST_VIAGEM || "localhost:3001",
    hostMSUsuario: process.env.MS_USER || "http://localhost:3000",
    hostMSFormaDePagamento: process.env.MS_PAYMENT || "http://localhost:3002",
    port: 3001,
    env: process.env.ENV || "local",
}