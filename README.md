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

- [x] GitHub commit
- [ ] Reread all the files
    - [x] index.html
    - [x] index.ts
    - [x] popup.html
    - [x] popup.ts
- [ ] GitHub commit
- [ ] Cleanup the code
    - [ ] index.html
    - [ ] popup.html
       - [ ] Use tailwind css to do all the styling on the canvas
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

### Milestone 2: Nicer looking viz

#### Ideas

- Is there a perspective mode that I could create which would invert the
  perspective that we're seeing on the trees?

### Milestone 3: Make everything look pretty

TBD
