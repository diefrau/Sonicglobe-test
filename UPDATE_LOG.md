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
