// Purpose: GameScene class
import * as Phaser from 'phaser';
import { SCENE_KEYS } from './scene-keys';
import { ASSET_KEYS } from '../common/assets';

export class GameScene extends Phaser.Scene {
  private titleText!: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: SCENE_KEYS.GAME_SCENE,
    });
  }

  public create(): void {
    this.titleText = this.add
      .text(this.scale.width / 2, this.scale.height / 2, 'Game Scene', {
        fontFamily: ASSET_KEYS.FONT_PRESS_START_2P,
      })
      .setOrigin(0.5);

    this.scale.on('resize', this.resize, this);
  }

  private resize(gameSize: Phaser.Structs.Size): void {
    const { width, height } = gameSize;

    if (this.titleText) {
      this.titleText.setPosition(width / 2, height / 2);
    }
  }
}
