# Cheat sheet

## icons

â à ç é ê è ô û ù 🙂

## CSS

```css
{
  margin: auto; /* TBLR / TB LR / T LR B / T R B L */

  /* for flex container: */
  display: flex;
  flex-direction: row|column;
  gap: 1rem 4rem; /* row-gap, column-gap */
  flex-wrap: nowrap|wrap;  /* when items do not fit on 1 line: whether to start a new line  */
  justify-content: start|end|center; /* main-axis aligns items within a line */
  justify-items: stretch|start|end|center;  /* main-axis aligns content of each item (within the item box). Same as setting justify-self on each item */
  align-content: stretch|start|end|center; /* cross-axis aligns lines within the flex container, if cross-axis size (e.g. height) > content */
  align-items: stretch|start|end|center|baseline; /* cross-axis aligns items within a line. stretch: if flex container height is set: will set items' default height. Same as setting align-self on each item */
}
```

NB: `justify` is for main axis, `align` is for cross-axis.

**Block elements**: start on a new line, take MAXIMUM width (all available).

Examples: div, p, h1, ul, table, hr...

**Inline elements**: do not start on a new line. Take minimum width (to fit content). Cannot set width or height. They can contain other inline elements but not block elements.

Examples: a, span, img, input, strong...

**display: inline-block**: like inline elements, do not start on a new line. Unlike inline elements, can have a width and height set (and respect top/bottom margins and padding).

**flex** container: block element (take MAXIMUM width). You can make it minimum, with `flex-grow: 0; flex-shrink: 1; flex-basis: auto;`

**clearfix**: clear floats by adding `.clearfix` to the parent element

## Regex

- Positive: `/(?<=prefix)matching_part(?=suffix)/`
- Negative: `/(?<!prefix)matching_part(?!suffix)/`
- Back reference: `re.sub(r"(\w+\.png)", r"added_prefix_\1", content)`
