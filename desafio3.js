class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia de fogo ';
          break;
        case 'guerreiro':
          ataque = 'espada sagrada';
          break;
        case 'monge':
          ataque = 'golpe do dragão';
          break;
        default:
          ataque = 'atacou';
      }

      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  let meuHeroi = new Hero('Kbhral', 1000, 'mago');
  meuHeroi.atacar();
  
  let outroHeroi = new Hero('Arthur', 45, 'guerreiro');
  outroHeroi.atacar();

  let outroHero1 = new Hero('Bryan', 100, 'monge');
  outroHero1.atacar();

  
  
