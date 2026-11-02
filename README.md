# Norroth Desktop

An unofficial Linux desktop client for [Norroth](https://www.norroth.com/), built with Electron.

## Features

- Dedicated desktop application window
- Native Linux window controls
- Resizable and maximizable interface
- Fullscreen support using F11
- Persistent application session
- Runs as a standalone Linux AppImage

## Installation

1. Download the latest `Norroth Desktop` AppImage from the [Releases](../../releases) page.
2. Open a terminal in the download directory.
3. Make the application executable:

   ```bash
   chmod +x "Norroth Desktop-1.0.0.AppImage"
   ```

4. Launch the application:

   ```bash
   ./"Norroth Desktop-1.0.0.AppImage"
   ```

The filename may vary between releases.

## Requirements

- A compatible Linux distribution
- Internet connection
- A supported graphics environment

## Disclaimer

This is an unofficial, community-developed desktop wrapper for Norroth. It is not affiliated with, endorsed by, or maintained by the Norroth developers.

The application loads the Norroth website and does not independently host or distribute the game itself.

## Development

Built using Electron and electron-builder.

To run locally:

```bash
npm install
npm start
```

To build the Linux AppImage:

```bash
npm run dist
```

## License

No license has been assigned. All rights to Norroth and its associated content remain with their respective owners.
