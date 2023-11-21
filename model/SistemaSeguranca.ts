class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senha: string = 'senhaSuperSecreta'; 
    private constructor() {}

    public static getInstancia() : SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senhaDigitada: string) : void {
        if (senhaDigitada === this.senha) {
            console.log("Senha correta. Acesso à Base Secreta Autorizado.")
        } else {
            console.log("Senha Incorreta! Acesso à Base Secreta Negado!")
        }
    }

}
    
const sistemaSeguranca = SistemaSeguranca.getInstancia();    

// Agente tenta acessar a Base Secreta com senha correta
sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta");

// Agente tenta acessar a Base Secreta com senha incorreta
sistemaSeguranca.acessarBaseSecreta("senhaIncorreta456");