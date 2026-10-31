"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type AudioCtor = typeof AudioContext;

// A soft bell tone made in the browser (no audio files to load). Sound is off until
// the person turns it on, and the context is created on that click because browsers
// block audio that does not start from a tap.
export function useChime() {
  const [soundOn, setSoundOn] = useState(false);
  const soundRef = useRef(false);
  const ctx = useRef<AudioContext | null>(null);

  const unlock = useCallback(() => {
    if (!ctx.current) {
      const Ctor: AudioCtor | undefined =
        window.AudioContext ?? (window as unknown as { webkitAudioContext?: AudioCtor }).webkitAudioContext;
      if (!Ctor) return null;
      ctx.current = new Ctor();
    }
    if (ctx.current.state === "suspended") void ctx.current.resume();
    return ctx.current;
  }, []);

  const toggle = useCallback(() => {
    const next = !soundRef.current;
    soundRef.current = next;
    setSoundOn(next);
    if (next) unlock();
  }, [unlock]);

  const play = useCallback((freq = 392, seconds = 1.6) => {
    if (!soundRef.current) return;
    const c = unlock();
    if (!c) return;
    const now = c.currentTime;
    for (const [mult, level] of [[1, 0.16], [2, 0.04]] as const) {
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = "sine";
      osc.frequency.value = freq * mult;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(level, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + seconds);
      osc.connect(gain).connect(c.destination);
      osc.start(now);
      osc.stop(now + seconds + 0.05);
    }
  }, [unlock]);

  useEffect(() => () => { void ctx.current?.close(); }, []);

  return { soundOn, toggle, play };
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(q.matches);
    update();
    q.addEventListener("change", update);
    return () => q.removeEventListener("change", update);
  }, []);
  return reduced;
}
