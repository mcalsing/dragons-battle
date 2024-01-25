import Race from './Race';

export default class Dwarf extends Race {
  // atributos
  private _maxLifePoints = 80;
  private static _count = 0;

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Dwarf._count += 1;
  }

  // método
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._count;
  }
}