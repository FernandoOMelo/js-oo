import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Fernando', 'f@f.com', '2024-01-01');
const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2024-01-10');
const novoDocente = new Docente('Dina', 'd@d.com', '2024-02-10');
const dadosFicticios = User.exibirInfosGenericas('Cassio', 'c@c.com');

try {
    console.log('\nExibindo informações de novo usuário criado:');
    console.log(novoUser.exibirInfos(), '\n');
    
    console.log('Exibindo informações de novo administrador criado:');
    console.log(novoAdmin.exibirInfos(), '\n');

    console.log('Exibindo nome de novo administrador criado:');
    console.log(novoAdmin.nome, '\n');

    console.log('Exibindo informações de novo docente criado:');
    console.log(novoDocente.exibirInfos(),'\n');

    console.log('Alterando o nome do novo docente para "Iara":');
    novoDocente.nome = 'Iara';

    console.log('Exibindo o novo nome do docente:');
    console.log(novoDocente.nome, '\n');

    console.log('Exibindo dados ficticios utilizando método estático: ');
    console.log(dadosFicticios);


} catch (error) {
    console.error(error.message);
}

