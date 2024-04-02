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
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('John Adams', 'Hamburgers', 5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/hamburgers/johnadams.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('John Kennedy', 'Hamburgers', 5.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/hamburgers/johnkennedy.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('James Madison', 'Hamburgers', 5.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/hamburgers/jamesmadison.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Barack Obama', 'Hamburgers', 6.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/hamburgers/barackobama.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Andrew Jackson', 'Hamburgers', 6.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/hamburgers/andrewjackson.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('George Washington', 'Hamburgers', 10, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/hamburgers/georgewashington.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Benjamin Franklin', 'Hamburgers', 10, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/hamburgers/benjaminfranklin.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Thomas Jefferson', 'Hamburgers', 12, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/hamburgers/thomasjefferson.jpeg');

-- giapponese
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Akira Toryama (sashimi)', 'Giapponese', 1.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/akiratoryama.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Hideo Kojima (nigiri salmone)', 'Giapponese', 2, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/hideokojima.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Iichiro Oda (nigiri tonno)', 'Giapponese', 2, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/iichirooda.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Yuki Tsunoda (tempura)', 'Giapponese', 2, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/yukitsunoda.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Auguri Suzuki (hosomaki)', 'Giapponese', 2, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/augurisuzuki.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Hidetaka Miyazaki (ramen carne)', 'Giapponese', 4.50, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/hidetakamiyazaki.webp');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Kentaro Miura (ramen gambero)', 'Giapponese', 4.50, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/kentaromiura.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Subarashi Box', 'Giapponese', 40, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/subarashibox.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Chisai Box', 'Giapponese', 20, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/chisaibox.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('salsa di soia', 'Giapponese', 0.8, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/giapponese/salsasoia.jpeg');


-- primi
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('linguine alle vongole', 'primi', 12, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/primi/linguineallevongole.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('spaghetti ai 3 pomodori', 'primi', 9, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/primi/spaghettiai3pomodori.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('pasta al ragu di cinghiale dei nebrodi', 'primi', 13, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/primi/pastaalragudichinghialedeinebrodi.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('ravioli alla provola e speck', 'primi', 10, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/primi/ravioliprovolaespack.webp');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('risotto ai frutti di mare', 'primi', 12, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/primi/risottoaifruttidimare.jpeg');

-- pizze
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Pippo Franco', 'pizze', 3.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/pippofranco.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Franco Franchi', 'pizze', 4, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/francofranchi.webp');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Gino Paoli', 'pizze', 4, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/ginopaoli.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Giordano Bruno', 'pizze', 4, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/giordanobruno.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Pedro Pascal', 'pizze', 4, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/pedropascal.webp');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Pino Daniele', 'pizze', 4.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/pinodaniele.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Alberto Angela', 'pizze', 4.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/albertoangela.webp');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Nino D’Angelo', 'pizze', 4.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/ninodangelo.webp');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Valerio Valeri', 'pizze', 5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/valeriovaleri.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Peter Gabriel', 'pizze', 5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/petergabriel.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Bridget Jones', 'pizze', 6, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/bridgetjones.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Vincenzo de luca', 'pizze', 6, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/vincenzodeluca.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Francesco De Gregori', 'pizze', 7, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/francescodegregori.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('Carla Bruni', 'pizze', 12, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/pizze/carlabruni.jpeg');

-- bevande
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('acqua minerale', 'bevande', 1, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/bevande/acquanaturale1l.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('acqua frizzante', 'bevande', 1, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/bevande/acquafrizzante1l.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('coca-cola', 'bevande', 1.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/bevande/cocacola.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('fanta', 'bevande', 1.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/bevande/fanta.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('sprite', 'bevande', 1.5, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/bevande/sprite.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('birra bionda', 'bevande', 2.50, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/bevande/birrabionda.jpg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('birra scura', 'bevande', 4, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/bevande/birrarossa.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('birra malavoglia (artigianale)', 'bevande', 6, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/bevande/birramalavoglia.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('sakè', 'bevande', 6, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/bevande/sake.jpeg');

-- starters
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('insalata', 'starters', 2, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/starters/insalata.webp');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('giro di fritti', 'starters', 7.50, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/starters/girodifritti.webp');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('misto fritto mare', 'starters', 3.50, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/starters/mistofrittomare.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('crocchè', 'starters', 3, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/starters/crocche.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('panelle', 'starters', 3, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/starters/panelle.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('patatine fritte medie', 'starters', 2.50, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/starters/patatinefrittemedie.webp');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('patatine fritte grandi', 'starters', 3.50, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/starters/patatinefrittegrandi.jpeg');
INSERT INTO menuRistorante (nome, sezione, prezzo, img) VALUES ('bruschette', 'starters', 3.50, 'https://pub-6d497e68fb18415bb1c5faff4b03c90e.r2.dev/menu/starters/bruschette.webp');