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

## 名画完整构图背景（v2）

使用 Codex 内置 imagegen 进行 style-transfer 重绘，未使用 CLI 或 Google Imagen。每幅以对应名画原作作为构图参考，保留主体和整体场景，改为蜡笔、彩铅草图；不再刻意清空中央。输出为 16:9，横向扩展边缘，避免裁切主要物件。cwebp q80/m6 压缩为版本化 WebP，旧版文件保留但不再使用。

页面以 contain 显示完整画面，底部居中，暖纸白衬底，背景层不透明度 0.22，以降低对入口和网站列表的干扰。刷新时随机选一张并避免连续重复，一次只请求选中图片。

原作参考：

- [梵高《星月夜》— MoMA](https://www.moma.org/collection/works/79802)
- [莫奈《睡莲》— Art Institute of Chicago](https://www.artic.edu/artworks/16568/water-lilies)
- [葛饰北斋《神奈川冲浪里》— The Met](https://www.metmuseum.org/art/collection/search/45434)
- [达·芬奇《蒙娜丽莎》— Louvre](https://collections.louvre.fr/ark:/53355/cl010062370)

最终完整提示词：

### starry-sky

输出：`public/backgrounds/starry-sky-v2.webp`。

```text
Use case: style-transfer. Asset type: full-page website background illustration. Input image 1 is the original masterpiece and the authoritative composition reference. Redraw the ENTIRE original painting in a naive handmade children's crayon and colored-pencil sketch style on clean warm ivory paper. Preserve the original composition, proportions, relative positions, foreground and distant scenery so the painting is immediately recognizable. This is a full scene, not edge decorations: keep imagery through the center. Use visibly rough wax-crayon hatching and soft imperfect graphite outlines, simple handmade shapes. Very pale pastel colors, low overall contrast, gentle diffuse paper grain; recognizable detail without dense dark shading or dirty texture. No added Anjing character. No UI, no typography, no signature, no watermark, no picture frame or photo borders. Output landscape 16:9: preserve the entire original composition without cropping main objects; gently extend only the far left/right periphery to fit the wider canvas. Avoid photorealism, oil-paint gloss, anime, 3D and polished vector shapes.
Van Gogh The Starry Night: retain the tall left cypress, swirling sky across the middle, stars and moon, mountains and the village with church below. Pale powder blue, faint yellow, muted sage; soften the originally dark night into a light daytime-paper value range.
```

### water-lilies

输出：`public/backgrounds/water-lilies-v2.webp`。

```text
Use case: style-transfer. Asset type: full-page website background illustration. Input image 1 is the original masterpiece and the authoritative composition reference. Redraw the ENTIRE original painting in a naive handmade children's crayon and colored-pencil sketch style on clean warm ivory paper. Preserve the original composition, proportions, relative positions, foreground and distant scenery so the painting is immediately recognizable. This is a full scene, not edge decorations: keep imagery through the center. Use visibly rough wax-crayon hatching and soft imperfect graphite outlines, simple handmade shapes. Very pale pastel colors, low overall contrast, gentle diffuse paper grain; recognizable detail without dense dark shading or dirty texture. No added Anjing character. No UI, no typography, no signature, no watermark, no picture frame or photo borders. Output landscape 16:9: preserve the entire original composition without cropping main objects; gently extend only the far left/right periphery to fit the wider canvas. Avoid photorealism, oil-paint gloss, anime, 3D and polished vector shapes.
Monet Water Lilies: preserve this specific painting’s pond, reflections and clusters of lily pads and flowers across the whole pond, including the middle. Pale lilac, powder blue, muted green and subtle peach. Do not invent a horizon or a willow-tree border.
```

### great-wave

输出：`public/backgrounds/great-wave-v2.webp`。

```text
Use case: style-transfer. Asset type: full-page website background illustration. Input image 1 is the original masterpiece and the authoritative composition reference. Redraw the ENTIRE original painting in a naive handmade children's crayon and colored-pencil sketch style on clean warm ivory paper. Preserve the original composition, proportions, relative positions, foreground and distant scenery so the painting is immediately recognizable. This is a full scene, not edge decorations: keep imagery through the center. Use visibly rough wax-crayon hatching and soft imperfect graphite outlines, simple handmade shapes. Very pale pastel colors, low overall contrast, gentle diffuse paper grain; recognizable detail without dense dark shading or dirty texture. No added Anjing character. No UI, no typography, no signature, no watermark, no picture frame or photo borders. Output landscape 16:9: preserve the entire original composition without cropping main objects; gently extend only the far left/right periphery to fit the wider canvas. Avoid photorealism, oil-paint gloss, anime, 3D and polished vector shapes.
Hokusai The Great Wave: keep the towering curling wave and foam claws on the left, the original small boats and tiny rower marks, the smaller foreground wave and distant Mount Fuji. Pale powder blue, cream and faint graphite; retain the dramatic iconic contours but render them lightly. Remove original inscription lettering.
```

### mona-lisa

输出：`public/backgrounds/mona-lisa-v2.webp`。

原作参考：[达·芬奇《蒙娜丽莎》— Louvre](https://collections.louvre.fr/ark:/53355/cl010062370)。保留原作人物；将完整半身肖像移至宽幅左侧，延展远景，避免脸被中央入口遮挡。使用内置 imagegen，初版重绘后进行一次位置调整。

初版提示词：

```text
Use case: style-transfer. Asset type: landscape 16:9 full-page website background. Image 1 is Leonardo da Vinci's Mona Lisa from the Louvre, the authoritative composition and identity reference. Redraw the complete original half-length portrait and its landscape in naive handmade wax-crayon and colored-pencil sketch style on clean warm ivory paper, matching a childish crayon-doodle website. Preserve her distinctive subtle smile, face proportions, long center-parted hair, angled shoulders, dark loose clothing silhouette and overlapping hands; keep her immediately recognizable as Mona Lisa rather than a generic cartoon woman. Keep all original portrait anatomy and pose, no cropping of head or hands. Adapt the vertical painting to a wide scene by placing the entire portrait in the LEFT THIRD with her face centered near x=28% and y=33%, her full half-length silhouette visible through the bottom, and gently extending its distant rocky hills, river and bridge across the remaining width. No new objects or other people. Face must stay away from the upper-middle area where website navigation will sit. Crude handmade uneven crayon hatching, soft rough graphite contour lines, simplified warm childlike shapes, visible but clean paper grain. Pale muted sage, cream, peach, ochre and powder blue. Clothing and hair use light graphite and taupe hatching, no dense black shapes. Delicate low contrast throughout but facial features and hands readable. Not an oil painting photograph, no realistic skin, no anime or 3D, no polished vector. Remove all museum photo edges, frame, cracks, lettering, signatures and watermarks. This is a whole recognizable painting scene, not scattered edge motifs; no artificial empty white central rectangle.
```

最终位置调整提示词（以初版为编辑目标）：

```text
Use case: precise-object-edit. Image 1 is the current crayon Mona Lisa website background. Change only the horizontal placement of Mona Lisa: move the entire unchanged woman LEFT by 9 percent of canvas width, so the face center is at x=18 percent, not x=27 percent. Keep the head, hair, shoulders, pose, hands, original facial likeness, height and scale exactly the same; do not crop head or hands. Let the outer lower-left sleeve meet the left edge naturally if needed. Smoothly redraw the surrounding landscape to fill the space left by the shifted figure, keeping the same rough wax-crayon / colored-pencil texture, distant hills and river. Keep landscape, colors, lighting, paper texture and 16:9 aspect ratio unchanged. The entire head and face must lie left of x=25 percent, so website cards beginning at x=28 percent do not cover it. No new objects, text, frames or other people.
```
