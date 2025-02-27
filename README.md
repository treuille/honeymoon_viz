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
│   ├── popup.ts
│── dist/           # Everything served by live-server
│   ├── index.html
│   ├── popup.html
│   ├── index.js    # Compiled TypeScript
│   ├── popup.js
│── tsconfig.json
│── package.json
```

## Todo

### Milestone 1: Basic Line contorol

#### Goal

- One line going up and down
- Change speed
- Change thickness
- Change the number of lines
- Change orientation
- BPM Counter for the speed?

#### Todo

- [ ] GitHub commit
- [ ] Reread all the files
    - [ ] index.ts
    - [ ] popup.ts
    - [ ] index.html
    - [ ] popup.html
- [ ] GitHub commit
- [ ] Remove extra chrome
    - [ ] index.html
    - [ ] popup.html
- [ ] GitHub commit
- [ ] Refactor the state
   - [ ] put it all into a single piece of JSON
   - [ ] read it diretly from the HTML controls
   - [ ] send it all at once to the Open GL layer at once
- [ ] GitHub commit
- [ ] Create a preview window for the OpenGL
    - [ ] Rename popup -> something more reasonable (viz)
- [ ] GitHub commit
- [ ] Start doing animated vis..

TBD

### Milestone 3: Make everything look pretty

TBD
