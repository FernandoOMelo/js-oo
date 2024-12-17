export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    };

    get nome(){
        return this.#nome;
    };

    get email(){
        return this.#email;
    };

    get nascimento(){
        return this.#nascimento;
    };

    get role(){
        return this.#role;
    };

    get ativo(){
        return this.#ativo;
    };

    set nome(nome){
        if (nome === ''){
            throw new Error('Formato do nome não é válido.\n');
        }
        this.#nome = nome;
    };

    set nascimento(nascimento){
        this.#nascimento = nascimento;
    };

    set role(role){
        this.#role = role;
    };

    set email(email){
        this.#email = email;
    };

    set ativo(ativo){
        this.#ativo = ativo;
    };

    exibirInfos() {
        if (this.role === 'estudante'){
            return `Dados estudante: ${this.nome}, ${this.email}`;
        } else if (this.role === 'admin'){
            return `Dados administrador: ${this.nome}, ${this.email}, ${this.nascimento}`;
        } else {
            return `Dados docente: ${this.nome}, ${this.email}, ${this.nascimento}, ${this.ativo}`;
        }
    };

    static exibirInfosGenericas(nome, email){
        return `${nome}, ${email}`
    };
};