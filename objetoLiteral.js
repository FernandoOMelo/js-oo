const user = {
    nome: 'Fernando',
    email: 'f@f.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }   
};

// user.exibirInfos();

const exibir = user.exibirInfos;

const exibirNome = exibir.bind(user);

exibirNome();