// Browser-origin persistence repository for PERSIST_HIGH_SCORE_LOCAL_STORAGE.
// Authority: AUTH_DATA_BROWSER_ORIGIN, key setfarm.canvas_start_game.high_score_local_storage.v1.

import { GameState, HIGH_SCORE_STORAGE_KEY } from './prod-canvas-start-game.types';

function storage(): Storage | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return null;
    }
    return window.localStorage;
  } catch {
    return null;
  }
}

export function readPersistedHighScore(): number | null {
  const store = storage();
  if (!store) {
    return null;
  }
  try {
    const raw = store.getItem(HIGH_SCORE_STORAGE_KEY);
    if (raw === null) {
      return null;
    }
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writePersistedHighScore(value: number): void {
  const store = storage();
  if (!store) {
    return;
  }
  try {
    store.setItem(HIGH_SCORE_STORAGE_KEY, String(value));
  } catch {
    // Persistence failures must not break the action surface.
  }
}

// Rehydration kind: initialization.
export function rehydrateGameState(): GameState {
  const persisted = readPersistedHighScore();
  return {
    phase: 'ready',
    high_score: persisted === null ? 0 : persisted,
  };
}
