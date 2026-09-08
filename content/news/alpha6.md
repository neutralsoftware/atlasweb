---
title: "Alpha 6 just landed!"
description: "Alpha 6 includes Metal support, Atlas Tracer and Jolt Physics."
date: "2026-02-23"
image: "/images/sponza.png"
imageAlt: "Alpha 6 just landed!"
author: "Neutral Software"
category: "Releases"
---

Alpha 6 is an exciting release for many reasons. First of all, it is the release we have worked the most on since the release of the game, since in this release we have solved many issues with the Vulkan backend, which is now in a much more stable state (although it has not yet been promoted to the default backend). Also, the inclusion of Atlas Tracer is amazing, and we have completely revamped the way we do physics in Atlas Engine with the integration of Jolt Physics, which is a great physics engine that will allow us to have much more robust and efficient physics simulations in our games. Here's a deep dive into the new features and improvements in Alpha 6!

## The state of Opal Backends

Opal just got its second release: **Opal 2 Platonic**. This release includes a lot of improvements and bug fixes, and the new Metal 4 backend for macOS. But after encountering some issues with the Vulkan backend, we decided to put it in an experimental state for now, while we work on solving those issues. We are committed to providing a stable and performant experience for our users, and we want to make sure that the Vulkan backend is in a good state before promoting it to the default backend.

This is the state of the Opal backends in Alpha 6:

- OpenGL 4.1 is still the default for Windows and Linux, and it is in a very stable state. The next releases will stop focusing them, since we want to focus on things that cannot be done with OpenGL 4.1, but it will still be supported for a long time.
- Vulkan is in an experimental state, and it is not the default backend for any platform. **Forward rendering** works well, but **deferred rendering** is still a bit buggy, and we want to solve those issues before promoting it to the default backend.
- Metal 4 is the default backend for macOS, and it is in a very stable state. We are very happy with the performance and stability of the Metal backend, and we will continue to improve it in future releases.

In the future, we look forward to implement DirectX, WebGPU and fixing the Vulkan backend, but for now we want to focus on improving the existing backends and adding new features to the engine. We are committed to providing a great experience for our users, and we will continue to work hard to achieve that goal! The first Beta (which will be in late 2026) will not include DirectX nor WebGPU, but we will work on adding them in future releases after the Beta.

## Atlas Tracer

Full Atlas Tracer support is here, with the new functions to add debugging profiles and traces in the engine, and the new UI to visualize them in the Atlas Tracer app. This is a huge step forward for debugging and profiling in Atlas Engine, and we are very excited about the possibilities it opens up for developers. With Atlas Tracer, you can now easily profile your game and identify performance bottlenecks, which will help you optimize your game and make it run smoother.

## Jolt Physics

The integration of Jolt Physics is a game-changer for physics simulation in Atlas Engine. Jolt is a robust and efficient physics engine that will allow us to have much more realistic and performant physics simulations in our games. With Jolt, you can now have more complex physics interactions, vehicle physics, and more. This will open up a lot of possibilities for game developers, and we are very excited to see what you will create with it!　We plan on adding more features and improvements to the Jolt integration in future releases, so stay tuned for that!

## Our own Discord Server

We have now our own Discord Server! This is very exciting for our community. You can check it our here: [Join](https://discord.gg/WKrxKtr7kW)

## Our community YouTube Channel

Soon you will have a YouTube channel where we will post about what we do each month! Hope you like it!

## What now?

We are very excited about the release of Alpha 6, and we hope you are too! We encourage you to download it and try it out, and let us know what you think! We are always looking for feedback and suggestions from our users, so don't hesitate to reach out to us on our [Github Repository](https://github.com/neutralsoftware/atlas). But not just that - we also want to hear your thoughts on the new features and improvements in Alpha 6, and what you would like to see in future releases. We are committed to making Atlas Engine the best game engine it can be, and we can't do that without your feedback and support! So please, download Alpha 6, try it out, and let us know what you think! We can't wait to see what you create with it!

About Alpha 7, we can tease a bit of what this release will include. The features planned for it are:

- _Photon_ - our new global illumination system, which will allow us to have much more realistic lighting in our games.
- _Photon Ray_ - our new ray tracing system, which will allow us to have much more realistic reflections and shadows in our games. (This is still in decision, since it is a very complex feature to implement, but we are very excited about the possibilities it opens up for our engine and our users).
- Better Materials - we want to improve our material system to allow for more complex and realistic materials in our games. This will include features like subsurface scattering, anisotropic materials, and more.
- Better Installers - we want to improve our installers to make it easier for users to install and update Atlas Engine. This will include features like automatic updates, better error handling, and more.
- Truly multiplatform support - we want to make sure that Atlas Engine runs smoothly on all platforms, including Windows, macOS and Linux This will include a lot of optimizations and improvements to ensure that our engine runs well on all platforms.

This is all for now. Stay tuned for more updates and announcements as we continue to develop Atlas Engine and push the boundaries of game development! We can't wait to see what you create with it!

[Check the release in Github!](https://github.com/neutralsoftware/atlas/releases/tag/v6.0.0-alpha)
[Download Atlas Engine Alpha 6](/download)
[Join our Discord Server](https://discord.gg/WKrxKtr7kW)

Max Van den Eynde, Lead Developer of Atlas Engine
![Sign](/images/sign.png)
