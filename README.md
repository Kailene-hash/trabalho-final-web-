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

## Documentação do FrontEnd
O site da Ventura 3D tem o objetivo de apresentar os estilos de design 3D e renderização do cliente. O  site possui: 

Site Público: Paginas do site que podem ser acessados por todos os interessados.
Parte do administrador: Área restrita para gerenciamento do conteúdo do site, que só pode ser acessada através de login e senha.
Backend API: Banco de dados que armazena as imagens, informações de contato do administrador e email e senha para login.

O objetivo do site é permitir que a empresa Ventura 3D exiba seu portfólio e informações de contato para alcançar mais clientes.

Funcionalidades

Site Público
1. Página Inicial (index.html)
Apresentação da empresa imagem principal com texto e 4 imagens de representação. 
2. Sobre a Empresa (sobre.html)
Algumas informações sobre a Ventura 3D e seus serviços, com mais uma imagem do trabalho da empresa. 
3. Portfólio (portfolio.html)
Galeria de imagens, apresenta imagens do trabalho da Ventura 3D, que estão presentes no banco de dados. As imagens mais recentes ficam primeiro. 
4. Contato (contato.html)
Informações de contato que estão presentes no Banco de Dados: WhatsApp, Email, Instagram, Facebook e uma imagem do trabalho da empresa.
Todas as páginas possuem header com menu e logo e o footer com as redes sociais da empresa e a logo.

Painel Administrativo
1. Sistema de Login (login.html)
Autenticação com email e senha que são consultados no banco de dados. Caso as outras páginas do administrador tentem ser acessadas sem realizar login, a página de login aparecerá.

2. Página Inicial Admin (index.html - admin)
Possui menu que permite acessar as funcionalidades: 
Gerenciar Portfólio
Gerenciar Contatos
Além disso, o header possui botão de logout para o administrador sair da página e exibe o nome do usuário cadastrado. 

3. Gerenciar Portfólio (adminport.html)
Possui uma tabela que lista todas as imagens cadastradas no banco de dados. As imagens podem ser adicionadas ou excluídas através de seus respectivos botões. Além disso, a tabela mostra a imagem e seu ID.

Inserir Imagem (inserir-imagem.html):
Através dela é possível fazer upload via Uploadcare, visualizar a imagem selecionada, comderir antes de salvar e salvar ou cancelar o upload. 

4. Gerenciar Contatos (admincontato.html)
Possui uma tabela que lista todos os contatos cadastrados, além de ser possível adicionar e excluir novos contatos após conferir. 

Inserir Contato (inserir-contato.html):
Responsável por apresentar um formulário com os campos:
Instagram
Facebook
WhatsApp
Email
E botões para salvar e cancelar

A parte pública e a parte do administrador possuem pastas Js com os arquivos que são responsáveis, respectivamente por: gerenciar o conteúdo do site - imagens e informações de contato, e exibí-las na parte pública.

Arquivos do admin:
1.login.js: responsável por gerenciar o login do administrador
2.protecao.js: responsável por impedir o acesso às páginas do administrador sem o login
3.main.js: responsável por gerenciar a página inicial do adimin
4.img.js: gerencia as imagens do portfólio, listando e as excluindo
5.inserirImg.js: responsável por gerenciar o upload e o salvamento de imagens juntamente com o Uploadcare
6.contato.js: gerenciar a parte de contato, excluir e exibir os contatos salvos
7.inserirContato.js: responsávvel por gerenciar a adição de novos contatos no BD
8.verContato.js: mostra detalhes de um contato através do ID
9.verImgs.js: mostra detalhes da imagem através do ID

Arquivos públicos
1.portfolioPublico.js: tem a função de permitir a exibição das imagens do banco de dados no portfólio público, ele busca e mostra as imagens no site público
2.contatoPublico.js: permite que as informações de contato presentes no BD sejam exibidas na parte pública de contato no site

