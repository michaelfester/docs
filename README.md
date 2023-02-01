# Glide Docs

## Content

All docs content is under [docs](/docs).

### Slugs

Include a slug in frontmatter to create a stable link to it, no matter the file name or location.

For example, in `pages/reference/actions/math-column.md`:

```md
---
title: Math Column
slug: math
---

...
```

This page can be linked to as `/docs/math` from anywhere. Even if the markdown file is renamed or moved, `/docs/math` will redirect to it.

## For Developers

View [.dev](/.dev)
