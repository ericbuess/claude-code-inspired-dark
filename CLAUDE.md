# Claude Code Dark Theme for Zed

A warm, dark theme for Zed editor inspired by Anthropic's Claude brand colors, featuring semi-transparent backgrounds and distinct syntax highlighting.

## Features

- **Claude Brand Colors**: Primary accent color #E67D22 (warm orange) throughout
- **Semi-Transparent Backgrounds**: 85-92% opacity allows desktop wallpaper to show through
- **Distinct Syntax Highlighting**: Clear color differentiation for all code elements
- **Optimized for Dark Mode**: Easy on the eyes for extended coding sessions

## Installation

### Method 1: Local Installation (Recommended)

1. **Download or clone this repository**:
   ```bash
   git clone https://github.com/ericbuess/zed-claude-theme.git
   
   # Or download the theme file directly
   ```

2. **Copy the theme to your Zed config**:
   ```bash
   mkdir -p ~/.config/zed/themes
   cp themes/claude-code-dark.json ~/.config/zed/themes/
   ```

3. **Activate the theme** in Zed:
   - Open Command Palette: `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Linux)
   - Type "theme selector: toggle"
   - Search for "Claude Code Dark"
   - Select it to activate

### Method 2: Settings Configuration

Add to your `~/.config/zed/settings.json`:

```json
{
  "theme": {
    "mode": "dark",
    "dark": "Claude Code Dark"
  }
}
```

## Syntax Color Scheme

The theme uses distinct colors for different code elements:

- **Keywords** (`if`, `for`, `function`): Bold orange (#FF6B35)
- **Functions**: Gold (#FFD700)
- **Strings**: Bright green (#7FE068)
- **Numbers**: Hot pink (#FF69B4)
- **Variables**: Warm peach (#E6B89C)
- **Types**: Turquoise (#00CED1)
- **Comments**: Gray italic (#7F7F7F)
- **Properties**: Light salmon (#FFA07A)
- **Constants**: Orange (#FFA500)

## Terminal Color Configuration

For the best experience with colored terminal output (like `ls` commands), configure your shell:

### macOS Terminal Setup

1. **Install GNU coreutils** for better color support:
   ```bash
   brew install coreutils
   ```

2. **Add to your `~/.zshrc`** (or `~/.bashrc`):
   ```bash
   # Terminal colors for ls command
   export CLICOLOR=1
   export LSCOLORS=ExGxBxDxCxEgEdxbxgxcxd
   
   # GNU ls colors - enhanced file type coloring
   export LS_COLORS="di=34;1:ln=36;1:so=35;1:pi=33;1:ex=32;1:*.js=33;1:*.ts=33;1:*.jsx=33;1:*.tsx=33;1:*.json=35:*.md=36;1:*.yml=35:*.yaml=35:*.sh=32;1:*.py=33;1:*.rb=31;1:*.go=36;1:*.rs=31:*.c=34;1:*.cpp=34;1:*.h=34:*.tar=31:*.zip=31:*.gz=31:*.jpg=35:*.png=35:*.gif=35:*.pdf=36"
   
   # Use GNU ls for better colors
   if command -v gls &>/dev/null; then
       alias ls="gls --color=auto"
   fi
   ```

3. **Reload your shell configuration**:
   ```bash
   source ~/.zshrc
   ```

Now `ls` will show:
- Directories in blue
- Executables in green
- JavaScript/TypeScript in yellow
- JSON/YAML in magenta
- Markdown in cyan
- Archives in red
- Images in magenta

## Customization Tips

### Desktop Wallpaper
For the best visual integration, set your desktop wallpaper to a solid color:
- **Recommended**: #D97757 (Claude's coral/salmon brand color)
- **Alternative**: #E67D22 (the theme's primary accent orange)

The theme's semi-transparent backgrounds will allow the wallpaper color to subtly show through, creating a cohesive visual experience.

### Transparency Levels
The theme uses various transparency levels:
- Editor background: 85% opacity
- UI elements: 60-80% opacity
- Terminal: 90% opacity

## Requirements

- **Zed Version**: Compatible with Zed 0.202.0 and later
- **Schema Version**: Uses theme schema v0.2.0
- **Color Format**: All colors use 8-character hex codes with alpha channel (#RRGGBBAA)

## Known Issues

- Zed's integrated terminal may not fully render all ANSI color codes for file extensions
- Colors work best in external terminals (Terminal.app, iTerm2) when using the shell configuration above

## Contributing

Feel free to submit issues or pull requests on GitHub if you'd like to suggest improvements or report bugs.

## License

This theme is provided as-is for personal use within the Zed editor.

---

*Created by Eric Buess with assistance from Claude*