interface IPaymentMethod{
    descricao: string
}
export interface IPayment{
    formaDePagamento: IPaymentMethod,
    qtdVagas: number
}