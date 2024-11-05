# Tailwind CSS Example Component Library for Ignition Perspective

This project is a Tailwind CSS-enabled variant of the [Example Component Library](https://github.com/design-group/example-perspective-component-module). It demonstrates how to create custom components for Ignition Perspective using Tailwind CSS for styling, providing a utility-first approach to component design.

## Overview

This variant adds Tailwind CSS integration to the base Example Component Library, allowing developers to:
- Use utility-first CSS classes in Perspective components
- Maintain consistent styling across components
- Leverage PostCSS for modern CSS processing
- Take advantage of Tailwind's responsive design utilities

If you're looking for the base example without Tailwind CSS, please see the [original Example Component Library](https://github.com/design-group/example-perspective-component-module).

## Project Structure

The project follows the same structure as the base Example Component Library, with additional configuration for Tailwind CSS:

- `common`: Shared code used by both the Gateway and Designer
- `designer`: Designer-specific code
- `gateway`: Gateway-specific code
- `web`: Frontend React components and Tailwind CSS configuration
    - `tailwind.config.js`: Tailwind CSS configuration
    - `postcss.config.js`: PostCSS configuration
    - `src/css/styles.css`: Main CSS file with Tailwind directives
- `docker`: Contains Docker-related files for development and testing

### Key Differences from Base Example

This variant includes these additional configurations:
1. Tailwind CSS and PostCSS setup
2. Modified webpack configuration for CSS processing
3. Updated example components using Tailwind utility classes
4. Additional development dependencies for CSS processing

## Components

Currently, this project includes one example component:

- `Button`: A customizable button component (`web/src/components/Button.tsx`) demonstrating Tailwind CSS styling patterns

## Tools and Technologies

All the base technologies from the Example Component Library, plus:
- Tailwind CSS for utility-first styling
- PostCSS for CSS processing
- Additional webpack loaders for CSS handling

## Getting Started

Follow these steps to get started with the Tailwind CSS variant:

1. Ensure you have Java 11, Gradle, and Node.js installed.

2. Clone this repository:
   ```bash
   git clone https://github.com/keith-gamble/ignition-module-with-tailwind-css.git
   cd ignition-module-with-tailwind-css
   ```

3. Build the web components:
   ```bash
   cd web
   npm install
   npm run build
   ```

4. Build the entire module:
   ```bash
   cd ..
   ./gradlew build
   ```

For detailed setup instructions, see our [Environment Setup Guide](docs/environment-setup.md).

## Development Workflow

The development workflow remains the same as the base example, with these Tailwind-specific additions:

1. Use Tailwind utility classes in your component JSX
2. Add custom styles to `web/src/css/styles.css` if needed
3. Configure theme settings in `tailwind.config.js`
4. Run `npm run watch` in the `web` directory to see CSS changes in real-time

See the [Web Technologies Guide](docs/web-technologies.md) for detailed information about working with Tailwind CSS in this project.

## Documentation

- [Environment Setup Guide](docs/environment-setup.md)
- [Getting Started Guide](docs/getting-started.md)
- [Adding Components Guide](docs/adding-components.md)
- [Web Technologies Guide](docs/web-technologies.md) - **Important:** Includes Tailwind CSS setup and usage
- [Building the Module](docs/building-the-module.md)
- [CI/CD Setup Guide](docs/ci-cd-setup.md)

## Why Use This Variant?

Choose this variant if you:
- Want to use utility-first CSS in your Perspective components
- Need a consistent design system across components
- Prefer working with Tailwind's utility classes
- Want to leverage modern CSS tooling in your module

If you don't need Tailwind CSS, consider using the [base Example Component Library](https://github.com/keith-gamble/example-perspective-component-module) instead.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE.txt file for details.