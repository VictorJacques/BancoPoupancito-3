class Conta {
  #senha;
  constructor(saldo, senha) {
    this.saldo = saldo;
    this.#senha = senha;
  }
  deposito() {
    let toDeposit = parseFloat(prompt("Qual valor gostaria de depositar"));
    if (prompt("Qual a sua senha?") == this.#senha) {
      this.saldo += toDeposit;
      console.log(this.saldo);
    } else {
      alert("Senha inválida!");
    }
  }
  retirada(money) {
    let toWithdrawl = parseFloat(prompt("Qual valor gostaria de retirar?"));
    if (
      prompt("Qual a sua senha?") == this.#senha &&
      toWithdrawl <= this.saldo
    ) {
      this.saldo -= toWithdrawl;
      console.log(this.saldo);
    } else {
      alert("Senha inválida ou valor invalido!");
    }
  }
  trocarSenha(novaSenha) {
    this.#senha = novaSenha;
  }
}

class ContaPoupança extends Conta {
  constructor(saldo, senha, deposito, retirada) {
    super(saldo, senha, deposito, retirada);
  }
  atualizaJuros() {
    return (this.saldo += this.saldo * 0.007);
  }
}

class PoupançaPremium extends ContaPoupança {
  constructor(saldo, senha, deposito, retirada) {
    super(saldo, senha, deposito, retirada);
  }
  atualizaJuros() {
    return (this.saldo += this.saldo * 0.012);
  }
}

const contaPoupançaPremium = new PoupançaPremium(100, 1234);
contaPoupançaPremium.deposito();
contaPoupançaPremium.retirada();
contaPoupançaPremium.atualizaJuros();

console.log(contaPoupançaPremium.saldo);
