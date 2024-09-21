# Cheat sheet

## icons

â à ç é ê è ô û ù 🙂

## CSS

```css
{
  margin: auto; /* TBLR / TB LR / T LR B / T R B L */
  display: flex;
  flex-direction: row|column;
  gap: 1rem 4rem; /* row-gap, column-gap */
  flex-wrap: nowrap;
  justify-content: start|end|center; /* main axis alignment of items */
  align-items: start|end|center|baseline; /* cross axis alignment of items (within each line) */
  align-content: start|end|center; /* cross-axis alignment of lines */
}
```

**Block elements**: start on a new line, take up the full width available stretching out to the left and right as far as they can.

Examples: div, p, h1, ul, table, hr...

**Inline elements**: do not start on a new line and only take up as much width as necessary. They can contain other inline elements but not block elements.

Examples: a, span, img, input, strong...

**display: inline-block**: like inline elements, do not start on a new line, can sit next to other elements. Unlike inline elements, can have a width and height set, and they respect top and bottom margins and padding.

**flex**: by default will stretch to fill the container’s width. But you can adjust `flex-grow: 0; flex-shrink: 1; flex-basis: auto;`

## Regex

- Positive: `/(?<=prefix)matching_part(?=suffix)/`
- Negative: `/(?<!prefix)matching_part(?!suffix)/`
- Back reference: `re.sub(r"(\w+\.png)", r"added_prefix_\1", content)`
