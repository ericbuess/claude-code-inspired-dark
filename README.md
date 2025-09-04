# Claude Code Dark Theme for Zed

A custom dark theme for Zed editor inspired by Claude and Anthropic's brand colors, designed specifically for VM environments with visual distinction.

## Features

### Transparency & Environment Integration
- **Semi-transparent backgrounds**: Editor backgrounds use 85-92% opacity, allowing your desktop wallpaper to subtly tint the interface
- **Orange wallpaper integration**: Designed to work with Claude's signature orange (#E67D22) desktop background for a cohesive look
- **VM distinction**: Instantly recognizable when switching between host and VM macOS environments

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

1. Clone this repository or download the theme file:
```bash
git clone https://github.com/ericbuess/zed-claude-theme.git
```

2. Copy the theme to your Zed configuration:
```bash
mkdir -p ~/.config/zed/themes
cp themes/claude-code-dark.json ~/.config/zed/themes/
```

3. Update your `settings.json`:
```json
{
  "theme": {
    "mode": "dark",
    "dark": "Claude Code Dark"
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
1. **Reduce Motion**: Turn OFF in System Settings → Accessibility → Display
   - Allows smooth theme transitions and hover effects
2. **Cursor Colors**: Match cursor to theme colors
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