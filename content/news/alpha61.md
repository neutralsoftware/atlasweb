---
title: "Alpha 6.1 Release"
description: "A focused release with critical physics, Metal rendering and linting fixes."
date: "2026-02-28"
image: "/images/sponza4.png"
imageAlt: "Alpha 6.1 Release"
author: "Neutral Software"
category: "Releases"
---

After just a couple of days since the last release, we just had to present Alpha 6.1. Alpha 6.1 contains critical fixes to the functioning of the engine itself, that could not just be ignored.

## Fixes in Physics

Now, the impulse application in Rigidbodies has been fixed to be applied based on the center of mass of the object and not the origin of the world.

## Fixes in Rendering

- Shadows work again with Metal 4.
- Bloom has been fixed to work correctly with Metal 4.
- A new option to remove the default sky has been added.

## Linting Fixes

Linting has been improved to catch more issues earlier. Now every compiler warning is treated as an error, and the build will fail if any warnings are present.

## Final Note

We know this is a small release, but it was really needed to fix some critical issues. We will be working on Alpha 7 soon, with more exciting features and improvements.

This is all for now. Stay tuned for more updates and announcements as we continue to develop Atlas Engine and push the boundaries of game development! We can't wait to see what you create with it!

[Check the release in Github!](https://github.com/neutralsoftware/atlas/releases/tag/v6.1.0-alpha)
[Download Atlas Engine Alpha 6](/download)
[Join our Discord Server](https://discord.gg/WKrxKtr7kW)

Max Van den Eynde, Lead Developer of Atlas Engine
![Sign](/images/sign.png)
