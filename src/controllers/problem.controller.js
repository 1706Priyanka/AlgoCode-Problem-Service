const {StatusCodes} = require('http-status-codes')

function pingProblemController(req,res){
    return res.json({message:"Ping controller is up"})
}


function addProblem(req,res){
return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: 'Not Implemented'
})
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}


module.exports ={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}