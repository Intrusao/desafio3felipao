class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'Flamestrike';
          break;
        case 'guerreiro':
          ataque = 'Blade rampage';
          break;
        case 'monge':
          ataque = 'Fists of fury';
          break;
        case 'ninja':
          ataque = 'Shuriken storm';
          break;
        default:
          ataque = 'atacou';
          break;
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  function strike(herois) {
    for (const heroi of herois) {
      heroi.atacar();
    }
  }
  const herois = [
    new Hero('Mago', 25, 'mago'),
    new Hero('Guerreiro', 30, 'guerreiro'),
    new Hero('Monge', 28, 'monge'),
    new Hero('Ninja', 26, 'ninja'),
  ];
  
  strike(herois);
  
  