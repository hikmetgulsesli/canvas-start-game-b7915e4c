import { useEffect, useMemo, useRef } from 'react';

import { GameStateProvider, useGameController } from './features/prod-canvas-start-game/prod-canvas-start-game.store';
import { publishGameState } from './game/game-runtime';
import { PlayPageCanvasStartGame } from './screens/PlayPageCanvasStartGame';
import { installTestBridge } from './test/bridge';

function PlayPageRoute() {
  const { state, startGame } = useGameController();

  const stateRef = useRef(state);
  stateRef.current = state;
  const startGameRef = useRef(startGame);
  startGameRef.current = startGame;

  useEffect(() => {
    installTestBridge({
      getState: () => stateRef.current,
      invokeAction: () => {
        startGameRef.current();
      },
    });
  }, []);

  useEffect(() => {
    publishGameState(state);
  }, [state]);

  const actions = useMemo(() => {
    return {
      'start-game-1': () => {
        startGame();
      },
    };
  }, [startGame]);

  return (
    <PlayPageCanvasStartGame actions={actions} highScore={state.high_score} phase={state.phase} />
  );
}

export default function App() {
  return (
    <div data-testid="setfarm-app-root" className="min-h-screen bg-slate-50 text-slate-950">
      <GameStateProvider>
        <PlayPageRoute />
      </GameStateProvider>
    </div>
  );
}
