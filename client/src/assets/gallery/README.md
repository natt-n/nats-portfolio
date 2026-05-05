# Gallery photos

Drop your photos into this folder, then add an entry to
`src/data/gallery.js`.

## Add a photo

```js
{
  src: require("../assets/gallery/hackathon-win.jpg"),
  caption: "Canadian Engineering Competition · 2025"
}
```

## Remove the placeholders

In `src/data/gallery.js`, delete any object whose `src` is `null` once
you've added enough real photos.

## Tips

- Aim for roughly square or portrait photos — they look best in the
  masonry layout.
- Compress before committing (e.g. `tinypng.com`) so the page stays fast.
- Captions are optional; omit the `caption` field to hide it.
- `aspect` and `hue` only affect placeholders. Real photos use their
  natural aspect ratio.
