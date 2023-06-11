export interface IEnvionment {
    name: string,
    host: string,
    hostMSFormaDePagamento: string,
    hostMSViagem: string,
    port: number,
    env: string,
}

export const enviroment: IEnvionment = {
    name: "ms-usuario",
    host: process.env.MS_HOST || "localhost:3000",
    hostMSFormaDePagamento: process.env.MS_PAYMENT || "http://localhost:3002",
    hostMSViagem: process.env.MS_BOOKING || "http://localhost:3001",
    port: 3000,
    env: process.env.ENV || "local",
}