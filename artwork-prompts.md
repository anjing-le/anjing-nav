# 安静导航插画提示词

使用 Codex 内置 imagegen 编辑生成，透明背景。四类入口只使用物件，不包含人物、脸、动物或拟人角色。保留粗黑马克笔轮廓、蜡笔填色和纸张纹理。图像在检查后转为 640×640 WebP，保留透明通道；页面无外部图片请求。

## personal

输出：`public/illustrations/personal.webp`。

Edit this drawing into a PURE OBJECT category illustration, with ZERO people or characters. Completely remove the boy, yellow hair, face, head, body, hoodie, arms, hands and feet. Do not show any person, face, body part, animal, mascot or anthropomorphic object. Preserve only the drawing style: crude childlike wax-crayon doodle, thick very rough black marker outlines, visible white paper grain inside scribbly uneven wax-crayon colored shapes. Warm handmade feeling, naive charming objects, not polished vector art, not anime, not 3D. Transparent background. No text, letters, labels, logos, frame or card. Recompose and enlarge the objects into a balanced single square composition occupying roughly 80 percent of the canvas with small even margins. Draw a cozy little off-white house with an egg-yolk yellow roof beside a small open off-white laptop with one yellow circular mark on its cover. A little grass-green sprout and two tiny yellow stars. A simple cheerful icon for my own websites.

## tools

输出：`public/illustrations/tools.webp`。

Edit this drawing into a PURE OBJECT category illustration, with ZERO people or characters. Completely remove the boy, yellow hair, face, head, body, hoodie, arms, hands and feet. Do not show any person, face, body part, animal, mascot or anthropomorphic object. Preserve only the drawing style: crude childlike wax-crayon doodle, thick very rough black marker outlines, visible white paper grain inside scribbly uneven wax-crayon colored shapes. Warm handmade feeling, naive charming objects, not polished vector art, not anime, not 3D. Transparent background. No text, letters, labels, logos, frame or card. Recompose and enlarge the objects into a balanced single square composition occupying roughly 80 percent of the canvas with small even margins. Draw a pastel sky-blue toolbox containing a chunky gray wrench and yellow screwdriver, with a magnifying glass and one small grass-green puzzle piece beside it. One tiny yellow sparkle. A simple cheerful icon for useful tool websites.

## work

输出：`public/illustrations/work.webp`。

Edit this drawing into a PURE OBJECT category illustration, with ZERO people or characters. Completely remove the boy, yellow hair, face, head, body, hoodie, arms, hands and feet. Do not show any person, face, body part, animal, mascot or anthropomorphic object. Preserve only the drawing style: crude childlike wax-crayon doodle, thick very rough black marker outlines, visible white paper grain inside scribbly uneven wax-crayon colored shapes. Warm handmade feeling, naive charming objects, not polished vector art, not anime, not 3D. Transparent background. No text, letters, labels, logos, frame or card. Recompose and enlarge the objects into a balanced single square composition occupying roughly 80 percent of the canvas with small even margins. Draw a small off-white office building with four simple square yellow windows, beside a pastel green laptop and a small green spiral notebook. A tiny yellow sun-like sparkle. No desk chair, no person. A simple cheerful icon for company websites.

## wander

输出：`public/illustrations/wander.webp`。

Edit this drawing into a PURE OBJECT category illustration, with ZERO people or characters. Completely remove the boy, yellow hair, face, head, body, hoodie, arms, hands and feet. Do not show any person, face, body part, animal, mascot or anthropomorphic object. Preserve only the drawing style: crude childlike wax-crayon doodle, thick very rough black marker outlines, visible white paper grain inside scribbly uneven wax-crayon colored shapes. Warm handmade feeling, naive charming objects, not polished vector art, not anime, not 3D. Transparent background. No text, letters, labels, logos, frame or card. Recompose and enlarge the objects into a balanced single square composition occupying roughly 80 percent of the canvas with small even margins. Draw a tiny blue-and-grass-green globe on a black stand, next to an open pastel lavender book, two small stacked lavender books and simple black-and-lavender headphones resting on the books. One tiny yellow sparkle. A simple cheerful icon for miscellaneous websites and browsing.



## 名画灵感背景

使用 Codex 内置 imagegen 生成（未使用 CLI 或 Google Imagen），无参考图，生成四张独立宽幅图片后以 cwebp q80 转为 WebP。每次页面加载随机选一张，使用过程中固定；localStorage 记录上次背景以避免连续重复，存储不可用时仍可随机加载。一次只请求选中图片，不预加载其余三张。

共享提示词：

```text
Use case: stylized-concept. Asset type: full-screen background for a minimalist personal website, one landscape image, 16:9. Original loosely hand-drawn reinterpretation inspired by a famous landscape painting, NOT a painting photograph or a literal full reproduction. Medium: delicate naive wax-crayon and graphite sketch on CLEAN warm ivory paper (#faf7ef), airy and handmade. Extremely low contrast pastel marks, no black outlines, no dark dense shading, very faint minimal paper texture. The center 50 percent of the width and upper-middle 75 percent of the height must remain nearly EMPTY pale paper for navigation cards, not a white rectangular hole; smoothly taper artwork toward this empty area. Place sparse recognizable motifs mainly along the far left/right edges and bottom corners. All imagery barely tinted, softly erased pencil, white space dominates, no vignette, no muddy grain, no stains, no UI elements, no text, captions, signatures, borders, frames, people, faces, animals. Background must feel calm and clean rather than washed-out dirty. Landscape wide composition, pale near-white overall.
```

### starry-sky

输出：`public/backgrounds/starry-sky.webp`。

```text
Inspired by the composition of Vincent van Gogh's The Starry Night: a few soft pale blue spiral sky lines and tiny pale butter-yellow star disks along the top corners; a gently curved slate-blue hill line near the bottom edge, a very small simplified cypress silhouette on the far left in light sage gray. Never dark navy or black. No dense swirling middle.
```

### water-lilies

输出：`public/backgrounds/water-lilies.webp`。

```text
Inspired by Claude Monet's Water Lilies: a handful of light sage-green lily pads and tiny muted pink blossoms at the outer lower-left and lower-right; faint pale blue horizontal pond reflections near the edges. Center remains almost empty warm paper. No bridge, no full pond covering center, no saturated greenery.
```

### great-wave

输出：`public/backgrounds/great-wave.webp`。

```text
Inspired by Hokusai's The Great Wave off Kanagawa: one elegantly simplified pale powder-blue curving wave rising from the far lower-left edge, faint foam curls, a tiny distant pale gray-blue Mount Fuji near the far lower-right. Keep the big central field almost entirely empty paper. No boats, people, dark outlines, dramatic dense ocean.
```

### quiet-mountain

输出：`public/backgrounds/quiet-mountain.webp`。

```text
Inspired by Paul Cezanne's Mont Sainte-Victoire landscape studies: an extremely faint lavender-gray triangular mountain contour toward the upper-right outer edge, a few light sage/ochre crayon strokes for fields along lower-left and lower-right. Airy unfinished pencil sketch, no central mountain or densely painted land, no houses or people.
```
