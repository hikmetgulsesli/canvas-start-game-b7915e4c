// ACT_START_GAME action semantics.
// State deltas: STATE_GAME_STATE./phase = "playing", STATE_GAME_STATE./high_score = 0.
// Persistence: write PERSIST_HIGH_SCORE_LOCAL_STORAGE from STATE_GAME_STATE./high_score.
// Navigation: stay on the current route.

import { writePersistedHighScore } from '../prod-canvas-start-game/prod-canvas-start-game.repo';
import { ActStartGameOutcome, GameState } from '../prod-canvas-start-game/prod-canvas-start-game.types';

export function applyActStartGame(current: GameState): ActStartGameOutcome {
  const next: GameState = {
    ...current,
    phase: 'playing',
    high_score: 0,
  };

  writePersistedHighScore(next.high_score);

  return {
    state: next,
    persistedHighScore: next.high_score,
  };
}
