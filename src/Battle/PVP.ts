import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player01: Fighter, player02: Fighter) {
    super(player01);
    this._player1 = player01;
    this._player2 = player02;
  }

  public fight(): number {
    for (let i = 100; i > -1; i -= 1) {
      console.log('Round:', 101 - i);
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);

      if (this._player1.lifePoints === -1 || this._player2.lifePoints === -1) {
        i = -2;
      }
    }
    return super.fight();
  }
}