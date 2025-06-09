// Purpose: Load assets required for preload
import { Scene } from 'phaser';

export default class Boot extends Scene {
  constructor() {
    super({
      key: 'Boot',
    });
  }

  public preload() {
    // create boot-pack.json file
    // logo, bckdrnd, keep it small
    // this.load.pack('pack', 'assets/boot-pack.json');
  }

  public create() {
    this.scene.start('Preload');
  }
}
