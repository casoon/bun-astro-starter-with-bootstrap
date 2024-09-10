```markdown
# Bun + Astro Starter with Bootstrap

Welcome to the **Bun + Astro Starter with Bootstrap**! This template is built using **Bun.js**, **Astro.js**, **Bootstrap** for styling, **Alpine.js** for interactivity, and **TypeScript** for type safety. It also supports **Sass** for extended styling capabilities, and **Autoprefixer** to ensure cross-browser compatibility.

## Features

- **Bun.js**: Ultra-fast JavaScript runtime for building server-side applications.
- **Astro.js**: Static site generator optimized for speed and flexibility, shipping minimal JavaScript.
- **Bootstrap**: Popular CSS framework for responsive design, now enhanced with **Sass** support.
- **Alpine.js**: Lightweight framework for interactive UI components with minimal overhead.
- **TypeScript**: Static type checking for improved code reliability and development experience.
- **Sass**: Extended CSS capabilities with support for variables, nesting, and more.
- **Autoprefixer**: Ensures cross-browser compatibility by automatically adding vendor prefixes to CSS rules.

## Getting Started

### Prerequisites

Make sure you have **Bun** installed on your system. You can find the installation guide [here](https://bun.sh/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/casoon/bun-astro-starter-with-bootstrap.git
   cd bun-astro-starter-with-bootstrap
   ```

2. Install the dependencies using Bun:

   ```bash
   bun install
   ```

### Running the Development Server

To start the development server, use the following command:

```bash
bun astro dev
```

The server will typically start at `http://localhost:3000`.

### Building for Production

To build the project for production, run:

```bash
bun astro build
```

This will generate the static files in the `dist/` directory.

### Cleaning the Build

If you need to clean the build artifacts, run:

```bash
bun run clean
```

This removes the `dist/` and `.astro/` directories.

## Project Structure

Here’s a breakdown of the key directories and files in this project:

```
├── src/
│   ├── layouts/         # Layout components (e.g., MainLayout.astro)
│   ├── pages/           # Astro page components
│   ├── styles/          # Global styles (Bootstrap + Sass)
│   └── components/      # Reusable UI components
├── public/              # Static assets (images, fonts, etc.)
├── astro.config.mjs     # Astro configuration file
├── tsconfig.json        # TypeScript configuration file
├── package.json         # Project metadata and scripts
├── bun.lockb            # Bun lockfile for dependencies
```

### Customization

- **Bootstrap**: Bootstrap is included via Sass. You can extend or override Bootstrap styles in `src/styles/global.scss`.
- **Alpine.js**: Alpine.js is available for interactivity. Add it in your templates with directives like `x-data`, `x-show`, etc.
- **Sass**: Use `src/styles/global.scss` for custom styles. Sass offers advanced features like variables and nesting.
- **Autoprefixer**: Ensures that your final CSS is cross-browser compatible by automatically adding necessary vendor prefixes.

### Scripts in `package.json`

```json
{
  "scripts": {
    "dev": "bun astro dev",
    "build": "bun astro build",
    "start": "bun astro preview",
    "check": "tsc --noEmit",
    "clean": "rm -rf dist .astro"
  }
}
```

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `start`: Previews the production build.
- `check`: Runs TypeScript type-checking without emitting output.
- `clean`: Cleans the `dist/` and `.astro/` directories.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

## MIT License

```
MIT License

Copyright (c) 2024 Casoon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contributing

Feel free to open issues or submit pull requests to improve this template. Contributions are always welcome!
