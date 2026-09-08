# SyntIQ Hero Visual

A reusable React/SVG hero visual for SyntIQ. It communicates the sequence **PROMPT → PLAN → WORKFLOW → RESULT** in an approximately eight-second loop without Canvas, WebGL, video, external assets, or runtime dependencies.

## Files

- `SyntIQHeroVisual.tsx` — client component and inline SVG connectors.
- `SyntIQHeroVisual.css` — responsive layout, keyframe animation, visual tokens, and reduced-motion behavior.

## Installation

Copy both files into a component directory in the Next.js app. Keep the CSS import in the component, or move the stylesheet into the app's global stylesheet if that is your project's convention.

```tsx
import SyntIQHeroVisual from '@/components/SyntIQHeroVisual';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">AI EDUCATION FOR OPERATORS</p>
        <h1>Turn intention into a working AI system.</h1>
        <p>Learn to design workflows that move from a clear prompt to measurable work.</p>
      </div>
      <SyntIQHeroVisual />
    </section>
  );
}
```

The component is transparent by default, so it inherits the existing dark page background. It is sized to `min(600px, 100%)` with a 6:5 desktop ratio and collapses into a taller vertical composition below 560px.

## Accent color

Set the existing SyntIQ accent once before rendering, or override the token in the component's parent scope:

```css
:root {
  --syntiq-accent: #9df5c4;
  --syntiq-accent-strong: #65e9a6;
}
```

The component uses only transforms, opacity, SVG stroke-dash movement, and small discrete status changes. Continuous blur animation is intentionally avoided. `prefers-reduced-motion: reduce` disables the loop and presents a stable completed system state.

## Dependencies

No additional dependencies are required. Framer Motion is not used.

## Accessibility

The visual is exposed as one labelled image-like region with an `aria-label`; the visible labels remain selectable/readable in the DOM. If surrounding hero copy already explains the same sequence, the component can instead be marked decorative by changing `role="img"` to `aria-hidden="true"`.
