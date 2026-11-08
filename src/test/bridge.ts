// Test/runtime bridge installation for the browser evidence adapter.
// Contract: global __SETFARM_TEST_BRIDGE__ with method invokeAction, state bindings
// exposed at /states/STATE_GAME_STATE, and scenario mode __SETFARM_SCENARIO_MODE__.

import {
  GameState,
  GAME_STATE_REF,
  START_GAME_ACTION_REF,
  START_GAME_GENERATED_ACTION_ID,
} from '../features/prod-canvas-start-game/prod-canvas-start-game.types';

export interface TestBridgeOptions {
  getState: () => GameState;
  invokeAction: (actionRef: string) => void;
}

function resolveActionRef(action: unknown): string {
  if (typeof action === 'string') {
    return action;
  }
  if (action && typeof action === 'object') {
    const candidate = action as Record<string, unknown>;
    const value =
      candidate.actionRef ?? candidate.actionId ?? candidate.localId ?? candidate.action ?? candidate.ref;
    if (typeof value === 'string') {
      return value;
    }
  }
  return '';
}

export function installTestBridge(options: TestBridgeOptions): void {
  if (typeof window === 'undefined') {
    return;
  }

  const bridge = {
    states: { [GAME_STATE_REF]: { ...options.getState() } } as Record<string, GameState>,
    invokeAction(action: unknown): boolean {
      const actionRef = resolveActionRef(action);
      if (actionRef !== START_GAME_ACTION_REF && actionRef !== START_GAME_GENERATED_ACTION_ID) {
        return false;
      }
      options.invokeAction(actionRef);
      bridge.states[GAME_STATE_REF] = { ...options.getState() };
      return true;
    },
    getState(): GameState {
      return { ...options.getState() };
    },
  };

  window.__SETFARM_TEST_BRIDGE__ = bridge;
  window.__SETFARM_SCENARIO_MODE__ = 'manual';
}
