---
title: "Atlas Tracer is here!"
description: "A new macOS debugging application for Atlas Engine."
date: "2025-12-24"
image: "/images/tracer.png"
imageAlt: "Atlas Tracer is here!"
author: "Neutral Software"
category: "Development"
---

We're thrilled to announce the release of Atlas Tracer, our brand-new debugging and profiling application for macOS! If you've been developing with Atlas Engine, you know that understanding what's happening under the hood can sometimes feel like trying to read a book in the dark. Well, consider Atlas Tracer your flashlight.

## What is Atlas Tracer?

Atlas Tracer is a standalone macOS application that connects directly to your Atlas Engine projects, giving you real-time insight into everything happening inside your game. Think of it as mission control for your game development—a central hub where you can monitor performance, track memory usage, analyze draw calls, and profile your application as it runs.

But here's the exciting part: Atlas Tracer isn't just a simple logging tool. It's built on top of the Tracer Debugging and Profiling Protocol, a powerful communication system we've designed specifically for Atlas Engine. This protocol opens up a whole new world of possibilities for debugging and optimization.

## Why We Built This

Let's be honest—debugging graphics applications is hard. Really hard. You're dealing with thousands of objects, complex rendering pipelines, memory allocations happening every frame, and performance bottlenecks that can be incredibly difficult to track down. Traditional debugging tools often fall short when you need to understand the big picture of what's happening in your game engine.

We built Atlas Tracer because we wanted to make development on macOS not just possible, but actually _pleasant_. No more adding print statements everywhere. No more guessing why your frame rate suddenly tanked. No more wondering which object is eating all your GPU memory.

## What Can You Do With It?

Atlas Tracer gives you visibility into the heart of your Atlas Engine projects. Here's a taste of what you can monitor:

### Real-Time Performance Profiling

Watch your frame times, CPU usage, and GPU usage update live as your game runs. See exactly how long each subsystem takes to complete its work—whether that's rendering, physics, scripting, or audio. When something slows down, you'll know immediately, and you'll know exactly where to look.

### Memory Tracking

Memory management is crucial in game development, and Atlas Tracer gives you complete visibility into your application's memory footprint. Track allocations and deallocations as they happen, see which objects are using the most memory, and understand how your GPU and CPU memory usage evolves over time.

### Graphics Pipeline Insights

Dive deep into your rendering pipeline with detailed information about draw calls, triangle counts, texture usage, and more. Understanding what your renderer is doing has never been easier.

### Object-Level Debugging

Get detailed information about individual objects in your scene—from static meshes to particle systems. See how many draw calls each object is generating, how much memory it's using, and how it's affecting your overall performance.

## The Protocol Behind the Magic

What makes Atlas Tracer truly special is the Tracer Protocol that powers it. We've designed this protocol to be open, standardized, and extensible. While Atlas Tracer is our official implementation, the protocol itself is documented and available for anyone who wants to build their own debugging tools.

The protocol handles continuous data streaming—things that need to be updated every frame—as well as on-demand data requests for information that's expensive to compute. It's all communicated over TCP/IP using JSON, making it straightforward to implement and extend.

We're not going to spoil all the technical details here (that's what the full protocol specification is for!), but let's just say that the system is designed to give you unprecedented access to what's happening inside Atlas Engine. And because it's a protocol, not just a single application, the possibilities for custom tools and integrations are endless.

## Getting Started

Using Atlas Tracer is simple. Just launch your Atlas Engine application with Tracer support enabled, open Atlas Tracer on your Mac, and connect. The application will immediately start displaying real-time data from your game. From there, you can explore different views, set up custom monitoring configurations, and dig into the details of your application's behavior.

The interface is designed to be intuitive—we want you focusing on your game, not on learning how to use our tools. But don't let the simplicity fool you; there's a lot of power under the hood.

## What's Next?

This is just the beginning for Atlas Tracer. We have big plans for future versions, including:

- Integration directly into the Atlas Editor (when it's ready)
- Historical data tracking and playback
- Custom event logging and markers
- Performance regression detection
- And much more!

We're also excited to see what the community builds with the Tracer Protocol. Custom tools, IDE integrations, continuous integration monitoring—the possibilities are wide open.

## For the Technical Minds

If you're interested in implementing your own Tracer client or you want to understand exactly how the protocol works, we've published the full Tracer Debugging and Profiling Protocol specification. It covers everything from data types and message formats to connection establishment and the complete command structure.

The protocol is designed to be simple enough to implement in a weekend project but powerful enough to support professional-grade debugging tools. We can't wait to see what you build with it!

## Try It Today

Atlas Tracer is available now for macOS and works with Atlas Engine Alpha 6 and later. Whether you're building your first game with Atlas or you're a seasoned developer pushing the engine to its limits, Atlas Tracer will transform how you debug and optimize your projects.

Development should be enjoyable, and good tools make all the difference. We think Atlas Tracer is going to become an essential part of your Atlas Engine workflow, and we're excited to hear what you think!

Happy debugging, and as always, happy coding!

[Download Atlas Tracer](/download)
[Read the Protocol Specification](https://docs.atlasengine.org)
[Join the Discussion](https://github.com/neutralsoftware/atlas/discussions)
