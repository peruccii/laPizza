/*************************************************************************************************************
 * Objetivo: Arquivo responsavel pela manipulacao de dados com o Banco de Dados(Insert,Uptade,Delete e Select)
 * Autor: Eduardo Perucci Martins de Souza
 * Data Criacao: 06/10/2022
 * Versao: 1.0
 * **********************************************************************************************************/

//Funcao para retornar todos os registros no Banco de Dados

const selectAllProdutos = async function(){

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()

    const rsProdutos = await prisma.$queryRaw `select cast(id as float) as id, nome, preco, status_favoritos, status_promocao from tbl_produto order by id desc`

    if (rsProdutos.length > 0)
        return rsProdutos
    else
        return false
}

module.exports - {
    selectAllProdutos
}