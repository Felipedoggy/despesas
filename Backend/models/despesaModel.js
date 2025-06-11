let despesas = []; // Simples array para teste rápido

exports.getAll = (req, res) => {
  res.json(despesas);
};

exports.create = (req, res) => {
  const { descricao, valor, tipo, data } = req.body;
  const id = despesas.length + 1;
  const novaDespesa = { id, descricao, valor, tipo, data };
  despesas.push(novaDespesa);
  res.status(201).json(novaDespesa);
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  despesas = despesas.filter(d => d.id !== id);
  res.status(204).send();
};
exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const { descricao, valor, tipo, data } = req.body;
  const index = despesas.findIndex(d => d.id === id);
  
  if (index !== -1) {
    despesas[index] = { id, descricao, valor, tipo, data };
    res.json(despesas[index]);
  } else {
    res.status(404).send("Despesa não encontrada");
  }
};
exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const despesa = despesas.find(d => d.id === id);
  
  if (despesa) {
    res.json(despesa);
  } else {
    res.status(404).send("Despesa não encontrada");
  }
};
