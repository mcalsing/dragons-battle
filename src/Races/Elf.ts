import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _count = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Elf._count += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._count;
  }
}