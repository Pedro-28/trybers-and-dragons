import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private enemies: Array<Fighter | SimpleFighter>,
  ) {
    super(player);
  }

  fight(): number {
    this.enemies.forEach((enemy) => {
      while (this.player.lifePoints !== -1 && enemy.lifePoints !== -1) {
        this.player.attack(enemy);
        enemy.attack(this.player);
      }
    });

    return super.fight();
  }
}