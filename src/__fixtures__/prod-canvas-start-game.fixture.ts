// Deterministic fixtures for the closed ACT_START_GAME component.

import {
  GameState,
  HIGH_SCORE_STORAGE_KEY,
  START_GAME_ACTION_REF,
  START_GAME_CONTROL_SLOT_REF,
  START_GAME_GENERATED_ACTION_ID,
} from '../features/prod-canvas-start-game/prod-canvas-start-game.types';

export const prodCanvasStartGameFixture = {
  stateRef: 'STATE_GAME_STATE',
  actionRef: START_GAME_ACTION_REF,
  controlSlotRef: START_GAME_CONTROL_SLOT_REF,
  generatedActionId: START_GAME_GENERATED_ACTION_ID,
  persistenceKey: HIGH_SCORE_STORAGE_KEY,
  initialState: {
    phase: 'ready',
    high_score: 0,
  } as GameState,
  startedState: {
    phase: 'playing',
    high_score: 0,
  } as GameState,
};

export function createProdCanvasStartGameFixture(overrides: Partial<GameState> = {}): GameState {
  return {
    ...prodCanvasStartGameFixture.initialState,
    ...overrides,
  };
}
