# Claude Code Inspired Dark Theme for Zed

A custom dark theme for Zed editor inspired by Claude and Anthropic's brand colors with semi-transparent backgrounds.

![Claude Code Dark Theme Preview](screenshot.png)

## Features

### Transparency & Environment Integration
- **Semi-transparent backgrounds**: Editor backgrounds use 85-92% opacity, allowing your desktop wallpaper to subtly tint the interface
- **Wallpaper integration**: Designed to work with Claude's coral (#D97757) or orange (#E67D22) desktop background for a cohesive look
- **Window borders**: Use macOS window tiling (drag to top-middle of screen) to add a small border around Zed, allowing the background to show through on all sides

### Color Palette

#### Primary Colors
- **Claude Orange**: `#E67D22` - Keywords, accents, active elements
- **Light Orange**: `#FFB38A` - Functions, hover states
- **Cream**: `#F5E6D3` - Primary text, high contrast
- **Muted Tan**: `#C4A584` - Secondary text, parameters

#### Syntax Highlighting
- **Keywords**: Claude orange with increased weight
- **Functions**: Light orange, italicized for methods
- **Strings**: Warm green (#98C379)
- **Numbers**: Coral (#FF9966)
- **Comments**: Muted tan, italicized
- **Types**: Soft blue (#61AFEF) for contrast
- **Variables**: Cream for readability

### UI Elements

#### Editor
- Transparent dark backgrounds with warm undertones
- Active line highlighting with subtle orange glow
- Orange-tinted scrollbars
- Line numbers in muted colors, active line in orange

#### Panels & Surfaces
- Layered transparency for depth perception
- Slightly lighter surfaces for panels and sidebars
- Consistent border colors with transparency

#### Status Indicators
- **Git**: Green (created), Orange (modified), Red (deleted)
- **Diagnostics**: Warm palette for errors/warnings/info
- **Success**: Warm green matching the overall theme

### Terminal Colors
Full ANSI color palette with warm-tinted variants matching the Claude aesthetic.


## Installation

### Option 1: Install from Zed Extension Registry (Coming Soon)
Once published, you'll be able to install directly from Zed:
1. Open Zed's command palette (`cmd-shift-p` on macOS)
2. Type "Extensions" and select "zed: extensions"
3. Search for "Claude Code Inspired Dark"
4. Click Install

### Option 2: Install as Dev Extension
1. Clone this repository:
```bash
git clone https://github.com/ericbuess/claude-code-inspired-dark.git ~/Projects/claude-code-theme
```

2. Create a symlink in Zed's dev extensions folder:
```bash
mkdir -p ~/Library/Application\ Support/Zed/extensions/dev
ln -sfn ~/Projects/claude-code-theme ~/Library/Application\ Support/Zed/extensions/dev/claude-code-inspired-dark
```

3. Restart Zed and select the theme:
```json
{
  "theme": {
    "mode": "dark",
    "dark": "Claude Code Inspired Dark"
  }
}
```

## Customization Tips

### Adjusting Transparency
To modify background transparency, edit the alpha channel (last 2 hex digits):
- `E6` = 90% opacity (current editor background)
- `CC` = 80% opacity (more transparent)
- `FF` = 100% opacity (fully opaque)

Example: `#1A1614E6` → `#1A1614CC` for more transparency

### Desktop Wallpaper
For best results, use a solid or gradient orange background:
- Solid: `#D97757` (Claude's actual brand coral)
- Alternative: `#E67D22` (theme accent orange)
- Gradient: Coral to dark orange/brown
- Avoid busy patterns that might show through

### macOS System Settings
For optimal visual experience with the Claude theme:
1. **Window Tiling**: Drag Zed window to top-middle of screen
   - Creates a small border around the window
   - Allows wallpaper to show through on all sides
   - Enhances the transparency effect
2. **Reduce Motion**: Turn OFF in System Settings → Accessibility → Display
   - Allows smooth theme transitions and hover effects
3. **Cursor Colors**: Match cursor to theme colors
   - System Settings → Accessibility → Display → Pointer
   - Set to match theme accent colors

## File Structure
```
.
├── extension.toml           # Extension manifest
├── themes/
│   └── claude-code-inspired-dark.json   # Theme definition
├── screenshot.png           # Theme preview
├── README.md               # This file
└── LICENSE                 # MIT license
```

## Repository
This theme is open source and available at:
https://github.com/ericbuess/claude-code-inspired-dark

## Credits
Created with Claude's assistance for optimal VM distinction and brand consistency.