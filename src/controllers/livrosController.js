
const livros = require('../models/livros');

const getAll = (req, res) => {
  const parametros = req.query
  livros.find(parametros, function (err, livros) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send(livros)
      }
  })

};

const getById = (req, res) => {
  const id = req.params.id;
  
  livros.find({ id }, function(err, livros){
    if(err) { 
      res.status(500).send({ message: err.message })
    }

    res.status(200).send(livros);
  })
};

const postLivro = (req, res) => {
  let livro = new livros(req.body)

  livro.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(livro.toJSON())
  })
  
};

const deleteLivro = (req, res) => {
  const id = req.params.id;

  livros.find({ id }, function(err, livro){
    if(livro.length > 0){
      livros.deleteMany({ id }, function(err){
        if(err) { 
          res.status(500).send({ 
            message: err.message, 
            status: "FAIL" 
           })
        }
        res.status(200).send({ 
          message: 'Livro removido com sucesso', 
          status: "SUCCESS" 
        })
      })
    }else{
      res.status(200).send({ 
        message: 'Não há livro para ser removido', 
        status: "EMPTY" 
      })
    }
  })
};


const putLivro = (req, res) => {
  const id = req.params.id;

  livros.find({ id }, function(err, livro){
    if(livro.length> 0){
      livros.updateMany({ id }, { $set : req.body }, function (err) {
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
  postLivro,
  deleteLivro,
  putLivro
};
