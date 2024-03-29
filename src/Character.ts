import Archetype, { Mage, Ranger } from './Archetypes';
import Race, { Elf } from './Races';
import Fighter, { SimpleFighter } from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _lifePoints: number;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Ranger(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this.archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;

    if (damage > 0) {
      this._lifePoints -= damage;
      console.log(`${this._name} levou ${damage} de dano, ficando com ${this._lifePoints} de vida`);
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
      console.log(`${this._name} levou 1 de dano, ficando com ${this._lifePoints} de vida`);
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
      console.log(`${this._name} perdeu o combate!`);
    }
    return this._lifePoints;
  }

  public attack(enemy: Fighter | SimpleFighter): void {
    // console.log(`${this._name}: hp:${this._lifePoints} str:${this._strength}`);
    enemy.receiveDamage(this.strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}
