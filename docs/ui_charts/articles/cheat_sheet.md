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

## Regex

- Positive: `/(?<=prefix)matching_part(?=suffix)/`
- Negative: `/(?<!prefix)matching_part(?!suffix)/`
- Back reference: `re.sub(r"(\w+\.png)", r"added_prefix_\1", content)`
