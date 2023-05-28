CREATE TABLE Pessoa 
( 
	 ID_Pessoa SERIAL PRIMARY KEY,  
	 Nome VARCHAR(50) NOT NULL,  
	 RG INT,  
	 CPF_CPNJ INT NOT NULL,  
	 Telefone VARCHAR(15) NOT NULL,  
	 Email VARCHAR(30) NOT NULL,  
	 Senha VARCHAR(10) NOT NULL,  
	 Dat_nascimento VARCHAR(10),  
	 UNIQUE (RG,CPF_CPNJ,Email)
); 

CREATE TABLE Viagens 
( 
	 ID_viagem SERIAL PRIMARY KEY,  
	 Local VARCHAR(30) NOT NULL,  
	 Vagas INT,  
	 Local_partida VARCHAR(30) NOT NULL,  
	 Horario_partida VARCHAR(10) NOT NULL,  
	 Horario_volta VARCHAR(10) NOT NULL,  
	 Imagem_1 VARCHAR(999) NOT NULL,  
	 Imagem_2 VARCHAR(999) NOT NULL,  
	 Imagem_3 VARCHAR(999) NOT NULL  
); 

CREATE TABLE Formas_pagamento 
( 
	 ID_pagamento SERIAL PRIMARY KEY,  
	 Descricao VARCHAR(20) NOT NULL  
); 

CREATE TABLE Viagem_Pessoa 
( 
	 Id_viagem_pessoa SERIAL PRIMARY KEY,  
	 FK_pessoa INT NOT NULL,  
	 FK_viagem INT NOT NULL,  
	 FK_forma_pagamento INT NOT NULL,  
	 SN_quitado INT NOT NULL DEFAULT '0'  
); 

ALTER TABLE Viagem_Pessoa ADD FOREIGN KEY(FK_pessoa) REFERENCES Pessoa (ID_pessoa);
ALTER TABLE Viagem_Pessoa ADD FOREIGN KEY(FK_viagem) REFERENCES Viagens (ID_viagem);
ALTER TABLE Viagem_Pessoa ADD FOREIGN KEY(FK_forma_pagamento) REFERENCES Formas_pagamento (ID_pagamento);
