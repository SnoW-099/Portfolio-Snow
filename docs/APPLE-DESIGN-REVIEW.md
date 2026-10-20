# Design review: Snow portfolio

## Summary

Before: needs work. This is a responsive Next.js portfolio for people assessing Angel's junior development work. Its job is to introduce the person, show the actual projects and make their scope easy to understand. Apple's foundations apply here; native macOS toolbars, menu bars and tab bars do not.

## Improvements

- **High — indistinct project identities.** Three repeated padded cards use small logos; Python Mini Systems even inherits the portfolio's cat. Replace them with project-specific visual studies and a quiet shared caption. `branding.md › Best practices`: “Ensure branding always defers to content.” The visual treatment is a design judgment grounded in the supplied projects.
- **High — small supporting type.** Existing labels use 9–11 px, and the home introduction competes with repeated decorative details. Set body text to 16–18 px, supporting labels to at least 12 px and links to comfortable 44 px targets. `typography.md › Ensuring legibility`: “Use font sizes that most people can read easily.”
- **Medium — repeated framing.** Borders, badges, gradients and shadows repeat across introduction, work and skills. Remove decorative sequence numbers and nested cards; use spacing to group related content. `layout.md › Visual hierarchy`: “Group related items to clearly express related information or functions.”

## Craft notes and implementation plan

The signature is **Snow's workbench**: a typographic introduction to Angel beside a small, project-specific collection of Python systems, Snowtify and Rez. The projects supply the color and materials. The surrounding page stays quiet. A generic cream/serif theme and numbered editorial grid were considered and rejected: neither says anything about this developer or these projects.

Tokens (light / dark): page `#fafafa / #101114`, surface `#f0f1f4 / #1b1d22`, ink `#202124 / #f3f4f6`, secondary `#5e6068 / #a7abb5`, link `#005cc8 / #83b5ff`, availability `#267247 / #81c9a1`. Borders derive from ink with CSS color-mix. Calculated contrast against the page: ink **15.42 / 17.16**, secondary **6.01 / 8.21**, links **5.98 / 9.01**, availability **5.62 / 9.71**. These are calculations from CSS values, not a completed rendered-browser audit.

System UI fonts provide body and display text, with a restrained monospaced face inside the Python study. Display: fluid 44–148 px; section titles: 32–64 px; body: 16–18 px; supporting copy: 12–14 px. Use rem units and width-based layouts that reflow with text enlargement.

Regular:

```text
Snow                         Work / About / Stack / Contact
Angel,                       Junior developer in Spain.
aka Snow.                    Introduction and clear links.
Python study       Snowtify preview       Rez identity
Selected work — generous alternating project presentations
About — personal introduction / honest stack / contact
```

Compact:

```text
Snow                         Menu
Angel, aka Snow.
Introduction / Work / Contact
Python / Snowtify / Rez — compact project previews
Work — image and story stacked
About / Stack / Contact
```

One brief introduction reveal and subtle project hover feedback; no autoplay, scroll hijacking or continuous animation. `motion.md › Best practices`: “Add motion purposefully, supporting the experience without overshadowing it.” Respect reduced motion, reduced transparency and increased contrast. Preserve native links, focus visibility, menu Escape handling and all case-study routes.

## What works

Keep the user's actual artwork, real screenshots, clear fork attribution, AI assistance disclosures and StarOptimizer's secondary placement with its development status. Retain the keyboard-operable mobile menu and progressive project case studies.

## Platform notes

Use standard HTML links/buttons, semantic CSS tokens and responsive layouts. Follow the skill's web translation rather than drawing imitation Apple system controls. Appearance follows the OS without an extra switch. The final review must include narrow and wide viewports, keyboard navigation, 200% text, both appearances, image loading and reduced-motion behavior.

Skill used: `/home/snow-cachyos/.agents/skills/apple-design/SKILL.md` (`dickwu/apple-design-skill`). References read: accessibility, layout, typography, color, designing-for-macos, cross-platform, branding, design-principles, motion, buttons and writing.

## Implementation and validation

Implemented the personal introduction, three distinct project studies, quieter alternating project stories, a linear skills section, simplified contact and consistent archive/case-study styling. Removed the repeated portfolio logo from project visuals, ornamental section numbering, nested card framing and the decorative hero glow. Preserved the actual project screenshots, links and attribution. Appearance follows the system; no theme switch was added.

Passed locally: `tsc --noEmit`, `npm run build -- --webpack`, `git diff --check`. Netlify's deployment preview also built successfully: https://deploy-preview-5--portfolio-snow.netlify.app.

Browser review remains **unverified**. The local environment denies starting Chromium and opening a listening server. The GitHub Actions review jobs failed before runner assignment (zero steps; runner ID 0), so they did not execute or fail the browser assertions. The account-side cause is not established. The script in `scripts/verify-design.cjs` covers six routes at four widths, image loading, system dark appearance, mobile-menu behavior, Escape/focus, the keyboard skip link, 200% text and reduced motion, and records screenshots when it can run. Do not report these as passed until a browser run completes.

Provisional craft assessment: the structure and content now communicate this developer and these projects more clearly; a final visual rating requires the rendered review. Public production has not been replaced by this preview.
