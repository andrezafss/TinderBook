
const leitores = require('../models/leitores');

const getAll = (req, res) => {
  const parametros = req.query
  leitores.find(parametros, function (err, leitores) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send(leitores)
      }
  })

};

const getById = (req, res) => {
  const id = req.params.id;
   leitores.find({ id }, function(err, leitores){
    if(err) { 
      res.status(500).send({ message: err.message })
    }

    res.status(200).send(leitores);
  })
};


const postLeitor = (req, res) => {
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
