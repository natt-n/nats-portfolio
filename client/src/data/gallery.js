/* ----------------------------------------------------------
   Gallery data
   ----------------------------------------------------------
   How to add a real photo:
   1. Drop the image file into:  src/assets/gallery/
        e.g.  src/assets/gallery/hackathon-win.jpg
   2. Add an entry below. Wrap the path in require(...) so
      Webpack hashes and bundles it correctly:

        {
          src: require("../assets/gallery/hackathon-win.jpg"),
          caption: "Canadian Engineering Competition · 2025"
        }

   3. Delete any { src: null, ... } placeholder entries you
      no longer need.

   Notes:
   - `aspect` only affects placeholders (entries with src: null).
     Real photos use their natural aspect ratio.
   - `hue` (1–4) picks one of the soft lavender/mint placeholder
     gradients. Ignored when `src` is set.
   - `caption` is optional. Leave it out to hide the caption.
---------------------------------------------------------- */

const gallery = [
  { src: null, caption: "drop a photo here", aspect: 1.25, hue: 1 },
  { src: null, caption: "vsco vibes",        aspect: 0.85, hue: 2 },
  { src: null, caption: "moments",           aspect: 1.4,  hue: 3 },
  { src: null, caption: "behind the build",  aspect: 1.0,  hue: 4 },
  { src: null, caption: "team things",       aspect: 1.55, hue: 1 },
  { src: null, caption: "wins",              aspect: 0.9,  hue: 2 },
  { src: null, caption: "campus life",       aspect: 1.15, hue: 3 },
  { src: null, caption: "travel",            aspect: 1.35, hue: 4 },
  { src: null, caption: "side quests",       aspect: 1.0,  hue: 1 },
];

export default gallery;
