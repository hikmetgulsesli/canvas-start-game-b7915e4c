// React state container for STATE_GAME_STATE and the ACT_START_GAME action binding.

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { applyActStartGame } from '../surf-play-page/act_start_game';
import { rehydrateGameState } from './prod-canvas-start-game.repo';
import { GameState } from './prod-canvas-start-game.types';

export interface GameController {
  state: GameState;
  startGame: () => void;
}

const GameControllerContext = createContext<GameController | null>(null);

export function GameStateProvider({ children }: { children?: React.ReactNode }) {
  const [state, setState] = useState<GameState>(() => rehydrateGameState());

  const startGame = useCallback(() => {
    setState((current) => applyActStartGame(current).state);
  }, []);

  const value = useMemo<GameController>(() => ({ state, startGame }), [state, startGame]);

  return <GameControllerContext.Provider value={value}>{children}</GameControllerContext.Provider>;
}

export function useGameController(): GameController {
  const value = useContext(GameControllerContext);
  if (!value) {
    throw new Error('GameStateProvider is missing');
  }
  return value;
}
