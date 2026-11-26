"use client";

import { useRef, useCallback, useEffect } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

interface ViewTransitionLike {
  ready: Promise<void>;
  finished: Promise<void>;
  skipTransition: () => void;
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => ViewTransitionLike;
};

const IMPACT_DELAY_MS = 120;
const WAVE_DURATION_MS = 1750;
const KEYFRAME_COUNT = 48;
const WAVE_POINTS = 96;

/** Steady, smooth water wave propagation speed so the middle wave sweep stays clearly visible */
function easeWaterSpread(t: number): number {
  return 1 - Math.pow(1 - t, 1.4);
}

/** Organic harmonic contour perturbation matching fluid wave surface */
function computeCrestOffset(
  theta: number,
  t: number,
  maxAmp: number
): number {
  const envelope = Math.sin(Math.PI * Math.min(t * 1.04, 1));
  const harmonic =
    0.52 * Math.sin(7 * theta + t * 8.0) +
    0.32 * Math.cos(11 * theta - t * 10.5) +
    0.16 * Math.sin(17 * theta + t * 5.5);
  return envelope * maxAmp * harmonic;
}

function buildWavePolygon(
  cx: number,
  cy: number,
  endRadius: number,
  t: number
): string {
  const p = easeWaterSpread(t);
  const baseR = p * (endRadius + 130);
  const maxAmp = Math.min(34, endRadius * 0.032);
  const pts: string[] = [];

  for (let i = 0; i < WAVE_POINTS; i++) {
    const theta = (i / WAVE_POINTS) * Math.PI * 2;
    const r = Math.max(0, baseR + computeCrestOffset(theta, t, maxAmp));
    const px = (cx + r * Math.cos(theta)).toFixed(1);
    const py = (cy + r * Math.sin(theta)).toFixed(1);
    pts.push(`${px}px ${py}px`);
  }

  return `polygon(${pts.join(",")})`;
}

/**
 * Generates smooth 96-point harmonic clip-path keyframes for ::view-transition-new(root)
 * so the theme switch rolls inside the bending radial capillary-gravity wave packet.
 */
function generateLiquidClipKeyframes(
  cx: number,
  cy: number,
  endRadius: number
): Keyframe[] {
  const frames: Keyframe[] = [];
  for (let k = 0; k <= KEYFRAME_COUNT; k++) {
    const t = k / KEYFRAME_COUNT;
    frames.push({
      clipPath: buildWavePolygon(cx, cy, endRadius, t),
    });
  }
  return frames;
}

/** Builds hidden SVG <filter> backed by an <feImage> normal map + <feDisplacementMap> */
function createRadialWaterSvgFilter(
  vw: number,
  vh: number
): {
  svg: SVGSVGElement;
  feImage: SVGFEImageElement;
  displacement: SVGFEDisplacementMapElement;
} {
  document.getElementById("theme-water-svg-defs")?.remove();

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.id = "theme-water-svg-defs";
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.setAttribute("aria-hidden", "true");
  svg.style.position = "fixed";
  svg.style.pointerEvents = "none";

  const defs = document.createElementNS(svgNS, "defs");
  const filter = document.createElementNS(svgNS, "filter");
  filter.setAttribute("id", "water-surface-bend");
  filter.setAttribute("filterUnits", "userSpaceOnUse");
  filter.setAttribute("x", "0");
  filter.setAttribute("y", "0");
  filter.setAttribute("width", `${vw}`);
  filter.setAttribute("height", `${vh}`);
  filter.setAttribute("color-interpolation-filters", "sRGB");

  const feImage = document.createElementNS(svgNS, "feImage");
  feImage.setAttribute("x", "0");
  feImage.setAttribute("y", "0");
  feImage.setAttribute("width", `${vw}`);
  feImage.setAttribute("height", `${vh}`);
  feImage.setAttribute("preserveAspectRatio", "none");
  feImage.setAttribute("result", "normalMap");

  const displacement = document.createElementNS(svgNS, "feDisplacementMap");
  displacement.setAttribute("in", "SourceGraphic");
  displacement.setAttribute("in2", "normalMap");
  displacement.setAttribute("scale", "42");
  displacement.setAttribute("xChannelSelector", "R");
  displacement.setAttribute("yChannelSelector", "G");

  filter.appendChild(feImage);
  filter.appendChild(displacement);
  defs.appendChild(filter);
  svg.appendChild(defs);
  document.body.appendChild(svg);

  return { svg, feImage, displacement };
}

export function useWaveTheme() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const activeTransitionRef = useRef<ViewTransitionLike | null>(null);
  const delayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  const cleanupEffects = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    document.querySelectorAll(".theme-water-canvas").forEach((el) => el.remove());
    document.getElementById("theme-water-svg-defs")?.remove();
    document.documentElement.removeAttribute("data-theme-transitioning");
    document.documentElement.removeAttribute("data-wave-bending");
  }, []);

  useEffect(() => {
    return () => {
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
      cleanupEffects();
    };
  }, [cleanupEffects]);

  const currentTheme = resolvedTheme || theme || "dark";

  /** Initial stone crater + rebound Worthington micro-ripple right under clicked button */
  const launchImpactSplash = useCallback(
    (x: number, y: number, nextTheme: string) => {
      const canvas = document.createElement("canvas");
      canvas.className = "theme-water-canvas theme-water-splash-canvas";
      canvas.setAttribute("aria-hidden", "true");

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      canvas.width = vw * dpr;
      canvas.height = vh * dpr;
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      document.body.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      const isToDark = nextTheme === "dark";
      const glintColor = isToDark
        ? "rgba(224, 242, 254, 0.95)"
        : "rgba(37, 99, 235, 0.78)";
      const shadowColor = isToDark
        ? "rgba(2, 6, 23, 0.7)"
        : "rgba(15, 23, 42, 0.25)";
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / 500, 1);
        ctx.clearRect(0, 0, vw, vh);

        // Crater rim expanding + central rebound droplet pulse
        const r = 3 + easeWaterSpread(t) * 56;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = shadowColor;
        ctx.globalAlpha = (1 - t) * 0.65;
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, Math.max(1, r - 2), 0, Math.PI * 2);
        ctx.strokeStyle = glintColor;
        ctx.globalAlpha = (1 - t) * 0.92;
        ctx.lineWidth = 2.2;
        ctx.stroke();

        // Central Worthington jet rebound pulse at t ~ 0.25..0.6
        if (t > 0.15 && t < 0.7) {
          const reboundT = (t - 0.15) / 0.55;
          const rbR = 2 + reboundT * 24;
          ctx.beginPath();
          ctx.arc(x, y, rbR, 0, Math.PI * 2);
          ctx.strokeStyle = glintColor;
          ctx.globalAlpha = Math.sin(reboundT * Math.PI) * 0.75;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        ctx.restore();

        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          canvas.remove();
        }
      };

      requestAnimationFrame(tick);
    },
    []
  );

  /**
   * Synchronizes:
   * 1) Real radial capillary-gravity normal map feeding SVG feDisplacementMap (bends actual website!)
   * 2) HD Canvas specular crest glints & trough shadows matching the exact optical wave ridges
   */
  const launchSynchronizedWater = useCallback(
    (
      x: number,
      y: number,
      endRadius: number,
      nextTheme: string,
      feImage: SVGFEImageElement,
      displacement: SVGFEDisplacementMapElement
    ) => {
      document.querySelectorAll(".theme-water-wave-canvas").forEach((el) => el.remove());
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Offscreen normal map canvas (1/4 resolution -> smooth optical curves without block artifacts)
      const scaleDown = 4;
      const nw = Math.max(96, Math.round(vw / scaleDown));
      const nh = Math.max(64, Math.round(vh / scaleDown));
      const normCanvas = document.createElement("canvas");
      normCanvas.width = nw;
      normCanvas.height = nh;
      const normCtx = normCanvas.getContext("2d");
      const imgData = normCtx ? normCtx.createImageData(nw, nh) : null;
      const nxCenter = x / scaleDown;
      const nyCenter = y / scaleDown;

      // Foreground Retina canvas for crisp optical light caustics, specular glints, and troughs
      const canvas = document.createElement("canvas");
      canvas.className = "theme-water-canvas theme-water-wave-canvas";
      canvas.setAttribute("aria-hidden", "true");
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = vw * dpr;
      canvas.height = vh * dpr;
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      document.body.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      const isToDark = nextTheme === "dark";
      const specularWhite = isToDark
        ? "rgba(224, 242, 254, 0.9)"
        : "rgba(255, 255, 255, 0.96)";
      const crestCyan = isToDark
        ? "rgba(56, 189, 248, 0.45)"
        : "rgba(37, 99, 235, 0.28)";
      const troughDark = isToDark
        ? "rgba(2, 6, 23, 0.68)"
        : "rgba(15, 23, 42, 0.24)";

      const targetR = endRadius + 130;
      const startTs = performance.now();

      const renderFrame = (now: number) => {
        const elapsed = now - startTs;
        const t = Math.min(elapsed / WAVE_DURATION_MS, 1);
        const p = easeWaterSpread(t);
        const mainR = p * targetR;
        const fadeOut = t > 0.85 ? Math.max(0, 1 - (t - 0.85) / 0.15) : 1;

        // A) Compute real radial wave heightmap gradient -> SVG normal map (bends actual website pixels!)
        if (normCtx && imgData) {
          const buf = imgData.data;
          const mainSmallR = mainR / scaleDown;
          const ampTime = Math.sin(Math.PI * Math.min(t * 1.02, 1));

          for (let py = 0; py < nh; py++) {
            const dy = py - nyCenter;
            for (let px = 0; px < nw; px++) {
              const dx = px - nxCenter;
              const d = Math.hypot(dx, dy);
              const idx = (py * nw + px) * 4;

              if (d < 0.5) {
                buf[idx] = 128;
                buf[idx + 1] = 128;
                buf[idx + 2] = 128;
                buf[idx + 3] = 255;
                continue;
              }

              // Smooth dispersive wave slope without abrupt kink at deltaPx = 0
              const deltaPx = (d - mainSmallR) * scaleDown;
              const sigma = deltaPx > 0 ? 52 : 98;
              const env = Math.exp(-(deltaPx * deltaPx) / (2 * sigma * sigma));
              const k = 0.14;
              const slope = Math.cos(k * deltaPx) * env * ampTime;

              const ux = dx / d;
              const uy = dy / d;

              buf[idx] = Math.max(0, Math.min(255, Math.round(128 + slope * ux * 105)));
              buf[idx + 1] = Math.max(0, Math.min(255, Math.round(128 + slope * uy * 105)));
              buf[idx + 2] = 128;
              buf[idx + 3] = 255;
            }
          }

          normCtx.putImageData(imgData, 0, 0);
          feImage.setAttribute("href", normCanvas.toDataURL("image/png"));
          displacement.setAttribute("scale", (28 * fadeOut).toFixed(1));
        }

        // B) Paint Optical Caustic Glints & Concentric 3D Water Wave Shadows aligned to the exact wave packet
        ctx.clearRect(0, 0, vw, vh);

        // Capillary micro-ripples racing just ahead of main crest + rolling gravity ripples behind
        const waveBands = [
          // Leading fine capillary micro-ripples (bright tight surface tension glints ahead)
          { offset: 48, lineW: 1.4, crestAlpha: 0.35, troughAlpha: 0.14 },
          { offset: 28, lineW: 2.0, crestAlpha: 0.55, troughAlpha: 0.25 },
          // Main primary gravity crest right where Old -> New theme shifts!
          { offset: 0, lineW: 3.4, crestAlpha: 0.88, troughAlpha: 0.62, glowBand: 36 },
          // Trailing slower gravity wave troughs/crests
          { offset: -44, lineW: 2.6, crestAlpha: 0.62, troughAlpha: 0.45, glowBand: 20 },
          { offset: -94, lineW: 2.0, crestAlpha: 0.4, troughAlpha: 0.28 },
          { offset: -148, lineW: 1.5, crestAlpha: 0.22, troughAlpha: 0.16 },
        ];

        waveBands.forEach((band) => {
          const r = mainR + band.offset;
          if (r <= 4) return;

          ctx.save();
          if (band.glowBand) {
            const inner = Math.max(0, r - band.glowBand);
            const outer = r + band.glowBand;
            const g = ctx.createRadialGradient(x, y, inner, x, y, outer);
            g.addColorStop(0, "rgba(0,0,0,0)");
            g.addColorStop(0.32, troughDark);
            g.addColorStop(0.54, crestCyan);
            g.addColorStop(0.7, specularWhite);
            g.addColorStop(0.88, troughDark);
            g.addColorStop(1, "rgba(0,0,0,0)");
            ctx.globalAlpha = 0.52 * fadeOut;
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, vw, vh);
          }

          // Outer dark trough curve (follows harmonic contour when near primary wave)
          const harmonicAmp =
            band.offset === 0
              ? Math.min(34, endRadius * 0.032)
              : Math.min(18, endRadius * 0.018);

          const traceWaveBand = (radiusOffset: number) => {
            ctx.beginPath();
            for (let i = 0; i <= WAVE_POINTS; i++) {
              const theta = ((i % WAVE_POINTS) / WAVE_POINTS) * Math.PI * 2;
              const wr = Math.max(
                0,
                r + radiusOffset + computeCrestOffset(theta, t, harmonicAmp)
              );
              const px = x + wr * Math.cos(theta);
              const py = y + wr * Math.sin(theta);
              if (i === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
          };

          traceWaveBand(band.lineW * 1.8);
          ctx.strokeStyle = troughDark;
          ctx.globalAlpha = band.troughAlpha * fadeOut;
          ctx.lineWidth = band.lineW * 3.0;
          ctx.stroke();

          // Bright specular converging-lens crest line
          traceWaveBand(0);
          ctx.strokeStyle = specularWhite;
          ctx.globalAlpha = band.crestAlpha * fadeOut;
          ctx.lineWidth = band.lineW;
          ctx.stroke();
          ctx.restore();
        });

        // Subtle standing center oscillation ripple while wave packet expands
        if (t > 0.08 && t < 0.55) {
          const oscT = (t - 0.08) / 0.47;
          const oscR = easeWaterSpread(oscT) * 78;
          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, oscR, 0, Math.PI * 2);
          ctx.strokeStyle = specularWhite;
          ctx.globalAlpha = Math.sin(oscT * Math.PI) * 0.45;
          ctx.lineWidth = 1.6;
          ctx.stroke();
          ctx.restore();
        }

        if (t < 1) {
          rafRef.current = requestAnimationFrame(renderFrame);
        } else {
          displacement.setAttribute("scale", "0");
          canvas.remove();
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(renderFrame);
    },
    []
  );

  const toggleThemeWithWave = useCallback(
    (event?: React.MouseEvent<HTMLElement>) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
        delayTimerRef.current = null;
      }
      if (activeTransitionRef.current) {
        try {
          activeTransitionRef.current.skipTransition();
        } catch {
          // Ignore finished transitions
        }
        activeTransitionRef.current = null;
      }
      cleanupEffects();

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const doc = document as DocumentWithViewTransition;

      if (prefersReducedMotion || typeof doc.startViewTransition !== "function") {
        setTheme(nextTheme);
        return;
      }

      // Resolve exact stone-drop center coordinates
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;

      if (event?.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      } else {
        const switcherEl = document.querySelector("[data-theme-switcher]");
        if (switcherEl) {
          const rect = switcherEl.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            x = rect.left + rect.width / 2;
            y = rect.top + rect.height / 2;
          }
        }
      }

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // 1. Central crater impact splash
      launchImpactSplash(x, y, nextTheme);

      // 2. Build radial displacement SVG filter & start View Transition after impact beat
      delayTimerRef.current = setTimeout(() => {
        delayTimerRef.current = null;
        const { feImage, displacement } = createRadialWaterSvgFilter(
          window.innerWidth,
          window.innerHeight
        );

        document.documentElement.setAttribute("data-theme-transitioning", "true");
        document.documentElement.setAttribute("data-wave-bending", "true");

        const transition = doc.startViewTransition!(() => {
          flushSync(() => {
            setTheme(nextTheme);
          });
          document.documentElement.setAttribute("data-theme", nextTheme);
          document.documentElement.style.colorScheme = nextTheme;
        });

        activeTransitionRef.current = transition;

        const clipFrames = generateLiquidClipKeyframes(x, y, endRadius);

        transition.ready
          .then(() => {
            document.documentElement.animate(clipFrames, {
              duration: WAVE_DURATION_MS,
              easing: "linear",
              pseudoElement: "::view-transition-new(root)",
            });

            launchSynchronizedWater(
              x,
              y,
              endRadius,
              nextTheme,
              feImage,
              displacement
            );
          })
          .catch(() => {
            // Ignore skipped transitions
          });

        transition.finished.finally(() => {
          cleanupEffects();
          if (activeTransitionRef.current === transition) {
            activeTransitionRef.current = null;
          }
        });
      }, IMPACT_DELAY_MS);
    },
    [
      currentTheme,
      setTheme,
      cleanupEffects,
      launchImpactSplash,
      launchSynchronizedWater,
    ]
  );

  return { currentTheme, toggleThemeWithWave };
}
