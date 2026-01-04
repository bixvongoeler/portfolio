# Falling Sand Simulation

A 2D particle simulation built with `C++` and `Raylib` that models the behavior of different elements like sand, water, stone, and gas (smoke) in a grid-based environment.

https://github.com/user-attachments/assets/18c7491f-1e65-41e8-a674-2a39cb251013

## Overview

This project simulates various elements and their interactions on a 2D grid. Each element type has unique properties and behaviors:

- **Sand**: Solid particles that fall with gravity and can pile up
- **Water**: Liquid that flows and spreads horizontally
- **Stone**: Immovable solid structures
- **Smoke**: Gas that rises and disperses

## Building the Project

#### Auto Run Script:

```bash
# Get Code
git clone https://github.com/bixvongoeler/sand_sim.git
cd sand_sim

# From Project Root
./run_sand_sim.sh
```

#### Manual Build and Run:

```bash
# Create build dir for bin objs
mkdir build && cd build

# Build with cmake
cmake ..

# Make project
make

# Run Simulation
./sand_sim

# Clean build artifacts
make clean
```

## Dependencies

- CMake >= 3.30

## Controls

- **Left Mouse Button**: Use currently selected tool
- **Right Mouse Button**: Eraser
- **c**: Clear screen
- **b**: Add thin border around edge
- **Keys 1->5**: Select tool

## Architecture

The simulation uses a modular OOP based architecture:

- **Config**: Centralizes simulation parameters and constants
- **Element**: Base class for all particle types with common behavior
- **ElementTypes**: Defines element states, movement types, and properties
- **WorldGrid**: Manages the 2D grid and simulation loop
