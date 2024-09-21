# GIMP

## Favicons

Crop tool: `Shift + C` and in `Tool Options`, select `Fixed: Aspect ratio`

Resize to 48 or 192 pixels: `Image > Scale Image`

Export AS: `.png`

## Use cases

### rotate (to fix horizon)

`Tools > Transform Tools > Rotate`

On docked parameters (not pop up):

- corrective (i.e. grid rotates+move, not picture)
- clipping: crop to result (delete edges to keep straight rectangle)

On pop-up:

- click: Rotate

### fix perspective

Tools > Transform Tools > Perspective
continue as for Rotate.

### Make background as different layer

#### Foreground Select

Tools > Selection Tools >  Foreground Select

#### Layer method

- `Colours` > `Components` > `Decompose...`: `HSL`
- Keep `Hue` Layer, but delete the other layers (`saturation` and `lightness`): Right-click, `Delete layer`
- `Colours` > `Curves...`: set a pass band filter to select only the desired hue.
- `Image` > `Mode`: RGB
- `File` > `Open as Layer`: select the original image file
- Select the colour image layer. Right-click `Add Layer Mask` and select `White`.
- click mask: Ctrl+C
- click maks: Ctrl+V, then click Anchor icon (to Anchor the Floating Selection)
- Delete the Mask Layer
