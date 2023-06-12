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

INSERT INTO viagem(local, vagas, local_partida, hora_partida, hora_volta, imagem_1, imagem_2, imagem_3, viagem_cancelada)
VALUES('Japão', 14, 'Guarulhos', '23h00', '22h00', 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100', 'R$ 3000,00', 'Bem-vindo à sua viagem ao Japão, uma terra de contrastes fascinantes onde a tradição milenar se encontra com a modernidade vibrante. Prepare-se para uma aventura inesquecível enquanto exploramos este país único e cativante.', false);

INSERT INTO viagem(local, vagas, local_partida, hora_partida, hora_volta, imagem_1, imagem_2, imagem_3, viagem_cancelada)
VALUES('Laos', 13, 'Viracopos', '20h00', '04h00', 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100', 'R$ 2500,00', 'Bem-vindo à sua aventura no Laos, um país exótico e encantador localizado no coração do Sudeste Asiático. Prepare-se para explorar paisagens deslumbrantes, mergulhar na cultura rica e descobrir a serenidade deste destino único.', false);

INSERT INTO viagem(local, vagas, local_partida, hora_partida, hora_volta, imagem_1, imagem_2, imagem_3, viagem_cancelada)
VALUES('Cuba', 20, 'Guarulhos', '10h00', '16h00', 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100', 'R$2000,00', 'Bem-vindo à sua viagem a Cuba, uma ilha caribenha cheia de história, cultura vibrante e paisagens deslumbrantes. Prepare-se para se encantar com a música envolvente, as cores vibrantes e a hospitalidade calorosa deste destino único.', false);

INSERT INTO viagem(local, vagas, local_partida, hora_partida, hora_volta, imagem_1, imagem_2, imagem_3, viagem_cancelada)
VALUES('Canadá', 30, 'Guarulhos', '12h00', '23h30', 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100', 'R$ 3000,00', 'Bem-vindo à sua viagem ao Canadá, um país vasto e diversificado, conhecido por suas paisagens deslumbrantes, cidades modernas e uma rica cultura. Prepare-se para explorar a beleza natural, a hospitalidade calorosa e a variedade de experiências que o Canadá tem a oferecer.', false);

INSERT INTO viagem(local, vagas, local_partida, hora_partida, hora_volta, imagem_1, imagem_2, imagem_3, viagem_cancelada)
VALUES('Honduras', 10, 'Viracopos', '22h15', '02h00', 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100', 'R$ 1700,00', 'Bem-vindo à sua viagem a Honduras, um país da América Central repleto de belezas naturais, praias deslumbrantes e uma cultura rica. Prepare-se para explorar as maravilhas do Caribe, as ruínas antigas e a diversidade da fauna e flora hondurenha.', false);

INSERT INTO viagem(local, vagas, local_partida, hora_partida, hora_volta, imagem_1, imagem_2, imagem_3, viagem_cancelada)
VALUES('Colombia', 19, 'Guarulhos', '10h00', '15h00', 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100', 'R$ 3000,00', 'Bem-vindo à sua viagem à Colômbia, um país fascinante e cheio de surpresas. Prepare-se para explorar uma mistura única de belas paisagens, história rica, cultura vibrante e hospitalidade calorosa.', false);

INSERT INTO viagem(local, vagas, local_partida, hora_partida, hora_volta, imagem_1, imagem_2, imagem_3, viagem_cancelada)
VALUES('Suiça', 17, 'Guarulhos', '23h00', '22h00', 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100', 'R$ 3000,00', 'Bem-vindo à sua viagem à Suíça, um país conhecido por suas paisagens deslumbrantes, cidades pitorescas e qualidade de vida excepcional. Prepare-se para explorar os Alpes suíços, lagos cristalinos, vilarejos encantadores e desfrutar de uma atmosfera tranquila e acolhedora.', false);

INSERT INTO viagem(local, vagas, local_partida, hora_partida, hora_volta, imagem_1, imagem_2, imagem_3, viagem_cancelada)
VALUES('Islândia', 17, 'Guarulhos', '01h00', '12h00', 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100', 'R$ 17000,00', '
Bem-vindo à sua viagem à Islândia, uma terra de paisagens deslumbrantes, vulcões ativos, geleiras majestosas e uma cultura rica. Prepare-se para explorar a terra do fogo e do gelo, onde a natureza reina suprema.', false);


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
