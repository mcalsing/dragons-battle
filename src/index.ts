import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character('Thors');
const player2 = new Character('Thorfinn');
const player3 = new Character('Thorkell');

// console.log(player1);
// console.log(player2.race);
// console.log(player3.race);

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

player3.levelUp();
player3.levelUp();
player3.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player1, player3);
const pve = new PVE(player1, [monster1, monster2]);

console.log(`${player1.race.name} - hp: ${player1.lifePoints}, str: ${player1.strength}, def: ${player1.defense} `);
// console.log('------Combatente 2------');
console.log(`${player3.race.name} - hp: ${player3.lifePoints}, str: ${player3.strength}, def: ${player3.defense} `);
// pvp.fight();
// console.log(pve);

pve.fight();

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => { battle.fight(); });
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };