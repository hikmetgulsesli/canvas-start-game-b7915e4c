// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-game-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };
  /** Live high score value bound to OBS_START_GAME_CURRENT_HIGH_SCORE_VALUE. */
  highScore?: number;
  /** Live phase of STATE_GAME_STATE. */
  phase?: "ready" | "playing";
}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions, highScore, phase }: PlayPageCanvasStartGameProps) {
  const boundHighScore = typeof highScore === "number" && Number.isFinite(highScore) ? highScore : 0;
  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_STABILITY">
          {/* Non-actionable Header Bar */}
          <div className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
                C
              </div>
              <div>
                <h1 className="text-base font-semibold tracking-wide text-white">Canvas Game Studio</h1>
                <p className="text-xs text-slate-400">Standard Arcade Environment</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Session:</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">/play</span>
              </div>
            </div>
          </div>
      
          {/* Main Workspace */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-6 flex flex-col gap-6">
            {/* Status & Stats Toolbar (Non-actionable) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* High Score Status Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">High Score</div>
                  <div className="text-2xl font-bold font-mono text-amber-400 mt-1" data-setfarm-element-ref="E000002" role="status" aria-label="Current high score" data-observable-refs="OBS_START_GAME_CURRENT_HIGH_SCORE_VALUE" data-value={String(boundHighScore)}>{boundHighScore}</div>
                </div>
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-mono text-sm">
                  TOP
                </div>
              </div>
      
              {/* Game Status Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">System State</div>
                  <div className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-2" data-setfarm-element-ref="E000003" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_GAME_STARTED_TEXT" data-value={phase === "playing" ? "playing" : "ready"}>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Game started
                  </div>
                </div>
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-mono">
                  RUN
                </div>
              </div>
      
              {/* Controls Card (Hosts the exact Start Game button) */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Engine Control</div>
                  <div className="text-xs text-slate-400 mt-1">Ready for user dispatch</div>
                </div>
                <div>
                  <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-md shadow-indigo-600/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABILITY" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                    Start Game
                  </button>
                </div>
              </div>
            </div>
      
            {/* Contained Surface: SURF_GAME_CANVAS */}
            <div data-surface-id="SURF_GAME_CANVAS" className="flex-1 min-h-[460px] bg-slate-950 border border-slate-800 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center shadow-inner" data-setfarm-element-ref="E000005">
              {/* Visual Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      
              {/* Canvas Center Display */}
              <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 shadow-xl">
                  <div className="w-6 h-6 border-2 border-indigo-400 rounded"></div>
                </div>
                <h2 className="text-lg font-semibold text-slate-200">Interactive Canvas Surface</h2>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  The active rendering viewport is ready. High scores and game events are tracked on route /play.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                  <span>Surface: SURF_GAME_CANVAS</span>
                </div>
              </div>
      
              {/* Coordinates Corner Indicators */}
              <div className="absolute bottom-3 left-4 text-[11px] font-mono text-slate-600 pointer-events-none select-none">
                X: 000 | Y: 000
              </div>
              <div className="absolute bottom-3 right-4 text-[11px] font-mono text-slate-600 pointer-events-none select-none">
                Viewport: 100% Active
              </div>
            </div>
          </main>
      
          {/* Footer Information (Non-actionable) */}
          <footer className="border-t border-slate-800/80 bg-slate-900/40 px-6 py-3 text-center text-xs text-slate-500">
            Canvas Start Game — Route: /play
          </footer>
        </div>
    </>
  );
}
