export interface IEnvionment {
    name: string,
    host: string,
    hostMSUser: string,
    hostMSPayment: string,
    port: number,
    env: string,
}

export const enviroment: IEnvionment = {
    name: "ms-booking",
    host: process.env.MS_HOST || "localhost:3001",
    hostMSUser: process.env.MS_USER || "http://localhost:3000",
    hostMSPayment: process.env.MS_PAYMENT || "http://localhost:3002",
    port: 3001,
    env: process.env.ENV || "local",
}