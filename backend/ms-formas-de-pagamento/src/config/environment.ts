export interface IEnvionment {
    name: string,
    host: string,
    hostMSUser: string,
    hostMSBooking: string,
    port: number,
    env: string,
}

export const enviroment: IEnvionment = {
    name: "ms-payment",
    host: process.env.MS_HOST || "localhost:3002",
    hostMSUser: process.env.MS_USER || "http://localhost:3000",
    hostMSBooking: process.env.MS_BOOKING || "http://localhost:3001",
    port: 3002,
    env: process.env.ENV || "local",
}