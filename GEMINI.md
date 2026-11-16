# Portfolio Workspace Instructions & Rules

## UI Engineering Standard: No Slop UI (Strictly Enforced)

All frontend UI code, components, styles, and layouts in this repository must strictly adhere to the `no-slop-ui` skill standards. The target aesthetic is **Linear, Raycast, Stripe, GitHub**: functional, honest, restrained, normal.

### Hard Bans
1. **No Glassmorphism / Frosted Panels**: Never use `backdrop-filter: blur()`, semi-transparent frosted cards, or floating blur overlays. Use solid surfaces with clean 1px borders.
2. **No Particle Canvases / Background Space Slop**: Never use `<StarField />`, particle networks, or decorative animated canvases.
3. **No 3D Wireframe Globes or Vanity 3D**: No Three.js/Canvas spinning wireframes or vanity animations. Use clean, dense, structured capability grids and typography instead.
4. **No Tilt Effects / Parallax**: Do not use `react-parallax-tilt` or 3D transform card tilt effects.
5. **No Gradient Text**: Never use `background-clip: text` with multi-color gradient fills. Keep typography solid and readable.
6. **No Pill Buttons / Oversized Radii**: Buttons and badges must have `border-radius: 6px` to `8px` (maximum 10px). Never use 9999px pills.
7. **No Bouncy / Spring Transitions**: Never use `transform: translateY(-2px)/(-4px)` or `transform: scale()` on hover. Transitions must be `150ms ease` on `background-color`, `border-color`, or `opacity` only.
8. **No Glowing Colored Box Shadows**: Shadows must be restrained (max `0 2px 8px rgba(0,0,0,0.08)` or subtle dark alpha). No cyan/purple/neon outer glows.

### Color Palette
- **Dark Mode (Slate Noir)**:
  - Background: `#0f172a`
  - Surface: `#1e293b`
  - Border: `#334155`
  - Text Primary: `#f1f5f9`
  - Text Muted: `#94a3b8`
  - Primary Accent: `#38bdf8`
  - Secondary Accent: `#818cf8`
- **Light Mode (Cloud Canvas / Porcelain)**:
  - Background: `#f8fafc`
  - Surface: `#ffffff`
  - Border: `#e2e8f0`
  - Text Primary: `#0f172a`
  - Text Muted: `#64748b`
  - Primary Accent: `#2563eb`

### Content & Resume Standards
- All project and experience bullet points must follow the **CAR (Challenge - Action - Result)** framework.
- Contact details:
  - Phone: `+91-9508505872`
  - Email: `ratohikumar@gmail.com`
  - LeetCode: `https://leetcode.com/u/iamritesh16/`
  - Live Deployments (e.g., Shramik: `https://shramik-two.vercel.app`)
