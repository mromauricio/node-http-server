var async = require('async');
const express = require('express');
const router = express.Router();
let serviceInfoPaciente = require('../services/servicelInfoPaciente.js');

router.post('/', async (req, res, next) => {
  switch (await serviceInfoPaciente.DBruleInputPaciente(req.body)) {
    case 0:
        return res.status(201).send();
    case 1:
        return res.status(500).send();
    case 2:
        return res.status(406).send();
  }
});

router.put('/:id', async (req, res, next) => {
  let retorno = await serviceInfoPaciente.DBruleUpdatePaciente(req.params.id,req.body);
  switch (retorno) {
    case 0:
        return res.status(200).send();
    case 1:
        return res.status(400).send();
    case 2:
        return res.status(406).send();
  }
});

router.get('/nome', async (req, res, next) => {
  let retorno = await serviceInfoPaciente.DBruleReadPacienteNome(req.query.nome);
  switch (retorno) {  
    case 1:
        return res.status(500).send({'':''});
    case 2:
        return res.status(406).send({'':''});
    case 3:
        return res.status(404).send({"Nome buscado não existe no Banco de Dados.":""});    
    default:
        return res.status(200).send(retorno);    
  }
});


router.get('/cpf', async (req, res, next) => {
  let retorno = await serviceInfoPaciente.DBruleReadPacienteCpf(req.query.cpf);
  switch (retorno) {  
    case 1:
      return res.status(500).send({'':''});
    case 3:
        return res.status(404).send({"CPF buscado não existe no Banco de Dados.":""});    
    default:
        return res.status(200).send(retorno);    
  }
});

router.get('/cns', async (req, res, next) => {
  let retorno = await serviceInfoPaciente.DBruleReadPacienteCns(req.query.cns);
  switch (retorno) {  
    case 1:
        return res.status(500).send({'':''});
    case 3:
        return res.status(404).send({"CNS buscado não existe no Banco de Dados.":""});    
    default:
        return res.status(200).send(retorno);    
  }
});

router.get('/registro', async (req, res, next) => {
  let retorno = await serviceInfoPaciente.DBruleReadPacienteRegistro(req.query.registro);
  switch (retorno) {  
    case 1:
        return res.status(500).send({'':''});
    case 3:
        return res.status(404).send({"Registro buscado não existe no Banco de Dados.":""});    
    default:
        return res.status(200).send(retorno);    
  }
});

module.exports = router;







////// TEMP //////

router.put('/:idtemp', async (req, res, next) => {
  let retorno = await serviceInfoPaciente.DBruleUpdateCpfPaciente(req.params.id,req.body.cpf);
  switch (retorno) {
    case 0:
        return res.status(200).send();
    case 1:
        return res.status(400).send();
    case 2:
        return res.status(406).send();
  }
});

//     ARRAY DATABASE  //

// router.post('/', (req, res) => {
//   switch (serviceInfoPaciente.ruleInputPaciente(req.body)) {
//     case 0:
//         return res.status(201).send();
//     case 1:
//         return res.status(400).send();
//     case 2:
//         return res.status(406).send();
//   }
// });

// router.get('/', (req, res, next) => {
//   switch (serviceInfoPaciente.ruleReadPaciente(req.query.cpf)) {
//     case 0:
//         return res.status(200).send();
//     case 1:
//         return res.status(400).send();
//     case 2:
//         return res.status(406).send();
//   }
// });

// router.put('/:id', (req, res) => {
//   switch (serviceInfoPaciente.ruleUpdatePaciente(req.params.id,req.body.cpf)) {
//     case 0:
//         return res.status(200).send();
//     case 1:
//         return res.status(400).send();
//     case 2:
//         return res.status(406).send();
//   }
// });

