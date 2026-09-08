---
title: "Atlas Engine Alpha 9: the editor era begins"
description: "Alpha 9 brings the first complete Atlas editor, a finished runtime, scripting, project management and a macOS DMG."
date: "2026-07-19"
image: "/images/landing.png"
imageAlt: "Atlas Engine Alpha 9: the editor era begins"
author: "Neutral Software"
category: "Releases"
---

Alpha 9 is the largest change to Atlas Engine so far. It turns the engine from a collection of powerful systems into a place where a project can be created, opened, edited and run as one continuous workflow.

This release is also the first major Atlas release under **Neutral Software**. The name on the repository has changed, but the direction has not: Atlas remains open source, ambitious and built for developers who want to understand and control the technology behind their worlds.

## A complete runtime

The new Atlas runtime can open a packed project and run its scenes without requiring the project itself to be rebuilt as a C++ application. Alpha 9 formalizes the scene packing format, connects projects to the runtime and introduces scripting so behavior can live with the content it controls.

That separation matters. The engine can now provide a focused runtime for the finished experience while the editor remains a dedicated environment for building it.

## The first real Atlas editor

Alpha 9 introduces the first complete version of the Atlas editor. It includes:

- Onboarding for new users
- Project listing and project creation
- A live viewport connected to the Atlas runtime
- Viewport controls and editor keyboard shortcuts
- Scene hierarchy and content tools
- A richer inspector
- A material editor
- UI overlays and a refined desktop layout

During development, the editor moved to Qt and its layout was rebuilt around a native desktop workflow. The result is an application that feels less like a layer over the engine and more like the natural way to use it.

## A project can stay in motion

The project manager leads into the editor, the editor manipulates the same scene data consumed by the runtime, and the runtime can save the current scene back to the project. Those pieces make Alpha 9 a workflow release as much as an engine release.

You can create a project, shape its hierarchy, edit materials and object properties, preview the result in the viewport, save it and run it without leaving the Atlas environment.

## Easier to install on macOS

The editor is now packaged with its dependencies, and the Alpha 9 release includes a macOS DMG for Apple silicon. The website now detects macOS and links directly to the `.dmg` attached to the GitHub release.

The current artifact is a debug build for arm64. Additional platform packages will appear on the same release page as they become available.

## Download Alpha 9

Atlas Engine Alpha 9 was published on **July 19, 2026** as [`v9.0.0-alpha`](https://github.com/neutralsoftware/atlas/releases/tag/v9.0.0-alpha).

[Download Atlas Engine Alpha 9](/download) or read the [complete changelog on GitHub](https://github.com/neutralsoftware/atlas/releases/tag/v9.0.0-alpha).

This is the beginning of the editor era for Atlas. There is more to refine, more to document and more platforms to package—but the engine now has the workflow it was always meant to grow into.

Keep building,

_The Atlas Engine team at Neutral Software_
