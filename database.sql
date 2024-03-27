create table menuRistorante (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(255),
  sezione varchar(255),
  prezzo float(10, 2) UNSIGNED,
  img varchar(255),
  PRIMARY KEY (id),
  UNIQUE (nome)
);
