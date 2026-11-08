// Types for the closed ACT_START_GAME semantic component (US-001).
// Scope: product state, persistence binding and action identity only.

export const GAME_STATE_REF = 'STATE_GAME_STATE';

export const GAME_PROGRESS_ENTITY_REF = 'ENTITY_GAME_PROGRESS';

export const HIGH_SCORE_STORAGE_KEY = 'setfarm.canvas_start_game.high_score_local_storage.v1';

export const START_GAME_ACTION_REF = 'ACT_START_GAME';

export const START_GAME_CONTROL_SLOT_REF = 'CSLOT_START_GAME_START_BUTTON';

export const START_GAME_GENERATED_ACTION_ID = 'start-game-1';

export type GamePhase = 'ready' | 'playing';

export interface GameState {
  phase: GamePhase;
  high_score: number;
}

export interface GameProgressEntity {
  HighScore: number;
}

export interface ActStartGameOutcome {
  state: GameState;
  persistedHighScore: number;
}
