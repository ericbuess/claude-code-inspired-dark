# Zed Theme Customization Project

## Objective
Create a custom dark theme for Zed editor in a macOS VM that:
1. Uses Claude/Anthropic brand colors (orange #E67D22 as primary)
2. Has transparent backgrounds to let the orange desktop wallpaper show through
3. Makes it easy to distinguish when working in the VM vs host macOS
4. Has proper syntax highlighting with distinct colors for different code elements

## Current Issue
**All text appears as the same light color (#F5E6D3) - no syntax highlighting is working**

## What We've Tried

### 1. Created Custom Theme
- Location: `/Users/ericbuess/.config/zed/themes/claude-code-dark.json`
- Theme is valid JSON (verified with python3 -m json.tool)
- Uses schema v0.2.0 as required
- Theme appears in Zed and is selected in settings.json

### 2. Color Changes Attempted
- **Initial issue**: Variable color was same as foreground (#F5E6D3)
- **Fixed to**: Variables now #E6B89CFF (warm peach)
- Made all syntax elements distinct colors:
  - Keywords: #FF6B35FF (bright orange)
  - Functions: #FFD700FF (gold)
  - Strings: #7FE068FF (bright green)
  - Numbers: #FF69B4FF (hot pink)
  - Types: #00CED1FF (turquoise)
  - Comments: #7F7F7FFF (gray)

### 3. Format Fixes
- **Discovery**: Zed requires 8-character hex colors with alpha channel
- **Fixed**: All syntax colors now use #RRGGBBAA format (added FF for full opacity)
- This matches the format used in official Zed themes

### 4. Theme Structure
Our theme follows the exact structure of built-in themes:
```json
{
  "$schema": "https://zed.dev/schema/themes/v0.2.0.json",
  "name": "Claude Code Dark",
  "author": "Eric Buess & Claude",
  "themes": [{
    "name": "Claude Code Dark",
    "appearance": "dark",
    "style": { /* UI colors - these work */ },
    "syntax": { /* Syntax colors - these don't work */ }
  }]
}
```

### 5. Testing
- Created test files: `test-theme.js`, `test-simple.js`, `color-test.js`
- All show the same symptom: uniform light text color
- Theme is selected and UI colors (backgrounds, borders) work with transparency
- Only syntax highlighting fails

## Repository
- Git repo initialized at `/Users/ericbuess/.config/zed/`
- Pushed to private GitHub: https://github.com/ericbuess/zed-claude-theme
- Files tracked: themes/, settings.json, README.md, test files

## Next Steps to Try
1. Check if this is a Zed bug with custom themes
2. Try copying an entire working theme and just changing colors
3. Check Zed logs for theme loading errors
4. Test with a minimal syntax section (just 2-3 colors)
5. Verify file type detection is working (does Zed know it's JavaScript?)
6. Try the experimental.theme_overrides in settings.json
7. Check if there's a theme cache that needs clearing

## Environment
- macOS in Parallels VM
- Zed editor (version unknown - could check)
- Orange desktop wallpaper (#E67D22) for VM identification
- Theme uses transparency (85-92% opacity) for background bleed-through