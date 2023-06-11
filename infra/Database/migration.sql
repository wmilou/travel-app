CREATE DATABASE travelapp;
\c travelapp 

CREATE TABLE pessoa (
    id_pessoa serial NOT NULL,
    nome VARCHAR(50) NOT NULL,
    dat_nasc VARCHAR(50) NOT NULL,
    rg VARCHAR(50) NOT NULL,
    cpf_cnpj VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    ativo BOOLEAN NOT NULL,

    CONSTRAINT pessoa_pkey PRIMARY KEY (id_pessoa)
);

CREATE TABLE viagem (
    id_viagem SERIAL NOT NULL,
    local VARCHAR(100) NOT NULL,
    vagas INTEGER NOT NULL,
    local_partida VARCHAR(300) NOT NULL,
    hora_partida VARCHAR(300) NOT NULL,
    hora_volta VARCHAR(300) NOT NULL,
    imagem_1 VARCHAR(999) NOT NULL,
    imagem_2 VARCHAR(999) NOT NULL,
    imagem_3 VARCHAR(999) NOT NULL,
    viagem_cancelada BOOLEAN NOT NULL,

    CONSTRAINT viagem_pkey PRIMARY KEY (id_viagem)
);

INSERT INTO viagem(local, vagas, local_partida, hora_partida, hora_volta, imagem_1, imagem_2, imagem_3, viagem_cancelada)
VALUES('Urubici', 5, 'Rodoviaria de Campinas', '07h00', '20h00', 'abc', 'abcd', 'abcde', false);

CREATE TABLE forma_pagamento (
    id_pagamento SERIAL NOT NULL,
    descricao VARCHAR(999) NOT NULL,

    CONSTRAINT forma_pagamento_pkey PRIMARY KEY (id_pagamento)
);

CREATE TABLE viagem_pessoa (
    id_viagem_pessoa SERIAL NOT NULL,
    fk_pessoa INTEGER NOT NULL,
    fk_viagem INTEGER NOT NULL,
    fk_forma_pag INTEGER NOT NULL,
    sn_quitado INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT viagem_pessoa_pkey PRIMARY KEY (id_viagem_pessoa)
);

CREATE UNIQUE INDEX pessoa_cpf_cnpj_key ON pessoa(cpf_cnpj);

ALTER TABLE viagem_pessoa ADD CONSTRAINT viagem_pessoa_fk_pessoa_fkey FOREIGN KEY (fk_pessoa) REFERENCES pessoa(id_pessoa) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE viagem_pessoa ADD CONSTRAINT viagem_pessoa_fk_viagem_fkey FOREIGN KEY (fk_viagem) REFERENCES viagem(id_viagem) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE viagem_pessoa ADD CONSTRAINT viagem_pessoa_fk_forma_pag_fkey FOREIGN KEY (fk_forma_pag) REFERENCES forma_pagamento(id_pagamento) ON DELETE RESTRICT ON UPDATE CASCADE;
