import Race from './Race';

export default class Orc extends Race {
  private health: number;
  static orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.health = 74;
    Orc.orcInstances += 1;
  }

  get maxLifePoints(): number {
    return this.health;
  }

  static createdRacesInstances(): number {
    return Orc.orcInstances;
  }
}
