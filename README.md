# Bun Astro Starter with Bootstrap

![License](https://img.shields.io/github/license/casoon/bun-astro-starter-with-bootstrap)
![Stars](https://img.shields.io/github/stars/casoon/bun-astro-starter-with-bootstrap)
![Issues](https://img.shields.io/github/issues/casoon/bun-astro-starter-with-bootstrap)

A starter template using **Bun.js**, **Astro.js**, **Alpine.js**, **Bootstrap**, **Lightning CSS**, and **TypeScript**.

This project is live
at: [https://bun-astro-starter-with-bootstrap.casoon.dev/](https://bun-astro-starter-with-bootstrap.casoon.dev/)

You can use this project as a template to quickly start your own project. Simply click the **"Use this template"**
button on GitHub, and you'll have a copy of the repository to work with.

## Features

- **Bun.js**: Fast JavaScript runtime for package management and builds.
- **Astro.js**: Static site generator focused on speed and simplicity.
- **Alpine.js**: Lightweight JavaScript framework for UI interactions.
- **Bootstrap**: CSS framework for responsive and modern design.
- **TypeScript**: Static typing for a better developer experience.
- **Sass**: CSS preprocessor for writing reusable, scalable styles.
- **Lightning CSS**: Fast CSS minification and autoprefixing for optimized styles.

## Requirements

- **Bun**: Install Bun on your system by following the [official instructions](https://bun.sh).
- **Node.js**: Required for TypeScript and other tooling. Make sure it's installed.

## Getting Started

### Using as a GitHub Template

To use this repository as a template for your project:

1. Click the **"Use this template"** button at the top of the GitHub repository page.
2. Follow the prompts to create your new repository.

Alternatively, you can clone this repository manually:

1. Clone the repository:

   ```bash
   git clone https://github.com/casoon/bun-astro-starter-with-bootstrap.git
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

## Lightning CSS

This project uses **Lightning CSS** for CSS optimization. Lightning CSS handles minification and autoprefixing to ensure
that the final CSS is both lightweight and compatible with a wide range of browsers.

Lightning CSS is automatically applied during the build process, so you don’t need to configure anything manually. If
you need to customize or disable certain optimizations, you can refer to
the [Lightning CSS documentation](https://github.com/parcel-bundler/lightningcss).

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
- `lightningcss`: CSS optimizer and autoprefixer.

## Dev Dependencies

- `@astrojs/ts-plugin`: TypeScript support for Astro.
- `@types/node`: TypeScript definitions for Node.js.
- `@types/bootstrap`: TypeScript definitions for Bootstrap.

## Measuring Page Size and Performance

To measure the page size and speed of your site, you can use **Google PageSpeed Insights**.

Visit [PageSpeed Insights for this project](https://pagespeed.web.dev/analysis/https-bun-astro-starter-with-bootstrap-casoon-dev/0dl98nu056?form_factor=mobile)
to view a detailed performance report
for [https://bun-astro-starter-with-bootstrap.casoon.dev/](https://bun-astro-starter-with-bootstrap.casoon.dev/).

PageSpeed Insights provides metrics on performance, accessibility, best practices, and SEO, with specific suggestions
for improving your site’s loading speed and overall performance.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Created by **Casoon**.
