```markdown
# Bun Astro Starter with Bootstrap

![License](https://img.shields.io/github/license/casoon/bun-astro-starter-with-bootstrap)
![Stars](https://img.shields.io/github/stars/casoon/bun-astro-starter-with-bootstrap)
![Issues](https://img.shields.io/github/issues/casoon/bun-astro-starter-with-bootstrap)

A starter template using **Bun.js**, **Astro.js**, **Alpine.js**, **Bootstrap**, and **TypeScript**.

## Features

- **Bun.js**: Fast JavaScript runtime for package management and builds.
- **Astro.js**: Static site generator focused on speed and simplicity.
- **Alpine.js**: Lightweight JavaScript framework for UI interactions.
- **Bootstrap**: CSS framework for responsive and modern design.
- **TypeScript**: Static typing for a better developer experience.
- **Sass**: CSS preprocessor for writing reusable, scalable styles.

## Requirements

- **Bun**: Install Bun on your system by following the [official instructions](https://bun.sh).
- **Node.js**: Required for TypeScript and other tooling. Make sure it's installed.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bun-astro-starter-with-bootstrap.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bun-astro-starter-with-bootstrap
   ```

3. Install dependencies:

   ```bash
   bun install
   ```

4. Start the development server:

   ```bash
   bun run dev
   ```

   The app will be available at `http://localhost:3000`.

## Scripts

- `dev`: Start the development server.
- `build`: Create a production build.
- `start`: Preview the production build.
- `check`: Run TypeScript checks.
- `clean`: Clean up the build directory.
- `sass`: Compile SCSS into CSS.
- `sass:watch`: Watch SCSS files and compile on changes.

## Custom Styles

### Global Styles

- The `global.css` file is available for any additional global styles, but it is currently empty. You can use it to
  define custom global CSS rules.

### Bootstrap Customization

You can customize Bootstrap in the `src/styles/bootstrap.scss` file.

Example of overriding the primary color:

```scss
$primary: #ffa500; // Custom orange primary color
```

You can import only the necessary Bootstrap components to keep the bundle size small.

## Project Structure

```plaintext
bun-astro-starter-with-bootstrap/
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Layout components
│   ├── pages/           # Page routes
│   └── styles/          # SCSS files for styles
├── public/              # Static assets
├── package.json         # Project dependencies and scripts
└── astro.config.mjs     # Astro configuration
```

## Dependencies

- `@astrojs/alpinejs`: Astro integration for Alpine.js.
- `alpinejs`: Lightweight framework for UI interactions.
- `astro`: Static site generator.
- `bootstrap`: CSS framework for responsive design.
- `typescript`: Static typing.
- `sass`: CSS preprocessor.

## Dev Dependencies

- `@astrojs/ts-plugin`: TypeScript support for Astro.
- `@types/node`: TypeScript definitions for Node.js.
- `@types/bootstrap`: TypeScript definitions for Bootstrap.
- `lightningcss`: Optimizer for CSS.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Created by **Casoon**.

```
