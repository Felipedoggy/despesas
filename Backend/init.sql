CREATE DATABASE IF NOT EXISTS despesasdb;
USE despesasdb;

CREATE TABLE IF NOT EXISTS despesas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(255),
  valor DECIMAL(10,2),
  tipo VARCHAR(50),
  data DATE
);
