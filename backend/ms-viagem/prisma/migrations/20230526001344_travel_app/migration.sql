-- CreateTable
CREATE TABLE "Pessoa" (
    "id_pessoa" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dat_nasc" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id_pessoa")
);

-- CreateTable
CREATE TABLE "Viagem" (
    "id_viagem" SERIAL NOT NULL,
    "local" TEXT NOT NULL,
    "vagas" INTEGER NOT NULL,
    "local_partida" TEXT NOT NULL,
    "hora_partida" TEXT NOT NULL,
    "hora_volta" TEXT NOT NULL,
    "imagem_1" TEXT NOT NULL,
    "imagem_2" TEXT NOT NULL,
    "imagem_3" TEXT NOT NULL,
    "viagem_cancelada" BOOLEAN NOT NULL,

    CONSTRAINT "Viagem_pkey" PRIMARY KEY ("id_viagem")
);

-- CreateTable
CREATE TABLE "Forma_pagamento" (
    "id_pagamento" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Forma_pagamento_pkey" PRIMARY KEY ("id_pagamento")
);

-- CreateTable
CREATE TABLE "Viagem_pessoa" (
    "id_viagem_pessoa" SERIAL NOT NULL,
    "fk_pessoa" INTEGER NOT NULL,
    "fk_viagem" INTEGER NOT NULL,
    "fk_forma_pag" INTEGER NOT NULL,
    "sn_quitado" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Viagem_pessoa_pkey" PRIMARY KEY ("id_viagem_pessoa")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_cpf_cnpj_key" ON "Pessoa"("cpf_cnpj");

-- AddForeignKey
ALTER TABLE "Viagem_pessoa" ADD CONSTRAINT "Viagem_pessoa_fk_pessoa_fkey" FOREIGN KEY ("fk_pessoa") REFERENCES "Pessoa"("id_pessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viagem_pessoa" ADD CONSTRAINT "Viagem_pessoa_fk_viagem_fkey" FOREIGN KEY ("fk_viagem") REFERENCES "Viagem"("id_viagem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viagem_pessoa" ADD CONSTRAINT "Viagem_pessoa_fk_forma_pag_fkey" FOREIGN KEY ("fk_forma_pag") REFERENCES "Forma_pagamento"("id_pagamento") ON DELETE RESTRICT ON UPDATE CASCADE;
