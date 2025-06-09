// Purpose: Preload assets for game
import Phaser from 'phaser';

export default class Prealoder extends Phaser.Scene {
  constructor() {
    super({
      key: 'Preload',
    });
  }

  public editorCreate(): void {
    // Background

    // Progress bar

    this.events.emit('scene-awake');
    this.events.emit('scene-create');
  }

  public preload() {
    // create preload-pack.json file
    // game assets
    this.load.pack('pack', '/assets/data/assets.json');
  }

  public create() {
    this.scene.start('Game');
  }
}
