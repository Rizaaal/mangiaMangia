create table menuRistorante (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(255),
  cucina varchar(255),
  prezzo float(10, 2) UNSIGNED,
  PRIMARY KEY (id),
  UNIQUE (nome)
);