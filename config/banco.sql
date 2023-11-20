


CREATE table Produto(
 id int NOT NULL AUTO_INCREMENT,
 nome varchar(30),
 email varchar(189),
 endereco varchar(189),
 item varchar(207),
 tamanho varchar(255),
 PRIMARY KEY(ID)

);

insert into Produto(id,nome,email,endereco,item,tamanho)
 Values ("0","jail","jai@gmail.com","rua direita","meia","pp");
 insert into Produto(id,nome,email,endereco,item,tamanho)
 Values ("4","jaildes","jai@gmail.com","vire de novo","fardamento","g");

 SELECT * FROM Produto;
 