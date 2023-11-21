"use strict";
/*class SistemaSeguranca {
    private static senha: SistemaSeguranca;
    private static instance: SistemaSeguranca;

    private constructor() {
        
    }
    public static getInstance() : SistemaSeguranca {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }
    public static acessarBaseSecreta(): void {
        const sistemaSeguranca = 'ceu';
        if (!sistemaSeguranca) {
            console.log ('Acesso Negado!')
        } else {
            console.log ('Acesso Permitido!')
        }
    }
}
//export default SistemaSeguranca.acessarBaseSecreta()

const db1 = SistemaSeguranca.getInstance()
const db2 = SistemaSeguranca.acessarBaseSecreta();
//const db3 = SistemaSeguranca.acessarBaseSecreta;
console.log(db1)
//console.log(db2)*/
class SistemaSeguranca {
    constructor() {
        this.senha = 'senhasupersecreta';
    }
    static getInstancia() {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }
    acessarBaseSecreta(senhaDigitada) {
        if (senhaDigitada === this.senha) {
            console.log("Senha correta. Acesso à Base Secreta Autorizado.");
        }
        else {
            console.log("Senha Incorreta! Acesso à Base Secreta Negado!");
        }
    }
}
SistemaSeguranca.instancia = null;
const sistemaSeguranca = SistemaSeguranca.getInstancia();
