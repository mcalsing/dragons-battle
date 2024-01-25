import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _player2: SimpleFighter[];

  constructor(player01: Fighter, player02: SimpleFighter[]) {
    super(player01);
    this._player1 = player01;
    this._player2 = player02;
  }

  public fight() {
    for (let i = 100; i > -1; i -= 1) {
      console.log('Round:', 101 - i);
      this._player2.forEach((element) => {
        this._player1.attack(element);
        element.attack(this._player1);
        if (this._player1.lifePoints <= -1 || element.lifePoints <= -1) {
          i = -2;
        }
      });
    }
    return super.fight();
  }
}