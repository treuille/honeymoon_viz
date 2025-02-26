# honeymoon_viz

OpenGL based projector visualization for the 2025 Honeymoon

## Installation & Setup

1. **Install Node.js** (if not installed):  
   [Download Node.js](https://nodejs.org/)

4. **Install TypeScript**:
   ```sh
   npm install --save-dev typescript live-server
   ```

5. **Compile TypeScript & Watch for Changes**:
   ```sh
   npm run build
   ```

6. **Start a simple live server (optional, for auto-reload)**:
   ```sh
   npm run serve
   ```

7. **Open in Browser**:
   - Go to `http://localhost:3000/index.html`

## Project Structure
```
honeymoon_viz/
│── src/            # TypeScript source files
│   ├── index.ts
│── dist/           # Everything served by live-server
│   ├── index.html  # Must be here!
│   ├── index.js    # Compiled TypeScript
│── tsconfig.json
│── package.json
```

