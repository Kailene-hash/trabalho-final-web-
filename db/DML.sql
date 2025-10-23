INSERT INTO administrador(email, senha) VALUES
('admin1@email.com', 'senha567');

INSERT INTO contato(instagram, facebook, whatsapp, email, fk_id_admin) VALUES
('@admin', 'facebook.com/admin1', '212234566123', 'contato@email.com', 1);

INSERT INTO imagem(link_img, fk_id_admin) VALUES
('images/ImgPort1-WEB.jpeg',1),
('images/ImgPort2-WEB.jpeg',2),
('images/ImgPort3-WEB.jpeg',3);
