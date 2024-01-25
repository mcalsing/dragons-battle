import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _count = 0;

  constructor(name:string) {
    super(name);
    Warrior._count += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._count;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}