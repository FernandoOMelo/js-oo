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

const admin = {
    nome: 'Dina',
    email: 'd@d.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true,
    criarCurso: function () {
        console.log('Curso criado.');
    }    
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();