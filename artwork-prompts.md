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

## 新增六幅名画背景

当前随机池共十张，新增以下六张；原作人物属于画面内容，不添加安静 IP。使用 Codex 内置 imagegen，以本地原作参考进行 style-transfer。最终以 cwebp q80/m6 转为 WebP。继续每次只加载一张、加载后不轮换、不连续重复。

共享提示词（每张生成时拼接其独立提示词）：

```text
Use case: style-transfer. Asset type: full-page 16:9 website background illustration. Image 1 is the original masterpiece and the authoritative reference for its subject and arrangement. Redraw the recognizable whole scene in naive handmade children's wax-crayon and colored-pencil sketch style on clean warm ivory paper (#faf7ef). Preserve the painting's iconic objects, silhouettes, poses and relative composition. Use imperfect crayon hatching and soft rough graphite outlines, simple handmade forms, visible but clean paper grain. Light pastel colors and restrained contrasts, no dense dark shading or muddy texture. Preserve original figures; no added Anjing mascot or invented people. No UI, no text, no signature, no watermark, no photo borders, no frame. Landscape 16:9: preserve all main elements and gently extend only the surrounding setting at the periphery to fill the wide canvas. Full-scene illustration through the center, not disconnected edge decorations or a central white hole. Avoid photorealism, oil-paint gloss, anime, 3D and polished vector art.
```

### pearl-earring

输出：`public/backgrounds/pearl-earring-v2.webp`。

原作：[戴珍珠耳环的少女](https://www.mauritshuis.nl/en/our-collection/artworks/670-girl-with-a-pearl-earring)。构图参考副本来自 [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:1665_Girl_with_a_Pearl_Earring.jpg)。

```text
Vermeer Girl with a Pearl Earring. Preserve her turned head, direct gaze, parted lips, iconic blue/yellow headscarf and large drop pearl earring. The complete bust occupies the far LEFT quarter; her entire head and face must lie to the left of x=25%, face center x=17% and y=35%, so navigation at x=28–72%, y=24–41% does not cover her eyes. Keep her original pose and distinctive likeness. Replace the original black backdrop with softly scribbled pale ivory/sage paper across the full scene, no invented landscape or new props. Powder blue scarf, pale yellow, peach, warm gray garment; rough pale gray outlines.
```

### the-scream

输出：`public/backgrounds/the-scream-v2.webp`。

原作：[呐喊](https://www.nasjonalmuseet.no/en/collection/object/NG.M.00939)。

```text
Munch The Scream, this specific National Museum version. Preserve the iconic long open-mouthed oval face and hands at cheeks, long wavy figure, diagonal bridge railings, two small distant walkers, winding blue fjord and undulating orange sky. Keep whole bridge scene. The main figure is positioned at x=18% with its head at y=64%, safely away from upper-middle navigation; carry the bridge perspective and fjord toward the right by gently extending the original landscape. Render the emotional expression in simple playful crayon outlines without graphic horror. Pale peach coral sky, powder blue water, faint gray outlines, no dark black coat.
```

### grande-jatte

输出：`public/backgrounds/grande-jatte-v2.webp`。

原作：[大碗岛的星期天下午](https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884)。

```text
Seurat A Sunday on La Grande Jatte—1884. Preserve the complete riverside park composition: large parasol-holding couple at far right, left foreground reclining figures and small animals, lawn trees, row of promenading people, central woman with child and boats on the river to the left. Preserve these groups and spatial relationships, simplified as tiny naive crayon figures rather than realistic people. Replace pointillist oil paint with airy crayon speckles and colored pencil hatching. Pale sage green lawn, soft yellow sunlight, blue water and lavender shadows; no dark foreground masses. Extend only side edges slightly for 16:9, no large blank central area.
```

### sunflowers

输出：`public/backgrounds/sunflowers-v2.webp`。

原作：[向日葵](https://www.nationalgallery.org.uk/paintings/vincent-van-gogh-sunflowers)。

```text
Van Gogh Sunflowers, the specific National Gallery London yellow-background version in Image 1. Preserve the recognizable irregular bouquet with open yellow flowers, round ochre seed heads, drooping petals and stems, simple two-tone yellow ceramic vase and horizontal tabletop. Keep the WHOLE still-life bouquet and vase, rather than isolated decorative flowers. Place the vase and complete flower bouquet in the LEFT quarter of the wide scene, center x=17%, all flowers and vase left of x=27%, top y=10%, vase bottom y=90%. Preserve the distinctive original arrangement, vase proportions and simple tabletop, extending the original pale yellow wall and table across the right. Butter-yellow, faint ochre, pale sage stems, muted warm graphite outlines. No signature lettering on vase, no additional props or extra flowers, no black seeds or dense texture.
```

### the-kiss

输出：`public/backgrounds/the-kiss-v2.webp`。

原作：[吻](https://sammlung.belvedere.at/objects/6678/der-kuss-liebespaar)。

```text
Gustav Klimt The Kiss. Preserve the embracing adult couple: man bowing to kiss the woman's cheek, woman kneeling with closed eyes, hands and bare feet, the flowing shared gold robes with distinctive rectangular motifs on his side and circles/flowers on hers, flower-studded meadow under them. Fit the COMPLETE couple, full robes and meadow into the LEFT quarter of the wide scene; both heads and faces stay left of x=25%, around y=20%; keep original pose and proportion. Extend the pale gold paper field and lower meadow gently across the right. Render gold as light butter-yellow crayon, sparse soft color ornaments, not metallic gold or dark mottled background. Preserve original figures only, no extra people.
```

### american-gothic

输出：`public/backgrounds/american-gothic-v2.webp`。

原作：[美国哥特式](https://www.artic.edu/artworks/6565/american-gothic)。

```text
Grant Wood American Gothic. Preserve the iconic solemn woman beside the older man wearing round glasses and holding the three-tined pitchfork, their distinctive clothing and frontal half-length arrangement, the white farmhouse with Gothic arched window and the red barn. Fit the whole original pair and farmhouse group into the LEFT third of the wide canvas; their heads centered near x=9% and x=22%, neither face right of x=26%, around y=35%, avoiding the upper-middle navigation. Preserve relative left/right arrangement and pitchfork silhouette, extending the same pale rural yard/sky to the right, no new houses or people. Pale sage trees, cream farmhouse, soft blue overalls, pale peach faces and warm gray coats; no dense black shading.
```

最终布局调整（以初版重绘为编辑目标）：

```text
Use case: precise-object-edit. Image 1 is the current crayon reinterpretation of American Gothic. Correct ONLY the layout for a website background. Scale the entire original pair, pitchfork, farmhouse and red barn together down to approximately 60% of their current size, preserving all internal proportions, and place this intact group in the FAR LEFT THIRD anchored near the bottom edge. Keep both complete heads and faces, original facial likeness, solemn expressions, half-length poses, clothing, pitchfork and farmhouse architecture unchanged. Woman face center near x=8%, man face center near x=22%; man's entire head must stay left of x=26%. Heads around y=48%–58%, below the navigation. Neither face may be cropped. Preserve all limbs and the three-tined pitchfork. Smoothly extend the existing pale rural field and sky across the rest of the wide scene, no empty rectangular hole. Keep the same crayon/colored-pencil style, palette, clean paper texture and 16:9 format. No new props, houses, people, typography or frame.
```
