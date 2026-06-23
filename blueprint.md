# Lonex Tech — Portfolio Website Blueprint

**Style:** Dark & immersive
**Hero centerpiece:** Three.js 3D geometric shape (rotating/floating)
**Stack:** Next.js, GSAP + ScrollTrigger, Lenis, Framer Motion, Three.js (react-three-fiber), Lottie

---

## 1. Visual Identity

**Color palette**
| Role | Color |
|---|---|
| Background | `#05070D` (near-black navy) |
| Surface/cards | `#0F1420` |
| Primary accent (glow) | `#3B82F6` electric blue |
| Secondary accent | `#22D3EE` cyan |
| Text — primary | `#F5F7FA` |
| Text — muted | `#94A3B8` |

This continues the navy/electric blue identity from your LammySMS redesign, so Lonex Tech stays visually consistent across projects.

**Typography**
- Headings: **Sora** (bold, geometric — matches the "premium tech" feel)
- Body: **Plus Jakarta Sans**

*(Same pairing as LammySMS — let me know if you'd rather try something new for the portfolio specifically.)*

---

## 2. Site Structure & Animation Map

### Hero
- **Three.js** (via `@react-three/fiber` + `@react-three/drei`): a floating/rotating wireframe shape — icosahedron or torus knot — in electric blue with a soft bloom/glow effect. Slowly auto-rotates, subtly reacts to mouse movement.
- **Profile photo (cutout/transparent PNG)**: no background, no border, no container — placed directly on the page so it sits flush with the site's own dark background, like you've "popped out" of the page itself. A soft electric-blue glow/shadow beneath the figure ties it visually to the 3D shape. Subtle parallax (moves at a different speed than the page on scroll) adds depth and connects it to the Three.js element.
- **GSAP**: name + role ("Web Developer") staggers in letter-by-letter or word-by-word on page load.
- **Framer Motion**: CTA button ("View My Work") with hover scale + glow pulse.
- **Lenis**: wraps the entire app for smooth scroll from this point down.

### About
- **Framer Motion (`whileInView`)**: bio text and supporting content fade/slide up the moment the section enters the viewport — triggers cleanly whether scrolling down or back up.

### Skills / Tech Stack
- Icon grid (Next.js, Laravel, MySQL, Vercel, Prisma, etc.)
- **Framer Motion (`whileInView`)**: icons stagger in on scroll using `staggerChildren`.
- **Framer Motion**: hover scale + glow on each icon.

### Projects / Portfolio
- Cards for LammySMS, LammyLogs, and others.
- **Framer Motion (`whileInView`)**: cards reveal as they enter viewport, staggered.
- **Framer Motion**: hover lift effect (slight scale + shadow), optional page transition into a project detail view on click.

### Resume / Experience
- Vertical timeline layout.
- **GSAP ScrollTrigger**: a glowing line draws downward as you scroll, with each entry fading/sliding in as the line reaches it.

### Testimonials
- Simple slider/carousel.
- **Framer Motion**: slide transition between testimonials.

### Contact
- Form with **Framer Motion** focus/hover states on inputs.
- **Lottie**: small animation on the submit button (e.g., paper-plane or checkmark on success).
- Background continues a faint version of the hero's glow/particle theme for cohesion.

### Footer
- Social links with small Framer Motion hover micro-interactions.

---

## 3. Responsiveness

The site needs to feel premium on every screen size, not just desktop:

- **Mobile-first build**: layout and spacing designed for small screens first, then scaled up.
- **Breakpoints**: standard Tailwind-style breakpoints (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px).
- **Three.js on mobile**: the rotating 3D shape stays, but at reduced polygon count / simpler geometry, and the bloom/glow effect is lightened — phones can't handle the same GPU load as desktop without lag.
- **Cutout profile photo**: scales and repositions per breakpoint so it never overlaps text or gets cropped awkwardly on narrow screens.
- **GSAP pinning effects**: disabled or simplified below `md` — pinned sections feel janky on mobile scroll and should fall back to a normal stacked layout.
- **Touch targets**: buttons, nav links, and cards sized for comfortable tapping (minimum ~44px touch area).
- **Performance check**: test on an actual mid-range Android phone, not just Chrome DevTools — WebGL performance varies a lot in practice.

---

## 4. Build Order (recommended sequence for Claude Code)

1. Scaffold Next.js project, install all five libraries
2. Build static layout for every section first — mobile-first, no animation yet, just structure + content placeholders
3. Wrap app in **Lenis** for smooth scroll
4. Build the **Three.js** hero centerpiece in isolation, tune until it feels right (desktop first, then mobile-optimized version)
5. Add **Framer Motion `whileInView`** reveals section by section (About → Skills → Projects)
6. Add **GSAP ScrollTrigger** for the Resume timeline draw effect
7. Layer in **Framer Motion** micro-interactions (cards, buttons, hovers)
8. Add **Lottie** touches (contact button, maybe a loading screen)
9. Full responsive pass across breakpoints — test on real mobile device
10. Deploy to Vercel

---

## 5. Content Checklist (what I still need from you)

- [ ] Short bio / about text (2–4 sentences, your story as a dev)
- [ ] Full skills/tech stack list
- [ ] Project details for LammySMS, LammyLogs, and any others — screenshots, short description, your role, tech used
- [ ] Resume/experience timeline (roles, dates, brief description)
- [ ] Testimonials, if you have any — otherwise we can skip or remove this section
- [ ] Contact details / social links (WhatsApp, GitHub, LinkedIn, etc.)

You already have your **logo** and **profile photo** — that covers the visual assets needed for the Hero and About sections. Project screenshots can come later; we can use placeholders to start.
