# trabalho-final-web-
Trabalho final da disciplina de WEB
# Wakanda

### Integrantes
[comment]: <> (Gabrielly Thaila Moreira de Azevedo https://github.com/gabythaila,
Kailene Rodrigues de Souza https://github.com/Kailene-hash ,
Lívia Santos Ventura https://github.com/LivVentura,
Maria Eduarda da Silva https://github.com/dudaferrao,
Pedro Luiz Lopes Pereira https://github.com/PedroLuiz0000)

### Projeto 
Título: Site Ventura 3D

Descrição: 
A Ventura 3D é uma empresa que desenvolve ilustrações 3D realistas para empreendimentos imobiliários, construtoras, incorporadoras, studios 3D e arquitetos. O site possui o objetivo de melhorar a visibilidade
da empresa e seu contato com clientes. Através dele, espera-se que as pessoas conheçam com mais facilidade
o trabalho oferecido pela empresa e a qualidade das ilustrações.

Principais funcionalidades:
1. Apresentar o portifólio de designes da empresa.
2. Apresentar as formas de contato como WhatsApp, Instagram, telefone para que os clientes tenham um acesso mais rápido ao designer. 

Link de compartilhamento do Figma:
https://www.figma.com/design/mMbHmALlbrAnaTF3Dg2IKe/Trabalho-Wireframes?node-id=0-1&t=bVGjijHH989hQdA5-1


### Construção do projeto do Banco de Dados

Modelo Conceitual:

Link:
[modelo_conceitual](db/Conceitual_web_imagem.png)

Explicação: 

Entidade Administrador:
Essa entidade é responsável por modificar as funções fornecidas pelo site. 

Atributos do Administrador:

id_admin: É o que identifica o Administrador, sua função é especificá-lo.

email: Sua função é permitir o acesso do Administrador ao site.

senha: É o que permite a entrada no site.

Relacionamento entre o Administrador e a Imagem:

Gerencia: Esse relacionamento é responsável por demonstrar que o Administrador tem a capacidade de gerenciar, isto é, operar modificações, nas Imagens.

Entidade Imagem

É o que será acessado pelo Administrador que poderá, ou não, sofrer alterações.

Atributos da Imagem

id_imagem: É o que identifica a imagem, a especifica.

link_img: Permitirá o acesso aos links que contém as imagens, é quem as guarda.

Relacionamento entre o Administrador e o Contato

Modifica: Demonstra que o Administrador tem a capacidade de operar, ou não, alterações e modificações nas formas de contato do site.

Entidade Contato

É onde ficarão guardadas as informações de acesso aos meios de se comunicar com as formas de se conhecer com os serviços e trabalhos do site. É a parte de comunicação.

Atributos do Contato

id_contato: É o que identifica e torna o contato único.

email: Sua função é oferecer uma forma de comunicação ao site por meio de mensagens.

instagram: Oferecer uma forma de comunicação visual dentro do site.

facebook: Oferecer uma forma de contato, também visual, do site.

whatsapp: Permitir uma forma de se conectar diretamente com o responsável pelo site por meio de mensagens.


Modelo Lógico:

Link: 
[modelo_logico](db/Lógico_web_imagem.png)


Modelo Físico:

Link para arquivo DDL:
[arquivoDDL](db/DDL.sql)

Link para arquivo DML:
[arquivoDML](db/DML.sql)

