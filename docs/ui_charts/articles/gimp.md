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

- on Layer, right-click `Duplicate Layer`
- Select top layer. Make mask using: `Colours > Saturation` to make it greyscale , `Colours > Curces...` to make it black & White, `Colours > Invert` if needed.
- Select bottom layer. Right-click `Add Layer Mask` and select `White`.
- Copy top layer and `Crtl+V`. This will create middle layer
- Anchor the Floating Selection
- Delete the Mask Layer
