# SonicGlobe-new Update Log

## 2026-06-07

### Step 1 - Project Baseline
- Confirmed `Sonicglobe-new` as the new working folder.
- Existing legacy project files will be ignored.
- Only `data.js` in this folder will be used as the music data source.
- Confirmed `data.js` exports `MUSIC_DATABASE` as an ES module.

### Step 2 - Main Page Direction
- User requested an opening animation: Earth rises first, then text/buttons appear.
- Typography roles confirmed:
  - Logo: `Bebas Neue`
  - Body: `Pretendard JP Variable`
  - Emphasis/title: `Black Han Sans`
- Created the new static app files:
  - `index.html`
  - `style.css`
  - `app.js`
- Added the opening animation structure:
  - Starfield appears first.
  - Earth rises into view.
  - Logo appears after Earth motion starts.
  - Decade buttons and bottom player appear sequentially.
- Added the first interactive flow:
  - Decade screen.
  - Choice screen: `FAMOUS`, `COUNTRIES`, `RANDOM`, `CONTINENTS`, `GENRES`.
  - Submenu screen for countries/genres/continents.
  - Basic YouTube iframe player behavior.
- Verified `app.js` syntax with `node --check app.js`.

### Planned Steps
- Step 3: Run the page locally and visually tune the opening animation/main decade screen to match the reference images.
- Step 4: Tune choice and country screens to match the reference images.
- Step 5: Refine bottom player layout and YouTube behavior.
- Step 6: Verify desktop and mobile layouts.

### Step 3 - Responsive Layout QA Pass
- Ran local static server at `http://127.0.0.1:4174/index.html`.
- Compared the main decade screen across these viewport sizes:
  - Desktop: `1280x720`
  - Tablet/portrait: `768x1024`
  - Mobile: `390x844`
- Generated screenshot files with Chrome headless for visual comparison.
- Fixed issues found during comparison:
  - Final opening state is now stabilized with `body.is-settled` after the opening sequence.
  - Earth position was raised on desktop so the globe is visible like the reference.
  - Bottom decade labels were moved above the player safe area.
  - Tablet/mobile decade labels now use center-based positioning to avoid right-edge clipping.
  - Mobile font size and right-column positions were reduced so `1960s`, `1970s`, `1980s`, `2000s`, `2010s`, and `2020s` remain visible.
- Verified `app.js` syntax with `node --check app.js`.

### Step 3b - Wide Viewport / File Fallback Fix
- User reported a wide viewport where decade labels did not appear.
- Reproduced and compared `1920x907`.
- Confirmed the labels appear when served through the local static server.
- Added static decade buttons directly in `index.html` so the decade labels remain visible even if the ES module script fails in a direct `file://` open.
- Replaced the desktop `2020s` edge correction with CSS `translate` so it no longer depends on the JS-added `body.is-settled` class.
- Verified with:
  - `qa-1920x907-fallback-server.png`
  - `qa-1920x907-fallback-file-fix.png`

### Step 4 - Choice and Country Screen Tuning
- Added QA URL states for direct layout testing:
  - `?view=choices&decade=1990`
  - `?view=countries&decade=1990`
  - `?view=genres&decade=1990`
  - `?view=continents&decade=1990`
- Tuned the choice screen layout for desktop and mobile:
  - `FAMOUS`
  - `COUNTRIES`
  - `RANDOM`
  - `CONTINENTS`
  - `GENRES`
- Tuned the country screen layout for desktop and mobile:
  - `JAPAN`
  - `BRAZIL`
  - `JAMAICA`
  - `USA`
  - `SOUTH KOREA`
  - `BACK`
  - `SOON...`
- Updated country menu ordering to match the visual reference.
- Country buttons now remain visible even when a specific decade has no data for that country.
- Fixed mobile clipping for long labels such as `COUNTRIES`, `CONTINENTS`, `GENRES`, `JAMAICA`, and `SOUTH KOREA`.
- Verified with Chrome headless screenshots:
  - `qa-step4-choices-1920x907-fix2.png`
  - `qa-step4-choices-390x844-fix3.png`
  - `qa-step4-countries-1920x907-fix1.png`
  - `qa-step4-countries-390x844-fix3.png`
- Verified `app.js` syntax with `node --check app.js`.

### Step 4b - Reference Scale and Typeface Adjustment
- Compared the latest layout against the original reference images.
- Enlarged the Earth on the decade, choice, and submenu screens so the planet occupies more of the viewport.
- Reduced floating option label sizes across desktop, tablet, and mobile breakpoints.
- Changed all floating option labels from the display title font to `Bebas Neue`.
- Rechecked wide desktop and mobile screenshots:
  - `qa-step4-scale-1920x907-file.png`
  - `qa-step4-scale-390x844-file.png`
  - `qa-step4-scale-choices-1920x907.png`
  - `qa-step4-scale-choices-390x844.png`
  - `qa-step4-scale-countries-1920x907.png`
  - `qa-step4-scale-countries-390x844.png`
- Verified `app.js` syntax with `node --check app.js`.

### Step 5 - Interaction Flow and Planet-Bound Layout
- Updated the main interaction sequence:
  - Earth appears.
  - Decade buttons fade in.
  - Selecting a decade fades out the decade buttons.
  - Earth shifts to the opposite-side composition.
  - Choice buttons fade in.
  - Selecting a choice can play or prepare a song.
- Added `BACK` to the choice-button layer after a decade is selected.
- Replaced the desktop hamburger menu with temporary header navigation:
  - `Sample 1`
  - `Sample 2`
  - `Sample 3`
- Kept the hamburger menu for tablet/mobile widths.
- Repositioned decade and choice labels so they stay inside the visible Earth area.
- Moved guide messages such as `Select Your Decades` and `Select Your Choices` toward the star-field area instead of the planet area on responsive layouts.
- Enlarged and repositioned the mobile Earth to better match the reference while keeping labels inside the planet.
- Verified with Chrome screenshots:
  - `qa-step5-main-1920x907-fix3.png`
  - `qa-step5-main-390x844-fix2.png`
  - `qa-step5-choices-390x844-fix2.png`
- Verified `app.js` syntax with `node --check app.js`.

### Step 6 - Responsive Layout Architecture Change
- Replaced fragile viewport-only positioning with a planet-based layout engine.
- Floating buttons now use semantic layout groups:
  - `decades`
  - `choices`
  - `submenu`
- Added wide and narrow planet coordinate presets in `app.js`.
- Buttons are now positioned from the currently visible planet field instead of hard-coded `vw` / `vh` nth-child rules.
- Added viewport safety fitting so labels are projected back inside the planet and away from player/header edges.
- Added `visualViewport`-based sizing to better support live Chrome resizing and device emulation.
- Kept CSS nth-child positions as fallback only; JS-calculated `is-laid-out` positions now take priority.
- Added cache-busting query strings to `style.css` and `app.js` so Chrome reloads the latest responsive logic.
- Verified with screenshots:
  - `qa-step6-visualviewport-main-1280x720.png`
  - `qa-step6-visualviewport-main-390x844.png`
  - `qa-step6-visualviewport-choices-390x844.png`
- Verified `app.js` syntax with `node --check app.js`.

### Step 7 - Local File Playback and Inline YouTube Slot
- Changed local loading strategy so `file://` opens work:
  - `data.js` now exposes `window.MUSIC_DATABASE`.
  - `app.js` now runs as a normal script instead of an ES module import.
  - Removed cache query strings from local script and stylesheet references.
- Final track selections now call playback automatically when a `youtubeId` exists.
- Country selections now fall back to the decade representative track if that country has no track in the selected decade.
- Moved the YouTube iframe into the bottom-left media slot instead of showing a separate floating video panel.
- Adjusted the bottom player so the YouTube icon/video slot no longer covers the song title.
- Simplified YouTube embed URL parameters to reduce local `file://` iframe configuration errors.
- Verified with:
  - `node --check app.js`
  - `node --check data.js`
  - `qa-step7-player-slot-file-1280x720.png`

### Step 8 - Button Click Regression Fix
- Fixed a classic-script global binding collision introduced during the local `file://` conversion.
- `data.js` defines `MUSIC_DATABASE`, so `app.js` now reads it through a differently named local constant:
  - `SONICGLOBE_DATABASE`
- Re-added cache-busting query strings for `data.js` and `app.js` so Codex/browser reloads the corrected script instead of a stale copy.
- Verified with:
  - `node --check app.js`
  - `node --check data.js`
  - `qa-step8-clickfix-file-1280x720.png`

### Step 9 - Player Slot, Volume Control, and Choice Button Tuning
- Reduced the bottom-left YouTube media slot toward a 16:9 proportion:
  - Desktop slot: `132px x 74px`
  - Mobile/tablet slot: `110px x 62px`
- Added `enablejsapi=1` to the YouTube embed URL.
- Wired the mute button and volume slider to the YouTube iframe through `postMessage` commands:
  - `setVolume`
  - `mute`
  - `unMute`
- Added iframe `referrerpolicy="strict-origin-when-cross-origin"`.
- Adjusted the choice button layout so options sit more cleanly around the planet center instead of crowding the far-right side.
- Fixed hidden-stage buttons reappearing over the active view by hiding buttons/guides inside `aria-hidden="true"` stages.
- Verified with:
  - `node --check app.js`
  - `node --check data.js`
  - `qa-step9-choices-fixed-1920x907.png`

### Step 10 - Opening Button Position Stabilization
- Fixed the visible jump where decade buttons first appeared at CSS fallback positions and then moved to JS-calculated planet positions.
- Floating option buttons now stay hidden until the planet-based layout calculation has completed.
- Added an `app.is-layout-ready` gate so only calculated `is-laid-out` buttons can become visible after the opening sequence settles.
- Updated cache-busting query strings for `style.css` and `app.js` so the browser loads the corrected opening logic.
- Verified with:
  - `node --check app.js`
  - `node --check data.js`
  - `qa-step10-opening-2600.png`
  - `qa-step10-opening-4200.png`
  - `qa-step10-opening-mobile-4200.png`

### Step 11 - YouTube Slot Background Fill
- Changed the bottom-left YouTube button slot from transparent to solid black so the planet background no longer shows through behind the icon.
- Updated the stylesheet cache-busting query string.

### Step 12 - Map Texture Application
- Added `map_texture.jpg` as the Earth surface texture source.
- Blended the texture into the existing CSS planet surface so the blue lighting, grid overlay, rim glow, and shadow remain intact.
- Updated the stylesheet cache-busting query string.
- Verified with:
  - `http://127.0.0.1:4174/map_texture.jpg`
  - `qa-step12-maptexture-1280x720.png`

### Step 13 - Planet Surface Line Removal and Color Tuning
- Removed the repeating CSS grid/radial line overlays from the planet surface.
- Increased the planet texture saturation while lowering overall brightness for a deeper blue look.
- Darkened the inner shadow on the planet surface.
- Updated the stylesheet cache-busting query string.
- Verified with:
  - `qa-step13-surface-tuned-1280x720.png`

### Step 14 - FHD Decade Layout Tuning
- Adjusted the wide-screen decade coordinate preset for FHD browser viewports.
- Moved the 2000s, 2010s, and 2020s labels further inside the visible planet area and reduced crowding on the right side.
- Reduced the default desktop floating-option size slightly so labels fit the planet more cleanly in full-screen FHD.
- Further reduced desktop option size and spread the right-side decade labels after visual FHD comparison.
- Updated stylesheet and script cache-busting query strings.
- Verified with:
  - `qa-step14-fhd-1920x911-fix2.png`
  - `qa-step14-mobile-390x844.png`

### Step 15 - Stable Desktop Relayout
- Removed the desktop decade guide placement branch that could flip between side and top positions during screen-size changes.
- Fixed the desktop decade guide to a stable star-field position.
- Moved the right-side decade labels slightly further inside the planet to reduce edge snapping after relayout.
- Added delayed resize relayout passes so button coordinates are recalculated after the planet resize transition settles.
- Updated stylesheet and script cache-busting query strings.
- Verified with:
  - `qa-step15-stable-resize-1920x911.png`

### Step 16 - Random Label Rename
- Renamed the choice button from `RANDOM` to `SURPRISE ME`.
- Updated the selected track source label to show `SURPRISE ME` when random discovery is used.
- Updated the script cache-busting query string.
- Verified with:
  - `qa-step16-surpriseme-desktop.png`
  - `qa-step16-surpriseme-mobile.png`

### Step 17 - Header Navigation Pages
- Replaced the temporary header items with `DIG`, `SIGNALS`, and `MAP`.
- Linked `DIG` to `index.html`.
- Added placeholder pages:
  - `signals.html`
  - `map.html`
- Added a shared `nav.js` mobile menu toggle for the header navigation.
- Added active navigation styling for the current page.
- Updated stylesheet and navigation script cache-busting query strings.
- Verified with:
  - `qa-step17-signals-desktop.png`
  - `qa-step17-mobile-menu.png`

### Step 18 - Signals Article Cards and Modal
- Replaced the placeholder Signals page with article-style signal cards.
- Added sections/cards for:
  - `TODAY'S SIGNAL`
  - `HIDDEN GEM`
  - `SCENE SPOTLIGHT`
  - `FROM THE ARCHIVE`
  - `SURPRISE SIGNAL`
- Added `signals.js` for opening article cards in a modal.
- Added a modal with long-form body copy, YouTube iframe embed, close controls, keyboard activation, and YouTube outbound link.
- Added responsive desktop and mobile layouts for the Signals board and modal.
- Verified with:
  - `qa-step18-signals-board-desktop.png`
  - `qa-step18-signals-modal-desktop.png`
  - `qa-step18-signals-board-mobile.png`
  - `qa-step18-signals-modal-mobile.png`

### Step 19 - Signals Song Title Typeface
- Changed song titles in Signals cards and the Signals modal from `Black Han Sans` to `Pretendard JP Variable`.
- Kept the broader Signals hero and navigation typography unchanged.
- Updated the Signals stylesheet cache-busting query string.
- Verified with:
  - `qa-step19-signals-pretendard-title.png`

### Step 20 - Signals Translucent Card Surface
- Changed Signals article cards from opaque paper-like backgrounds to translucent white panels.
- Added subtle blur, saturation, inset highlight, lighter border, and softer shadow for a glass-adjacent surface without a full Liquid Glass effect.
- Raised the white panel opacity slightly after visual review so cards keep a translucent but brighter surface over darker planet areas.
- Updated the Signals stylesheet cache-busting query string.
- Verified with:
  - `qa-step20-signals-translucent-cards-fix2.png`

### Step 21 - Signals Korean Article Copy
- Rewrote the Signals card summaries and modal article bodies in Korean.
- Restored readable Korean/Japanese song titles and artist names in `signals.html` and `signals.js`.
- Updated the Signals script cache-busting query string.
- Verified with:
  - `qa-step21-signals-korean-copy.png`

### Step 22 - Archive Radial Search Prototype
- Replaced the planned `MAP` page with an `ARCHIVE` page.
- Updated header navigation from `DIG / SIGNALS / MAP` to `DIG / SIGNALS / ARCHIVE`.
- Added `archive.html` and `archive.js`.
- Built a central search hub with filters for:
  - `ALL`
  - `GENRE`
  - `YEAR`
  - `COUNTRY`
  - `TITLE`
- Rendered archive results as randomized radial song-title nodes around the search hub.
- Added `NEARBY GENRES` chips for genre searching, including a manual City Pop adjacency set.
- Added a song detail modal with metadata, description, genre chips, YouTube iframe playback, and YouTube outbound link.
- Added responsive Archive layouts for desktop and mobile.
- Adjusted radial placement to keep song-title nodes outside the central search panel.
- Verified with:
  - `qa-step22-archive-citypop-desktop-fix2.png`
  - `qa-step22-archive-detail-desktop-fix2.png`
  - `qa-step22-archive-mobile.png`

### Step 23 - Archive Search Icon Interaction
- Simplified the Archive search hub so the initial state shows only a search icon.
- Removed the visible `ARCHIVE` and `SEARCH THE ORBIT` text from the search control.
- Desktop search panel now opens from the center icon on hover/focus.
- Mobile search panel now opens as a popup when the icon is tapped.
- Added a mobile backdrop and Escape/backdrop close behavior.
- Cleaned remaining Archive text encoding artifacts in the new Archive page and script.
- Fixed mobile popup sizing by removing the transformed parent constraint from the mobile search hub.
- Moved the desktop search panel below the icon so the icon no longer covers the search fields.
- Hid the mobile search icon while the popup is open so it does not overlap the form.
- Verified with:
  - `qa-step23-archive-icon-desktop.png`
  - `qa-step23-archive-hover-desktop.png`
  - `qa-step23-archive-mobile-popup.png`

### Step 24 - Archive Search Popup Close Control
- Added a close button inside the Archive search panel.
- Connected the close button to the existing search popup close behavior.
- Added a dismissed hover state so the desktop panel stays closed after pressing close while the cursor is still near the search hub.
- Kept mobile close behavior aligned with the backdrop and Escape key close behavior.
- Updated Archive cache-busting query strings for the stylesheet and script.
- Verified with:
  - `qa-step24-archive-close-desktop.png`
  - `qa-step24-archive-close-mobile.png`

### Step 25 - Archive Search Icon Polish
- Rebalanced the Archive search icon geometry so the magnifier handle stays inside the circular button cleanly.
- Updated the Archive stylesheet cache-busting query string.
- Verified with:
  - `qa-step25-search-icon-desktop.png`
  - `qa-step25-search-icon-mobile.png`

### Step 26 - Archive Radial Field Refinement
- Restyled the Archive search icon into a heavier magnifier shape with a thick ring and handle.
- Repositioned the magnifier artwork inside the circular button so the full icon feels visually centered.
- Reworked Archive song placement from rectangular edge avoidance to a circular golden-angle distribution.
- Added a larger circular empty zone around the search icon so titles radiate outward instead of crowding the center.
- Updated Archive cache-busting query strings for stylesheet and script.
- Verified with:
  - `qa-step26-archive-radial-desktop.png`
  - `qa-step26-archive-radial-mobile.png`

### Step 27 - Archive Density Reduction
- Reduced the initial Archive title field from a full 260-track display to a lighter preview set.
- Set idle display limits to 72 tracks on desktop and 28 tracks on mobile.
- Set search display limits to 120 tracks on desktop and 48 tracks on mobile.
- Hid `NEARBY GENRES` until the user enters a query, reducing initial visual noise.
- Slightly reduced Archive title size, weight, max width, and glow intensity.
- Added resize recalculation so density updates when viewport width changes.
- Updated the Archive script cache-busting query string.
- Verified with:
  - `qa-step27-archive-density-desktop.png`
  - `qa-step27-archive-density-mobile.png`

### Step 28 - Archive Mobile Field Position
- Lowered the mobile Archive title field so song titles no longer crowd the logo/header area.
- Added a mobile-specific minimum top boundary for Archive title placement.
- Updated Archive cache-busting query strings for stylesheet and script.
- Verified with:
  - `qa-step28-archive-mobile-lower-field.png`

### Step 29 - Archive Search Icon Reference Match
- Updated the Archive search icon to better match the provided reference image.
- Enlarged the magnifier ring and extended the handle into a longer, thicker diagonal shape.
- Updated the Archive stylesheet cache-busting query string.
- Verified with:
  - `qa-step29-search-icon-reference-desktop.png`
  - `qa-step29-search-icon-reference-mobile.png`

### Step 30 - Archive Search Icon SVG Rebuild
- Replaced the CSS-only magnifier construction with an inline SVG icon for more reliable geometry.
- Removed fixed stroke scaling so the ring keeps a larger inner opening at small sizes.
- Adjusted the SVG ring radius and handle path to better match the provided search icon proportion.
- Verified with:
  - `qa-step30-search-icon-svg-desktop.png`
  - `qa-step30-search-icon-svg-mobile.png`

### Step 31 - Archive Search Icon Handle Trim
- Shortened the SVG magnifier handle slightly while keeping the ring size and stroke weight unchanged.
- Updated the Archive stylesheet cache-busting query string.
- Verified with:
  - `qa-step31-search-icon-handle-desktop.png`
  - `qa-step31-search-icon-handle-mobile.png`

### Step 32 - Faster Music-First Entry
- Added an early first-screen music cue with `Dig the World's Music` and `Start with a decade`.
- Reduced the opening sequence timing so the page becomes interactive around 1.5 seconds instead of waiting over 3 seconds.
- Shortened star, planet, header, stage, option, and player entrance delays.
- Updated the default player subtitle to make the first screen feel music-related before a track is selected.
- Updated the main stylesheet cache-busting query string.
- Verified with:
  - `qa-step32-entry-0800-desktop.png`
  - `qa-step32-entry-1600-desktop.png`
  - `qa-step32-entry-1600-mobile.png`

### Step 33 - First Visit Intro Briefing
- Added a dismissible first-visit intro briefing to explain the basic SonicGlobe flow.
- Included short usage steps:
  - Select a decade.
  - Choose country, genre, famous, or surprise.
  - Press play or open YouTube.
- Stored dismissal in `localStorage` so the briefing does not reappear after the user closes it.
- Added Escape key support and close-on-decade-selection behavior.
- Updated the main script cache-busting query string.
- Verified with:
  - `qa-step33-intro-briefing-desktop.png`
  - `qa-step33-intro-briefing-mobile.png`

### Step 34 - Restore Decade Guide Copy
- Restored the main decade guide text to `Select Your Decades`.
- Removed the two-line music tagline styling from the persistent decade guide.
- Confirmed the decade guide uses Pretendard JP Variable at light weight (`300`).
- Updated the main stylesheet cache-busting query string.
- Verified with:
  - `qa-step34-guide-select-decades-desktop.png`

### Step 35 - Korean Intro Briefing Copy
- Translated the first-visit intro briefing into Korean.
- Updated the intro close button aria label to Korean.
- Adjusted intro kicker, step, and button typography for Korean readability.
- Updated the main stylesheet cache-busting query string.
- Verified with:
  - `qa-step35-intro-korean-desktop.png`
  - `qa-step35-intro-korean-mobile.png`

### Step 36 - First Optimization Pass
- Moved font loading out of `style.css` `@import` rules and into page-level `<link>` tags.
- Added preconnect hints for Google Fonts, Google font assets, and jsDelivr.
- Removed the unused tracked `stylesheet.css` file.
- Reduced starfield workload from 180 stars to 150 on desktop and 90 on mobile.
- Capped mobile starfield device pixel ratio at 1.5 to reduce canvas draw cost.
- Added starfield pause/resume behavior with `visibilitychange`.
- Added `prefers-reduced-motion` support so starfield animation becomes static for reduced-motion users.
- Cleaned Signals and Archive meta descriptions while touching page heads.
- Updated cache-busting query strings for shared CSS and main script.
- Verified with:
  - `node --check app.js`
  - `node --check archive.js`
  - `qa-step36-optimized-entry-desktop.png`

### Step 37 - Mobile Rendering Optimization
- Disabled the animated Earth texture on mobile to reduce continuous repaint cost.
- Reduced mobile Earth glow, rim shadow, and saturation/brightness filter intensity.
- Removed mobile backdrop blur from the intro panel, Signals cards, Archive search panel, and Archive search overlay.
- Reduced mobile box-shadow strength for intro, article cards, dialogs, search panels, and the bottom track card.
- Reduced mobile text glow for floating choice buttons and Archive orbit nodes.
- Disabled hover/focus filter effects on mobile-only floating choices and Archive nodes.
- Updated shared stylesheet cache-busting query strings.
- Verified with:
  - `node --check app.js`
  - `node --check archive.js`
  - `qa-step37-mobile-opt-index.png`
  - `qa-step37-mobile-opt-signals.png`
  - `qa-step37-mobile-opt-archive.png`

### Step 38 - Landing Archive Metadata Layer
- Added a landing-only archive metadata layer inspired by the Sample HTML reference.
- Added primary status copy for archive mode, decade range, and live signal count.
- Connected `SIGNALS FOUND` to the actual flattened music database count.
- Added a secondary route note near the bottom-left desktop area.
- Kept metadata visible only on the decade landing view so later choice screens stay clean.
- Hid the secondary metadata on mobile and tightened the primary metadata width to avoid crowding.
- Updated shared stylesheet cache-busting query strings.
- Verified with:
  - `node --check app.js`
  - `node --check archive.js`
  - `qa-step38-landing-meta-desktop.png`
  - `qa-step38-landing-meta-mobile.png`

### Step 39 - Archive Briefing Intro Panel
- Reworked the first-visit intro into a SonicGlobe archive briefing panel.
- Added `SONICGLOBE ARCHIVE`, active status, decade range, live signal count, and route summary.
- Connected the intro `SIGNALS` value to the actual flattened music database count.
- Updated intro copy to explain the discovery flow in Korean.
- Changed the intro action copy to `디깅 시작`.
- Updated the intro storage key to `sonicglobeIntroSeenV2` so users see the refreshed briefing once.
- Hid landing metadata and dimmed decade buttons while the briefing is open to improve readability.
- Adjusted mobile intro system-line layout so the close button does not collide with status text.
- Updated shared stylesheet cache-busting query strings.
- Verified with:
  - `node --check app.js`
  - `node --check archive.js`
  - `qa-step39-intro-briefing-desktop.png`
  - `qa-step39-intro-briefing-mobile.png`

### Step 40 - Numbered Poster Navigation
- Updated the shared header navigation to use numbered poster-style entries: `01 DIG`, `02 SIGNALS`, and `03 ARCHIVE`.
- Applied the numbered navigation to desktop and mobile menus across Dig, Signals, and Archive pages.
- Added separate `nav-index` and `nav-label` spans for styling control.
- Added `aria-label` values so numbered labels are read with clear spacing.
- Styled desktop navigation with small cyan/hot index markers and Bebas Neue labels.
- Styled mobile menu links as compact numbered rows with subtle separators.
- Preserved active page highlighting for each page.
- Updated shared stylesheet cache-busting query strings.
- Verified with:
  - `node --check app.js`
  - `node --check archive.js`
  - `qa-step40-numbered-nav-desktop.png`
  - `qa-step40-numbered-nav-mobile-open.png`

### Step 41 - Decade Interaction Feedback
- Added subtle pointer-based parallax to the landing Earth background on fine-pointer devices.
- Added reduced-motion safeguards so parallax is disabled for users who prefer reduced motion.
- Refined decade hover/focus feedback with a smaller lift, glow, and cyan signal accent.
- Added a `SELECTED_DECADE` signal readout that appears briefly after a decade is clicked.
- Added mobile positioning for the selected decade signal so it stays inside the viewport.
- Reset parallax during decade-to-choice transitions to prevent stale transform values.
- Updated cache-busting query strings for shared CSS and the main app script.
- Verified with:
  - `node --check app.js`
  - `node --check archive.js`
  - `qa-step41-decade-hover-desktop.png`
  - `qa-step41-decade-selected-desktop.png`
  - `qa-step41-decade-selected-mobile.png`

### Step 42 - Player Default State Alignment
- Updated the default bottom player copy to feel more like a ready music archive state.
- Changed default metadata to `SONIC ARCHIVE / READY`.
- Changed the default track title to `세계 음악 신호 대기중`.
- Changed the default subtitle to `Select a decade to receive a signal`.
- Repositioned the player center group as an absolute centered layer inside the player bar.
- Added `margin-left: auto` to the volume group so it stays pinned to the right.
- Adjusted mobile player track width so the title does not collide with the centered play button.
- Updated shared stylesheet cache-busting query strings.
- Verified with:
  - `node --check app.js`
  - `node --check archive.js`
  - `qa-step42-player-default-desktop.png`
  - `qa-step42-player-default-mobile.png`

### Step 43 - Archive System Metadata Layer
- Added Sample-inspired Archive system panels for total signals, countries, genres, active filter, and node field status.
- Added search protocol metadata inside the Archive search panel.
- Added deterministic Signal IDs and node indexes to flattened archive tracks.
- Added hover/focus Signal ID labels to archive song nodes.
- Added a detail record grid for SIGNAL ID, REGION, YEAR, DECADE, and NODE.
- Added related genre chips to the detail modal using the existing nearby genre inference.
- Hid side archive system panels on mobile while keeping search/detail metadata visible.
- Updated Archive script and shared stylesheet cache-busting query strings.
- Verified with:
  - `node --check app.js`
  - `node --check archive.js`
  - `qa-step43-archive-system-desktop.png`
  - `qa-step43-archive-search-system-desktop.png`
  - `qa-step43-archive-detail-record-desktop.png`
  - `qa-step43-archive-detail-record-mobile.png`
