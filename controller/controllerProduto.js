/*************************************************************************************************************
 * Objetivo: Arquivo responsavel pela manipulacao de recebimento, tratamento e retorno de dados entre a API e a model
 * Autor: Eduardo Perucci Martins de Souza
 * Data Criacao: 06/10/2022
 * Versao: 1.0
 * **********************************************************************************************************/
 


 const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require('../modulo/config.js') 

 //Funcao para retornar todos os produtos
 const listarProdutos = async function(){
    let dadosProdutosJSON = {}

    const { selectAllProdutos } = require('')
    const dadosProdutos = await selectAllProdutos()

    if(dadosProdutos)
    {
      
      dadosProdutos.forEach(element => {
        element.id = Number(element.id)
    })
      
      dadosProdutosJSON.produtos = dadosProdutos
        return dadosProdutosJSON
    } 
     else
        return false   
 }

 module.exports = {
    listarProdutos
 }