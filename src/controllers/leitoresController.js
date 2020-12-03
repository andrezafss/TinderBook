//apontamento do model que criamos para as Tarefas
const leitores = require('../models/leitores');

const getAll = (req, res) => {
  console.log(req.url);
  leitores.find(function(err, leitores){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(leitores);
  })
};

const getById = (req, res) => {
  const id = req.params.id;
  //Find sempre retorna uma lista
  //FindOne retorna um unico documento
  leitores.find({ id }, function(err, leitores){
    if(err) { 
      res.status(500).send({ message: err.message })
    }

    res.status(200).send(leitores);
  })
};


const postLeitor = (req, res) => {
  console.log(req.body)
  
  let leitor = new leitores(req.body)

  leitor.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(leitor.toJSON())
  })
  
};

const deleteLeitor = (req, res) => {
  const id = req.params.id;

  //deleteMany remove mais de um registro
  //deleteOne remove apenas um registro
  leitores.find({ id }, function(err, leitor){
    if(leitor.length > 0){
      leitores.deleteMany({ id }, function(err){
        if(err) { 
          res.status(500).send({ 
            message: err.message, 
            status: "FAIL" 
           })
        }
        res.status(200).send({ 
          message: 'Leitor removido com sucesso', 
          status: "SUCCESS" 
        })
      })
    }else{
      res.status(200).send({ 
        message: 'Não há leitor para ser removido', 
        status: "EMPTY" 
      })
    }
  })
};


const putLeitor = (req, res) => {
  const id = req.params.id;

  leitores.find({ id }, function(err, leitor){
    if(leitor.length> 0){
      //faz o update apenas para quem respeitar o id passado no parametro
      // set são os valores que serão atualizados
      //UpdateMany atualiza vários registros de uma unica vez
      //UpdateOne atualiza um único registro por vez
      
      leitores.updateMany({ id }, { $set : req.body }, function (err) {
        if (err) {
          res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Registro alterado com sucesso"})
      })
    }else {
      res.status(200).send({ message: "Não há registros para serem atualizados com esse id"})
    }
  })

}

module.exports = {
  getAll,
  getById,
  postLeitor,
  deleteLeitor,
  putLeitor
};
