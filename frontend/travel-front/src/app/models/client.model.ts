export interface IClient{
    id: number;
    nome:       string;   
    dat_nasc:   string;   
    rg:         string;       
    cpf_cnpj:   string;   
    telefone:   string;
    email:      string;      
    senha:      string;
}

export interface ILogin{
    email:      string;      
    senha:      string;
}