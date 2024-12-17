function User (nome, email) {
    this.nome = nome;
    this.email = email;
    this.exibirInfos = function () {
        return `O nome é: ${this.nome}, e o e-mail é: ${this.email}`;
    };
}

const usuario = new User('Fernando', 'f@f.com');
console.log(usuario.exibirInfos());