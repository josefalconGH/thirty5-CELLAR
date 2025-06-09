// Purpose: Event bus
import { Events } from 'phaser';

// This event bus contains:
// - Game events
// - UI events
// - Global events
// - etc.
export const EventBus = new Events.EventEmitter();
