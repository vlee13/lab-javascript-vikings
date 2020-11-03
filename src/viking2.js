// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    //super takes from Soldier constructor this.health=health && this.strength=strength
    super(health, strength);
    this.name = name;
  }

  receiveDamage = (damage) => {
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  };

  battleCry = () => {};
}

// Saxon
class Saxon {}

// War
class War {}
