# Free TV

<!-- markdownlint-disable MD033 -->
<p align="center">
  <a href="images/logo/i.svg">
    <img src="images/logo/i.svg" alt="Free TV Logo" width="110" />
  </a>
</p>
<!-- markdownlint-enable MD033 -->

Professional, open source movie discovery interface built with semantic HTML, responsive CSS, and dynamic multi-file JavaScript.

## Live Links

- Live Demo: [Free TV on GitHub Pages](https://biraj2004.github.io/First-Website/)
- Issues: [Open issues](https://github.com/Biraj2004/First-Website/issues)
- Pull Requests: [Open pull requests](https://github.com/Biraj2004/First-Website/pulls)
- Security Advisories: [Report vulnerabilities](https://github.com/Biraj2004/First-Website/security/advisories)

## Tech Stack

- [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
- [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
- [![JavaScript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/docs/Web/JavaScript)
- [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

## Features

- Dynamic catalog rendering from centralized data
- Featured hero rotation with slider-dot indicators
- Live search and genre chip filtering
- Watchlist with local persistence
- Mobile-friendly layout and responsive components
- Scroll-to-top button with auto hide and show behavior
- External URL sanitization for safer link rendering

## Why This Project

Free TV started as a basic static website and was progressively refactored into a cleaner, maintainable, multi-file frontend architecture.
The current focus is production-style structure, readable code, and secure-by-default frontend behavior.

## Project Structure

- index.html: Semantic app shell, page sections, script loading order
- main.css: Design tokens, responsive layout, and component styles
- js/main.js: App orchestration and runtime feature wiring
- js/data/catalog.js: Featured content and category catalog source
- js/ui/render.js: UI render functions and reusable card builders
- js/storage/watchlist.js: Local storage watchlist abstraction
- js/security/safe-url.js: Safe protocol URL utility
- images/: Static media assets

## Getting Started

### Option 1: Direct open

1. Clone the repository.
2. Open index.html in your browser.

### Option 2: Local static server

1. Clone the repository.
2. Run a local server from the project root.
3. Open the served URL in your browser.

## Development Guide

### Code organization

- Keep content data in js/data.
- Keep rendering logic in js/ui.
- Keep storage helpers in js/storage.
- Keep security-oriented utilities in js/security.
- Keep orchestration and event wiring in js/main.js.

### Coding standards

- Prefer small, single-purpose functions.
- Use clear names that match UI intent.
- Keep DOM selectors centralized.
- Reuse rendering utilities instead of duplicating UI code.

### Security practices

- Validate dynamic URLs before assigning href values.
- Keep rel values as noopener noreferrer for external links.
- Do not store secrets in local storage.
- Prefer strict hosting headers for production deployments.

## Security Analysis

### Included hardening

- Content Security Policy meta policy in the document head
- Referrer policy set to strict-origin-when-cross-origin
- Permissions policy restricting camera, microphone, and geolocation
- URL protocol validation for dynamic external links

### Residual risks

- Static hosting should still enforce security headers at server level
- Third-party destination links should be periodically reviewed
- Client-side controls improve safety but do not replace backend security

See the full disclosure process in [SECURITY.md](SECURITY.md).

## Open Source

Contributions are welcome. Please open an issue for discussion before large changes.

### How to contribute

1. Fork the repository.
2. Create a feature branch.
3. Make focused, readable changes.
4. Submit a pull request with clear context and screenshots if UI changes are included.

## Documentation

- Security policy: [SECURITY.md](SECURITY.md)
- License terms: [LICENSE](LICENSE)

## Roadmap

- Add pagination or virtualized lists for very large catalogs
- Add theme switcher with persisted preference
- Add lightweight unit tests for filtering and watchlist behavior
- Add deployment workflow for a hosted live demo

## License

This project is licensed under the MIT License.
Read the full license text in [LICENSE](LICENSE).
