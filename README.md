[![License][license-shield]][license-url]
[![Stargazers][stars-shield]][stars-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/michaelhthomas/firefly-iii-svelte">
    <img src="https://raw.githubusercontent.com/michaelhthomas/firefly-iii-svelte/main/assets/icon/icon.svg" alt="Firefly III Svelte" width="144" height="144">
  </a>
</p>
  <h1 align="center">Firefly III Svelte</h1>

  <p align="center">
    A modern user interface for <a href="https://www.firefly-iii.org/">Firefly III</a>, built with Svelte and SvelteKit.
    <br />
    <br />
    <a href="https://demo.firefly-iii-svelte.michaelt.xyz/">View the demo</a>
    ·
    <a href="https://github.com/michaelhthomas/firefly-iii-svelte/issues">Report a bug</a>
    ·
    <a href="https://github.com/michaelhthomas/firefly-iii-svelte/issues">Request a feature</a>
    ·
    <a href="https://github.com/michaelhthomas/firefly-iii-svelte/discussions">Ask questions</a>
  </p>

## Getting Started

### Node.js

1. [Install Firefly III](https://docs.firefly-iii.org/firefly-iii/installation/docker/)

1. Clone this repo

   ```sh
   git clone https://github.com/michaelhthomas/firefly-iii-svelte/
   ```

1. Configure environment

   1. Copy `.env.example` to `.env`
   1. Update connection values for your Firefly III instance

1. Install dependencies

   ```sh
   pnpm i
   ```

1. Build application

   ```sh
   pnpm build
   ```

1. Preview application

   ```sh
   pnpm preview
   ```

## Development

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

1. Clone this repo

   ```sh
   git clone https://github.com/michaelhthomas/firefly-iii-svelte/
   ```

1. Configure environment

   1. Copy `.env.example` to `.env`
   1. Update connection values for your Firefly III instance

1. Install dependencies

   ```sh
   pnpm i
   ```

1. Start a development server

   ```bash
   pnpm run dev

   # or start the server and open the app in a new browser tab
   pnpm run dev -- --open
   ```

[license-shield]: https://img.shields.io/github/license/michaelhthomas/firefly-iii-svelte.svg?style=flat-square
[license-url]: https://www.gnu.org/licenses/agpl-3.0.html
[stars-shield]: https://img.shields.io/github/stars/michaelhthomas/firefly-iii-svelte.svg?style=flat-square
[stars-url]: https://github.com/michaelhthomas/firefly-iii-svelte/stargazers
