import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _count = 0;

  constructor(name:string) {
    super(name);
    Mage._count += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._count;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}