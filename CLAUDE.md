# Honeymoon Viz Codebase Guidelines

## Build & Dev Commands
- `npm run build`: Compile TS to JS with watch mode
- `npm run serve`: Start live-server on port 3000 (dist dir)
- `npm run dev`: Run both build and serve in parallel

## Code Style Guidelines
- **TypeScript**: Use strict mode with proper type annotations
- **Naming**: camelCase for variables/functions, PascalCase for classes
- **Error Handling**: Use optional chaining/nullish checks (e.g., `if (element)`)
- **DOM Manipulation**: Type assertions for DOM elements (e.g., `as HTMLInputElement`)
- **Formatting**: 
  - 4-space indentation
  - Semicolons required
  - Single quotes preferred
- **HTML**: Use Tailwind CSS for styling
- **ES6 Features**: Prefer arrow functions, template literals, and destructuring

## Project Structure
- `src/`: TypeScript source files
- `dist/`: Compiled JS and HTML/CSS assets