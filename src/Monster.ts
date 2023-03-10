import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const health = this._lifePoints - attackPoints;

    this._lifePoints = health <= 0 ? -1 : health;

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this._strength);
  }
}