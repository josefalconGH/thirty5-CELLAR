// Purpose: Entry point for game
import Boot from './scenes/boot';
import Preload from './scenes/preload';
import Game from './scenes/game';
import Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  width: 600,
  height: 600,
  parent: 'game-container',
  backgroundColor: '#000000',
  render: {
    pixelArt: true,
    antialias: false,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [Boot, Preload, Game],
};

const game = new Phaser.Game(config);

game.scene.start('Boot');
