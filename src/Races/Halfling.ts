import Race from './Race';

export default class Halfling extends Race {
  private health: number;
  static halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.health = 60;
    Halfling.halflingInstances += 1;
  }

  get maxLifePoints(): number {
    return this.health;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingInstances;
  }
}
