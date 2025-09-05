# Claude Code Dark Theme for Zed

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

## ⚠️ Important Note

Due to Zed limitations, local themes can only style UI elements, not syntax highlighting. You must add `experimental.theme_overrides` to your settings.json for syntax colors to work.

## Installation

1. Clone this repository or download the theme file:
```bash
git clone https://github.com/ericbuess/zed-claude-theme.git
```

2. Copy the theme to your Zed configuration:
```bash
mkdir -p ~/.config/zed/themes
cp themes/claude-code-dark.json ~/.config/zed/themes/
```

3. Update your `settings.json` with BOTH theme selection AND syntax overrides:
```json
{
  "theme": {
    "mode": "dark",
    "dark": "Claude Code Dark"
  },
  "experimental.theme_overrides": {
    "syntax": {
      "keyword": { "color": "#FF6B35", "font_weight": 700 },
      "string": { "color": "#7FE068" },
      "function": { "color": "#FFD700" },
      "comment": { "color": "#7F7F7F", "font_style": "italic" },
      "number": { "color": "#FF69B4" },
      "variable": { "color": "#E6B89C" },
      "type": { "color": "#00CED1" },
      "operator": { "color": "#FF69B4" },
      "property": { "color": "#FFA07A" },
      "constant": { "color": "#FFA500" },
      "punctuation": { "color": "#8B7355" },
      "punctuation.bracket": { "color": "#F5E6D3" },
      "attribute": { "color": "#E5C07B" },
      "constructor": { "color": "#E67D22" }
    }
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
themes/
└── claude-code-dark.json   # Theme definition
```

## Version Control
This configuration is tracked in a private GitHub repository:
https://github.com/ericbuess/zed-claude-theme

## Credits
Created with Claude's assistance for optimal VM distinction and brand consistency.