import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _count = 0;

  constructor(name:string) {
    super(name);
    Necromancer._count += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._count;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}