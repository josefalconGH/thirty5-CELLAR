// Purpose: GameScene class
import Phaser from 'phaser';
import { EventBus } from '../EventBus';
import { ASSET_KEYS } from '../../common/assets';

export default class Game extends Phaser.Scene {
  private titleText!: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: 'Game',
    });
  }

  public create(): void {
    // Background

    // Text
    this.titleText = this.add
      .text(this.scale.width / 2, this.scale.height / 2, 'Game Scene', {
        fontFamily: ASSET_KEYS.FONT_PRESS_START_2P,
      })
      .setOrigin(0.5);

    this.events.emit('scene-awake');
    this.events.emit('scene-create');

    EventBus.emit('game:ready');

    this.events.on('shutdown', () => {
      EventBus.emit('game:shutdown');
    });

    this.events.on('pause', () => {
      EventBus.emit('game:pause');
    });

    this.events.on('resume', () => {
      EventBus.emit('game:resume');
    });
  }
}
