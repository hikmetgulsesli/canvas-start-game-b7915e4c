// Runtime state bridge for the browser evidence adapter.
// Publishes the live STATE_GAME_STATE value at the bound state pointer
// /states/STATE_GAME_STATE on the __SETFARM_TEST_BRIDGE__ global.

import { GameState, GAME_STATE_REF } from '../features/prod-canvas-start-game/prod-canvas-start-game.types';

export interface SetfarmTestBridge {
  states: Record<string, GameState>;
  invokeAction: (action: unknown) => boolean;
  getState: () => GameState;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
    __SETFARM_SCENARIO_MODE__?: string;
  }
}

export function publishGameState(state: GameState): void {
  if (typeof window === 'undefined') {
    return;
  }
  const bridge = window.__SETFARM_TEST_BRIDGE__;
  if (!bridge) {
    return;
  }
  bridge.states = bridge.states ?? {};
  bridge.states[GAME_STATE_REF] = { ...state };
}
