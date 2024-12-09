const {StatusCodes} = require('http-status-codes')
const NotImplemented = require('../errors/notImplemented.error')

function pingProblemController(req,res){
    return res.json({message:"Ping controller is up"})
}


function addProblem(req,res, next){
    try {
        //nothing implemented
        throw new NotImplemented('add Problem')
        
    } catch (error) {
        next(error)
    }
}

function getProblem(req,res, next){
    try {
        //nothing implemented
        throw new NotImplemented('get Problem')
        
    } catch (error) {
        next(error)
    }
}

function getProblems(req,res,next){
    try {
        //nothing implemented
        throw new NotImplemented('get Problems')
        
    } catch (error) {
        next(error)
    }
}

function updateProblem(req,res, next){
    try {
        //nothing implemented
        throw new NotImplemented('update Problem')
        
    } catch (error) {
        next(error)
    }
}

function deleteProblem(req,res){
    try {
        //nothing implemented
        throw new NotImplemented('delete Problem')
        
    } catch (error) {
        next(error)
    }
}


module.exports ={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}