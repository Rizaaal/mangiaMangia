-- drop table menuRistorante;
create table menuRistorante (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(255),
  sezione varchar(255),
  prezzo float(10, 2) UNSIGNED,
  img varchar(255),
  PRIMARY KEY (id),
  UNIQUE (nome)
);

-- hamburgers
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('John Adams', 'Hamburgers', 5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('John Kennedy', 'Hamburgers', 5.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('James Madison', 'Hamburgers', 5.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Barack Obama', 'Hamburgers', 6.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Andrew Jackson', 'Hamburgers', 6.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('George Washington', 'Hamburgers', 10, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Benjamin Franklin', 'Hamburgers', 10, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Thomas Jefferson', 'Hamburgers', 12, '');

-- giapponese
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Akira Toryama (sashimi)', 'Giapponese', 1.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Hideo Kojima (nigiri salmone)', 'Giapponese', 2, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Iichiro Oda (nigiri tonno)', 'Giapponese', 2, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Yuki Tsunoda (tempura)', 'Giapponese', 2, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Auguri Suzuki (hosomaki)', 'Giapponese', 2, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Hidetaka Miyazaki (ramen carne)', 'Giapponese', 4.50, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Kentaro Miura (ramen gambero)', 'Giapponese', 4.50, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Subarashi Box', 'Giapponese', 40, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Chisai Box', 'Giapponese', 20, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('salsa di soia', 'Giapponese', 0.8, '');


-- primi
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('linguine alle vongole', 'primi', 12, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('spaghetti ai 3 pomodori', 'primi', 9, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('pasta al ragu di cinghiale dei nebrodi', 'primi', 13, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('ravioli alla provola e speck', 'primi', 10, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('risotto ai frutti di mare', 'primi', 12, '');

-- pizze
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Pippo Franco', 'pizze', 3.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Franco Franchi', 'pizze', 4, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Gino Paoli', 'pizze', 4, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Giordano Bruno', 'pizze', 4, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Pedro Pascal', 'pizze', 4, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Pino Daniele', 'pizze', 4.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Alberto Angela', 'pizze', 4.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Nino D’Angelo', 'pizze', 4.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Valerio Valeri', 'pizze', 5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Peter Gabriel', 'pizze', 5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Bridget Jones', 'pizze', 6, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Vincenzo de luca', 'pizze', 6, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Francesco De Gregori', 'pizze', 7, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Carla Bruni', 'pizze', 12, '');

-- bevande
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('acqua minerale', 'bevande', 1, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('acqua frizzante', 'bevande', 1, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('coca-cola', 'bevande', 1.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('fanta', 'bevande', 1.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('sprite', 'bevande', 1.5, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('birra bionda', 'bevande', 2.50, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('birra scura', 'bevande', 4, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('birra malavoglia (artigianale)', 'bevande', 6, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('sakè', 'bevande', 6, '');

-- starters
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('insalata', 'starters', 2, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('giro di fritti', 'starters', 7.50, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('misto fritto mare', 'starters', 3.50, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('crocchè', 'starters', 3, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('panelle', 'starters', 3, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('patatine fritte medie', 'starters', 2.50, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('patatine fritte grandi', 'starters', 3.50, '');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('bruschette', 'starters', 3.50, '');