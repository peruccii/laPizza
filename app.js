/***********************************************************************
 * Objetivo: API responsavel pela manipulacao de dados do Back-end      =
 *              (GET, POST, PUT, DELETE)                                =
 * Autor: Eduardo Perucci Martins de Souza                              =
 * Data Criacao: 10/10/2022                                             =
 * Versao: 1.0                                                          =
 * ======================================================================   
 * Anotacoes:                                                           =
 * //npm install prisma --save                                          =
 * //npx prisma                                                         =
 * //npx prisma init//                                                  =   
 * //npm install @prisma/client                                         =
 * ********************************************************************/

//Importacao dabiblioteca
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require('./modulo/config.js') 
const { json } = require('body-parser')

const app = express()

//Configuracao de cors para liberar os acessos a API
app.use((resquest,response,next) => {
    response.header ('Access-Control-Allow-Origin', '*')
    response.header ('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    app.use(cors())
    next()
})

//Criamos um objeto que permite receber um json no body das requisicoes
const jsonParser = bodyParser.json()

/******************************** 
*   Rotas para CRUD de alunos   *
*   Data: 10/10/2022            *
********************************/

//Endpoint para listar todos os produtos
app.get('/produtos', cors(),async function (request,response){
    let statusCode
    let message 
    const controllerProduto = require ('./controller/controllerProduto.js')
    const dadosProdutos = await controllerProduto.listarProdutos()

    if(dadosProdutos)
    {
        statusCode = 200
        message = dadosProdutos
    }else{
        statusCode = 400
        message = MESSAGE_ERROR.NOT_FOUND_DB
    }

    response.status(statusCode)
    response.json(message)
})

//Endpoint para inserir um novo produto
app.post('/produto',cors(),jsonParser, async function(request,response){
    let statusCode
    let message 
    let headerContentType

     
     headerContentType = request.headers['content-type']
     //console.log(headerContentType);
 
    
     if(headerContentType == 'application/json'){
         let dadosBody = request.body
         
       
         if(JSON.stringify(dadosBody) != '{}')
         {
            
             const controllerProduto = require('./controller/controllerProduto.js')
            
             const novoProduto = await controllerProduto.novoProduto(dadosBody)
 
                statusCode = novoProduto.status
                message = novoProduto.message
 
         }else{
             statusCode = 400
             message = MESSAGE_ERROR.CONTENT_TYPE
         }
     }else{
         statusCode = 415
         message = MESSAGE_ERROR.CONTENT_TYPE
     }
 
     response.status(statusCode)
     response.json(message)
    
})