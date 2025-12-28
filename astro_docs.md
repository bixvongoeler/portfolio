### Install Astro Integrations for Frameworks

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Instructions for installing new Astro integrations and their corresponding frameworks using npm. This replaces the old `renderers` system. The examples show how to install Lit and React integrations.

```bash
# Install your new integrations and frameworks:
# (Read the full walkthrough: https://docs.astro.build/en/guides/integrations-guide)
npm install @astrojs/lit lit
npm install @astrojs/react react react-dom
```

--------------------------------

### Create New Astro Project with Yarn

Source: https://docs.astro.build/en/install-and-setup

This command initiates the creation of a new Astro project using Yarn. It leverages the `create astro` command provided by Yarn to start the project setup wizard.

```bash
yarn create astro
```

--------------------------------

### Install Prisma Dependencies and Initialize Project

Source: https://docs.astro.build/en/guides/backend/prisma-postgres

Installs necessary Prisma packages for an Astro project and initializes the Prisma environment, creating configuration files.

```bash
npm install prisma tsx --save-dev
npm install @prisma/extension-accelerate @prisma/client
npx prisma init --db --output ../src/generated/prisma
```

--------------------------------

### Create Astro Project from Official Example (npm)

Source: https://docs.astro.build/en/install-and-setup

This command creates a new Astro project based on an official Astro example template using npm. The `--template` flag specifies the name of the official example to use.

```bash
npm create astro@latest -- --template <example-name>
```

--------------------------------

### Create Astro Project from Official Example (pnpm)

Source: https://docs.astro.build/en/install-and-setup

This command creates a new Astro project using an official example template with pnpm. The `--template` flag is used to specify which official starter template to use for the project.

```bash
pnpm create astro@latest --template <example-name>
```

--------------------------------

### Install Integrations and Frameworks Together (npm)

Source: https://docs.astro.build/en/guides/upgrade-to/v1

This command installs Astro integrations along with their corresponding framework packages, ensuring correct peer dependency management. It's crucial for avoiding 'Cannot find package' warnings when starting Astro.

```bash
# Example: Install integrations and frameworks together
npm install @astrojs/react react react-dom

```

--------------------------------

### Create Astro Project from Official Example (Yarn)

Source: https://docs.astro.build/en/install-and-setup

This command creates a new Astro project from an official example using Yarn. The `--template` argument is passed to the `create astro` command to select the desired official starter template.

```bash
yarn create astro --template <example-name>
```

--------------------------------

### Self-Host Astro Application with Environment Variables

Source: https://docs.astro.build/en/guides/integrations-guide/node

This Dockerfile example illustrates setting up an Astro application for self-hosting. It includes installing dependencies, building the application, and setting environment variables at runtime using `ENV` directives before starting the server.

```dockerfile
FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV DB_HOST=...
ENV DB_PASSWORD=...
CMD node ./dist/server/entry.mjs
```

--------------------------------

### Install @astrojs/netlify Adapter with pnpm

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

Automates the setup of the Netlify adapter for Astro by installing the package and configuring `astro.config.mjs`. This command is used for a quick and easy integration.

```bash
pnpm astro add netlify
```

--------------------------------

### Astro Configuration with Vite

Source: https://docs.astro.build/en/guides/upgrade-to/v1

This example shows the structure for configuring Astro projects built with Vite, starting from v0.21. It demonstrates how to move Snowpack configurations into `astro.config.mjs` and specifies the `vite` property for Vite-specific settings.

```javascript
// @ts-check


/** @type {import('astro').AstroUserConfig} */
export default {
  renderers: [],
  vite: {
    plugins: [],
  },
};
```

--------------------------------

### Install @astrojs/netlify Adapter with Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

Automates the setup of the Netlify adapter for Astro by installing the package and configuring `astro.config.mjs`. This command is used for a quick and easy integration.

```bash
yarn astro add netlify
```

--------------------------------

### Create robots.txt for Static Assets

Source: https://docs.astro.build/en/install-and-setup

A sample `robots.txt` file to be placed in the `public/` directory. This file guides search engine crawlers on how to interact with the website.

```text
# Example: Allow all bots to scan and index your site.
# Full syntax: https://developers.google.com/search/docs/advanced/robots/create-robots-txt
User-agent: *
Allow: /
```

--------------------------------

### Astro Integration: Server Setup Hook

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

An example of an Astro integration's server setup, showcasing the `astro:server:setup` hook. This hook provides access to the `toolbar` object for server-side communication with toolbar apps.

```javascript
export default () => ({
  name: "my-integration",
  hooks: {
    "astro:config:setup": ({ addDevToolbarApp }) => {},
    "astro:server:setup": ({ toolbar }) => {},
  },
});
```

--------------------------------

### Manually Install @astrojs/mdx using pnpm

Source: https://docs.astro.build/en/guides/integrations-guide/mdx

Installs the @astrojs/mdx package manually using pnpm, a prerequisite for manual integration setup.

```bash
pnpm add @astrojs/mdx
```

--------------------------------

### Create New Astro Project with npm

Source: https://docs.astro.build/en/getting-started

This command initializes a new Astro project using npm. It prompts the user through the setup process. Ensure npm is installed and accessible in your environment.

```bash
npm create astro@latest
```

--------------------------------

### Install @astrojs/svelte Integration with Astro CLI

Source: https://docs.astro.build/en/guides/integrations-guide/svelte

Automates the setup of the @astrojs/svelte integration using the Astro CLI. This command guides the user through the necessary steps to add the integration to their project.

```bash
npx astro add svelte

```

```bash
pnpm astro add svelte

```

```bash
yarn astro add svelte

```

--------------------------------

### Start Astro Dev Server using npm, pnpm, Yarn

Source: https://docs.astro.build/en/develop-and-build

Commands to start the Astro development server using different package managers. This allows for live preview of site changes during development. It requires the Astro CLI to be installed.

```shell
npm run dev
```

```shell
pnpm run dev
```

```shell
yarn run dev
```

--------------------------------

### Manually Install @astrojs/mdx using npm

Source: https://docs.astro.build/en/guides/integrations-guide/mdx

Installs the @astrojs/mdx package manually using npm, a prerequisite for manual integration setup.

```bash
npm install @astrojs/mdx
```

--------------------------------

### Create New Astro Project with npm, pnpm, or Yarn

Source: https://docs.astro.build/en/tutorial/1-setup/2

Use the `create astro` command with your preferred package manager (npm, pnpm, or Yarn) to initialize a new Astro project. This command installs the necessary setup wizard.

```bash
# create a new project with npm
npm create astro@latest
```

```bash
# create a new project with pnpm
pnpm create astro@latest
```

```bash
# create a new project with yarn
yarn create astro
```

--------------------------------

### Install Astro SolidJS Integration (npm)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Automates the setup of the @astrojs/solid-js integration using the Astro CLI with npm.

```bash
npx astro add solid
```

--------------------------------

### Install Astro Project Dependencies with Yarn

Source: https://docs.astro.build/en/install-and-setup

This command installs all project dependencies for an Astro project using Yarn. It is typically executed after the initial project creation and before starting the development server.

```bash
yarn install
```

--------------------------------

### Configure npm Scripts for Astro

Source: https://docs.astro.build/en/install-and-setup

JSON snippet to update the `scripts` section in `package.json` to include commands for starting the Astro development server, building the project, and previewing the build. These scripts are essential for running Astro.

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

--------------------------------

### Manually Install @astrojs/mdx using Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/mdx

Installs the @astrojs/mdx package manually using Yarn, a prerequisite for manual integration setup.

```bash
yarn add @astrojs/mdx
```

--------------------------------

### Create New Astro Project with pnpm

Source: https://docs.astro.build/en/install-and-setup

This command initiates the creation of a new Astro project using pnpm. It runs the `create-astro` CLI tool at its latest version, facilitating project setup with pnpm's package management.

```bash
pnpm create astro@latest
```

--------------------------------

### Install Astro SolidJS Integration (pnpm)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Automates the setup of the @astrojs/solid-js integration using the Astro CLI with pnpm.

```bash
pnpm astro add solid
```

--------------------------------

### Astro Configuration File

Source: https://docs.astro.build/en/install-and-setup

The `astro.config.mjs` file used for configuring Astro. This basic example initializes the configuration without any specific integrations. It's where UI framework integrations and other tools are added.

```javascript
import { defineConfig } from "astro/config";


// https://astro.build/config
export default defineConfig({});
```

--------------------------------

### Install Astro SolidJS Integration (Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Automates the setup of the @astrojs/solid-js integration using the Astro CLI with Yarn.

```bash
yarn astro add solid
```

--------------------------------

### Install Neon Serverless Driver (npm)

Source: https://docs.astro.build/en/guides/backend/neon

Install the official `@neondatabase/serverless` package using npm to enable your Astro project to connect to and interact with the Neon Postgres database.

```bash
npm install @neondatabase/serverless
```

--------------------------------

### Install Cosmic JS SDK using npm

Source: https://docs.astro.build/en/guides/cms/cosmic

Installs the Cosmic JavaScript SDK using npm. This SDK is used to interact with the Cosmic API for fetching content.

```bash
npm install @cosmicjs/sdk
```

--------------------------------

### Create First Astro Page

Source: https://docs.astro.build/en/install-and-setup

An Astro component file (`index.astro`) that includes frontmatter for server-side logic and an HTML template for the browser. It demonstrates basic Astro component structure and styling.

```astro
---
// Welcome to Astro! Everything between these triple-dash code fences
// is your "component frontmatter". It never runs in the browser.
console.log('This runs in your terminal, not the browser!');
---
<!-- Below is your "component template." It's just HTML, but with
    some magic sprinkled in to help you build great templates. -->
<html>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
<style>
  h1 {
    color: orange;
  }
</style>
```

--------------------------------

### Import Prism Component from @astrojs/prism

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Demonstrates how to import the Prism component, now located in the '@astrojs/prism' package. This component provides syntax highlighting and is bundled with Astro core, requiring no additional installation or integration setup.

```astro
---
import { Prism } from '@astrojs/prism';
---

```

--------------------------------

### Install Ghost Content API Client for npm

Source: https://docs.astro.build/en/guides/cms/ghost

Installs the official Ghost Content API client package and its TypeScript type definitions using npm. This package enables fetching data from a Ghost CMS.

```bash
npm install @tryghost/content-api
npm install --save @types/tryghost__content-api
```

--------------------------------

### Create Astro Project with React and Partytown (npm)

Source: https://docs.astro.build/en/install-and-setup

This command creates a new Astro project and simultaneously installs the React and Partytown integrations using npm. The `--add` flag is used to specify which integrations to include during the initial setup.

```bash
npm create astro@latest -- --add react --add partytown
```

--------------------------------

### Astro Script Processing Options

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Demonstrates how to handle `<script>` elements in Astro. The first example shows a script that will be rendered as-is without processing. The second example uses `type="module"` and `hoist` to enable processing, bundling, and resolution of ESM imports.

```html
<script>
  // Will be rendered into the HTML exactly as written!
  // ESM imports will not be resolved relative to the file.
</script>
<script type="module" hoist>
  // Processed! Bundled! ESM imports work, even to npm packages.
</script>
```

--------------------------------

### Install JSONA and Drupal JSON:API Params Dependencies (npm)

Source: https://docs.astro.build/en/guides/cms/drupal

Install the necessary npm packages, 'jsona' for serializing/deserializing JSON:API data and 'drupal-jsonapi-params' for building query parameters, to simplify working with Drupal content in your Astro project.

```bash
npm install jsona drupal-jsonapi-params
```

--------------------------------

### Install PostgreSQL Client for Direct TCP Connection

Source: https://docs.astro.build/en/guides/backend/prisma-postgres

Installs the 'pg' package, a PostgreSQL client for Node.js, to enable direct TCP connections to a Prisma Postgres database.

```bash
npm install pg
```

--------------------------------

### Install Cosmic JS SDK using pnpm

Source: https://docs.astro.build/en/guides/cms/cosmic

Installs the Cosmic JavaScript SDK using pnpm. This package enables communication with the Cosmic headless CMS.

```bash
pnpm add @cosmicjs/sdk
```

--------------------------------

### Install Astro Project Dependencies with Bun

Source: https://docs.astro.build/en/recipes/bun

Installs project dependencies using Bun's package manager. This command should be run after creating a new Astro project or if dependencies were skipped during setup.

```bash
bun install
```

--------------------------------

### Astro Package.json Start Script for Seenode

Source: https://docs.astro.build/en/guides/deploy/seenode

Defines the 'start' script in package.json to run the built Astro server in production mode, essential for deployment on platforms like Seenode. It specifies the entry point for the server.

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "start": "NODE_ENV=production node ./dist/server/entry.mjs"
  }
}

```

--------------------------------

### Azion CLI Build Process Example

Source: https://docs.astro.build/en/guides/deploy/azion

Illustrates the output messages during the build process when using the Azion CLI for local development. This shows the steps involved in building the edge application and running the build step command.

```text
Building your Edge Application. This process may take a few minutes
Running build step command:
...
[Azion Bundler] [Server] › ✔  success   Function running on port http://localhost:3000
```

--------------------------------

### Install Ghost Content API Client for pnpm

Source: https://docs.astro.build/en/guides/cms/ghost

Installs the official Ghost Content API client package and its TypeScript type definitions using pnpm. This package enables fetching data from a Ghost CMS.

```bash
pnpm add @tryghost/content-api
pnpm add --save-dev @types/tryghost__content-api
```

--------------------------------

### Create Project Directory and Initialize package.json

Source: https://docs.astro.build/en/install-and-setup

Commands to create a new project directory, navigate into it, and initialize a `package.json` file using npm, pnpm, or Yarn. This file manages project dependencies.

```shell
mkdir my-astro-project
cd my-astro-project
```

```shell
npm init --yes
```

```shell
pnpm init
```

```shell
yarn init --yes
```

--------------------------------

### Update Astro Configuration for Integrations

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Example of how to update the `astro.config.mjs` file to use the new integration system. It shows the transition from the deprecated `renderers` array to the new `integrations` array, using Lit and React as examples.

```javascript
// Then, update your `astro.config.mjs` file:
// (Read the full walkthrough: https://docs.astro.build/en/guides/integrations-guide)
import lit from '@astrojs/lit';
import react from '@astrojs/react';


export default {
  renderers: ['@astrojs/renderer-lit', '@astrojs/renderer-react'],
  integrations: [lit(), react()],
}
```

--------------------------------

### Export Start Function for Server Initialization in Astro

Source: https://docs.astro.build/en/reference/adapter-reference

Demonstrates exporting a 'start' function from an Astro server entrypoint. This function is invoked by certain hosts to manually start the server, often by listening on a specific port or setting up event listeners.

```javascript
import { App } from 'astro/app';


export function start(manifest) {
  const app = new App(manifest);


  addEventListener('fetch', event => {
    // ...
  });
}
```

--------------------------------

### Install Ghost Content API Client for Yarn

Source: https://docs.astro.build/en/guides/cms/ghost

Installs the official Ghost Content API client package and its TypeScript type definitions using Yarn. This package enables fetching data from a Ghost CMS.

```bash
yarn add @tryghost/content-api
yarn add --dev @types/tryghost__content-api
```

--------------------------------

### Install JSONA and Drupal JSON:API Params Dependencies (pnpm)

Source: https://docs.astro.build/en/guides/cms/drupal

Install the necessary pnpm packages, 'jsona' for serializing/deserializing JSON:API data and 'drupal-jsonapi-params' for building query parameters, to simplify working with Drupal content in your Astro project.

```bash
pnpm add jsona drupal-jsonapi-params
```

--------------------------------

### Start Static File Server with Deno

Source: https://docs.astro.build/en/guides/deploy/deno

Starts a static file server using Deno to serve the built Astro site from the `dist` directory. Requires the `--allow-` flags for file system and network access.

```bash
deno run -A jsr:@std/http/file-server dist
```

--------------------------------

### Install Cosmic JS SDK using Yarn

Source: https://docs.astro.build/en/guides/cms/cosmic

Installs the Cosmic JavaScript SDK using Yarn. This dependency is crucial for fetching data from your Cosmic content.

```bash
yarn add @cosmicjs/sdk
```

--------------------------------

### Install Astro DB Integration Package using npm

Source: https://docs.astro.build/en/guides/integrations-guide/db

Manually installs the '@astrojs/db' integration package using npm. This is an alternative to the 'astro add' command for users who prefer manual setup.

```bash
npm install @astrojs/db
```

--------------------------------

### Create Astro Blog Project with npm

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-eleventy

This command uses npm to create a new Astro project, specifically initializing it with the 'blog' theme starter template. This is a common starting point for migrating an Eleventy blog to Astro.

```bash
npm create astro@latest -- --template blog
```

--------------------------------

### Start On-Demand Astro Server with Deno

Source: https://docs.astro.build/en/guides/deploy/deno

Starts the on-demand rendered Astro site using Deno by directly executing the server entry point in the `dist` directory. This command is used after configuring the Deno adapter.

```bash
deno run -A ./dist/server/entry.mjs
```

--------------------------------

### TypeScript Configuration for Astro

Source: https://docs.astro.build/en/install-and-setup

The `tsconfig.json` file for configuring TypeScript support in an Astro project. This example uses the base configuration provided by Astro, ensuring tools like Astro and VS Code understand the project structure.

```json
{
  "extends": "astro/tsconfigs/base"
}
```

--------------------------------

### Install JSONA and Drupal JSON:API Params Dependencies (Yarn)

Source: https://docs.astro.build/en/guides/cms/drupal

Install the necessary Yarn packages, 'jsona' for serializing/deserializing JSON:API data and 'drupal-jsonapi-params' for building query parameters, to simplify working with Drupal content in your Astro project.

```bash
yarn add jsona drupal-jsonapi-params
```

--------------------------------

### astro:build:setup Hook

Source: https://docs.astro.build/en/reference/integrations-reference

Executes after `astro:build:start` and immediately before the build process begins. At this stage, the Vite configuration is finalized, offering a final opportunity to modify it. This hook is useful for overriding defaults or making last-minute adjustments to the build configuration.

```APIDOC
## astro:build:setup

### Description
Allows final modifications to the Vite build configuration before the build starts.

### Method
Event Hook

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
#### `vite` option Example
```json
{
  "name": "my-integration",
  "hooks": {
    "astro:build:setup": ({ vite }) => {
      const { publicDir, root } = vite;
    }
  }
}
```

#### `pages` option Example
```json
{
  "name": "my-integration",
  "hooks": {
    "astro:build:setup": ({ pages }) => {
      pages.forEach((data) => {
        if (data.route.pattern.test("/blog")) {
          console.log(data.route.type);
        }
      });
    }
  }
}
```

#### `target` option Example
```json
{
  "name": "my-integration",
  "hooks": {
    "astro:build:setup": ({ target }) => {
      if (target === "server") {
        // do something in server build phase
      }
    }
  }
}
```

#### `updateConfig()` option Example
```json
{
  "name": "my-integration",
  "hooks": {
    "astro:build:setup": ({ updateConfig }) => {
      updateConfig({
        plugins: [awesomeCssPlugin()],
      })
    }
  }
}
```

### Response
#### Success Response (200)
N/A

#### Response Example
N/A

```typescript
'astro:build:setup'?: (options: {
  vite: vite.InlineConfig;
  pages: Map<string, PageBuildData>;
  target: 'client' | 'server';
  updateConfig: (newConfig: vite.InlineConfig) => void;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;

// vite option
// Type: vite.InlineConfig
// An object that allows you to access the Vite configuration used in the build.

// pages option
// Type: Map<string, PageBuildData>
// A Map with a list of pages as key and their build data as value.

// target option
// Type: 'client' | 'server'
// Builds are separated in two distinct phases: `client` and `server`.

// updateConfig() option
// Type: (newConfig: InlineConfig) => void
// A callback function to update the Vite options used in the build.
```
```

--------------------------------

### Install ButterCMS SDK for Astro (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/guides/cms/buttercms

Instructions for installing the ButterCMS SDK as a project dependency using different package managers: npm, pnpm, and Yarn. This enables interaction with the ButterCMS API.

```bash
npm install buttercms
```

```bash
pnpm add buttercms
```

```bash
yarn add buttercms
```

--------------------------------

### Create Astro Project with Blog Template

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-wordpress

This command initiates a new Astro project using the official blog starter template. It's a common way to begin an Astro project, especially for blog-focused websites. Ensure you have Node.js and npm, pnpm, or Yarn installed.

```bash
npm create astro@latest -- --template blog

```

```bash
pnpm create astro@latest --template blog

```

```bash
yarn create astro --template blog

```

--------------------------------

### Create Astro Project with Blog Template

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-gridsome

This command initializes a new Astro project using the official blog theme starter. It demonstrates how to specify a template during project creation via npm, pnpm, and Yarn package managers. Ensure you have Node.js and a package manager installed.

```shell
npm create astro@latest -- --template blog
```

```shell
pnpm create astro@latest --template blog
```

```shell
yarn create astro --template blog
```

--------------------------------

### Drupal JSON:API URL Structure Examples

Source: https://docs.astro.build/en/guides/cms/drupal

Demonstrates the structure for fetching data from Drupal's JSON:API. Includes examples for retrieving a list of entities (e.g., articles) and a single entity by its UUID. Also shows how to retrieve specific fields and apply filters.

```http
GET: /jsonapi/{entity_type_id}/{bundle_id}
Example: [DRUPAL_BASE_URL]/jsonapi/node/article
Example: [DRUPAL_BASE_URL]/jsonapi/node/article/2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e

Retrieve specific fields:
GET: /jsonapi/{entity_type_id}/{bundle_id}?fields[entity_type]=field_list
Example: /jsonapi/node/article?fields[node--article]=title,created
Example: /jsonapi/node/article/2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e?fields[node--article]=title,created,body

Filtering:
GET: /jsonapi/{entity_type_id}/{bundle_id}?filter[field_name]=value&filter[field_other]=value
Example: /jsonapi/node/article?filter[title]=Testing JSON:API&filter[status]=1
Example: /jsonapi/node/article/2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e?fields[node--article]=title&filter[title]=Testing JSON:API
```

--------------------------------

### Add Astro DB Integration using npm

Source: https://docs.astro.build/en/guides/integrations-guide/db

Automates the setup of the Astro DB integration by running the 'astro add db' command via npm. This is the recommended way to install the integration.

```bash
npx astro add db
```

--------------------------------

### Astro Build Start Hook (`astro:build:start`)

Source: https://docs.astro.build/en/reference/integrations-reference

The `astro:build:start` hook runs after `astro:config:done` and before the production build commences. Its purpose is to set up global objects or clients required for a production build and can extend build configuration options for adapter APIs. It provides logger options for integration purposes.

```typescript
'astro:build:start'?: (options: {
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

--------------------------------

### Install Nano Stores for React

Source: https://docs.astro.build/en/recipes/sharing-state-islands

Installs the Nano Stores library and the corresponding helper package for React. This setup allows for shared client-side state management in Astro projects utilizing React components.

```bash
npm install nanostores @nanostores/react
```

--------------------------------

### Enable Local Development Server with Azion CLI

Source: https://docs.astro.build/en/guides/deploy/azion

Starts a local development server for your Astro project using the Azion CLI. This command allows you to preview your site locally before deploying.

```bash
azion dev
```

--------------------------------

### Install Astro TypeScript Plugin with Yarn

Source: https://docs.astro.build/en/guides/typescript

This command installs the Astro TypeScript plugin using Yarn. This plugin integrates with your TypeScript setup to enhance the development experience within compatible editors.

```bash
yarn add @astrojs/ts-plugin
```

--------------------------------

### Initialize Azion Project

Source: https://docs.astro.build/en/guides/deploy/azion

Initializes and configures your project for deployment with Azion. This command sets up the necessary configuration files for your application.

```bash
azion init
```

--------------------------------

### Create Astro Project from GitHub Repository (Yarn)

Source: https://docs.astro.build/en/install-and-setup

This command initiates a new Astro project from a specified GitHub repository using Yarn. The `--template` flag is used to define the GitHub repository for the project's base structure.

```bash
yarn create astro --template <github-username>/<github-repo>
```

--------------------------------

### Install @libsql/client for Astro

Source: https://docs.astro.build/en/guides/backend/turso

Package installation commands for the @libsql/client, which enables Astro to connect to Turso. Supports npm, pnpm, and Yarn package managers.

```bash
npm install @libsql/client
```

```bash
pnpm add @libsql/client
```

```bash
yarn add @libsql/client
```

--------------------------------

### GET /websites/astro_build/image.png

Source: https://docs.astro.build/en/guides/endpoints

Example of an API route that returns an image with the correct Content-Type header.

```APIDOC
## GET /websites/astro_build/image.png

### Description
This endpoint serves a PNG image. It demonstrates how to set the `Content-Type` header to `image/png` when returning binary data from an API route.

### Method
GET

### Endpoint
`/websites/astro_build/image.png`

### Parameters
#### Path Parameters
- **(none)**

### Request Example
```json
{
  "example": "No request body needed for GET request."
}
```

### Response
#### Success Response (200)
- **(binary data)** - The PNG image content.

#### Response Example
```json
{
  "example": "[binary image data]"
}
```
```

--------------------------------

### Deploy Astro Site with Netlify CLI

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

Deploys the Astro site to Netlify using the Netlify CLI. This command initiates the deployment process after the site has been built.

```bash
netlify deploy
```

--------------------------------

### Define Basic Astro DB Configuration

Source: https://docs.astro.build/en/guides/astro-db

An example of the initial Astro DB configuration file (`db/config.ts`). It uses `defineDb` to set up the database structure, starting with an empty set of tables.

```typescript
import { defineDb } from 'astro:db';


export default defineDb({
  tables: { },
})
```

--------------------------------

### Add Astro Preact Integration

Source: https://docs.astro.build/en/guides/integrations-guide/preact

Automates the setup of the @astrojs/preact integration for your Astro project. This command simplifies the installation process.

```bash
npx astro add preact

```

```bash
pnpm astro add preact

```

```bash
yarn astro add preact

```

--------------------------------

### Initialize Astro Component Template (npm, yarn, pnpm)

Source: https://docs.astro.build/en/reference/publish-to-npm

Quick start commands to initialize a new Astro component project using npm, yarn, or pnpm with the 'component' template.

```bash
# Initialize the Astro Component template in a new directory
npm create astro@latest my-new-component-directory -- --template component
# yarn
yarn create astro my-new-component-directory --template component
# pnpm
pnpm create astro@latest my-new-component-directory -- --template component
```

--------------------------------

### Create Astro Blog Project with pnpm

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-eleventy

This command utilizes pnpm to bootstrap a new Astro project, pre-configured with the 'blog' starter template. It's an alternative to npm for users who prefer pnpm for package management.

```bash
pnpm create astro@latest --template blog
```

--------------------------------

### Install Zerops CLI (Shell)

Source: https://docs.astro.build/en/guides/deploy/zerops

Provides a comment indicating how to download the Zerops CLI binary directly. This is the first step in triggering the build and deploy pipeline using the command-line interface.

```shell
# To download the zcli binary directly,

```

--------------------------------

### Configure Astro Static Hosting package.json

Source: https://docs.astro.build/en/guides/deploy/kinsta

This configuration snippet shows the necessary additions to your Astro project's `package.json` for static hosting on Kinsta. It requires a 'name' field, a 'build' script, and the installation of the 'serve' package to handle starting the server with 'serve dist/'.

```json
{
  "name": "anything",
  "scripts": {
    "dev": "astro dev",
    "start": "serve dist/",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^2.2.0",
    "serve": "^14.0.1"
  }
}
```

--------------------------------

### Launch Astro Docs with `astro docs`

Source: https://docs.astro.build/en/reference/cli-reference

Opens the official Astro documentation website directly from your terminal. This provides quick access to Astro's guides and API references.

```bash
astro docs
```

--------------------------------

### Manually Install @astrojs/netlify Adapter with pnpm

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

Manually installs the Netlify adapter as a project dependency using pnpm. This is an alternative to the `astro add` command.

```bash
pnpm add @astrojs/netlify
```

--------------------------------

### Install @astrojs/alpinejs via npm, pnpm, or Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/alpinejs

Automate the setup of the @astrojs/alpinejs integration using the Astro add command for npm, pnpm, or Yarn.

```bash
npx astro add alpinejs
```

```bash
pnpm astro add alpinejs
```

```bash
yarn astro add alpinejs
```

--------------------------------

### Start Astro Development Server (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/reference/cli-reference

Starts the Astro development server, providing a live preview of your site. This command can be executed using npm, pnpm, or Yarn.

```shell
npx astro dev
```

```shell
pnpm astro dev
```

```shell
yarn astro dev
```

--------------------------------

### Astro Build Setup Hook (`astro:build:setup`) with Vite Config Modification

Source: https://docs.astro.build/en/reference/integrations-reference

The `astro:build:setup` hook executes just before the build starts, after the Vite configuration is complete. This hook allows final modifications to the Vite config. The `vite` option provides access to the current Vite `InlineConfig`, enabling integrations to read or modify build settings like `publicDir` or `root`.

```javascript
export default {
  name: 'my-integration',
  hooks: {
    'astro:build:setup': ({ vite }) => {
      const { publicDir, root } = vite;
    },
  }
}
```

--------------------------------

### Install Partytown with Astro CLI

Source: https://docs.astro.build/en/guides/integrations-guide/partytown

Automates the setup of the Partytown integration for Astro projects using the `astro add` command. This is the recommended method for adding integrations.

```bash
npx astro add partytown

```

```bash
pnpm astro add partytown

```

```bash
yarn astro add partytown

```

--------------------------------

### Add Astro Vue Integration (npm)

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Automates the setup of the @astrojs/vue integration using the Astro CLI with npm. Follows prompts for installation.

```bash
npx astro add vue
```

--------------------------------

### Create Astro Project with Starlight Template using npm

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-vuepress

This command initializes a new Astro project using the official Starlight documentation theme starter template via npm. It's a straightforward way to begin a migration from VuePress.

```bash
npm create astro@latest -- --template starlight
```

--------------------------------

### Create Astro Project from Template with Bun

Source: https://docs.astro.build/en/recipes/bun

Creates a new Astro project using a specified template, either an official example or a GitHub repository. This command uses Bun to execute `create-astro` with the `--template` flag.

```bash
# create a new project with an official example
bun create astro@latest --template <example-name>
# create a new project based on a GitHub repository’s main branch
bun create astro@latest --template <github-username>/<github-repo>
```

--------------------------------

### Manually Install @astrojs/netlify Adapter with npm

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

Manually installs the Netlify adapter as a project dependency using npm. This is an alternative to the `astro add` command.

```bash
npm install @astrojs/netlify
```

--------------------------------

### Add Astro Vue Integration (pnpm)

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Automates the setup of the @astrojs/vue integration using the Astro CLI with pnpm. Follows prompts for installation.

```bash
pnpm astro add vue
```

--------------------------------

### Install Contentful SDK and Rich Text Renderer for Astro

Source: https://docs.astro.build/en/guides/cms/contentful

Installs the necessary packages for integrating Contentful with Astro. This includes the official Contentful JavaScript SDK and a renderer for handling Contentful's rich text fields. Supports npm, pnpm, and Yarn package managers.

```bash
npm install contentful @contentful/rich-text-html-renderer
```

```bash
pnpm add contentful @contentful/rich-text-html-renderer
```

```bash
yarn add contentful @contentful/rich-text-html-renderer
```

--------------------------------

### Install Stylus for Astro

Source: https://docs.astro.build/en/guides/styling

Installs the Stylus preprocessor as a project dependency for use with Astro.

```bash
npm install stylus
```

--------------------------------

### Install Project Dependencies (Yarn)

Source: https://docs.astro.build/en/guides/deploy/deno

Installs all project dependencies using Yarn. This is a standard step before building or running an Astro project when self-hosting with Deno.

```bash
yarn
```

--------------------------------

### Create Astro Project from GitHub Repository (pnpm)

Source: https://docs.astro.build/en/install-and-setup

This command scaffolds a new Astro project from a GitHub repository using pnpm. The `--template` flag allows specifying the GitHub repository, including username and repo name.

```bash
pnpm create astro@latest --template <github-username>/<github-repo>
```

--------------------------------

### Install Project Dependencies (pnpm)

Source: https://docs.astro.build/en/guides/deploy/deno

Installs all project dependencies using pnpm. This is a standard step before building or running an Astro project when self-hosting with Deno.

```bash
pnpm install
```

--------------------------------

### Manually Install @astrojs/solid-js (npm)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Manually installs the @astrojs/solid-js package using npm.

```bash
npm install @astrojs/solid-js
```

--------------------------------

### Start Astro Preview Server

Source: https://docs.astro.build/en/reference/programmatic-reference

Starts a local server to serve your Astro build output. This function is similar to the `astro preview` command. It requires an `AstroInlineConfig` object and returns a `PreviewServer` instance. Adapters may influence the preview server's behavior or availability.

```typescript
import { preview } from "astro";


const previewServer = await preview({
  root: "./my-project",
});


// Stop the server if needed
await previewServer.stop();
```

--------------------------------

### Astro GetStaticPaths Initial Fetch

Source: https://docs.astro.build/en/guides/cms/contentful

This snippet shows the initial setup for getStaticPaths in Astro. It imports necessary modules and fetches entries from Contentful based on a content type. This function is crucial for generating dynamic routes at build time.

```astro
---
import { contentfulClient } from "../../lib/contentful";
import type { BlogPost } from "../../lib/contentful";


export async function getStaticPaths() {
  const entries = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
  });
}
---
```

--------------------------------

### Update HTTP Request Methods to Uppercase in Astro

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Illustrates the change in Astro v3.0 where HTTP request methods are now uppercase. The example shows the transition from a lowercase `get` function to an uppercase `GET` function, returning a JSON response.

```javascript
export function GET() {
    return new Response(JSON.stringify({ "title": "Bob's blog" }));
}
```

--------------------------------

### Create Astro Project using pnpm

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-gatsby

This snippet illustrates how to initialize a new Astro project with pnpm. It includes commands for launching the Astro CLI wizard and for creating a project from a specified template. This is an alternative package manager for Astro project setup.

```shell
# launch the Astro CLI Wizard
pnpm create astro@latest


# create a new project with an official example
pnpm create astro@latest --template <example-name>
```

--------------------------------

### Install @astrojs/markdoc Integration (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/markdoc

Automates the setup of the @astrojs/markdoc integration for Astro projects using the 'astro add' command. Supports npm, pnpm, and Yarn package managers.

```bash
npx astro add markdoc
```

```bash
pnpm astro add markdoc
```

```bash
yarn astro add markdoc
```

--------------------------------

### Add Astro Vue Integration (Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Automates the setup of the @astrojs/vue integration using the Astro CLI with Yarn. Follows prompts for installation.

```bash
yarn astro add vue
```

--------------------------------

### Install Deno Astro Adapter (npm)

Source: https://docs.astro.build/en/guides/deploy/deno

Installs the `@deno/astro-adapter` package using npm. This is a prerequisite for enabling on-demand rendering with Deno.

```bash
npm install @deno/astro-adapter
```

--------------------------------

### Install Deno Astro Adapter (pnpm)

Source: https://docs.astro.build/en/guides/deploy/deno

Installs the `@deno/astro-adapter` package using pnpm. This is a prerequisite for enabling on-demand rendering with Deno.

```bash
pnpm install @deno/astro-adapter
```

--------------------------------

### Install Project Dependencies (npm)

Source: https://docs.astro.build/en/guides/deploy/deno

Installs all project dependencies using npm. This is a standard step before building or running an Astro project when self-hosting with Deno.

```bash
npm install
```

--------------------------------

### Install @astrojs/sitemap using npm, pnpm, or yarn

Source: https://docs.astro.build/en/guides/integrations-guide/sitemap

This snippet shows how to install the @astrojs/sitemaps package using different package managers. It is a prerequisite for using the integration.

```bash
npx astro add sitemap
```

```bash
pnpm astro add sitemap
```

```bash
yarn astro add sitemap
```

```bash
npm install @astrojs/sitemap
```

```bash
pnpm add @astrojs/sitemap
```

```bash
yarn add @astrojs/sitemap
```

--------------------------------

### Astro Image Service Configuration Example

Source: https://docs.astro.build/en/reference/image-service-reference

Demonstrates how to configure a custom image service entrypoint and its configuration within `astro.config.mjs`. This allows for integration with services like sharp.

```typescript
import { defineConfig } from "astro/config";


export default defineConfig({
  image: {
    service: {
      entrypoint: "your-entrypoint", // 'astro/assets/services/sharp' | string,
      config: {
        // ... service-specific config. Optional.
      }
    }
  },
});

```

--------------------------------

### Manually Install @astrojs/netlify Adapter with Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

Manually installs the Netlify adapter as a project dependency using Yarn. This is an alternative to the `astro add` command.

```bash
yarn add @astrojs/netlify
```

--------------------------------

### Install Netlify CLI

Source: https://docs.astro.build/en/guides/deploy/netlify

Installs the Netlify Command Line Interface (CLI) globally on your system. This tool is used to manage Netlify sites and deployments from your terminal, allowing for local development and deployment workflows.

```bash
npm install --global netlify-cli
```

--------------------------------

### Generate sitemap-index.xml and sitemap-0.xml

Source: https://docs.astro.build/en/guides/integrations-guide/sitemap

These examples show the structure of the generated sitemap files. `sitemap-index.xml` links to individual sitemap files, while `sitemap-0.xml` lists the pages of your website.

```xml
<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://example.com/</loc>
  </url>
  <url>
    <loc>https://example.com/second-page/</loc>
  </url>
</urlset>
```

--------------------------------

### Create Astro Blog Project with Yarn

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-eleventy

This command employs Yarn to initiate a new Astro project using the 'blog' theme starter. It provides another option for developers to set up a blog project in Astro.

```bash
yarn create astro --template blog
```

--------------------------------

### Preview Built Astro Site Locally with `astro preview`

Source: https://docs.astro.build/en/reference/cli-reference

Starts a local server to preview the contents of your static `dist/` directory after running `astro build`. This helps catch build output errors before deployment and is not intended for production use. It supports the Node adapter for on-demand rendering builds.

```bash
astro preview
```

--------------------------------

### Create Astro Project with Starlight Template using pnpm

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-vuepress

This command initializes a new Astro project using the official Starlight documentation theme starter template via pnpm. It's an alternative package manager to npm for setting up your Astro site.

```bash
pnpm create astro@latest --template starlight
```

--------------------------------

### GET /websites/astro_build/[id].json

Source: https://docs.astro.build/en/guides/endpoints

Example of a dynamic API route that fetches product data based on an ID and returns JSON or a 404 response.

```APIDOC
## GET /websites/astro_build/[id].json

### Description
This endpoint handles GET requests for a dynamic route, retrieving product information based on the provided ID. It returns the product data as JSON if found, or a 404 status if the product does not exist.

### Method
GET

### Endpoint
`/websites/astro_build/[id].json`

### Parameters
#### Path Parameters
- **id** (string) - Required - The ID of the product to retrieve.

### Request Example
```json
{
  "example": "No request body needed for GET request."
}
```

### Response
#### Success Response (200)
- **product** (object) - Contains the details of the requested product.

#### Response Example
```json
{
  "id": "123",
  "name": "Example Product",
  "price": 19.99
}
```

#### Error Response (404)
```json
{
  "example": "null"
}
```
```

--------------------------------

### Install Netlify CLI using npm, pnpm, or Yarn

Source: https://docs.astro.build/en/guides/deploy

Installs the Netlify command-line interface (CLI) globally on your machine using different package managers. This tool is used for deploying sites to Netlify.

```bash
npm install --global netlify-cli
```

```bash
pnpm add --global netlify-cli
```

```bash
yarn global add netlify-cli
```

--------------------------------

### Manually Install @astrojs/solid-js (pnpm)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Manually installs the @astrojs/solid-js package using pnpm.

```bash
pnpm add @astrojs/solid-js
```

--------------------------------

### Create Astro Project from GitHub Repository (npm)

Source: https://docs.astro.build/en/install-and-setup

This command creates a new Astro project using a specific GitHub repository as a template via npm. The `--template` flag accepts the GitHub username and repository name.

```bash
npm create astro@latest -- --template <github-username>/<github-repo>
```

--------------------------------

### Create Astro Project with Starlight Template using Yarn

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-vuepress

This command initializes a new Astro project using the official Starlight documentation theme starter template via Yarn. It provides another option for package management when starting your Astro migration.

```bash
yarn create astro --template starlight
```

--------------------------------

### Initialize Astro App and Handle Fetch Events

Source: https://docs.astro.build/en/reference/adapter-reference

Shows how to initialize the Astro 'App' with a manifest and set up a 'fetch' event listener within the 'start' function. This allows the server to respond to incoming requests using Astro's rendering capabilities.

```javascript
import { App } from 'astro/app';
import http from 'http';


export function start(manifest) {
  const app = new App(manifest);


  addEventListener('fetch', event => {
    event.respondWith(
      app.render(event.request)
    );
  });
}
```

--------------------------------

### Configure Autoprefixer with postcss.config.cjs

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Autoprefixer is no longer enabled by default in Astro. To re-enable it, install the package and create a `postcss.config.cjs` file with the specified configuration.

```javascript
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
```

--------------------------------

### Environment Variable Setup for Astro with Ghost

Source: https://docs.astro.build/en/guides/cms/ghost

Defines the CONTENT_API_KEY environment variable in an .env file for Astro to use. Optionally, includes a TypeScript declaration file (env.d.ts) for IntelliSense, specifying the type of the environment variable.

```env
CONTENT_API_KEY=YOUR_API_KEY
```

```typescript
interface ImportMetaEnv {
  readonly CONTENT_API_KEY: string;
}
```

--------------------------------

### Install Prettier and Astro Plugin (npm)

Source: https://docs.astro.build/en/editor-setup

Installs the core 'prettier' package and the 'prettier-plugin-astro' for formatting Astro files using npm. This is a dev dependency.

```bash
npm install --save-dev --save-exact prettier prettier-plugin-astro
```

--------------------------------

### Manually Install @astrojs/solid-js (Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Manually installs the @astrojs/solid-js package using Yarn.

```bash
yarn add @astrojs/solid-js
```

--------------------------------

### Create an Astro Page for Forms

Source: https://docs.astro.build/en/recipes/build-forms

This snippet shows how to set up a basic Astro page that will contain your form elements and server-side logic.

```astro
---
---
<h1>Register</h1>

```

--------------------------------

### Astro Preview API

Source: https://docs.astro.build/en/reference/programmatic-reference

Starts a local server to serve your build output. This is similar to the `astro preview` command and can be used programmatically. The preview server functionality might depend on the configured adapter.

```APIDOC
## `preview()`

### Description
Starts a local server to serve your build output. If no adapter is set, it serves static files. With an adapter, the adapter provides the preview server.

### Method
`preview(inlineConfig: AstroInlineConfig) => Promise<PreviewServer>`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **inlineConfig** (`AstroInlineConfig`) - Required - Configuration object for the preview server, including `root`.

### Request Example
```javascript
import { preview } from "astro";

const previewServer = await preview({
  root: "./my-project",
});

// Stop the server if needed
await previewServer.stop();
```

### Response
#### Success Response (200)
- **PreviewServer** (`object`) - An object representing the preview server with properties like `host`, `port`, and methods `closed()` and `stop()`.

#### Response Example
```json
{
  "host": "localhost",
  "port": 4321,
  "closed": "[Function]",
  "stop": "[Function]"
}
```

### `PreviewServer` Interface
- **host** (`string`) - The host where the server is listening.
- **port** (`number`) - The port where the server is listening.
- **closed()** (`Promise<void>`) - Returns a Promise that resolves when the server is closed.
- **stop()** (`Promise<void>`) - Asks the preview server to close.
```

--------------------------------

### Install Deno Astro Adapter (Yarn)

Source: https://docs.astro.build/en/guides/deploy/deno

Installs the `@deno/astro-adapter` package using Yarn. This is a prerequisite for enabling on-demand rendering with Deno.

```bash
yarn add @deno/astro-adapter
```

--------------------------------

### Fetch and Display Posts from Turso in Astro

Source: https://docs.astro.build/en/guides/backend/turso

An Astro component example demonstrating how to fetch all posts from a Turso database and display their titles. It imports the initialized `turso` client and uses `turso.execute()` to run a SQL query.

```astro
---
import { turso } from '../turso'


const { rows } = await turso.execute('SELECT * FROM posts')
---


<ul>
  {rows.map((post) => (
    <li>{post.title}</li>
  ))}
</ul>

```

--------------------------------

### Install Prettier and Astro Plugin (pnpm)

Source: https://docs.astro.build/en/editor-setup

Installs the core 'prettier' package and the 'prettier-plugin-astro' for formatting Astro files using pnpm. This is a dev dependency.

```bash
pnpm add --save-dev --save-exact prettier prettier-plugin-astro
```

--------------------------------

### Install Better Auth with npm, pnpm, or Yarn

Source: https://docs.astro.build/en/guides/authentication

These commands show how to install the Better Auth package using different package managers. Ensure you have Node.js and npm/pnpm/Yarn installed.

```bash
npm install better-auth
```

```bash
pnpm add better-auth
```

```bash
yarn add better-auth
```

--------------------------------

### Configure Tailwind CSS with postcss.config.cjs

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Tailwind CSS now requires PostCSS to be explicitly installed and configured. Create a `postcss.config.cjs` file at your project root to enable Tailwind CSS.

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
  },
};
```

--------------------------------

### Basic Static File Endpoint

Source: https://docs.astro.build/en/guides/endpoints

Example of a basic static file endpoint that generates a JSON file at build time. The endpoint exports a `GET` function that returns a `Response` object.

```APIDOC
## GET /builtwith.json

### Description
Creates a static JSON file at build time with site information.

### Method
GET

### Endpoint
/builtwith.json

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **name** (string) - The name of the project.
- **url** (string) - The URL of the project.

#### Response Example
```json
{
  "name": "Astro",
  "url": "https://astro.build/"
}
```
```

--------------------------------

### Install Nano Stores with pnpm

Source: https://docs.astro.build/en/recipes/sharing-state

Installs the Nano Stores library using pnpm. This command is an alternative to npm for package management.

```bash
pnpm add nanostores
```

--------------------------------

### Configure Vite Plugins with viteConfig() in Astro

Source: https://docs.astro.build/en/guides/upgrade-to/v1

In Astro v0.21+, plugins are configured using the `viteConfig()` function. This example shows how to integrate the Svelte renderer with Vite, including dependencies and optimizations.

```javascript
import { svelte } from '@sveltejs/vite-plugin-svelte';


export default {
  name: '@astrojs/renderer-svelte',
  client: './client.js',
  server: './server.js',
  snowpackPlugin: '@snowpack/plugin-svelte',
  snowpackPluginOptions: { compilerOptions: { hydratable: true } },
  viteConfig() {
    return {
      optimizeDeps: {
        include: ['@astrojs/renderer-svelte/client.js', 'svelte', 'svelte/internal'],
        exclude: ['@astrojs/renderer-svelte/server.js'],
      },
      plugins: [
        svelte({
          emitCss: true,
          compilerOptions: { hydratable: true },
        }),
      ],
    };
  },
}
```

--------------------------------

### Update Astro Page with New Header

Source: https://docs.astro.build/en/tutorial/3-components/3

This example demonstrates how to update an existing Astro page (e.g., an index or home page) to include the newly created `Header.astro` component. It replaces the direct usage of `<Navigation />` with `<Header />` and ensures necessary imports for `Navigation`, `Header`, and `Footer` are present, along with global CSS.

```astro
---
import Navigation from '../components/Navigation.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
const pageTitle = "Home Page";
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{pageTitle}</title>
  </head>
  <body>
    <Navigation />
    <Header />
    <h1>{pageTitle}</h1>
    <Footer />
  </body>
</html>
```

--------------------------------

### Astro HTML Escaping Migration

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Illustrates the change in HTML escaping behavior in Astro. The first example shows the deprecated unescaped HTML within an expression, which will now be escaped. The subsequent examples show the recommended `set:html` and `set:text` directives for injecting HTML and text content respectively.

```html
<h1>{title}</h1> <!-- <h1>Hello <strong>World</strong></h1> -->
<h1>{title}</h1> <!-- <h1>Hello &lt;strong&gt;World&lt;/strong&gt;</h1> -->

<h1>{title}</h1>
<h1 set:html={title} />

<h1>{title}!</h1>
<h1><Fragment set:html={title}>!</h1>

<h1 set:text={title} /> <!-- <h1>Hello &lt;strong&gt;World&lt;/strong&gt;</h1> -->
```

--------------------------------

### Install Cloudflare Adapter Dependencies (pnpm)

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

Manually installs the @astrojs/cloudflare adapter as a project dependency using pnpm.

```bash
pnpm add @astrojs/cloudflare
```

--------------------------------

### Install @astrojs/sitemap Integration with pnpm

Source: https://docs.astro.build/en/guides/integrations-guide

Installs the '@astrojs/sitemap' integration using pnpm. This command adds the sitemap integration to your project dependencies, preparing it for configuration.

```bash
pnpm add @astrojs/sitemap
```

--------------------------------

### astro:config:setup Hook

Source: https://docs.astro.build/en/reference/integrations-reference

The `astro:config:setup` hook is called during initialization before Vite or Astro configurations are resolved. It allows for extending project configuration, such as updating Astro config, applying Vite plugins, adding renderers, and injecting scripts.

```APIDOC
## `astro:config:setup`

### Description
This hook is invoked on initialization, prior to the resolution of Vite or Astro configurations. It provides a powerful mechanism to extend the project's configuration.

### Method
Astro Hook

### Endpoint
`astro:config:setup`

### Parameters
#### Arguments
- **`options`** (object) - Required - An object containing configuration options:
  - **`config`** (`AstroConfig`) - Read-only copy of the user-supplied Astro config, resolved before other integrations.
  - **`command`** (`'dev' | 'build' | 'preview' | 'sync'`) - The current Astro command being executed.
  - **`isRestart`** (`boolean`) - Indicates if the dev server is restarting.
  - **`updateConfig`** (`(newConfig: DeepPartial<AstroConfig>) => AstroConfig`) - Callback to update the user-supplied Astro config.
  - **`addRenderer`** (`(renderer: AstroRenderer) => void`) - Callback to add a component framework renderer.
  - **`addClientDirective`** (`(directive: ClientDirectiveConfig) => void`) - Callback to add a client directive.
  - **`addMiddleware`** (`(middleware: AstroIntegrationMiddleware) => void`) - Callback to add middleware.
  - **`addDevToolbarApp`** (`(entrypoint: DevToolbarAppEntry) => void`) - Callback to add a dev toolbar application.
  - **`addWatchFile`** (`(path: URL | string) => void`) - Callback to add a file to watch for changes, triggering a dev server reload.
  - **`injectScript`** (`(stage: InjectedScriptStage, content: string) => void`) - Callback to inject scripts at different stages.
  - **`injectRoute`** (`(injectedRoute: InjectedRoute) => void`) - Callback to inject routes.
  - **`createCodegenDir`** (`() => URL`) - Callback to create a directory for code generation.
  - **`logger`** (`AstroIntegrationLogger`) - The integration logger instance.

### Request Example
```javascript
// Example of updating config with a Vite plugin
import bananaCSS from '@vitejs/official-banana-css-plugin';

export default {
  name: 'banana-css-integration',
  hooks: {
    'astro:config:setup': ({ updateConfig }) => {
      updateConfig({
        vite: {
          plugins: [bananaCSS()],
        }
      })
    }
  }
}
```
```javascript
// Example of adding a watcher file
// Must be an absolute path!
addWatchFile('/home/user/.../my-config.json');
addWatchFile(new URL('./ec.config.mjs', config.root));
```

### Response
#### Success Response (void)
- The hook returns `void` or a `Promise<void>` if asynchronous operations are performed.

#### Response Example
N/A (Hook execution)

### Error Handling
- Errors during hook execution will typically halt the build or development process, with messages logged to the console.
```

--------------------------------

### Install Cloudflare Adapter Dependencies (npm)

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

Manually installs the @astrojs/cloudflare adapter as a project dependency using npm.

```bash
npm install @astrojs/cloudflare
```

--------------------------------

### Install Deno Deploy CLI

Source: https://docs.astro.build/en/guides/deploy/deno

Command to globally install the Deno Deploy CLI tool. This command uses `deno install` with flags for global installation (`-g`), automatic updates (`-A`), force overwrite (`-f`), and specifying the registry (`-r`) for the `@deno/deployctl` package.

```bash
deno install -gArf jsr:@deno/deployctl

```

--------------------------------

### Update Astro Configuration with Vite Plugin

Source: https://docs.astro.build/en/reference/integrations-reference

Demonstrates how to use the `updateConfig` function within the `astro:config:setup` hook to add a Vite plugin. This example shows how to integrate the `@vitejs/official-banana-css-plugin` by modifying the `vite.plugins` array in the Astro configuration.

```javascript
import bananaCSS from '@vitejs/official-banana-css-plugin';


export default {
  name: 'banana-css-integration',
  hooks: {
    'astro:config:setup': ({ updateConfig }) => {
      updateConfig({
        vite: {
          plugins: [bananaCSS()],
        }
      })
    }
  }
}

```

--------------------------------

### Preview and Deploy Astro Site with Wrangler

Source: https://docs.astro.build/en/guides/deploy/cloudflare

Builds the Astro site and then starts a local development server using Wrangler for previewing. The second command deploys the built site to Cloudflare Workers.

```bash
npx astro build && npx wrangler dev
```

```bash
npx astro build && npx wrangler deploy
```

--------------------------------

### Query Neon Database in Astro Component

Source: https://docs.astro.build/en/guides/backend/neon

Fetch data from your Neon database within an Astro component using the initialized Neon client. This example demonstrates fetching the current database time.

```astro
---
import { sql } from '../lib/neon';

const response =  await  sql`SELECT NOW() as current_time`;
const currentTime = response[0].current_time;
---


<h1>Current Time</h1>
<p>The time is: {currentTime}</p>
```

--------------------------------

### Manually Install Vercel Adapter

Source: https://docs.astro.build/en/guides/integrations-guide/vercel

Installs the @astrojs/vercel adapter as a project dependency using npm, pnpm, or Yarn.

```bash
npm install @astrojs/vercel

```

```bash
pnpm add @astrojs/vercel

```

```bash
yarn add @astrojs/vercel

```

--------------------------------

### Install Astro Project Dependencies

Source: https://docs.astro.build/en/install-and-setup

Commands to install Astro as a local project dependency using npm, pnpm, or Yarn. It's crucial to install Astro locally, not globally.

```shell
npm install astro
```

```shell
pnpm add astro
```

```shell
yarn add astro
```

--------------------------------

### Add Preact to Astro Project

Source: https://docs.astro.build/en/tutorial/6-islands/1

Installs the Preact integration for Astro. This command allows Astro to render Preact components. Ensure your dev server is stopped before running.

```bash
npx astro add preact
```

```bash
pnpm astro add preact
```

```bash
yarn astro add preact
```

--------------------------------

### Astro Build Setup Hook (`astro:build:setup`) with Page Data Handling

Source: https://docs.astro.build/en/reference/integrations-reference

Within the `astro:build:setup` hook, the `pages` option provides a `Map` of page routes to their build data. This enables integrations to inspect and act upon page-specific information, such as checking route patterns or logging route types, before the build is finalized.

```javascript
export default {
  name: 'my-integration',
  hooks: {
    'astro:build:setup': ({ pages }) => {
      pages.forEach((data) => {
        if (data.route.pattern.test("/blog")) {
          console.log(data.route.type);
        }
      });
    },
  }
}
```

--------------------------------

### Install Clerk in Astro

Source: https://docs.astro.build/en/guides/authentication

Installs the official Clerk SDK for Astro using npm, pnpm, or Yarn. Ensure you have a package manager installed.

```bash
npm install @clerk/astro
```

```bash
pnpm add @clerk/astro
```

```bash
yarn add @clerk/astro
```

--------------------------------

### Install @astrojs/sitemap Integration with npm

Source: https://docs.astro.build/en/guides/integrations-guide

Installs the '@astrojs/sitemap' integration using npm. This is the first step in manually adding the sitemap functionality to an Astro project.

```bash
npm install @astrojs/sitemap
```

--------------------------------

### Preview Astro Project Locally with Wrangler (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/guides/deploy/cloudflare

Builds the Astro project and then starts a local development server using Wrangler to preview the site. Supports npm, pnpm, and Yarn.

```bash
npx astro build && wrangler pages dev ./dist
```

```bash
pnpm astro build && wrangler pages dev ./dist
```

```bash
yarn astro build && wrangler pages dev ./dist
```

--------------------------------

### Create Astro Project using npm

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-gatsby

This snippet demonstrates how to create a new Astro project using npm. It shows the command to launch the Astro CLI wizard and how to use a template for initialization. This is the primary method for setting up a new Astro project.

```shell
# launch the Astro CLI Wizard
npm create astro@latest


# create a new project with an official example
npm create astro@latest -- --template <example-name>
```

--------------------------------

### Preview Astro Site Locally with Bun

Source: https://docs.astro.build/en/recipes/bun

Runs a local preview of the built Astro site using Bun. This command is useful for testing the production build before deployment.

```bash
bun run preview
```

--------------------------------

### Configuring Vite Plugins in Astro

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Demonstrates how to integrate Vite plugins into an Astro project starting from v0.21. Vite plugins can be added to the `plugins` array within the `vite` configuration object in `astro.config.mjs`.

```javascript
import { imagetools } from 'vite-imagetools';


export default {
  vite: {
    plugins: [imagetools()],
  },
};
```

--------------------------------

### Run Astro Development Server with Bun

Source: https://docs.astro.build/en/recipes/bun

Starts the Astro development server using Bun. This command is used for local development and allows you to see changes in real-time.

```bash
bun run dev
```

--------------------------------

### Query Posts from Xata using Astro and Xata SDK

Source: https://docs.astro.build/en/guides/backend/xata

Demonstrates how to import the XataClient, initialize it with environment variables, and fetch paginated posts from the 'Posts' table in your Xata database. It then maps over the records to display post titles.

```astro
---
import { XataClient } from '../../xata';


const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH
});


const { records } = await xata.db.Posts.getPaginated({
  pagination: {
    size: 50
  }
})
---


<ul>
  {records.map((post) => (
    <li>{post.title}</li>
  ))}
</ul>
```

--------------------------------

### Install SolidJS Dependency (npm)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Installs the 'solid-js' package as a dependency using npm, required if warnings arise.

```bash
npm install solid-js
```

--------------------------------

### astro:server:done Hook

Source: https://docs.astro.build/en/reference/integrations-reference

This hook is triggered just after the development server is closed. It's intended for running any necessary cleanup tasks that were initiated during the `astro:server:setup` or `astro:server:start` hooks.

```APIDOC
## astro:server:done

### Description
Runs cleanup events after the dev server is closed.

### Method
Event Hook

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
#### Success Response (200)
N/A

#### Response Example
N/A

```typescript
'astro:server:done'?: (options: {
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```
```

--------------------------------

### Basic RSS feed setup with Astro

Source: https://docs.astro.build/en/recipes/rss

Configure a basic RSS feed in Astro by creating a `.xml.js` file in `src/pages/`. This file should import `rss` from '@astrojs/rss' and export a `GET` function that returns an RSS feed object with title, description, site, and items.

```javascript
import rss from '@astrojs/rss';


export function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: 'Buzz’s Blog',
    // `<description>` field in output xml
    description: 'A humble Astronaut’s guide to the stars',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: [],
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
```

--------------------------------

### Install @astrojs/sitemap Integration with Yarn

Source: https://docs.astro.build/en/guides/integrations-guide

Installs the '@astrojs/sitemap' integration using Yarn. After running this command, you can proceed to configure the sitemap integration in your Astro project.

```bash
yarn add @astrojs/sitemap
```

--------------------------------

### Install Cloudflare Adapter Dependencies (Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

Manually installs the @astrojs/cloudflare adapter as a project dependency using Yarn.

```bash
yarn add @astrojs/cloudflare
```

--------------------------------

### Install SolidJS Dependency (pnpm)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Installs the 'solid-js' package as a dependency using pnpm, required if warnings arise.

```bash
pnpm add solid-js
```

--------------------------------

### Install Less for Astro

Source: https://docs.astro.build/en/guides/styling

Installs the Less preprocessor as a project dependency for use with Astro.

```bash
npm install less
```

--------------------------------

### On-Demand API Endpoint with Random Number

Source: https://docs.astro.build/en/guides/on-demand-rendering

An example of an Astro API endpoint (`GET` request) configured for on-demand rendering. It generates a random number on each request by setting `prerender = false`.

```javascript
export const prerender = false;


export async function GET() {
  let number = Math.random();
  return new Response(
    JSON.stringify({
      number,
      message: `Here's a random number: ${number}`,
    }),
  );
}
```

--------------------------------

### Install Astro DB Integration Package using Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/db

Manually installs the '@astrojs/db' integration package using Yarn. This command is executed when you opt for manual installation of the Astro DB integration.

```bash
yarn add @astrojs/db
```

--------------------------------

### Install Prettier and Astro Plugin (Yarn)

Source: https://docs.astro.build/en/editor-setup

Installs the core 'prettier' package and the 'prettier-plugin-astro' for formatting Astro files using Yarn. This is a dev dependency.

```bash
yarn add --dev --exact prettier prettier-plugin-astro
```

--------------------------------

### Update Astro Dependency using Yarn

Source: https://docs.astro.build/en/guides/upgrade-to/v1

This command updates the 'astro' package to the latest version using Yarn. For a comprehensive update of all dependencies, use the general 'yarn upgrade' command. This requires Yarn to be installed and set up for the project.

```bash
# updates the astro dependency:
yarn upgrade astro
# or, to update all dependencies:
yarn upgrade
```

--------------------------------

### Manually Install @astrojs/svelte Package

Source: https://docs.astro.build/en/guides/integrations-guide/svelte

Installs the @astrojs/svelte package manually using package managers. This is an alternative to using the astro add command.

```bash
npm install @astrojs/svelte

```

```bash
pnpm add @astrojs/svelte

```

```bash
yarn add @astrojs/svelte

```

--------------------------------

### Install Preact Dependency

Source: https://docs.astro.build/en/guides/integrations-guide/preact

Installs the Preact library, which is a peer dependency for the @astrojs/preact integration. This step is necessary if Preact is not already installed.

```bash
npm install preact

```

```bash
pnpm add preact

```

```bash
yarn add preact

```

--------------------------------

### API Endpoint Accessing Props with getStaticPaths in Astro

Source: https://docs.astro.build/en/reference/api-reference

Combines `getStaticPaths()` with an API endpoint (`GET` function) to serve data based on route parameters and props. This example returns the author prop associated with each dynamic route.

```astro
import type { APIContext } from 'astro';


export function getStaticPaths() {
  return [
    { params: { id: '1' }, props: { author: 'Blu' } },
    { params: { id: '2' }, props: { author: 'Erika' } },
    { params: { id: '3' }, props: { author: 'Matthew' } }
  ];
}


export function GET({ props }: APIContext) {
  return new Response(
    JSON.stringify({ author: props.author }),
  );
}
```

--------------------------------

### Index Astro Page with Navigation and Footer

Source: https://docs.astro.build/en/tutorial/3-components/2

An example of an `index.astro` file that integrates both a Navigation and a Footer component. It demonstrates importing multiple components and setting up basic page structure including meta tags and title.

```astro
---
import Navigation from '../components/Navigation.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';


const pageTitle = 'Home Page';
---


<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{pageTitle}</title>
  </head>
  <body>
    <Navigation />
    <h1>{pageTitle}</h1>
    <Footer />
  </body>
</html>

```

--------------------------------

### TypeScript: Using Typed Session Data

Source: https://docs.astro.build/en/guides/sessions

Illustrates how to use session data with TypeScript types defined in `App.SessionData`. It shows examples of getting typed data, accessing untyped data, and setting data with type checking.

```typescript
---
const cart = await Astro.session?.get('cart');
// const cart: string[] | undefined


const something = await Astro.session?.get('something');
// const something: any

Astro.session?.set('user', { id: 1, name: 'Houston' });
// Error: Argument of type '{ id: number; name: string }' is not assignable to parameter of type '{ id: string; name: string; }'.
---

```

--------------------------------

### Dynamically Setting Prerender Values with Astro Integration

Source: https://docs.astro.build/en/guides/upgrade-to/v5

Shows how to manage dynamic 'prerender' values for routes in Astro v5.0. Since direct dynamic environment variable usage is removed, this example demonstrates using the 'astro:route:setup' hook within an Astro integration to set 'prerender' values based on environment variables.

```javascript
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';


export default defineConfig({
  integrations: [
    {
      name: 'set-prerender',
      hooks: {
        'astro:route:setup': ({ route }) => {
          // Load environment variables from .env files (if needed)
          const { PRERENDER } = loadEnv(process.env.NODE_ENV, process.cwd(), '');
          // Find routes matching the expected filename.
          if (route.component.endsWith('/blog/[slug].astro')) {
            // Set the prerender value on routes as needed.
            route.prerender = PRERENDER;
          }
        },
      },
    }
  ],
});
```

--------------------------------

### Astro Server Start Hook Signature (TypeScript)

Source: https://docs.astro.build/en/reference/integrations-reference

Defines the signature for the `astro:server:start` hook in TypeScript. This hook is executed after the development server starts listening and provides access to the server's network address and a logger instance.

```typescript
'astro:server:start'?: (options: {
  address: AddressInfo;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

--------------------------------

### Install Cypress for Astro Projects

Source: https://docs.astro.build/en/guides/testing

Provides commands to install Cypress as a development dependency in an Astro project using different package managers. This is the first step in setting up Cypress for end-to-end testing.

```bash
npm install cypress --save-dev
```

```bash
pnpm add --save-dev cypress
```

```bash
yarn add cypress --dev
```

--------------------------------

### Install and Run Vercel CLI for Deployment

Source: https://docs.astro.build/en/guides/deploy/vercel

Installs the Vercel command-line interface globally and initiates the deployment process for your Astro project. This is used for deploying via the terminal.

```bash
npm install -g vercel
vercel
```

```bash
pnpm add -g vercel
vercel
```

```bash
yarn global add vercel
vercel
```

--------------------------------

### Update Astro Dependency using pnpm

Source: https://docs.astro.build/en/guides/upgrade-to/v1

This command updates the 'astro' package to its latest version using pnpm. Alternatively, 'pnpm upgrade' can be used to update all project dependencies. This assumes pnpm is installed and the project is managed by it.

```bash
# updates the astro dependency:
pnpm upgrade astro
# or, to update all dependencies:
pnpm upgrade
```

--------------------------------

### Astro Home Page Initial Structure

Source: https://docs.astro.build/en/tutorial/1-setup/3

This code snippet shows the default structure of an Astro home page file (`src/pages/index.astro`). It includes frontmatter, HTML boilerplate, and basic content, serving as the starting point for modifications.

```astro
---
---


<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} >
    <title>Astro</title>
  </head>
  <body>
    <h1>Astro</h1>
  </body>
</html>

```

--------------------------------

### Astro Build Setup Hook (`astro:build:setup`) with Build Target Check

Source: https://docs.astro.build/en/reference/integrations-reference

The `astro:build:setup` hook includes a `target` option that indicates the current build phase, either `'client'` or `'server'`. This allows integrations to execute specific logic only during a particular build phase, ensuring targeted actions are performed at the appropriate time.

```javascript
export default {
  name: 'my-integration',
  hooks: {
    'astro:build:setup': ({ target }) => {
      if (target === "server") {
        // do something in server build phase
      }
    },
  }
}
```

--------------------------------

### Build Astro Site (npm)

Source: https://docs.astro.build/en/guides/deploy/deno

Builds the Astro site for production using npm. This command generates the static or server-ready files in the `dist` directory.

```bash
npm run build
```

--------------------------------

### Manually Install @astrojs/vue (pnpm)

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Installs the @astrojs/vue package as a project dependency using pnpm.

```bash
pnpm add @astrojs/vue
```

--------------------------------

### Astro Image Resolution using ESM Import

Source: https://docs.astro.build/en/guides/upgrade-to/v1

This example demonstrates how to import an image using an ESM import in Astro components. It's recommended when assets are in the `src/` directory and automatic optimization like filename hashing is desired. The import returns a resolved URL for use in templates.

```astro
---
// Example: Astro will include this image file in your final build
import imgUrl from './penguin.png';
---
<img src={imgUrl} />
```

--------------------------------

### Import and Use Astro and React Components with Named Imports

Source: https://docs.astro.build/en/reference/publish-to-npm

This example demonstrates how to import and use Astro and React components using named imports from an Astro package. It assumes the package 'my-component' has been installed and exposes these components. The imported components are then rendered directly within an Astro template.

```astro
---
import { MyAstroComponent } from 'my-component';
import { MyReactComponent } from 'my-component';
---
<MyAstroComponent />
<MyReactComponent />
```

--------------------------------

### Manually Install @astrojs/vue (npm)

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Installs the @astrojs/vue package as a project dependency using npm.

```bash
npm install @astrojs/vue
```

--------------------------------

### Manually Install Astro React Package

Source: https://docs.astro.build/en/guides/integrations-guide/react

Installs the @astrojs/react package manually using npm, pnpm, or yarn. This is an alternative to the `astro add` command.

```bash
npm install @astrojs/react
```

```bash
pnpm add @astrojs/react
```

```bash
yarn add @astrojs/react
```

--------------------------------

### Format Date using toLocaleDateString in Astro

Source: https://docs.astro.build/en/tutorial/6-islands/4

This example shows how to format a `Date` object obtained from frontmatter using the `toLocaleDateString()` method in an Astro component. This is useful for displaying dates in a user-friendly format, leveraging the type safety provided by content collection schemas.

```html
<!-- ... -->
<BaseLayout pageTitle={frontmatter.title}>
    <p>{frontmatter.pubDate.toLocaleDateString()}</p>
    <p><em>{frontmatter.description}</em></p>
    <p>Written by: {frontmatter.author}</p>
    <img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />
<!-- ... -->

```

--------------------------------

### Configure ButterCMS API Token in Astro

Source: https://docs.astro.build/en/guides/cms/buttercms

This snippet shows how to set your ButterCMS API token as an environment variable in an Astro project's .env file. This is a crucial setup step for authenticating the ButterCMS SDK.

```env
BUTTER_TOKEN=YOUR_API_TOKEN_HERE
```

--------------------------------

### Toolbar App Integration Setup

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Integrations can add apps to the dev toolbar during the `astro:config:setup` hook using the `addDevToolbarApp` function.

```APIDOC
## Toolbar app integration setup

Integrations can add apps to the dev toolbar in the `astro:config:setup` hook.

```javascript
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "my-integration",
  hooks: {
    "astro:config:setup": ({ addDevToolbarApp }) => {
      addDevToolbarApp({
        id: "my-app",
        name: "My App",
        icon: "<svg>...</svg>",
        entrypoint: "./my-app.js",
      });
    },
  },
});
```

### `addDevToolbarApp()`

**Type:** `(entrypoint: DevToolbarAppEntry) => void`

**Added in:** `astro@4.0.0`

A function available to the `astro:config:setup` hook that adds dev toolbar apps. It takes an object with the following required properties to define the toolbar app: `id`, `name`, and `entrypoint`. Optionally, you can also define an `icon` for your app.

#### `id`

**Type:** `string`

A unique identifier for the app. This will be used to uniquely identify the app in hooks and events.

```json
{
  "id": "my-app",
  "// ..."
}
```

#### `name`

**Type:** `string`

The name of the app. This will be shown to users whenever the app needs to be referenced using a human-readable name.

```json
{
  "// ...",
  "name": "My App",
  "// ..."
}
```

#### `icon`

**Type:** `Icon | string`

**Default** : `"?"`

The icon used to display the app in the toolbar. This can either be an icon from the icon list, or a string containing the SVG markup of the icon.

```json
{
  "// ...",
  "icon": "<svg>...</svg>", // or, e.g. 'astro:logo'
  "// ..."
}
```

#### `entrypoint`

**Type:** `string | URL`

The path to the file that exports the dev toolbar app.

```json
{
  "// ...",
  "entrypoint": "./my-app.js",
}
```

**Added in:** `astro@5.0.0`

The function also accepts a `URL` as `entrypoint`:

```javascript
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "my-integration",
  hooks: {
    "astro:config:setup": ({ addDevToolbarApp }) => {
      addDevToolbarApp({
        id: "my-app",
        name: "My App",
        icon: "<svg>...</svg>",
        entrypoint: new URL("./my-app.js", import.meta.url),
      });
    },
  },
});
```
```

--------------------------------

### Create New Astro Project with Bun

Source: https://docs.astro.build/en/recipes/bun

Command to create a new Astro project using Bun's package manager. Ensures Bun is installed and then executes the `create-astro` command.

```bash
bun create astro my-astro-project-using-bun
```

--------------------------------

### Astro Integration Setup for Dev Toolbar App

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Demonstrates how to set up an Astro integration to add a custom app to the dev toolbar using the `astro:config:setup` hook and the `addDevToolbarApp` function. It shows the basic configuration including `id`, `name`, `icon`, and `entrypoint`. This integration allows extending the Astro development experience with custom tools.

```javascript
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "my-integration",
  hooks: {
    "astro:config:setup": ({ addDevToolbarApp }) => {
      addDevToolbarApp({
        id: "my-app",
        name: "My App",
        icon: "<svg>...</svg>",
        entrypoint: "./my-app.js",
      });
    },
  },
});
```

--------------------------------

### Install Sass for Astro

Source: https://docs.astro.build/en/guides/styling

Installs the Sass preprocessor as a project dependency for use with Astro.

```bash
npm install sass
```

--------------------------------

### Get Build Output Directory in Astro

Source: https://docs.astro.build/en/reference/integrations-reference

This example demonstrates how to access the build output directory URL during the 'astro:build:generated' hook. It uses `fileURLToPath` from Node.js to convert the URL to a file path string for use with file system operations.

```javascript
import { fileURLToPath } from 'node:url';


export default {
  name: 'my-integration',
  hooks: {
    'astro:build:generated': ({ dir }) => {
      const outFile = fileURLToPath(new URL('./my-integration.json', dir));
    }
  }
}
```

--------------------------------

### Generate Prisma Migrations and Client

Source: https://docs.astro.build/en/guides/backend/prisma-postgres

Generates database migration files based on the schema and creates the Prisma Client, enabling type-safe database queries.

```bash
npx prisma migrate dev --name init
```

--------------------------------

### Preview Astro Site Locally with Deno (pnpm)

Source: https://docs.astro.build/en/guides/deploy/deno

Runs the Astro site locally using the Deno runtime via the `preview` script configured in `package.json`. This command is used after building the site.

```bash
pnpm run preview
```

--------------------------------

### Install Nano Stores with Yarn

Source: https://docs.astro.build/en/recipes/sharing-state

Installs the Nano Stores library using Yarn. This provides another option for managing project dependencies.

```bash
yarn add nanostores
```

--------------------------------

### Astro Dynamic Route for Contentful Slug

Source: https://docs.astro.build/en/guides/cms/contentful

Fetches blog post data from Contentful using a slug parameter from the URL. It utilizes Astro.params to get the slug and passes it to the contentfulClient.getEntries method. Assumes contentfulClient and BlogPost type are available.

```astro
---
import { contentfulClient } from "../../lib/contentful";
import type { BlogPost } from "../../lib/contentful";


const { slug } = Astro.params;


const data = await contentfulClient.getEntries<BlogPost>({
  content_type: "blogPost",
  "fields.slug": slug,
});
---
```

--------------------------------

### Set Response Status and Text with Astro.response

Source: https://docs.astro.build/en/guides/on-demand-rendering

This example shows how to set the HTTP response status and status text using `Astro.response` for a product page when a product is not found. It leverages `Astro.params` to get a product ID and conditionally sets the response details.

```javascript
export const prerender = false;


import { getProduct } from '../api';


const product = await getProduct(Astro.params.id);


// No product found
if (!product) {
  Astro.response.status = 404;
  Astro.response.statusText = 'Not found';
}

```

--------------------------------

### Submit Feedback Form with API Request (Vue)

Source: https://docs.astro.build/en/recipes/build-forms-api

This Vue.js example utilizes the Composition API with `<script setup>` to create a feedback form. It handles form submission, sends data to '/api/feedback' using fetch, and displays the response message using Vue's reactivity system (`ref`).

```typescript
<script setup lang="ts">
import { ref } from "vue";

const responseMessage = ref<string>();

async function submit(e: Event) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  const response = await fetch("/api/feedback", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  responseMessage.value = data.message;
}
</script>

<template>
  <form @submit="submit">
    <label>
      Name
      <input type="text" id="name" name="name" required />
    </label>
    <label>
      Email
      <input type="email" id="email" name="email" required />
    </label>
    <label>
      Message
      <textarea id="message" name="message" required />
    </label>
    <button>Send</button>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </form>
</template>
```

--------------------------------

### Fetch WordPress Posts in Astro

Source: https://docs.astro.build/en/guides/cms/wordpress

Fetches a list of posts from a WordPress REST API and renders their titles and content within an Astro component. It utilizes the `fetch` API and Astro's `set:html` directive for rendering. This example assumes basic WordPress API setup and doesn't require authentication for public data.

```astro
---
const res = await fetch("https://[YOUR-SITE]/wp-json/wp/v2/posts");
const posts = await res.json();
---
<h1>Astro + WordPress 🚀</h1>
{
  posts.map((post) => (
      <h2 set:html={post.title.rendered} />
      <p set:html={post.content.rendered} />
  ))
}

```

--------------------------------

### Astro Static Route Examples

Source: https://docs.astro.build/en/guides/routing

Illustrates how the file structure within the `src/pages/` directory maps to website URLs for static routes. Includes Astro, Markdown, and MDX files.

```text
src/pages/index.astro        -> mysite.com/
src/pages/about.astro        -> mysite.com/about
src/pages/about/index.astro  -> mysite.com/about
src/pages/about/me.astro     -> mysite.com/about/me
src/pages/posts/1.md         -> mysite.com/posts/1
```

--------------------------------

### Update Astro Dependency using npm

Source: https://docs.astro.build/en/guides/upgrade-to/v1

This command updates the 'astro' package to the latest version using npm. It's a targeted update. For updating all project dependencies, a broader 'npm upgrade' command can be used. Ensure npm is installed and configured.

```bash
# updates the astro dependency:
npm upgrade astro
# or, to update all dependencies:
npm upgrade
```

--------------------------------

### Install Sentry Astro SDK using pnpm

Source: https://docs.astro.build/en/guides/backend/sentry

Installs the Sentry SDK for Astro using the pnpm package manager. This command adds the necessary package and configures the Sentry integration in your `astro.config.mjs` file.

```bash
pnpm astro add @sentry/astro
```

--------------------------------

### Install SolidJS Dependency (Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Installs the 'solid-js' package as a dependency using Yarn, required if warnings arise.

```bash
yarn add solid-js
```

--------------------------------

### Create Astro Project with React and Partytown (pnpm)

Source: https://docs.astro.build/en/install-and-setup

This command creates a new Astro project and installs the React and Partytown integrations using pnpm. The `--add` flag is utilized to add specified integrations during the project scaffolding process.

```bash
pnpm create astro@latest --add react --add partytown
```

--------------------------------

### Install Nano Stores with npm

Source: https://docs.astro.build/en/recipes/sharing-state

Installs the Nano Stores library using npm. This is the first step to enable shared client storage in Astro components.

```bash
npm install nanostores
```

--------------------------------

### Install rollup-plugin-visualizer (npm)

Source: https://docs.astro.build/en/recipes/analyze-bundle-size

Installs the `rollup-plugin-visualizer` package as a development dependency using npm. This package is essential for analyzing Astro bundle sizes.

```bash
npm install rollup-plugin-visualizer --save-dev
```

--------------------------------

### Install Zeabur Astro Adapter (npm)

Source: https://docs.astro.build/en/guides/deploy/zeabur

Installs the Zeabur adapter for Astro projects to enable Server-Side Rendering (SSR). This command should be run in your project's terminal using npm.

```bash
npm install @zeabur/astro-adapter
```

--------------------------------

### Build Astro Site with Node.js and npm

Source: https://docs.astro.build/en/guides/deploy/buddy

This snippet shows the npm commands required to install dependencies and build an Astro site within a Node.js environment. Ensure Node.js is installed and configured in your CI/CD pipeline before running these commands. The output is typically placed in a 'dist' directory.

```shell
npm install
npm run build
```

--------------------------------

### astro:build:start Hook

Source: https://docs.astro.build/en/reference/integrations-reference

Fires after the `astro:config:done` event and before the production build commences. This hook is ideal for setting up global objects or clients required during the production build process and can also extend adapter API build configuration options.

```APIDOC
## astro:build:start

### Description
Sets up global objects or clients before the production build begins.

### Method
Event Hook

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
#### Success Response (200)
N/A

#### Response Example
N/A

```typescript
'astro:build:start'?: (options: {
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```
```

--------------------------------

### Preview Astro Site Locally with Deno (npm)

Source: https://docs.astro.build/en/guides/deploy/deno

Runs the Astro site locally using the Deno runtime via the `preview` script configured in `package.json`. This command is used after building the site.

```bash
npm run preview
```

--------------------------------

### Install @astrojs/prism Package

Source: https://docs.astro.build/en/guides/syntax-highlighting

Provides installation instructions for the @astrojs/prism package using npm, pnpm, and Yarn. This package is required to use the <Prism /> component for syntax highlighting.

```bash
npm install @astrojs/prism
```

```bash
pnpm add @astrojs/prism
```

```bash
yarn add @astrojs/prism
```

--------------------------------

### Define Astro Font Provider With Config

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Example of defining an Astro font provider with `defineAstroFontProvider` that accepts a configuration object. This allows passing custom serializable options to the unifont provider, enabling more complex or parameterized font setups. The `config` parameter is typed and passed to the provider.

```typescript
import { defineAstroFontProvider } from 'astro/config';


interface Config {
    // ...
};


export function myProvider(config: Config) {
    return defineAstroFontProvider({
        entrypoint: new URL('./implementation.js', import.meta.url),
        config
    });
};
```

--------------------------------

### Add @astrojs/mdx Integration using npm

Source: https://docs.astro.build/en/guides/integrations-guide/mdx

Automates the setup of the @astrojs/mdx integration for Astro projects using the npm package manager.

```bash
npx astro add mdx
```

--------------------------------

### Build Astro Site (pnpm)

Source: https://docs.astro.build/en/guides/deploy/deno

Builds the Astro site for production using pnpm. This command generates the static or server-ready files in the `dist` directory.

```bash
pnpm run build
```

--------------------------------

### Install LightningCSS for Astro

Source: https://docs.astro.build/en/guides/styling

Installs the LightningCSS transformer as a project dependency for Astro.

```bash
npm install lightningcss
```

--------------------------------

### Update Astro SSR Start Script (JSON)

Source: https://docs.astro.build/en/guides/deploy/zerops

Modifies the `scripts` section in `package.json` to set the `start` script for an Astro SSR site. This ensures the Node adapter's server output is correctly executed.

```json
"scripts": {
  "start": "node ./dist/server/entry.mjs",
}

```

--------------------------------

### Build Astro Site for Production with Bun

Source: https://docs.astro.build/en/recipes/bun

Builds the Astro site for production using Bun. This command generates static files optimized for deployment.

```bash
bun run build
```

--------------------------------

### Add Multiple Astro Integrations with npm

Source: https://docs.astro.build/en/guides/integrations-guide

Demonstrates how to add multiple Astro integrations simultaneously using the npm package manager and the 'astro add' command. This simplifies the setup process for projects requiring several integrations.

```bash
npx astro add react sitemap partytown
```

--------------------------------

### Add @astrojs/mdx Integration using pnpm

Source: https://docs.astro.build/en/guides/integrations-guide/mdx

Automates the setup of the @astrojs/mdx integration for Astro projects using the pnpm package manager.

```bash
pnpm astro add mdx
```

--------------------------------

### Astro Configuration Setup Hook

Source: https://docs.astro.build/en/reference/integrations-reference

The `astro:config:setup` hook allows extending project configuration, including updating Astro config, applying Vite plugins, adding renderers, and injecting scripts. It runs on initialization before Vite or Astro configs are resolved. The hook receives an options object with methods to modify the configuration.

```typescript
'astro:config:setup'?: (options: {
  config: AstroConfig;
  command: 'dev' | 'build' | 'preview' | 'sync';
  isRestart: boolean;
  updateConfig: (newConfig: DeepPartial<AstroConfig>) => AstroConfig;
  addRenderer: (renderer: AstroRenderer) => void;
  addClientDirective: (directive: ClientDirectiveConfig) => void;
  addMiddleware: (middleware: AstroIntegrationMiddleware) => void;
  addDevToolbarApp: (entrypoint: DevToolbarAppEntry) => void;
  addWatchFile: (path: URL | string) => void;
  injectScript: (stage: InjectedScriptStage, content: string) => void;
  injectRoute: (injectedRoute: InjectedRoute) => void;
  createCodegenDir: () => URL;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;

```

--------------------------------

### Install rollup-plugin-visualizer (Yarn)

Source: https://docs.astro.build/en/recipes/analyze-bundle-size

Installs the `rollup-plugin-visualizer` package as a development dependency using Yarn. This command ensures the visualization tool is available for your project.

```bash
yarn add rollup-plugin-visualizer --save-dev
```

--------------------------------

### Install Astro Cloudinary SDK with Yarn

Source: https://docs.astro.build/en/guides/media/cloudinary

Installs the astro-cloudinary package using Yarn. Use this command if your project utilizes the Yarn package manager.

```bash
yarn add astro-cloudinary
```

--------------------------------

### Manually install @astrojs/alpinejs package

Source: https://docs.astro.build/en/guides/integrations-guide/alpinejs

Install the @astrojs/alpinejs package manually using npm, pnpm, or Yarn. This is an alternative if the automatic installation encounters issues.

```bash
npm install @astrojs/alpinejs
```

```bash
pnpm add @astrojs/alpinejs
```

```bash
yarn add @astrojs/alpinejs
```

--------------------------------

### Start Astro Development Server

Source: https://docs.astro.build/en/guides/cms/keystatic

Launches the Astro development server, which also makes the Keystatic Admin UI accessible. This command is used to view the site locally and access the CMS dashboard.

```bash
npm run dev
```

--------------------------------

### Fetch Drupal Articles in Astro

Source: https://docs.astro.build/en/guides/cms/drupal

This snippet demonstrates how to fetch published 'article' content from a Drupal site within an Astro component. It utilizes `drupal-jsonapi-params` to construct the query and `jsona` to deserialize the JSON:API response. Ensure `DRUPAL_BASE_URL` environment variable is set and the `drupal-jsonapi-params` and `jsona` packages are installed.

```typescript
import {Jsona} from "jsona";
import {DrupalJsonApiParams} from "drupal-jsonapi-params";
import type {TJsonApiBody} from "jsona/lib/JsonaTypes";


// Get the Drupal base URL
export const baseUrl: string = import.meta.env.DRUPAL_BASE_URL;


// Generate the JSON:API Query. Get all title and body from published articles.
const params: DrupalJsonApiParams = new DrupalJsonApiParams();
params.addFields("node--article", [
        "title",
        "body",
    ])
    .addFilter("status", "1");
// Generates the query string.
const path: string = params.getQueryString();
const url: string = baseUrl + '/jsonapi/node/article?' + path;


// Get the articles
const request: Response = await fetch(url);
const json: string | TJsonApiBody = await request.json();
// Initiate Jsona.
const dataFormatter: Jsona = new Jsona();
// Deserialise the response.
const articles = dataFormatter.deserialize(json);

```

```astro
<body>
 {articles?.length ? articles.map((article: any) => (
    <section>
      <h2>{article.title}</h2>
      <article set:html={article.body.value}></article>
    </section>
 )): <div><h1>No Content found</h1></div> }
</body>

```

--------------------------------

### Create New Astro + Keystatic Project (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/guides/cms/keystatic

Initiates a new Astro project pre-configured with Keystatic using the Keystatic CLI. This command is used for starting new projects from scratch and requires a package manager.

```bash
npm create @keystatic@latest
```

```bash
pnpm create @keystatic@latest
```

```bash
yarn create @keystatic
```

--------------------------------

### Create Astro Project with Toolbar App Template

Source: https://docs.astro.build/en/recipes/making-toolbar-apps

These commands create a new Astro project using the `toolbar-app` template, providing a quick start for building a dev toolbar app. This template includes the necessary structure and basic files.

```shell
npm create astro@latest -- --template toolbar-app
```

```shell
pnpm create astro -- --template toolbar-app
```

```shell
yarn create astro -- --template toolbar-app
```

--------------------------------

### Manually Install @astrojs/vue (Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Installs the @astrojs/vue package as a project dependency using Yarn.

```bash
yarn add @astrojs/vue
```

--------------------------------

### Manually Install Astro Node Adapter using npm, pnpm, or Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/node

Manually install the @astrojs/node adapter package using your preferred package manager. This is an alternative to the `astro add` command.

```bash
npm install @astrojs/node
```

```bash
pnpm add @astrojs/node
```

```bash
yarn add @astrojs/node
```

--------------------------------

### Initialize Neon Client (src/lib/neon.ts)

Source: https://docs.astro.build/en/guides/backend/neon

Create a Neon client instance in src/lib/neon.ts using the neon function and your NEON_DATABASE_URL environment variable. This client will be used for all database interactions.

```typescript
import { neon } from '@neondatabase/serverless';

export const sql = neon(import.meta.env.NEON_DATABASE_URL);
```

--------------------------------

### npm Package Keywords for Astro Adapter Installation

Source: https://docs.astro.build/en/reference/adapter-reference

Specifies the `astro-adapter` keyword in `package.json` to enable installation via the `astro add` command. This facilitates easy integration of custom adapters into Astro projects.

```json
{
  "name": "example",
  "keywords": ["astro-adapter"],
}

```

--------------------------------

### Install Astro Cloudinary SDK with npm

Source: https://docs.astro.build/en/guides/media/cloudinary

Installs the astro-cloudinary package using npm. This is the first step to integrating Cloudinary with your Astro project.

```bash
npm install astro-cloudinary
```

--------------------------------

### Install Sentry Astro SDK using npm

Source: https://docs.astro.build/en/guides/backend/sentry

Installs the Sentry SDK for Astro using the npm package manager. This command adds the necessary package and configures the Sentry integration in your `astro.config.mjs` file.

```bash
npx astro add @sentry/astro
```

--------------------------------

### Build Astro Project for Azion

Source: https://docs.astro.build/en/guides/deploy/azion

Builds your Astro project locally using the Azion CLI. This command compiles your project's assets and code for deployment.

```bash
azion build
```

--------------------------------

### Astro Server Done Hook (`astro:server:done`)

Source: https://docs.astro.build/en/reference/integrations-reference

The `astro:server:done` hook is triggered just after the development server is closed. It's primarily used to execute any necessary cleanup tasks that were initiated during the `astro:server:setup` or `astro:server:start` hooks. This hook receives logger options for potential logging during cleanup.

```typescript
'astro:server:done'?: (options: {
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

--------------------------------

### Manually Install @astrojs/preact Package

Source: https://docs.astro.build/en/guides/integrations-guide/preact

Manually installs the @astrojs/preact package and its peer dependencies. This is an alternative to the 'astro add' command.

```bash
npm install @astrojs/preact

```

```bash
pnpm add @astrojs/preact

```

```bash
yarn add @astrojs/preact

```

--------------------------------

### Astro Build Setup Hook (`astro:build:setup`) with `updateConfig()`

Source: https://docs.astro.build/en/reference/integrations-reference

The `astro:build:setup` hook provides an `updateConfig` function that allows integrations to modify the Vite build configuration. This function merges provided options with existing configurations, making it useful for adding plugins like `awesome-css-vite-plugin`.

```javascript
import awesomeCssPlugin from 'awesome-css-vite-plugin';


export default {
  name: 'my-integration',
  hooks: {
    'astro:build:setup': ({ updateConfig }) => {
      updateConfig({
        plugins: [awesomeCssPlugin()],
      })
    }
  }
}
```

--------------------------------

### Astro Route Setup Hook Definition

Source: https://docs.astro.build/en/reference/integrations-reference

Defines the 'astro:route:setup' hook for Astro integrations. This hook runs before bundling in 'astro build' and during module graph building in 'astro dev', allowing configuration of route options like on-demand server rendering.

```typescript
'astro:route:setup'?: (options: {
  route: RouteOptions;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

--------------------------------

### Astro Blog Post Frontmatter Example

Source: https://docs.astro.build/en/tutorial/4-layouts/2

This is an example of YAML frontmatter for an Astro blog post. It includes essential metadata such as the layout file path, title, publication date, description, author, an image URL with alt text, and tags. This data is then passed to the associated Astro layout component.

```yaml
---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "blogging", "learning in public"]
---

```

--------------------------------

### Manually Install @astrojs/partytown Package

Source: https://docs.astro.build/en/guides/integrations-guide/partytown

Installs the `@astrojs/partytown` package manually using npm, pnpm, or Yarn. This is an alternative to using the `astro add` command.

```bash
npm install @astrojs/partytown

```

```bash
pnpm add @astrojs/partytown

```

```bash
yarn add @astrojs/partytown

```

--------------------------------

### Initialize Toolbar App with Event Handling (JavaScript)

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Initializes a toolbar app and listens for toggle events to update the UI. This example demonstrates basic app initialization and DOM manipulation based on the app's enabled/disabled state.

```javascript
export default defineToolbarApp({
  init(canvas, app) {
    app.onToggled(({ state }) => {
      const text = document.createTextNode(
        `The app is now ${state ? "enabled" : "disabled"}!`,
      );
      canvas.appendChild(text);
    });
  },
});
```

--------------------------------

### Install Svelte and TypeScript Dependencies

Source: https://docs.astro.build/en/guides/integrations-guide/svelte

Installs Svelte and TypeScript as project dependencies, which may be required if package managers do not automatically install peer dependencies. This addresses potential 'Cannot find package svelte' warnings.

```bash
npm install svelte typescript

```

```bash
pnpm add svelte typescript

```

```bash
yarn add svelte typescript

```

--------------------------------

### Package.json Homepage Field

Source: https://docs.astro.build/en/reference/publish-to-npm

Example of the 'homepage' field in package.json, linking to the project's online presence, such as a GitHub repository or documentation page.

```json
{
  "homepage": "https://github.com/owner/project#readme"
}
```

--------------------------------

### Astro Component Structure Example

Source: https://docs.astro.build/en/basics/astro-components

Illustrates the basic structure of an Astro component, separating the JavaScript 'Component Script' from the 'Component Template'. The script handles imports, props, and data fetching, while the template defines the HTML structure with potential JavaScript expressions.

```astro
---
import SomeAstroComponent from '../components/SomeAstroComponent.astro';
import SomeReactComponent from '../components/SomeReactComponent.jsx';
import someData from '../data/pokemon.json';


// Access passed-in component props, like "<X title=\"Hello, World\" />"
const { title } = Astro.props;


// Fetch external data, even from a private API or database
const data = await fetch('SOME_SECRET_API_URL/users').then(r => r.json());
---
<!-- Your template here! -->

```

--------------------------------

### Configure Astro Deployment Adapter

Source: https://docs.astro.build/en/reference/configuration-reference

Enables deployment to various serverless, server, or edge hosts by configuring build adapters. This example shows how to integrate the Netlify adapter for serverless deployment.

```javascript
import netlify from '@astrojs/netlify';
{
  // Example: Build for Netlify serverless deployment
  adapter: netlify()
}
```

--------------------------------

### Create Astro Project with React and Partytown (Yarn)

Source: https://docs.astro.build/en/install-and-setup

This command initiates a new Astro project with React and Partytown integrations using Yarn. The `--add` argument is passed to the `create astro` command to include these specific integrations.

```bash
yarn create astro --add react --add partytown
```

--------------------------------

### Astro Component Package.json Configuration

Source: https://docs.astro.build/en/reference/publish-to-npm

A comprehensive package.json example for an Astro component, detailing essential fields like name, description, version, exports, files, and keywords for npm publication.

```json
{
  "name": "my-component",
  "description": "Component description",
  "version": "1.0.0",
  "homepage": "https://github.com/owner/project#readme",
  "type": "module",
  "exports": {
    ".": "./index.js",
    "./astro": "./MyAstroComponent.astro",
    "./react": "./MyReactComponent.jsx"
  },
  "files": ["index.js", "MyAstroComponent.astro", "MyReactComponent.jsx"],
  "keywords": ["astro", "withastro", "astro-component", "...", "..."]
}
```

--------------------------------

### Remove functionPerRoute from Adapter Configuration

Source: https://docs.astro.build/en/guides/upgrade-to/v5

This code example shows how to remove the `functionPerRoute: true` configuration from an Astro adapter's `adapterFeatures`. In Astro v5.0, the `functionPerRoute` option is deprecated and removed, as the default behavior of emitting a single entry file is now standard and non-configurable. Users should remove this property from their adapter setup.

```javascript
export default function createIntegration() {
  return {
    name: '@matthewp/my-adapter',
    hooks: {
      'astro:config:done': ({ setAdapter }) => {
        setAdapter({
          name: '@matthewp/my-adapter',
          serverEntrypoint: '@matthewp/my-adapter/server.js',
          adapterFeatures: {
              functionPerRoute: true
          }
        });
      },
    },
  };
}
```

--------------------------------

### Type Endpoint Function with APIRoute - Astro

Source: https://docs.astro.build/en/guides/endpoints

Shows how to type an endpoint function using the `APIRoute` type from the 'astro' package. This provides type safety for the context object passed to endpoint functions, improving code clarity and maintainability. The example illustrates a basic structure for a typed GET request.

```typescript
import type { APIRoute } from "astro";


export const GET: APIRoute = async ({ params, request }) => {}
```

--------------------------------

### Configure Astro Docs MCP Server (stdio)

Source: https://docs.astro.build/en/guides/build-with-ai

This JSON configuration sets up the Astro Docs MCP server using stdio (standard input/output) transport with an npx command. This method is useful when the AI tool requires a command to execute for server communication. The command installs and runs `mcp-remote` to connect to the documentation server.

```json
{
  "mcpServers": {
    "Astro docs": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.docs.astro.build/mcp"]
    }
  }
}
```

--------------------------------

### Install Astro Cloudinary SDK with pnpm

Source: https://docs.astro.build/en/guides/media/cloudinary

Installs the astro-cloudinary package using pnpm. This command is used for projects managed with the pnpm package manager.

```bash
pnpm add astro-cloudinary
```

--------------------------------

### Install @rollup/plugin-yaml for Astro

Source: https://docs.astro.build/en/recipes/add-yaml-support

Installs the @rollup/plugin-yaml package as a development dependency for your Astro project. This plugin allows importing YAML files.

```npm
npm install @rollup/plugin-yaml --save-dev
```

```pnpm
pnpm add @rollup/plugin-yaml --save-dev
```

```yarn
yarn add @rollup/plugin-yaml --dev
```

--------------------------------

### Write a Basic Cypress Test for Astro

Source: https://docs.astro.build/en/guides/testing

An example of a Cypress test file (`index.cy.js`) that visits an Astro site and asserts the page title and main heading. This demonstrates how to interact with the DOM and verify content during testing.

```javascript
it('titles are correct', () => {
  const page = cy.visit('http://localhost:4321');


  page.get('title').should('have.text', 'Astro is awesome!')
  page.get('h1').should('have.text', 'Hello world from Astro');
});
```

--------------------------------

### Install TypeScript with pnpm

Source: https://docs.astro.build/en/recipes/making-toolbar-apps

Installs TypeScript as a development dependency in an Astro project using pnpm. This is a prerequisite for compiling JSX code.

```bash
pnpm install --save-dev typescript
```

--------------------------------

### Install Sentry Astro SDK using Yarn

Source: https://docs.astro.build/en/guides/backend/sentry

Installs the Sentry SDK for Astro using the Yarn package manager. This command adds the necessary package and configures the Sentry integration in your `astro.config.mjs` file.

```bash
yarn astro add @sentry/astro
```

--------------------------------

### Query Database Client with Node.js (pg Client)

Source: https://docs.astro.build/en/guides/backend/prisma-postgres

This snippet demonstrates how to connect to a SQL server using the 'pg' client in Node.js, create a table, insert data, and query the table. It requires a DATABASE_URL environment variable for the connection string. It outputs the title and content of the first post.

```javascript
import { Client } from 'pg';
const client = new Client({
  connectionString: import.meta.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
await client.connect();


await client.query(`
  CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title TEXT UNIQUE,
    content TEXT
  );


  INSERT INTO posts (title, content)
  VALUES ('Hello', 'World')
  ON CONFLICT (title) DO NOTHING;
`);


const { rows } = await client.query('SELECT * FROM posts');
await client.end();
```

--------------------------------

### Install Mux Video Web Component (pnpm)

Source: https://docs.astro.build/en/guides/media/mux

Installs the '@mux/mux-video' package using pnpm. This package enables HLS playback and automatic Mux Data metrics for video elements.

```bash
pnpm add @mux/mux-video
```

--------------------------------

### Preview Astro Site Locally with Deno (Yarn)

Source: https://docs.astro.build/en/guides/deploy/deno

Runs the Astro site locally using the Deno runtime via the `preview` script configured in `package.json`. This command is used after building the site.

```bash
yarn run preview
```

--------------------------------

### Install Mux Node SDK (pnpm)

Source: https://docs.astro.build/en/guides/media/mux

Installs the '@mux/mux-node' package using pnpm. Enables interaction with Mux API endpoints from server-side JavaScript or TypeScript.

```bash
pnpm add @mux/mux-node
```

--------------------------------

### Configure Node.js Start Script for Astro

Source: https://docs.astro.build/en/guides/deploy/clever-cloud

Updates the 'start' script in `package.json` to run the Node.js server for an on-demand rendered Astro application. Applications on Clever Cloud listen on port 8080.

```json
{
  "scripts": {
    "start": "node ./dist/server/entry.mjs --host 0.0.0.0 --port 8080"
  }
}
```

--------------------------------

### Manually Install @astrojs/markdoc Package (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/markdoc

Manually installs the @astrojs/markdoc package using npm, pnpm, or Yarn. This is an alternative to the automated 'astro add' command.

```bash
npm install @astrojs/markdoc
```

```bash
pnpm add @astrojs/markdoc
```

```bash
yarn add @astrojs/markdoc
```

--------------------------------

### Install rollup-plugin-visualizer (pnpm)

Source: https://docs.astro.build/en/recipes/analyze-bundle-size

Installs the `rollup-plugin-visualizer` package as a development dependency using pnpm. This is a package manager alternative for managing project dependencies.

```bash
pnpm add rollup-plugin-visualizer --save-dev
```

--------------------------------

### Configure Client-Side Output Directory

Source: https://docs.astro.build/en/reference/configuration-reference

This example sets the `build.client` directory to `'./client'`. This option controls the output path for client-side JavaScript and CSS relative to the main `outDir`, particularly when using server-rendered pages.

```javascript
{
  output: 'server',
  build: {
    client: './client'
  }
}
```

--------------------------------

### Install Firebase CLI

Source: https://docs.astro.build/en/guides/deploy/google-firebase

Installs the Firebase command-line interface tool, which is essential for interacting with Firebase services from your terminal. This tool is available through npm, pnpm, and Yarn.

```bash
npm install firebase-tools
```

```bash
pnpm add firebase-tools
```

```bash
yarn add firebase-tools
```

--------------------------------

### Astro Dev Toolbar Window Component

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Provides examples of using the `astro-dev-toolbar-window` web component to display content in a window. It shows both declarative usage with HTML and programmatic creation and appending of content.

```html
<astro-dev-toolbar-window>
  <p>My content</p>
</astro-dev-toolbar-window>
```

```javascript
const myWindow = document.createElement('astro-dev-toolbar-window');
const myContent = document.createElement('p');
myContent.textContent = 'My content';


// use appendChild directly on `window`, not `myWindow.shadowRoot`
myWindow.appendChild(myContent);
```

--------------------------------

### Install TypeScript with npm

Source: https://docs.astro.build/en/recipes/making-toolbar-apps

Installs TypeScript as a development dependency in an Astro project using npm. This is a prerequisite for compiling JSX code.

```bash
npm install --save-dev typescript
```

--------------------------------

### Build Astro Site (Yarn)

Source: https://docs.astro.build/en/guides/deploy/deno

Builds the Astro site for production using Yarn. This command generates the static or server-ready files in the `dist` directory.

```bash
yarn run build
```

--------------------------------

### Install Missing Integration Dependencies with pnpm

Source: https://docs.astro.build/en/guides/integrations-guide

Shows the pnpm command to install missing peer dependencies for an Astro integration, addressing potential issues when an integration's package cannot be found.

```bash
pnpm add [package-name]
```

--------------------------------

### Install Nano Stores for Solid

Source: https://docs.astro.build/en/recipes/sharing-state-islands

Installs Nano Stores and its helper package tailored for Solid.js. This facilitates sharing state across Solid-based islands in an Astro application.

```bash
npm install nanostores @nanostores/solid
```

--------------------------------

### Configure Development Image Service with Sharp

Source: https://docs.astro.build/en/guides/integrations-guide/vercel

Allows configuring the image service to use in development, particularly useful when Sharp's dependencies cannot be installed locally. The build process remains unaffected.

```javascript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  }),
});
```

--------------------------------

### Defining a Dev Toolbar App with `defineToolbarApp`

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

This example demonstrates the structure of a dev toolbar app using Astro's `defineToolbarApp` function. It includes the `init` function for initializing the app's UI within the provided canvas and an optional `beforeTogglingOff` function to handle user confirmation before closing the app.

```javascript
import { defineToolbarApp } from "astro/toolbar";


export default defineToolbarApp({
  init(canvas) {
    const text = document.createTextNode('Hello World!');
    canvas.appendChild(text);
  },
  beforeTogglingOff() {
    const confirmation = window.confirm('Really exit?');
    return confirmation;
  }
});
```

--------------------------------

### Install Mux Node SDK (npm)

Source: https://docs.astro.build/en/guides/media/mux

Installs the '@mux/mux-node' package using npm. This SDK provides authenticated access to the Mux REST API for server-side operations.

```bash
npm install @mux/mux-node
```

--------------------------------

### Astro Deployment Domain Configuration

Source: https://docs.astro.build/en/guides/configuring-astro

This code example demonstrates how to configure deployment-related options in Astro. It sets the site URL, base path, and trailing slash behavior using `defineConfig`. These settings are important for generating sitemaps, canonical URLs, and ensuring correct URL formatting across different deployment environments.

```javascript
import { defineConfig } from "astro/config";


export default defineConfig({
  site: "https://www.example.com",
  base: "/docs",
  trailingSlash: "always",
});

```

--------------------------------

### CLI Deploy On-Demand Site to Deno Deploy

Source: https://docs.astro.build/en/guides/deploy/deno

Command to deploy an on-demand Astro site to Deno Deploy using the `deployctl` CLI. It specifies the path to the server entry point for deployment.

```bash
deployctl deploy ./dist/server/entry.mjs

```

--------------------------------

### Astro Pagination Example: Displaying Page Data and Navigation

Source: https://docs.astro.build/en/guides/routing

An Astro component example demonstrating how to use the `page` prop to display current page information and navigation links. It maps over `page.data` to render list items and conditionally renders navigation links (First, Previous, Next, Last) based on the presence of their URLs.

```astro
---
// Paginate same list of `{ astronaut }` objects as the previous example
export function getStaticPaths({ paginate }) { /* ... */ }
const { page } = Astro.props;
---
<h1>Page {page.currentPage}</h1>
<ul>
  {page.data.map(({ astronaut }) => <li>{astronaut}</li>)}
</ul>
{page.url.first ? <a href={page.url.first}>First</a> : null}
{page.url.prev ? <a href={page.url.prev}>Previous</a> : null}
{page.url.next ? <a href={page.url.next}>Next</a> : null}
{page.url.last ? <a href={page.url.last}>Last</a> : null}
```

--------------------------------

### Handling HTTP Methods (GET, POST, DELETE, ALL)

Source: https://docs.astro.build/en/guides/endpoints

Demonstrates how to export functions for different HTTP methods (GET, POST, DELETE) and a catch-all ALL function in API routes.

```APIDOC
## Handling HTTP Methods

### Description
API routes in Astro can handle various HTTP methods by exporting functions named after the methods (e.g., `GET`, `POST`, `DELETE`). An `ALL` function can be used as a fallback for any unmatched HTTP methods.

### Method
GET, POST, DELETE, ALL

### Endpoint
`/websites/astro_build/api/route` (example)

### Parameters
#### Path Parameters
- **(none)**

#### Query Parameters
- **(none)**

#### Request Body
- **(depends on method)** - Applicable for POST and potentially others.

### Request Example (POST)
```json
{
  "name": "Astro"
}
```

### Response
#### Success Response (200)
- **message** (string) - A confirmation message indicating the HTTP method that was handled.

#### Response Example
```json
{
  "message": "This was a GET!"
}
```
```

--------------------------------

### Install Mux Video Web Component (npm)

Source: https://docs.astro.build/en/guides/media/mux

Installs the '@mux/mux-video' package using npm. This package provides a drop-in replacement for the HTML5 <video> element with HLS playback and Mux Data integration.

```bash
npm install @mux/mux-video
```

--------------------------------

### Install TypeScript with Yarn

Source: https://docs.astro.build/en/recipes/making-toolbar-apps

Installs TypeScript as a development dependency in an Astro project using Yarn. This is a prerequisite for compiling JSX code.

```bash
yarn add --dev typescript
```

--------------------------------

### Install Mux Uploader for Astro (pnpm)

Source: https://docs.astro.build/en/guides/media/mux

Installs the '@mux/mux-uploader-astro' package using pnpm. Enables drag-and-drop and manual file selection for video uploads within an Astro website.

```bash
pnpm add @mux/mux-uploader-astro
```

--------------------------------

### Install Wrangler CLI (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/guides/deploy/cloudflare

Installs the latest version of the Wrangler CLI as a development dependency using npm, pnpm, or Yarn.

```bash
npm install wrangler@latest --save-dev
```

```bash
pnpm add wrangler@latest --save-dev
```

```bash
yarn add wrangler@latest --dev
```

--------------------------------

### Install Mux Video Web Component (Yarn)

Source: https://docs.astro.build/en/guides/media/mux

Installs the '@mux/mux-video' package using Yarn. This component enhances HTML5 video with HLS support and Mux Data.

```bash
yarn add @mux/mux-video
```

--------------------------------

### Install Vue Peer Dependency (pnpm)

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Installs Vue as a project dependency using pnpm, required if 'Cannot find package "vue"' warning occurs.

```bash
pnpm add vue
```

--------------------------------

### Install Tailwind CSS 4 in Astro (NPM, PNPM, Yarn)

Source: https://docs.astro.build/en/guides/styling

Installs the official Vite Tailwind plugin for Astro version 5.2.0 and later using the `astro add tailwind` command. For earlier versions, manual Vite plugin installation is required.

```bash
npx astro add tailwind
```

```bash
pnpm astro add tailwind
```

```bash
yarn astro add tailwind
```

--------------------------------

### Create Astro Project with Starlight Template

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-docusaurus

This command initiates a new Astro project using the official Starlight documentation theme starter template. Starlight includes Astro's MDX integration by default, allowing for immediate use of existing MDX content files.

```bash
npm create astro@latest -- --template starlight
```

```bash
pnpm create astro@latest --template starlight
```

```bash
yarn create astro --template starlight
```

--------------------------------

### Initialize Prisma Client in Astro

Source: https://docs.astro.build/en/guides/backend/prisma-postgres

Creates and exports a Prisma Client instance within an Astro project, including the Accelerate extension for performance. It reads the database URL from environment variables.

```typescript
import { PrismaClient } from "../generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";


const prisma = new PrismaClient({
  datasourceUrl: import.meta.env.DATABASE_URL,
}).$extends(withAccelerate());


export default prisma;
```

--------------------------------

### Initialize Minimal Astro Template (npm, yarn, pnpm)

Source: https://docs.astro.build/en/reference/publish-to-npm

Commands to create a minimal Astro project template, typically used for demonstration or testing purposes, using npm, yarn, or pnpm.

```bash
npm create astro@latest demo -- --template minimal
# yarn
yarn create astro demo --template minimal
# pnpm
pnpm create astro@latest demo -- --template minimal
```

--------------------------------

### Install Vue Peer Dependency (npm)

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Installs Vue as a project dependency using npm, required if 'Cannot find package "vue"' warning occurs.

```bash
npm install vue
```

--------------------------------

### Install Supabase Client Dependency

Source: https://docs.astro.build/en/guides/backend/supabase

Install the official Supabase JavaScript client library to enable communication between your Astro project and your Supabase backend. This package provides the necessary tools for interacting with Supabase services.

```bash
npm install @supabase/supabase-js
```

```bash
pnpm add @supabase/supabase-js
```

```bash
yarn add @supabase/supabase-js
```

--------------------------------

### Add Multiple Astro Integrations with pnpm

Source: https://docs.astro.build/en/guides/integrations-guide

Shows how to add multiple Astro integrations at once using the pnpm package manager. This command streamlines the installation of several integrations into your Astro project.

```bash
pnpm astro add react sitemap partytown
```

--------------------------------

### Basic Astro Page Structure

Source: https://docs.astro.build/en/basics/astro-pages

An example of a basic Astro page (`.astro` file) that defines a full HTML document structure. Astro automatically adds `<!DOCTYPE html>` and `<head>` if not explicitly included.

```astro
<html lang="en">
  <head>
    <title>My Homepage</title>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
  </body>
</html>
```

--------------------------------

### Package.json Keywords Field

Source: https://docs.astro.build/en/reference/publish-to-npm

Example of the 'keywords' array in package.json, used for discoverability on npm and other platforms. Includes Astro-specific keywords for better visibility.

```json
{
  "keywords": ["astro-component", "withastro", "... etc", "... etc"]
}
```

--------------------------------

### Install Missing Integration Dependencies with npm

Source: https://docs.astro.build/en/guides/integrations-guide

Provides the npm command to install missing peer dependencies for an Astro integration, which may be required if warnings like 'Cannot find package '[package-name]'' appear.

```bash
npm install [package-name]
```

--------------------------------

### Configure Astro with Netlify Adapter

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

Configures the Astro build process to use the Netlify adapter by adding it to the `astro.config.mjs` file. This enables features like on-demand rendering.

```javascript
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
   // ...
   adapter: netlify(),
});

```

--------------------------------

### Install Astro DB Integration

Source: https://docs.astro.build/en/guides/astro-db

Installs the Astro DB integration using the npm, pnpm, or Yarn package managers. This command adds the necessary dependencies and configuration to your Astro project.

```bash
npx astro add db
```

```bash
pnpm astro add db
```

```bash
yarn astro add db
```

--------------------------------

### Initialize Playwright for Astro Project

Source: https://docs.astro.build/en/guides/testing

Provides commands to install Playwright within an Astro project, enabling end-to-end testing. The installation process can be done via npm, pnpm, or Yarn, and includes options for setting up testing frameworks and workflows.

```bash
npm init playwright@latest

```

```bash
pnpm create playwright

```

```bash
yarn create playwright

```

--------------------------------

### Install Mux Node SDK (Yarn)

Source: https://docs.astro.build/en/guides/media/mux

Installs the '@mux/mux-node' package using Yarn. This SDK is used for managing Mux assets and data via the REST API.

```bash
yarn add @mux/mux-node
```

--------------------------------

### Install React Peer Dependencies

Source: https://docs.astro.build/en/guides/integrations-guide/react

Installs React and its associated type definitions, which are required peer dependencies for the @astrojs/react integration. Addresses potential 'Cannot find package react' warnings.

```bash
npm install react react-dom @types/react @types/react-dom
```

```bash
pnpm add react react-dom @types/react @types/react-dom
```

```bash
yarn add react react-dom @types/react @types/react-dom
```

--------------------------------

### Create Better Auth Client for React, Solid, Svelte, and Vue

Source: https://docs.astro.build/en/guides/authentication

These examples show how to create an authentication client instance using the `createAuthClient` helper provided by Better Auth for different JavaScript frameworks. You can then use the returned `signIn` and `signOut` functions.

```javascript
import { createAuthClient } from 'better-auth/react';


export const authClient = createAuthClient();


export const { signIn, signOut } = authClient;

```

```javascript
import { createAuthClient } from 'better-auth/solid';


export const authClient = createAuthClient();


export const { signIn, signOut } = authClient;

```

```javascript
import { createAuthClient } from 'better-auth/svelte';


export const authClient = createAuthClient();


export const { signIn, signOut } = authClient;

```

```javascript
import { createAuthClient } from 'better-auth/vue';


export const authClient = createAuthClient();


export const { signIn, signOut } = authClient;

```

--------------------------------

### Install Mux Uploader for Astro (npm)

Source: https://docs.astro.build/en/guides/media/mux

Installs the '@mux/mux-uploader-astro' package using npm. This package provides the Astro component for building customizable video upload functionality.

```bash
npm install @mux/mux-uploader-astro
```

--------------------------------

### Configure Project Workspaces (package.json)

Source: https://docs.astro.build/en/reference/publish-to-npm

Example of a root package.json file configuring workspaces for managing multiple packages within a project. This allows for developing components alongside a working copy of Astro.

```json
{
  "name": "my-project",
  "workspaces": ["demo", "packages/*"]
}
```

--------------------------------

### Install @astrojs/rss package

Source: https://docs.astro.build/en/recipes/rss

Install the @astrojs/rss package using npm, pnpm, or Yarn. This package provides helpers for generating RSS feeds.

```bash
npm install @astrojs/rss
```

```bash
pnpm add @astrojs/rss
```

```bash
yarn add @astrojs/rss
```

--------------------------------

### Import MDX Posts with Astro.glob

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Demonstrates how to import multiple MDX files from a directory using Astro.glob. The default export of each imported MDX file is then mapped to render its content.

```javascript
---// Multiple imports with Astro.glob
const mdxPosts = await Astro.glob('./posts/*.mdx');
---


{mdxPosts.map(Post => <Post.default />)}

```

--------------------------------

### Configure Turso Environment Variables in .env

Source: https://docs.astro.build/en/guides/backend/turso

Example of how to set up your Turso database URL and authentication token in a .env file. Ensure these are private and not prefixed with PUBLIC_.

```dotenv
TURSO_DATABASE_URL=libsql://...
TURSO_AUTH_TOKEN=
```

--------------------------------

### Inline Environment Variables for Astro Server

Source: https://docs.astro.build/en/guides/integrations-guide/node

This command demonstrates how to pass environment variables directly on the command line when starting the Astro server. This method is suitable for simple configurations or when environment variables are not managed by a separate tool.

```bash
DB_HOST=... DB_PASSWORD=... node ./dist/server/entry.mjs
```

--------------------------------

### Add Cloudflare Adapter using npm

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

Installs the @astrojs/cloudflare adapter and configures it in astro.config.mjs using the npm package manager.

```bash
npx astro add cloudflare
```

--------------------------------

### Astro Dynamic Route Parameter Mapping Example

Source: https://docs.astro.build/en/guides/routing

Provides an example of how a URL like `/withastro/astro/tree/main/docs/public/favicon.svg` is parsed into named parameters and a rest parameter (`file`) when using a dynamic route definition.

```json
{
  "org": "withastro",
  "repo": "astro",
  "branch": "main",
  "file": "docs/public/favicon.svg"
}
```

--------------------------------

### Install Vue Peer Dependency (Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Installs Vue as a project dependency using Yarn, required if 'Cannot find package "vue"' warning occurs.

```bash
yarn add vue
```

--------------------------------

### Import and Use Astro and React Components with Namespace Imports

Source: https://docs.astro.build/en/reference/publish-to-npm

This example illustrates importing Astro and React components using namespace imports from an Astro package. The entire package content is imported under a specified namespace ('Example'), allowing access to individual components via dot notation. This method is useful for avoiding naming conflicts.

```astro
---
import * as Example from 'example-astro-component';
---
<Example.MyAstroComponent />
<Example.MyReactComponent />
```

--------------------------------

### Install Kontent.ai TypeScript SDK for Astro (npm, pnpm, yarn)

Source: https://docs.astro.build/en/guides/cms/kontent-ai

Installs the official Kontent.ai TypeScript SDK, enabling seamless integration with your Astro project. This SDK allows for efficient content fetching from your Kontent.ai project.

```bash
npm install @kontent-ai/delivery-sdk
```

```bash
pnpm add @kontent-ai/delivery-sdk
```

```bash
yarn add @kontent-ai/delivery-sdk
```

--------------------------------

### Install NightwatchJS in Astro Project

Source: https://docs.astro.build/en/guides/testing

Installs NightwatchJS using different package managers (npm, pnpm, Yarn) for Astro projects. Follow CLI prompts for configuration.

```shell
npm init nightwatch@latest
```

```shell
pnpm create nightwatch
```

```shell
yarn create nightwatch
```

--------------------------------

### Install Reading Time Helper Packages (npm, pnpm, yarn)

Source: https://docs.astro.build/en/recipes/reading-time

Installs the 'reading-time' and 'mdast-util-to-string' packages required for calculating reading time. These packages help extract text and compute the estimated time to read.

```bash
npm install reading-time mdast-util-to-string
```

```bash
pnpm add reading-time mdast-util-to-string
```

```bash
yarn add reading-time mdast-util-to-string
```

--------------------------------

### Install Missing Integration Dependencies with Yarn

Source: https://docs.astro.build/en/guides/integrations-guide

Details the Yarn command to install missing peer dependencies for an Astro integration, resolving errors related to uninstalled packages required by the integration.

```bash
yarn add [package-name]
```

--------------------------------

### Install Keystatic Packages (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/guides/cms/keystatic

Installs the core Keystatic package and the Astro-specific integration package. These are essential for enabling Keystatic functionality within an Astro project.

```bash
npm install @keystatic/core @keystatic/astro
```

```bash
pnpm add @keystatic/core @keystatic/astro
```

```bash
yarn add @keystatic/core @keystatic/astro
```

--------------------------------

### Install Cloudinary Node.js SDK for Astro

Source: https://docs.astro.build/en/guides/media/cloudinary

Installs the Cloudinary Node.js SDK, which is necessary for more complex asset management, uploading, or analysis when working in an Astro Node.js environment. Choose the command based on your package manager.

```bash
npm install cloudinary

```

```bash
pnpm add cloudinary

```

```bash
yarn add cloudinary

```

--------------------------------

### Heroku Git Remote Setup and App Creation

Source: https://docs.astro.build/en/guides/deploy/heroku

Initializes a Git repository, stages all files, commits them with a message, creates a new Heroku application with a specified name, and sets the buildpack for static sites.

```bash
# version change
$ git init
$ git add .
$ git commit -m "My site ready for deployment."


# creates a new app with a specified name
$ heroku apps:create example


# set buildpack for static sites
$ heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git
```

--------------------------------

### Run Astro Standalone Server

Source: https://docs.astro.build/en/guides/integrations-guide/node

This command demonstrates how to run the Astro build in standalone mode, executing the server entry point directly using Node.js. In standalone mode, the server handles both file serving and API routes. The default entry point is `./dist/server/entry.mjs`.

```bash
node ./dist/server/entry.mjs
```

--------------------------------

### Install Astro AWS Amplify Adapter with npm

Source: https://docs.astro.build/en/guides/deploy/aws

Installs the third-party AWS Amplify adapter for Astro using npm. This is a prerequisite for deploying Astro as a server-rendered site on AWS Amplify.

```bash
npm install astro-aws-amplify
```

--------------------------------

### Install Mux Uploader for Astro (Yarn)

Source: https://docs.astro.build/en/guides/media/mux

Installs the '@mux/mux-uploader-astro' package using Yarn. This component integrates Mux's video upload capabilities into Astro projects.

```bash
yarn add @mux/mux-uploader-astro
```

--------------------------------

### Install Astro AWS Amplify Adapter with Yarn

Source: https://docs.astro.build/en/guides/deploy/aws

Installs the third-party AWS Amplify adapter for Astro using Yarn. This command is used when the project manages dependencies with Yarn.

```bash
yarn add astro-aws-amplify
```

--------------------------------

### Start Astro Development Server with Remote Database

Source: https://docs.astro.build/en/guides/astro-db

Initiates the Astro development server with a connection to a remote database. This is useful for testing live data during development. Be cautious as it connects to your production database.

```bash
astro dev --remote
```

--------------------------------

### Static Binary File Endpoint

Source: https://docs.astro.build/en/guides/endpoints

Example of a static endpoint that generates a binary file (e.g., an image) at build time. It fetches binary data and returns it in a `Response` object.

```APIDOC
## GET /path/to/image.png

### Description
Creates a static binary file (e.g., an image) at build time by fetching and returning binary data.

### Method
GET

### Endpoint
/path/to/image.png

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **Binary Data** (binary) - The binary content of the file (e.g., image data).

#### Response Example
(Binary data, not representable as JSON)
```

--------------------------------

### Render individual blog post content in Astro

Source: https://docs.astro.build/en/guides/cms/ghost

This snippet provides the template for displaying the content of a single blog post on its dedicated page. It uses the `post` object passed as props, rendering the featured image, title, reading time, and the HTML content of the post. The `<Fragment set:html={post.html} />` component is used to safely render raw HTML from the CMS.

```astro
---
import { ghostClient } from '../../lib/ghost';
export async function getStaticPaths() {
    const posts = await ghostClient.posts
        .browse({
            limit: 'all',
        })
        .catch((err) => {
            console.error(err);
        });
    return posts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
            props: {
                post: post,
            },
        };
    });
}
const { post } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{post.title}</title>
    </head>
    <body>
        <img src={post.feature_image} alt={post.title} />


        <h1>{post.title}</h1>
        <p>{post.reading_time} min read</p>


        <Fragment set:html={post.html} />
    </body>
</html>

```

--------------------------------

### Astro Image Component: Constrained Layout Example

Source: https://docs.astro.build/en/guides/images

Demonstrates the usage of the Astro Image component with a 'constrained' layout, including source, alt text, dimensions, and other attributes. This example shows the typical HTML output generated by Astro for responsive images.

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image src={myImage} alt="A description of my image." layout='constrained' width={800} height={600} />

```

```html
<img
  src="/_astro/my_image.hash3.webp"
  srcset="/_astro/my_image.hash1.webp 640w,
      /_astro/my_image.hash2.webp 750w,
      /_astro/my_image.hash3.webp 800w,
      /_astro/my_image.hash4.webp 828w,
      /_astro/my_image.hash5.webp 1080w,
      /_astro/my_image.hash6.webp 1280w,
      /_astro/my_image.hash7.webp 1600w"
  alt="A description of my image"
  sizes="(min-width: 800px) 800px, 100vw"
  loading="lazy"
  decoding="async"
  fetchpriority="auto"
  width="800"
  height="600"
  style="--fit: cover; --pos: center;"
  data-astro-image="constrained"
>

```

--------------------------------

### Add @astrojs/mdx Integration using Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/mdx

Automates the setup of the @astrojs/mdx integration for Astro projects using the Yarn package manager.

```bash
yarn astro add mdx
```

--------------------------------

### Deploy Astro Static Files with Azion CLI

Source: https://docs.astro.build/en/guides/deploy/azion

Deploys your static Astro project files to Azion using the CLI. This command uploads your built site to the Azion platform for distribution.

```bash
azion deploy
```

--------------------------------

### Install Nano Stores for Preact

Source: https://docs.astro.build/en/recipes/sharing-state-islands

Installs the Nano Stores library along with its specific helper package for Preact. This enables seamless state sharing between Astro components that use Preact for their UI.

```bash
npm install nanostores @nanostores/preact
```

--------------------------------

### Add Astro React Integration

Source: https://docs.astro.build/en/guides/integrations-guide/react

Automates the setup of the @astrojs/react integration using the Astro CLI. This is the recommended way to add integrations.

```bash
npx astro add react
```

```bash
pnpm astro add react
```

```bash
yarn astro add react
```

--------------------------------

### Install Astro AWS Amplify Adapter with pnpm

Source: https://docs.astro.build/en/guides/deploy/aws

Installs the third-party AWS Amplify adapter for Astro using pnpm. This command is used when the project manages dependencies with pnpm.

```bash
pnpm add astro-aws-amplify
```

--------------------------------

### Migrate Astro.fetchContent to Astro.glob

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Presents the migration from the deprecated `Astro.fetchContent()` API to the new `Astro.glob()` API for fetching Markdown files. This change is a breaking change in Astro v0.26.

```javascript
// v0.25
let allPosts = Astro.fetchContent('./posts/*.md');
// v0.26+
let allPosts = await Astro.glob('./posts/*.md');

```

--------------------------------

### Install Astro DB Integration Package using pnpm

Source: https://docs.astro.build/en/guides/integrations-guide/db

Manually installs the '@astrojs/db' integration package using pnpm. This command is used when you need to add the integration without using the automated 'astro add' command.

```bash
pnpm add @astrojs/db
```

--------------------------------

### Install Tailwind Typography Plugin

Source: https://docs.astro.build/en/recipes/tailwind-rendered-markdown

Commands to install the @tailwindcss/typography package using different package managers (npm, pnpm, Yarn). This package is a development dependency.

```bash
npm install -D @tailwindcss/typography
```

```bash
pnpm add -D @tailwindcss/typography
```

```bash
yarn add --dev @tailwindcss/typography
```

--------------------------------

### Using an Astro Layout Component

Source: https://docs.astro.build/en/basics/layouts

This example demonstrates how to use a previously defined Astro layout component (`MySiteLayout`) to wrap page content. It imports the layout and passes a title prop to it, with the actual page content placed between the layout's opening and closing tags.

```astro
---
import MySiteLayout from '../layouts/MySiteLayout.astro';
---
<MySiteLayout title="Home Page">
  <p>My page content, wrapped in a layout!</p>
</MySiteLayout>
```

--------------------------------

### Install Tina CMS CLI

Source: https://docs.astro.build/en/guides/cms/tina-cms

Installs the Tina CMS command-line interface into your Astro project. This is the first step to integrate Tina CMS. It supports npm, pnpm, and Yarn package managers.

```bash
npx @tinacms/cli@latest init
```

```bash
pnpm dlx @tinacms/cli@latest init
```

```bash
yarn dlx @tinacms/cli@latest init
```

--------------------------------

### Install Wrangler CLI for Astro

Source: https://docs.astro.build/en/guides/deploy/cloudflare

Installs the latest version of the Wrangler CLI as a development dependency for your Astro project. This tool is essential for deploying to Cloudflare Workers.

```bash
npm install wrangler@latest --save-dev
```

--------------------------------

### GitHub Actions for Deno Deploy (On Demand)

Source: https://docs.astro.build/en/guides/deploy/deno

YAML configuration for GitHub Actions to deploy an on-demand Astro site to Deno Deploy. This workflow clones the repo, installs dependencies, builds the Astro project, and then uploads the server entry point to Deno Deploy.

```yaml
name: Deploy
on: [push]

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    permissions:
      id-token: write # Needed for auth with Deno Deploy
      contents: read # Needed to clone the repository


    steps:
      - name: Clone repository
        uses: actions/checkout@v4


      # Not using npm? Change `npm ci` to `yarn install` or `pnpm i`
      - name: Install dependencies
        run: npm ci


      # Not using npm? Change `npm run build` to `yarn build` or `pnpm run build`
      - name: Build Astro
        run: npm run build


      - name: Upload to Deno Deploy
        uses: denoland/deployctl@v1
        with:
          project: my-deno-project # TODO: replace with Deno Deploy project name
          entrypoint: dist/server/entry.mjs

```

--------------------------------

### Add Cloudflare Adapter using pnpm

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

Installs the @astrojs/cloudflare adapter and configures it in astro.config.mjs using the pnpm package manager.

```bash
pnpm astro add cloudflare
```

--------------------------------

### Add Netlify Adapter for Astro

Source: https://docs.astro.build/en/guides/deploy/netlify

Installs the Netlify adapter for Astro to enable on-demand rendering. This command updates the astro.config.mjs file automatically. It's a prerequisite for advanced rendering features on Netlify.

```bash
npx astro add netlify
```

--------------------------------

### CLI Deploy Static Site to Deno Deploy

Source: https://docs.astro.build/en/guides/deploy/deno

Command to deploy a static Astro site to Deno Deploy using the `deployctl` CLI. It navigates to the `dist` directory and deploys the static file server entry point.

```bash
cd dist && deployctl deploy jsr:@std/http/file-server

```

--------------------------------

### Run Astro Development Server with ApostropheCMS Key

Source: https://docs.astro.build/en/guides/cms/apostrophecms

Command to start the local Astro development server. It requires the APOS_EXTERNAL_FRONT_KEY environment variable to be set for ApostropheCMS integration.

```bash
APOS_EXTERNAL_FRONT_KEY='MyRandomString' npm run dev
```

--------------------------------

### Install ioredis for Redis Session Storage

Source: https://docs.astro.build/en/guides/integrations-guide/vercel

Install the `ioredis` package to enable Redis as a session storage driver when using Astro sessions on Vercel. This command is compatible with npm, pnpm, and Yarn package managers.

```bash
npm install ioredis
```

```bash
pnpm install ioredis
```

```bash
yarn add ioredis
```

--------------------------------

### Install Astro TypeScript Plugin with pnpm

Source: https://docs.astro.build/en/guides/typescript

This command installs the Astro TypeScript plugin using pnpm. Similar to npm, this ensures that your editor can properly understand and provide feedback on Astro and TypeScript code.

```bash
pnpm add @astrojs/ts-plugin
```

--------------------------------

### Package.json Description Field

Source: https://docs.astro.build/en/reference/publish-to-npm

Example of the 'description' field within a package.json file, providing a concise summary of the component's purpose.

```json
{
  "description": "An Astro Element Generator"
}
```

--------------------------------

### Add sitemap URL to robots.txt

Source: https://docs.astro.build/en/guides/integrations-guide/sitemap

This snippet shows how to specify the sitemap index URL in your `robots.txt` file to help crawlers find it. It includes a static example and a dynamic generation example using Astro.

```text
User-agent: *
Allow: /


Sitemap: https://<YOUR SITE>/sitemap-index.xml
```

```javascript
import type { APIRoute } from 'astro';


const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /


Sitemap: ${sitemapURL.href}
`;


export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL));
};
```

--------------------------------

### JavaScript Code Example with Syntax Highlighting

Source: https://docs.astro.build/en/guides/syntax-highlighting

This JavaScript code demonstrates a function that formats dates based on a language setting. It's an example of code that can be highlighted by Astro's syntax highlighting system.

```javascript
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l);
  return true;
};

```

--------------------------------

### Sample Markdown Content for Astro Blog Posts

Source: https://docs.astro.build/en/tutorial/2-pages/2

These snippets provide sample content for Astro blog posts in Markdown format. They include YAML frontmatter for metadata like title, author, publication date, and tags, followed by the post's body content.

```markdown
---
title: My Second Blog Post
author: Astro Learner
description: "After learning some Astro, I couldn't stop!"
image:
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2022-07-08
tags: ["astro", "blogging", "learning in public", "successes"]
---
After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!

```

```markdown
---
title: My Third Blog Post
author: Astro Learner
description: "I had some challenges, but asking in the community really helped!"
image:
    url: "https://docs.astro.build/assets/rays.webp"
    alt: "The Astro logo on a dark background with rainbow rays."
pubDate: 2022-07-15
tags: ["astro", "learning in public", "setbacks", "community"]
---
It wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!

```

--------------------------------

### Wrangler Configuration for Custom 404 Handling

Source: https://docs.astro.build/en/guides/deploy/cloudflare

An example snippet for the `wrangler.jsonc` file to configure custom 404 page handling for Workers projects.

```json
{
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

--------------------------------

### Install Nano Stores for Vue

Source: https://docs.astro.build/en/recipes/sharing-state-islands

Installs Nano Stores along with the official helper package for Vue. This enables effective state sharing between Vue islands in an Astro project.

```bash
npm install nanostores @nanostores/vue
```

--------------------------------

### Load Markdown Posts using Astro.glob()

Source: https://docs.astro.build/en/reference/api-reference

This example shows how to use Astro.glob() to load multiple local Markdown files from a specified directory. The loaded posts are then mapped to display their titles, descriptions, and links.

```astro
---
const posts = await Astro.glob('../pages/post/*.md'); // returns an array of posts that live at ./src/pages/post/*.md
---


<div>
{posts.slice(0, 3).map((post) => (
  <article>
    <h2>{post.frontmatter.title}</h2>
    <p>{post.frontmatter.description}</p>
    <a href={post.url}>Read more</a>
  </article>
))}
</div>
```

--------------------------------

### Build Astro Site (npm)

Source: https://docs.astro.build/en/guides/deploy/deno

Command to build an Astro site using npm. This is a standard command for Astro projects managed with npm, preparing the site for deployment.

```bash
npm run build

```

--------------------------------

### Manually install Alpine.js and its types

Source: https://docs.astro.build/en/guides/integrations-guide/alpinejs

Install Alpine.js and its corresponding TypeScript types manually using npm, pnpm, or Yarn. This step is necessary if a 'Cannot find package alpinejs' warning appears.

```bash
npm install alpinejs @types/alpinejs
```

```bash
pnpm add alpinejs @types/alpinejs
```

```bash
yarn add alpinejs @types/alpinejs
```

--------------------------------

### Install Tailwind CSS 3 and `@astrojs/tailwind` (NPM, PNPM, Yarn)

Source: https://docs.astro.build/en/guides/styling

Installs Tailwind CSS version 3 and the official Astro Tailwind integration (`@astrojs/tailwind`) for legacy Tailwind 3 support in Astro projects.

```bash
npm install tailwindcss@3 @astrojs/tailwind
```

```bash
pnpm add tailwindcss@3 @astrojs/tailwind
```

```bash
yarn add tailwindcss@3 @astrojs/tailwind
```

--------------------------------

### Generating Multiple Image Formats with Astro's Picture Component

Source: https://docs.astro.build/en/guides/images

Shows how to use Astro's `<Picture />` component to generate a responsive `<picture>` HTML element. This example demonstrates transforming a local image into multiple formats (`avif`, `webp`) and including a fallback (`png`), allowing browsers to select the most suitable format. The component also enforces `alt` text and optimizes dimensions for CLS.

```astro
---
import { Picture } from 'astro:assets';
import myImage from '../assets/my_image.png'; // Image is 1600x900
---


<!-- `alt` is mandatory on the Picture component -->
<Picture src={myImage} formats={['avif', 'webp']} alt="A description of my image." />
```

```html
<!-- Prerendered output -->
<picture>
  <source srcset="/_astro/my_image.hash.avif" type="image/avif" />
  <source srcset="/_astro/my_image.hash.webp" type="image/webp" />
  <img
    src="/_astro/my_image.hash.png"
    width="1600"
    height="900"
    decoding="async"
    loading="lazy"
    alt="A description of my image."
  />
</picture>
```

--------------------------------

### Add Multiple Astro Integrations with Yarn

Source: https://docs.astro.build/en/guides/integrations-guide

Illustrates adding multiple Astro integrations concurrently using the Yarn package manager. This command automates the setup for several integrations in your Astro project.

```bash
yarn astro add react sitemap partytown
```

--------------------------------

### Install Sharp Image Service Dependency

Source: https://docs.astro.build/en/guides/images

Manually install the Sharp image service using a package manager like pnpm. This is sometimes necessary even if Sharp is an Astro dependency, especially with strict package managers.

```bash
pnpm add sharp
```

--------------------------------

### Astro Toolbar: Receiving Client Messages (Server)

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Demonstrates how the server can listen for messages from a client-side toolbar app using the `toolbar.on()` method within the `astro:server:setup` hook. It includes a callback to handle incoming messages.

```javascript
'astro:server:setup': ({ toolbar }) => {
  toolbar.on('my-app:my-message', (data) => {
    console.log(data.message);
  });
},
```

--------------------------------

### CSS Order of Appearance Example in Astro

Source: https://docs.astro.build/en/guides/styling

Illustrates how, with equal specificity, the last CSS rule encountered determines the style. This example shows the second `h1` rule overwriting the first.

```html
<style>
  h1 { color: purple }
  h1 { color: red }
</style>
<div>
  <h1>
    This header will be red!
  </h1>
</div>
```

--------------------------------

### Route Segments Example

Source: https://docs.astro.build/en/reference/integrations-reference

Demonstrates how route segments are structured, showing dynamic and spread parameters. This is useful for understanding how Astro parses complex route definitions.

```json
[
  [ { "content": "pages", "dynamic": false, "spread": false } ],
  [ { "content": "blog", "dynamic": true, "spread": false } ],
  [ { "content": "...slug", "dynamic": true, "spread": true } ]
]
```

--------------------------------

### Install Firebase Dependencies (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/guides/backend/google-firebase

Installs the 'firebase' and 'firebase-admin' packages required for connecting Astro with Firebase. Supports npm, pnpm, and Yarn package managers.

```bash
npm install firebase firebase-admin
```

```bash
pnpm add firebase firebase-admin
```

```bash
yarn add firebase firebase-admin
```

--------------------------------

### Get Request Method with Astro.request.method

Source: https://docs.astro.build/en/guides/on-demand-rendering

Demonstrates how to retrieve the HTTP method of the incoming request using `Astro.request.method`. This is useful for handling different types of requests (e.g., GET, POST) in server-rendered pages.

```javascript
export const prerender = false;


console.log(Astro.request.method) // GET (when navigated to in the browser)

```

--------------------------------

### Astro Configuration: Session Redis Driver

Source: https://docs.astro.build/en/guides/sessions

An example snippet showing how to configure a session storage driver, specifically using 'redis' with the Vercel adapter. This is relevant for adapters that require manual driver specification.

```javascript
{
    adapter: vercel(),
    session: {
      driver: "redis",
    },
  }

```

--------------------------------

### Install React and Astro React Integration

Source: https://docs.astro.build/en/guides/troubleshooting

This command installs the necessary packages for using React within an Astro project. It includes the core React library, React DOM, and the Astro React integration. This is crucial for projects that depend on React components.

```bash
npm install @astrojs/react react react-dom
```

--------------------------------

### Add Astro Node Adapter using npm, pnpm, or Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/node

This command automates the installation of the @astrojs/node adapter and updates your Astro configuration file. It's the recommended way to add the adapter.

```bash
npx astro add node
```

```bash
pnpm astro add node
```

```bash
yarn astro add node
```

--------------------------------

### Astro: Importing All Markdown Files

Source: https://docs.astro.build/en/tutorial/5-astro-api/3

This Astro frontmatter script imports all `.md` files from a specified directory, making their content available for processing.

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
const pageTitle = "Tag Index";
---
```

--------------------------------

### Add Vercel Adapter with npm, pnpm, or Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/vercel

Installs the @astrojs/vercel adapter and configures it in astro.config.mjs using the 'astro add' command.

```bash
npx astro add vercel

```

```bash
pnpm astro add vercel

```

```bash
yarn astro add vercel

```

--------------------------------

### Install Astro TypeScript Plugin with npm

Source: https://docs.astro.build/en/guides/typescript

This command installs the Astro TypeScript plugin using npm. This plugin is essential for editor support, providing autocompletion and error checking for `.astro` files within your IDE.

```bash
npm install @astrojs/ts-plugin
```

--------------------------------

### Configure Per-File-Type Assets Prefixes

Source: https://docs.astro.build/en/reference/configuration-reference

This example uses an object for `build.assetsPrefix` to specify different CDN domains for JavaScript (`js`, `mjs`) and CSS files, with a `fallback` domain for other asset types. This allows for fine-grained control over asset delivery.

```javascript
{
  build: {
    assetsPrefix: {
      'js': 'https://js.cdn.example.com',
      'mjs': 'https://js.cdn.example.com',
      'css': 'https://css.cdn.example.com',
      'fallback': 'https://cdn.example.com'
    }
  }
}
```

--------------------------------

### Link to First Blog Post in Astro

Source: https://docs.astro.build/en/tutorial/2-pages/2

This snippet shows the basic structure of an Astro page (`blog.astro`) and how to include a link to the first blog post using an anchor tag.

```astro
---
---
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width" />
    <title>Astro</title>
  </head>
  <body>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/blog/">Blog</a>


    <h1>My Astro Learning Blog</h1>
    <p>This is where I will post about my journey learning Astro.</p>
    <ul>
      <li><a href="/posts/post-1/">Post 1</a></li>
    </ul>
  </body>
</html>

```

--------------------------------

### Astro Integration for Dev Toolbar App

Source: https://docs.astro.build/en/recipes/making-toolbar-apps

This TypeScript code defines an Astro integration that adds a custom dev toolbar app. It uses the `astro:config:setup` hook to register the app with a unique ID, name, icon, and entrypoint file (`app.ts`). The `fileURLToPath` utility is used to correctly resolve the entrypoint path.

```typescript
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';


export default {
  name: 'my-astro-integration',
  hooks: {
    'astro:config:setup': ({ addDevToolbarApp }) => {
      addDevToolbarApp({
        id: "my-toolbar-app",
        name: "My Toolbar App",
        icon: "🚀",
        entrypoint: fileURLToPath(new URL('./app.ts', import.meta.url))
      });
    },
  },
} satisfies AstroIntegration;

```

--------------------------------

### Configure Astro SSR package.json

Source: https://docs.astro.build/en/guides/deploy/kinsta

This configuration snippet details the `package.json` adjustments needed for Astro Server-Side Rendering (SSR) on Kinsta. It includes the '@astrojs/node' package and sets the 'start' script to run the Node.js server entry point.

```json
{
  "name": "anything",
  "scripts": {
    "dev": "astro dev",
    "start": "node ./dist/server/entry.mjs",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^2.2.0",
    "@astrojs/node": "^5.1.1"
  }
}
```

--------------------------------

### Install Flotiq TypeScript SDK for Astro

Source: https://docs.astro.build/en/guides/cms/flotiq

Installs the Flotiq TypeScript SDK, enabling seamless integration with the Flotiq headless CMS. This SDK simplifies API interactions for fetching content.

```bash
npm install flotiq-api-ts
```

```bash
pnpm add flotiq-api-ts
```

```bash
yarn add flotiq-api-ts
```

--------------------------------

### Astro Configuration with Integration

Source: https://docs.astro.build/en/reference/integrations-reference

This example demonstrates how to import and use a custom Astro integration within the `astro.config.*` file. It assumes the integration is a default export and a function.

```javascript
import { defineConfig } from 'astro/config';
import example from 'example';


export default defineConfig({
  integrations: [example()]
})
```

--------------------------------

### Astro: Recreate default swap with utilities

Source: https://docs.astro.build/en/guides/view-transitions

Provides an example of building a custom swap function for `astro:before-swap` using utility functions from `astro:transitions/client`. This recreates Astro's built-in swap logic, demonstrating how to selectively use or replace parts of the process.

```typescript
import { swapFunctions } from "astro:transitions/client";


// substitutes `window.document` with `doc`
function mySwap(doc: Document) {
  swapFunctions.deselectScripts(doc);
  swapFunctions.swapRootAttributes(doc);
  swapFunctions.swapHeadElements(doc);
  const restoreFocusFunction = swapFunctions.saveFocus();
  swapFunctions.swapBodyElement(doc.body, document.body);
  restoreFocusFunction();
}


document.addEventListener("astro:before-swap", (event) => {
  event.swap = () => mySwap(event.newDocument);
});
```

--------------------------------

### Configure Astro MDX Integration with Remark/Rehype Plugins

Source: https://docs.astro.build/en/guides/integrations-guide/mdx

Shows how to configure the Astro MDX integration, including options inherited from the Markdown configuration. This example demonstrates setting up syntax highlighting, specifying Shiki theme, and adding `remark-toc` and `rehype-preset-minify` plugins.

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import rehypePresetMinify from 'rehype-preset-minify';


export default defineConfig({
  // ...
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypePresetMinify],
      remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: false,
    }),
  ],
});

```

--------------------------------

### Add Cloudflare Adapter using Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

Installs the @astrojs/cloudflare adapter and configures it in astro.config.mjs using the Yarn package manager.

```bash
yarn astro add cloudflare
```

--------------------------------

### Gatsby GraphQL Query Example

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-gatsby

This is an example of a GraphQL query used in Gatsby to fetch all Markdown remarks, sorted by date, including excerpt, slug, date, title, and description. This pattern is intended to be replaced by Astro's data fetching methods.

```graphql
export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

```

--------------------------------

### Astro Image Component Layout Examples

Source: https://docs.astro.build/en/reference/modules/astro-assets

Demonstrates how to use the Astro Image component with different layout options: 'constrained', 'full-width', and 'none'. The 'constrained' layout scales images to fit their container while maintaining aspect ratio, 'full-width' stretches images to fill the container's width, and 'none' disables responsiveness for specific images. This requires importing the `Image` component from 'astro:assets'.

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image src={myImage} alt="This will use constrained layout" width={800} height={600} />
<Image src={myImage} alt="This will use full-width layout" layout="full-width" />
<Image src={myImage} alt="This will disable responsive images" layout="none" />

```

--------------------------------

### Fetch and Display Blog Articles in Astro Page

Source: https://docs.astro.build/en/guides/cms/preprcms

Import the Prepr fetch function and GraphQL query into an Astro page to retrieve and display a list of blog articles. This example iterates through the fetched articles to create links to each post using their slugs and titles.

```astro
---
import Layout from '../layouts/Layout.astro';
import { Prepr } from '../lib/prepr.js';
import GetArticles from '../queries/get-articles.js';


const response = await Prepr(GetArticles)
const { data } = await response.json()
const articles = data.Articles
---


<Layout title="My blog site">
  <h1>
    My blog site
  </h1>
  <ul>
    {
      articles.items.map((post) => (
        <li>
          <a href={post._slug}>{post.title}</a>
        </li>
      ))
    }
  </ul>
</Layout>
```

--------------------------------

### package.json Script for On-Demand Deno Deploy

Source: https://docs.astro.build/en/guides/deploy/deno

Adds a `deno-deploy` script to `package.json` for simplified on-demand site deployment to Deno Deploy. This script builds the Astro site and then deploys the server entry point.

```json
{
  // ...
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "deno run --allow-net --allow-read --allow-env ./dist/server/entry.mjs",
    "deno-deploy": "npm run build && deployctl deploy ./dist/server/entry.mjs"
  }
}

```

--------------------------------

### Clever Cloud Environment Variables for Static Site (pnpm)

Source: https://docs.astro.build/en/guides/deploy/clever-cloud

Configures environment variables for a static Astro site deployment on Clever Cloud using pnpm. This includes setting the post-build hook, pre-build hook for installing pnpm and dependencies, and the webroot.

```bash
CC_POST_BUILD_HOOK="pnpm build"
CC_PRE_BUILD_HOOK="npm install -g pnpm && pnpm install && pnpm run astro telemetry disable"
CC_WEBROOT="/dist"
```

--------------------------------

### Add Astro DB Integration using pnpm

Source: https://docs.astro.build/en/guides/integrations-guide/db

Automates the setup of the Astro DB integration by running the 'astro add db' command via pnpm. This method is suitable for projects using pnpm as their package manager.

```bash
pnpm astro add db
```

--------------------------------

### SCSS Pre-processor Support in Astro

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-nuxtjs

Shows how to integrate SCSS styling in Astro by installing `sass` as a dev dependency. After installation, `.scss` or `.sass` files can be used directly in `<style>` tags with the `lang="scss"` attribute.

```bash
npm install -D sass
```

```html
<p>Hello, world</p>
<style lang="scss">
p {
   color: black;


   &:hover {
       color: red;
   }
}
</style>
```

--------------------------------

### Install Kontent.ai JS Model Generator and Dependencies (pnpm)

Source: https://docs.astro.build/en/guides/cms/kontent-ai

Installs the Kontent.ai JS model generator, ts-node, and dotenv packages using pnpm. These are necessary for generating TypeScript types from your Kontent.ai content model.

```bash
pnpm add @kontent-ai/model-generator ts-node dotenv
```

--------------------------------

### GitHub Actions for Deno Deploy (Static)

Source: https://docs.astro.build/en/guides/deploy/deno

YAML configuration for GitHub Actions to deploy a static Astro site to Deno Deploy. It checks out the repository, installs dependencies using npm, builds the Astro project, and uploads the static assets to Deno Deploy.

```yaml
name: Deploy
on: [push]

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    permissions:
      id-token: write # Needed for auth with Deno Deploy
      contents: read # Needed to clone the repository


    steps:
      - name: Clone repository
        uses: actions/checkout@v4


      # Not using npm? Change `npm ci` to `yarn install` or `pnpm i`
      - name: Install dependencies
        run: npm ci


      # Not using npm? Change `npm run build` to `yarn build` or `pnpm run build`
      - name: Build Astro
        run: npm run build


      - name: Upload to Deno Deploy
        uses: denoland/deployctl@v1
        with:
          project: my-deno-project # TODO: replace with Deno Deploy project name
          entrypoint: jsr:@std/http/file-server
          root: dist

```

--------------------------------

### Combine Markdown and MDX Imports

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Illustrates how to fetch both Markdown (.md) and MDX (.mdx) files using Astro.glob and combine them into a single array. This is useful for sites transitioning to MDX or requiring content from both formats.

```javascript
---
const mdPosts = await Astro.glob('../pages/posts/*.md');
const mdxPosts = await Astro.glob('../pages/posts/*.mdx');
const allPosts = [...mdxPosts, ...mdPosts];
---

```

--------------------------------

### Display list of posts in Astro component

Source: https://docs.astro.build/en/guides/cms/cosmic

Renders a list of blog posts in an Astro component by fetching data using `getAllPosts()` and passing post details as props to a `Card` component. It iterates over the fetched posts to create a dynamic list.

```astro
---
import Card from '../components/Card.astro'
import { getAllPosts } from '../lib/cosmic'


const data = await getAllPosts()
---


<section>
  <ul class="grid gap-8 md:grid-cols-2">
    {
      data.map((post) => (
        <Card
          title={post.title}
          href={post.slug}
          body={post.metadata.excerpt}
          tags={post.metadata.tags.map((tag) => tag)}
        />
      ))
    }
  </ul>
</section>
```

--------------------------------

### Configure Cosmic API Keys in .env

Source: https://docs.astro.build/en/guides/cms/cosmic

Sets up environment variables for Cosmic API authentication. PUBLIC_COSMIC_BUCKET_SLUG and PUBLIC_COSMIC_READ_KEY are required to connect to your Cosmic bucket.

```env
PUBLIC_COSMIC_BUCKET_SLUG=YOUR_BUCKET_SLUG
PUBLIC_COSMIC_READ_KEY=YOUR_READ_KEY
```

--------------------------------

### Install Kontent.ai JS Model Generator and Dependencies (npm)

Source: https://docs.astro.build/en/guides/cms/kontent-ai

Installs the Kontent.ai JS model generator, ts-node, and dotenv packages using npm. These are necessary for generating TypeScript types from your Kontent.ai content model.

```bash
npm install @kontent-ai/model-generator ts-node dotenv
```

--------------------------------

### Create Keystatic Configuration File

Source: https://docs.astro.build/en/guides/cms/keystatic

Defines the Keystatic content schema and storage configuration in `keystatic.config.ts`. This file specifies how content is structured, stored (locally in this example), and managed.

```typescript
import { config, fields, collection } from '@keystatic/core';


export default config({
  storage: {
    kind: 'local',
  },


  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});
```

--------------------------------

### Astro Pagination URL Update Example

Source: https://docs.astro.build/en/guides/upgrade-to/v5

Demonstrates how to update code using the `paginate()` function to account for `base` being automatically included in generated URLs. Previously, the `base` value had to be manually prepended.

```astro
---
export async function getStaticPaths({ paginate }) {
  const astronautPages = [{
    astronaut: 'Neil Armstrong',
  }, {
    astronaut: 'Buzz Aldrin',
  }, {
    astronaut: 'Sally Ride',
  }, {
    astronaut: 'John Glenn',
  }];
  return paginate(astronautPages, { pageSize: 1 });
}
const { page } = Astro.props;
// `base: /'docs'` configured in `astro.config.mjs`
// const prev = "/docs" + page.url.prev; // Old way
const prev = page.url.prev; // New way
---
<a id="prev" href={prev}>Back</a>

```

--------------------------------

### Install Storyblok Integration for Astro

Source: https://docs.astro.build/en/guides/cms/storyblok

These code snippets show how to install the official Storyblok integration and Vite for Astro using different package managers (npm, pnpm, Yarn). Vite is a build tool that Astro uses, and the Storyblok integration facilitates the connection between your Astro project and Storyblok content.

```bash
npm install @storyblok/astro vite
```

```bash
pnpm add @storyblok/astro vite
```

```bash
yarn add @storyblok/astro vite
```

--------------------------------

### Install rehype-external-links Plugin

Source: https://docs.astro.build/en/recipes/external-links

Install the `rehype-external-links` plugin using your preferred package manager (npm, pnpm, or Yarn). This is the first step to enabling icon additions to external links.

```bash
npm install rehype-external-links

```

```bash
pnpm add rehype-external-links

```

```bash
yarn add rehype-external-links

```

--------------------------------

### Create Astro Project using Yarn

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-gatsby

This snippet shows how to create a new Astro project using the Yarn package manager. It provides commands for initiating the Astro CLI wizard and for setting up a project using a template. This is another option for project initialization.

```shell
# launch the Astro CLI Wizard
yarn create astro@latest


# create a new project with an official example
yarn create astro@latest --template <example-name>
```

--------------------------------

### Fetch and Render Blog Posts in Astro (Astro Component)

Source: https://docs.astro.build/en/guides/cms/kontent-ai

Demonstrates fetching blog post data from Kontent.ai using the Delivery Client and rendering their titles in an HTML unordered list. This example utilizes Astro's server-side rendering capabilities.

```astro
---
import { deliveryClient } from "../lib/kontent";


const blogPosts = await deliveryClient
    .items()
    .type("blogPost")
    .toPromise()
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astro</title>
  </head>
  <body>
        <ul>
        {blogPosts.data.items.map(blogPost => (
            <li>{blogPost.elements.title.value}</li>
        ))}
        </ul>
    </body>
</html>
```

--------------------------------

### Astro Page using Base Layout

Source: https://docs.astro.build/en/tutorial/4-layouts/1

This Astro page demonstrates how to use the BaseLayout component. It passes a page title as a prop and includes specific content within the layout's slot.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = "Home Page";
---
<BaseLayout pageTitle={pageTitle}>
  <h2>My awesome blog subtitle</h2>
</BaseLayout>

```

--------------------------------

### Astro SSR Site Build Configuration (pnpm) (YAML)

Source: https://docs.astro.build/en/guides/deploy/zerops

Configures the build and run process for an Astro SSR site using pnpm. It specifies the Node.js base, build commands, files to deploy, port, environment variables, and the start script.

```yaml
# see https://docs.zerops.io/zerops-yml/specification for full reference
zerops:
  - setup: app
    build:
      base: nodejs@20
      buildCommands:
        - pnpm i
        - pnpm run build
      deployFiles:
        - dist
        - package.json
        - node_modules
    run:
      base: nodejs@20
      ports:
        - port: 3000
          httpSupport: true
      envVariables:
        PORT: 3000
        HOST: 0.0.0.0
      start: pnpm start

```

--------------------------------

### Use Preact Component in Astro Page

Source: https://docs.astro.build/en/tutorial/6-islands/1

Demonstrates importing and using a Preact component within an Astro page (`.astro` file). The `Greeting` component is included, but without client-side interactivity yet.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Greeting from '../components/Greeting';
const pageTitle = "Home Page";
---
<BaseLayout pageTitle={pageTitle}>
  <h2>My awesome blog subtitle</h2>
  <Greeting messages={["Hi", "Hello", "Howdy", "Hey there"]} />
</BaseLayout>
```

--------------------------------

### Install Apostrophe Astro Integration Dependencies

Source: https://docs.astro.build/en/guides/cms/apostrophecms

Installs the necessary packages to integrate ApostropheCMS with Astro. This includes the `@apostrophecms/apostrophe-astro` integration, `vite` for the build tool, and `@astro/node` for server-side rendering capabilities. Choose the command corresponding to your package manager (npm, pnpm, or Yarn).

```bash
npm install @apostrophecms/apostrophe-astro vite @astro/node
```

```bash
pnpm add @apostrophecms/apostrophe-astro vite @astro/node
```

```bash
yarn add @apostrophecms/apostrophe-astro vite @astro/node
```

--------------------------------

### Programmatically Run Astro CLI Commands

Source: https://docs.astro.build/en/guides/upgrade-to/v3

This snippet shows how to use the new experimental JavaScript APIs in Astro v3.0 to programmatically control the Astro CLI. It demonstrates starting the development server with `dev()` and building the project with `build()`. These APIs replace the previous practice of directly importing and running the CLI from the 'astro' package entrypoint.

```javascript
import { dev, build } from "astro";


// Start the Astro dev server
const devServer = await dev();
await devServer.stop();


// Build your Astro project
await build();
```

--------------------------------

### Add Astro DB Integration using Yarn

Source: https://docs.astro.build/en/guides/integrations-guide/db

Automates the setup of the Astro DB integration by running the 'astro add db' command via Yarn. This is the preferred method for users who manage their projects with Yarn.

```bash
yarn astro add db
```

--------------------------------

### Clever Cloud Environment Variables for Node.js (pnpm)

Source: https://docs.astro.build/en/guides/deploy/clever-cloud

Configures environment variables for a Node.js deployment on Clever Cloud using pnpm. It specifies using a custom build tool, installing pnpm globally, installing dependencies, and building the project.

```bash
CC_NODE_BUILD_TOOL="custom"
CC_PRE_BUILD_HOOK="npm install -g pnpm && pnpm install"
CC_CUSTOM_BUILD_TOOL="pnpm run astro telemetry disable && pnpm build"
```

--------------------------------

### Enable Solid DevTools in Astro Config (pnpm)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Enables SolidJS DevTools in Astro development by setting `devtools: true` in the integration config and installing `solid-devtools` via pnpm.

```bash
pnpm add solid-devtools
```

--------------------------------

### Turso CLI Commands for DB Info and Token Creation

Source: https://docs.astro.build/en/guides/backend/turso

Commands to retrieve your Turso database URL and create an authentication token. These are essential for configuring your Astro project to connect to your Turso database.

```bash
turso db show <database-name> --url
```

```bash
turso db tokens create <database-name>
```

--------------------------------

### Astro Integration Package JSON Configuration

Source: https://docs.astro.build/en/reference/integrations-reference

This snippet shows how to configure your `package.json` to make your Astro integration discoverable and installable via the `astro add` command. It requires adding the `astro-integration` keyword.

```json
{
  "name": "example",
  "keywords": ["astro-integration"]
}
```

--------------------------------

### Dockerfile for Astro SSR with Node.js

Source: https://docs.astro.build/en/recipes/docker

This Dockerfile builds an Astro site for SSR and serves it using Node.js on port 4321. It requires the Node adapter for Astro and assumes npm as the package manager. It installs dependencies, builds the site, and exposes the necessary port.

```dockerfile
FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
```

--------------------------------

### Install Mux Player Astro Component

Source: https://docs.astro.build/en/guides/media/mux

Installs the Mux Player component specifically for Astro projects using various package managers. This component allows for optimized, responsive video playback and live streams within Astro applications.

```bash
npm install @mux/mux-player-astro
```

```bash
pnpm add @mux/mux-player-astro
```

```bash
yarn add @mux/mux-player-astro
```

--------------------------------

### Install Kontent.ai JS Model Generator and Dependencies (Yarn)

Source: https://docs.astro.build/en/guides/cms/kontent-ai

Installs the Kontent.ai JS model generator, ts-node, and dotenv packages using Yarn. These are necessary for generating TypeScript types from your Kontent.ai content model.

```bash
yarn add @kontent-ai/model-generator ts-node dotenv
```

--------------------------------

### Install Twinkle Star Font via pnpm

Source: https://docs.astro.build/en/guides/fonts

Command to install the Twinkle Star font package using pnpm. This is an alternative package manager command for integrating Fontsource fonts.

```bash
pnpm add @fontsource/twinkle-star
```

--------------------------------

### Dockerfile for Astro Static Site with Nginx

Source: https://docs.astro.build/en/recipes/docker

This Dockerfile builds a static Astro site and serves it using Nginx on port 8080. It includes steps for installing dependencies, building the site, and configuring Nginx to serve the static assets.

```dockerfile
FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
```

--------------------------------

### Astro SSR Site Build Configuration (npm) (YAML)

Source: https://docs.astro.build/en/guides/deploy/zerops

Configures the build and run process for an Astro SSR site using npm. It specifies the Node.js base, build commands, files to deploy, port, environment variables, and the start script.

```yaml
# see https://docs.zerops.io/zerops-yml/specification for full reference
zerops:
  - setup: app
    build:
      base: nodejs@20
      buildCommands:
        - npm i
        - npm run build
      deployFiles:
        - dist
        - package.json
        - node_modules
    run:
      base: nodejs@20
      ports:
        - port: 3000
          httpSupport: true
      envVariables:
        PORT: 3000
        HOST: 0.0.0.0
      start: npm start

```

--------------------------------

### Fetch and Display Published Posts in Astro

Source: https://docs.astro.build/en/guides/backend/prisma-postgres

Fetches published posts from the database using the Prisma Client and displays their titles and content in an Astro template. It demonstrates basic data fetching and rendering.

```astro
---
import prisma from '../lib/prisma';


const posts = await prisma.post.findMany({
  where: { published: true },
  orderBy: { id: 'desc' }
});
---


<html>
  <head>
    <title>Published Posts</title>
  </head>
  <body>
    <h1>Published Posts</h1>
    <ul>
      {posts.map((post) => (
        <li>
          <h2>{post.title}</h2>
          {post.content && <p>{post.content}</p>}
        </li>
      ))}
    </ul>
  </body>
</html>
```

--------------------------------

### Install Twinkle Star Font via Yarn

Source: https://docs.astro.build/en/guides/fonts

Command to install the Twinkle Star font package using Yarn. This provides another option for managing dependencies when using Fontsource.

```bash
yarn add @fontsource/twinkle-star
```

--------------------------------

### Create a boolean atom store with Nano Stores (JavaScript)

Source: https://docs.astro.build/en/recipes/sharing-state

Creates a reactive store using Nano Stores' `atom` function. This example initializes a boolean state to track the open/closed status of a dialog.

```javascript
import { atom } from 'nanostores';


export const isOpen = atom(false);
```

--------------------------------

### Astro Route Generation Example

Source: https://docs.astro.build/en/reference/integrations-reference

Illustrates how to use the `generate` function provided by `IntegrationResolvedRoute` to create a full path name from a route pattern and optional parameters. This is useful for constructing URLs dynamically.

```javascript
console.log(generate({ id: 'presentation' })) // will log `/blog/presentation`
```

--------------------------------

### Astro Dev Toolbar App with Preact JSX

Source: https://docs.astro.build/en/recipes/making-toolbar-apps

An example of an Astro dev toolbar app using Preact and JSX syntax. It dynamically displays a motivational message.

```typescript
import { defineToolbarApp } from "astro/toolbar";
import { render } from "preact";


const motivationalMessages = [
  "You're doing great!",
  "Keep up the good work!",
  "You're awesome!",
  "You're a star!",
];


export default defineToolbarApp({
    init(canvas) {
      const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      render(<h1>{message}</h1>, canvas);
    },
});

```

--------------------------------

### Create Astro Dev Toolbar Toggle

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Provides an example of creating an `astro-dev-toolbar-toggle` component, which functions as a checkbox. It demonstrates how to attach an event listener to track changes in its state.

```javascript
const toggle = document.createElement('astro-dev-toolbar-toggle');

toggle.input.addEventListener('change', (evt) => {
  console.log(`The toggle is now ${evt.currentTarget.checked ? 'enabled' : 'disabled'}!`);
});
```

--------------------------------

### Configure Playwright to Launch Dev Server

Source: https://docs.astro.build/en/guides/testing

Configures Playwright's `webServer` option to launch a development server when tests are run. This is useful for ensuring the site is available during end-to-end testing. It specifies the command to start the server, the URL to access it, a timeout, and whether to reuse an existing server instance.

```typescript
import {
  defineConfig
} from '@playwright/test';


export default defineConfig({
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4321/',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:4321/',
  },
});
```

--------------------------------

### Astro Blog Post Markdown Frontmatter

Source: https://docs.astro.build/en/tutorial/2-pages/2

This snippet demonstrates the frontmatter for an Astro blog post written in Markdown. It includes metadata such as title, publication date, description, author, image URL, alt text, and tags, which Astro uses to render the post.

```markdown
---
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "blogging", "learning in public"]
---
# My First Blog Post


Published on: 2022-07-01


Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.


## What I've accomplished


1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.


2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.


3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!


## What's next


I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

```

--------------------------------

### CSS Specificity Example in Astro

Source: https://docs.astro.build/en/guides/styling

Demonstrates how more specific CSS rules take precedence, regardless of their order. This example shows a `div > h1` selector overriding a simple `h1` selector due to higher specificity.

```html
<style>
  h1 { color: red }
  div > h1 {
    color: purple
  }
</style>
<div>
  <h1>
    This header will be purple!
  </h1>
</div>
```

--------------------------------

### Static Page in Server Render Mode

Source: https://docs.astro.build/en/guides/on-demand-rendering

Example demonstrating how to explicitly mark a page for prerendering (`prerender = true`) even when the Astro project is configured for server-rendering all pages by default (`output: 'server'`).

```astro
---
export const prerender = true
---
<html>
<!--
`output: 'server'` is configured, but this page is static!
The rest of my site is rendered on demand!
-->
<html>
```

--------------------------------

### Include Feedback Form Component (Svelte)

Source: https://docs.astro.build/en/recipes/build-forms-api

This Svelte code example shows the process of importing and using a Svelte `FeedbackForm` component. The `client:load` directive is used to activate the component's client-side logic upon page load.

```typescript
---
import FeedbackForm from "../components/FeedbackForm.svelte"
---
<FeedbackForm client:load />
```

--------------------------------

### Enable Viewport Prefetching with data-astro-prefetch (HTML)

Source: https://docs.astro.build/en/guides/prefetch

This example demonstrates how to use the `data-astro-prefetch="viewport"` attribute on anchor tags to enable prefetching when links enter the viewport, replacing the `selector` option from the deprecated @astrojs/prefetch integration.

```html
<a href="/about" data-astro-prefetch="viewport">

```

--------------------------------

### Vue App Entrypoint for Plugins

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Example of a Vue app entrypoint file that accepts a Vue App instance and uses a custom i18n plugin.

```typescript
import type { App } from 'vue';
import i18nPlugin from 'my-vue-i18n-plugin';


export default (app: App) => {
  app.use(i18nPlugin);
};
```

--------------------------------

### Programmatic Prefetching with Eagerness

Source: https://docs.astro.build/en/guides/prefetch

Demonstrates how to use the `prefetch()` function from `astro:prefetch` to control the eagerness of link prefetching. It shows examples for critical, resource-intensive, and less important pages, defaulting to 'immediate' eagerness if not specified.

```javascript
// Control prefetching eagerness with `experimental.clientPrerender`
import { prefetch } from 'astro:prefetch';


// This page is resource-intensive
prefetch('/data-heavy-dashboard', { eagerness: 'conservative' });


// This page is critical to the visitor's journey
prefetch('/getting-started'); // defaults to `{ eagerness: 'immediate' }`


// This page may not be visited
prefetch('/terms-of-service', { eagerness: 'moderate' });
```

--------------------------------

### Install Day.js for Time Manipulation (Yarn)

Source: https://docs.astro.build/en/recipes/modified-time

Installs the Day.js library using Yarn, a popular package manager for JavaScript. This is a prerequisite for formatting the last modified timestamp.

```bash
yarn add dayjs
```

--------------------------------

### Astro Component Importing Markdown

Source: https://docs.astro.build/en/guides/markdown-content

This Astro component example shows how to import a specific Markdown file and also how to query multiple Markdown files from a directory using Vite's import.meta.glob(). It then iterates through the queried posts to display their titles and links, and accesses frontmatter properties of the individual post.

```astro
---
import * as greatPost from './posts/great-post.md';
const posts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
---


<p>{greatPost.frontmatter.title}</p>
<p>Written by: {greatPost.frontmatter.author}</p>


<p>Post Archive:</p>
<ul>
  {posts.map(post => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
</ul>

```

--------------------------------

### Example Markdoc Partial for Content Reuse

Source: https://docs.astro.build/en/guides/integrations-guide/markdoc

A Markdoc partial file (`_footer.mdoc`) containing reusable content, such as social links. Partials are typically prefixed with an underscore to exclude them from content collection queries.

```markdoc
Social links:


- [Twitter / X](https://twitter.com/astrodotbuild)
- [Discord](https://astro.build/chat)
- [GitHub](https://github.com/withastro/astro)
```

--------------------------------

### Install Decap CMS using pnpm

Source: https://docs.astro.build/en/guides/cms/decap-cms

This command installs the Decap CMS application package using pnpm, an alternative JavaScript package manager known for its efficiency. This is an alternative to npm for adding Decap CMS to an Astro project.

```bash
pnpm add decap-cms-app
```

--------------------------------

### Install Specific Astro and React Versions (npm)

Source: https://docs.astro.build/en/upgrade-astro

Installs a specific version of Astro (v4.5.3) and the Astro React integration (v3.0.10) using npm. This is useful for maintaining compatibility with older projects or testing specific versions.

```bash
npm install astro@4.5.3 @astrojs/react@3.0.10
```

--------------------------------

### Add Form Inputs with Names in Astro

Source: https://docs.astro.build/en/recipes/build-forms

This example demonstrates adding standard HTML form elements like labels, inputs, and a submit button. Crucially, each input has a `name` attribute for data retrieval.

```astro
---
---
<h1>Register</h1>
<form>
  <label>
    Username:
    <input type="text" name="username" />
  </label>
  <label>
    Email:
    <input type="email" name="email" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
  <button>Submit</button>
</form>

```

--------------------------------

### Custom Local Image Service Implementation

Source: https://docs.astro.build/en/reference/image-service-reference

Example implementation of a custom local image service, defining how images are transformed and URLs are generated.

```APIDOC
## POST /my_custom_endpoint_that_transforms_images

### Description
This endpoint is part of a custom local image service. It takes image transformation options, generates a URL with query parameters for resizing, quality, and format, and can optionally use a built-in `/_image` endpoint.

### Method
GET

### Endpoint
`/my_custom_endpoint_that_transforms_images` or `/_image`

### Parameters
#### Query Parameters
- **href** (string) - Required - The source path or URL of the image.
- **w** (number) - Optional - The desired width of the image.
- **h** (number) - Optional - The desired height of the image.
- **q** (number) - Optional - The desired quality of the image (0-100).
- **f** (string) - Optional - The desired format of the image (e.g., 'png', 'jpeg').

### Request Example
```json
{
  "example": "GET /my_custom_endpoint_that_transforms_images?href=/path/to/image.jpg&w=300&q=80&f=webp"
}
```

### Response
#### Success Response (200)
- **data** (Uint8Array) - The transformed image data.
- **format** (string) - The format of the transformed image.

#### Response Example
```json
{
  "example": "[Binary image data]"
}
```

### Notes
- The `propertiesToHash` array can be extended to include custom options that affect the generated image hash for build-time optimization.
```

--------------------------------

### Install Specific Astro and React Versions (pnpm)

Source: https://docs.astro.build/en/upgrade-astro

Installs a specific version of Astro (v4.5.3) and the Astro React integration (v3.0.10) using pnpm. This is useful for maintaining compatibility with older projects or testing specific versions.

```bash
pnpm add astro@4.5.3 @astrojs/react@3.0.10
```

--------------------------------

### Markdown Page with Layout and Frontmatter

Source: https://docs.astro.build/en/basics/astro-pages

An example of a Markdown file (`.md`) used as an Astro page. It utilizes frontmatter to specify a layout component and set the page title.

```markdown
---
layout: ../layouts/MySiteLayout.astro
title: My Markdown page
---
# Title


This is my page, written in **Markdown.**
```

--------------------------------

### Define Basic Astro Dev Toolbar App

Source: https://docs.astro.build/en/recipes/making-toolbar-apps

Initializes a basic Astro Dev Toolbar app using `defineToolbarApp`. The `init` function is called when the app loads and receives `canvas`, `app`, and `server` arguments for interacting with the toolbar and the page.

```typescript
import { defineToolbarApp } from "astro/toolbar";


export default defineToolbarApp({
    init(canvas, app, server) {
      // ...
    },
});
```

--------------------------------

### Fetch Single Post using SQL Placeholders in Astro

Source: https://docs.astro.build/en/guides/backend/turso

Example of fetching a single post based on a slug using parameterized SQL queries with the `execute()` method. This enhances security by preventing SQL injection.

```astro
---
import { turso } from '../turso'


const { slug } = Astro.params


const { rows } = await turso.execute({
  sql: 'SELECT * FROM posts WHERE slug = ?',
  args: [slug!]
})
---


<h1>{rows[0].title}</h1>

```

--------------------------------

### Add Vercel Adapter to Astro Project

Source: https://docs.astro.build/en/guides/deploy/vercel

Installs and configures the Vercel adapter for Astro projects, enabling on-demand rendering. This command modifies your `astro.config.mjs` file.

```bash
npx astro add vercel
```

```bash
pnpm astro add vercel
```

```bash
yarn astro add vercel
```

--------------------------------

### Configure PostCSS with Autoprefixer and CSSnano

Source: https://docs.astro.build/en/guides/styling

This configuration file sets up PostCSS with common plugins like Autoprefixer and CSSnano. Ensure these plugins are installed via npm before use. This file should be named `postcss.config.cjs` and placed in the project root.

```javascript
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
  ],
};
```

--------------------------------

### Install Specific Astro and React Versions (Yarn)

Source: https://docs.astro.build/en/upgrade-astro

Installs a specific version of Astro (v4.5.3) and the Astro React integration (v3.0.10) using Yarn. This is useful for maintaining compatibility with older projects or testing specific versions.

```bash
yarn add astro@4.5.3 @astrojs/react@3.0.10
```

--------------------------------

### Dockerfile for Astro Static Site with Apache

Source: https://docs.astro.build/en/recipes/docker

This Dockerfile builds a static Astro site and serves it using Apache httpd on port 80. It first builds the site using Node.js and then copies the static output to the Apache web server's document root.

```dockerfile
FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build


FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
```

--------------------------------

### Sort Astro Collection Entries

Source: https://docs.astro.build/en/guides/content-collections

Provides an example of how to sort entries fetched from an Astro collection using the `.sort()` method. This is necessary because the default sort order is non-deterministic. The example sorts blog posts by publication date in descending order.

```typescript
---import { getCollection } from 'astro:content';


const posts = (await getCollection('blog')).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);
---
```

--------------------------------

### Clever Cloud Environment Variables for Static Site (npm)

Source: https://docs.astro.build/en/guides/deploy/clever-cloud

Sets environment variables for deploying a static Astro site on Clever Cloud using npm. It configures the post-build hook, pre-build hook for installation and telemetry, and the webroot directory.

```bash
CC_POST_BUILD_HOOK="npm run build"
CC_PRE_BUILD_HOOK="npm install && npm run astro telemetry disable"
CC_WEBROOT="/dist"
```

--------------------------------

### GitLab CI/CD Configuration for Astro

Source: https://docs.astro.build/en/guides/deploy/gitlab

This `.gitlab-ci.yml` file defines the CI/CD pipeline for deploying an Astro site to GitLab Pages. It specifies the Node.js Docker image, installs dependencies, builds the site using `npm run build`, and designates the 'public' directory as the artifact to be published. The pipeline is triggered on pushes to the 'main' branch.

```yaml
pages:
  # The Docker image that will be used to build your app
  image: node:lts

  before_script:
    - npm ci

  script:
    # Specify the steps involved to build your app here
    - npm run build

  artifacts:
    paths:
      # The folder that contains the built files to be published.
      # This must be called "public".
      - public

  only:
    # Trigger a new build and deploy only when there is a push to the
    # branch(es) below
    - main
```

--------------------------------

### Create Astro Header Component

Source: https://docs.astro.build/en/tutorial/3-components/3

This snippet shows how to create a new Astro component named `Header.astro`. It imports and renders an existing `Navigation.astro` component within a semantic `<header>` and `<nav>` structure. This forms the basic layout for the site's header.

```astro
---
import Navigation from './Navigation.astro';
---
<header>
  <nav>
    <Navigation />
  </nav>
</header>
```

--------------------------------

### Manually Add Multiple Integrations in astro.config.mjs

Source: https://docs.astro.build/en/guides/integrations-guide

Demonstrates how to manually add multiple Astro integrations within the `astro.config.mjs` file. This includes importing installed npm packages and local custom integrations.

```javascript
import { defineConfig } from 'astro/config';
import installedIntegration from '@astrojs/vue';
import localIntegration from './my-integration.js';


export default defineConfig({
  integrations: [
    // 1. Imported from an installed npm package
    installedIntegration(),
    // 2. Imported from a local JS file
    localIntegration(),
    // 3. An inline object
    {name: 'namespace:id', hooks: { /* ... */ }},
  ]
});
```

--------------------------------

### Inline Loader Function Example (TypeScript)

Source: https://docs.astro.build/en/reference/content-loader-reference

An example of an inline loader function in TypeScript. This function fetches data from an API and returns it as an array of entries, each with a unique 'id' property. This is suitable for simple loaders defined directly in the content configuration file.

```typescript
const countries = defineCollection({
  loader: async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    // Must return an array of entries with an id property
    // or an object with IDs as keys and entries as values
    return data.map((country) => ({
      id: country.cca3,
      ...country,
    }));
  },
  schema: /* ... */
});
```

--------------------------------

### Fetch all blog posts from Ghost in Astro

Source: https://docs.astro.build/en/guides/cms/ghost

This snippet demonstrates how to import `ghostClient` and use the `posts.browse()` method to retrieve all blog posts from a Ghost CMS instance. It includes error handling for the fetch operation. The retrieved posts can be used to populate lists or individual pages.

```astro
import { ghostClient } from '../lib/ghost';
const posts = await ghostClient.posts
    .browse({
        limit: 'all',
    })
    .catch((err) => {
        console.error(err);
    });

```

--------------------------------

### Configure Astro Netlify Adapter: Include Files

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

Specify additional files to bundle with your Astro function using the includeFiles property. This is useful for data, configuration, or template files not automatically detected as dependencies. Paths are relative to the project's root.

```javascript
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  // ...
  adapter: netlify({
    includeFiles: ['./my-data.json'], // relative to `root`
  }),
});
```

--------------------------------

### Render Request with Astro App

Source: https://docs.astro.build/en/reference/adapter-reference

Provides an example of calling the 'app.render()' method to render an Astro page or API route that matches the incoming request. This method returns a Promise that resolves to a Response object.

```javascript
const response = await app.render(request);
```

--------------------------------

### POST /websites/astro_build/redirect/[id]

Source: https://docs.astro.build/en/guides/endpoints

Example of an API route that performs a redirect based on a dynamic ID, similar to Astro.redirect.

```APIDOC
## POST /websites/astro_build/redirect/[id]

### Description
This API route handles redirects. It takes an `id` from the path parameters, retrieves a corresponding URL, and then issues a temporary redirect (307) to that URL. If the ID is not found, it returns a 404 response.

### Method
GET (example assumes GET, but `redirect` utility works with other methods)

### Endpoint
`/websites/astro_build/redirect/[id]`

### Parameters
#### Path Parameters
- **id** (string) - Required - The identifier used to find the target URL for redirection.

### Request Example
```json
{
  "example": "No request body needed for this redirect example."
}
```

### Response
#### Success Response (307)
- **(redirect)** - Issues a redirect to the determined URL.

#### Error Response (404)
- **(no body)** - Returned if the `id` does not correspond to a known link.
```

--------------------------------

### Install Decap CMS using Yarn

Source: https://docs.astro.build/en/guides/cms/decap-cms

This command installs the Decap CMS application package using Yarn, another widely used JavaScript package manager. This provides another option for integrating Decap CMS into an Astro project.

```bash
yarn add decap-cms-app
```

--------------------------------

### Astro Toolbar: App Initialization Event (Server)

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Shows how to register a callback for when a specific toolbar app is initialized using `toolbar.onAppInitialized()`. This ensures code runs only after the app is ready, preventing issues with pre-initialization events.

```javascript
'astro:server:setup': ({ toolbar }) => {
  toolbar.onAppInitialized('my-app', () => {
    console.log('The app is now initialized!');
  });
},
```

--------------------------------

### Run Astro Development Server with `astro dev`

Source: https://docs.astro.build/en/reference/cli-reference

Starts Astro's development server, which provides a local HTTP server without asset bundling. It supports Hot Module Replacement (HMR) for live updates in the browser as you save code changes. Useful hotkeys are available in the terminal for syncing content, opening the site, and quitting the server.

```bash
astro dev
```

--------------------------------

### Configure Amplify for Astro Server-Rendered Build with pnpm

Source: https://docs.astro.build/en/guides/deploy/aws

Defines the build settings for a server-rendered Astro site using the AWS Amplify adapter with pnpm. It includes commands for installing pnpm, dependencies, building, and relocating node_modules.

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm i -g pnpm
        - pnpm config set store-dir .pnpm-store
        - pnpm i
    build:
      commands:
        - pnpm run build
        - mv node_modules ./.amplify-hosting/compute/default
  artifacts:
    baseDirectory: .amplify-hosting
    files:
      - '**/*'
  cache:
    paths:
      - .pnpm-store/**/*
```

--------------------------------

### Enable Solid DevTools in Astro Config (npm)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Enables SolidJS DevTools in Astro development by setting `devtools: true` in the integration config and installing `solid-devtools` via npm.

```bash
npm install solid-devtools
```

--------------------------------

### Add Bun Types to Astro Project

Source: https://docs.astro.build/en/recipes/bun

Installs the `@types/bun` package as a development dependency using Bun. This provides runtime type definitions for Bun, improving type safety in your Astro project.

```bash
bun add -d @types/bun
```

--------------------------------

### Add Node.js Adapter to Astro Project (pnpm)

Source: https://docs.astro.build/en/guides/deploy/seenode

Installs the Node.js adapter for Astro using pnpm, enabling server-side rendering (SSR). This command automatically updates the astro.config.mjs file.

```bash
pnpm astro add node
```

--------------------------------

### Install Day.js for Time Manipulation (pnpm)

Source: https://docs.astro.build/en/recipes/modified-time

Installs the Day.js library using pnpm, a fast, reliable, and efficient node package manager. This is a prerequisite for formatting the last modified timestamp.

```bash
pnpm add dayjs
```

--------------------------------

### Render Builder.io Content in Astro Preview Page

Source: https://docs.astro.build/en/guides/cms/builderio

Create a preview page in Astro to render content fetched from Builder.io using the `<builder-component>`. This requires setting up environment variables and including the Builder.io web components script.

```astro
---
const builderAPIpublicKey = import.meta.env.BUILDER_API_PUBLIC_KEY;
const builderModel = import.meta.env.BUILDER_BLOGPOST_MODEL;
---


<html lang="en">
  <head>
    <title>Preview for builder.io</title>
  </head>
  <body>
    <header>This is your header</header>


    <builder-component model={builderModel} api-key={builderAPIpublicKey}
    ></builder-component>
    <script async src="https://cdn.builder.io/js/webcomponents"></script>


    <footer>This is your footer</footer>
  </body>
</html>

```

--------------------------------

### Update Astro Preview Script for Deno

Source: https://docs.astro.build/en/guides/deploy/deno

Modifies the `preview` script in `package.json` to use Deno for running the built Astro site locally. This allows for previewing the production build with Deno's runtime.

```json
{
  // ...
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
    "preview": "deno run --allow-net --allow-read --allow-env ./dist/server/entry.mjs"
  }
}
```

--------------------------------

### Initialize Ghost Content API Client in Astro

Source: https://docs.astro.build/en/guides/cms/ghost

Initializes the Ghost Content API client with site credentials, including the URL and the Content API key stored in environment variables. This client is used to fetch data from the Ghost CMS within an Astro project.

```typescript
import GhostContentAPI from '@tryghost/content-api';


// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
    url: 'http://127.0.0.1:2368', // This is the default URL if your site is running on a local environment
    key: import.meta.env.CONTENT_API_KEY,
    version: 'v5.0',
});
```

--------------------------------

### Image Component with Densities

Source: https://docs.astro.build/en/reference/modules/astro-assets

Example of using the `densities` property with the `<Image />` component to generate different resolutions of an image, suitable for `srcset`. This is not compatible with responsive images using the `layout` prop.

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image
  src={myImage}
  width={myImage.width / 2}
  densities={[1.5, 2]}
  alt="A description of my image."
/>

```

```html
<!-- Output -->
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp 1.5x
    /_astro/my_image.hash.webp 2x
  "
  alt="A description of my image."
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
/>

```

--------------------------------

### Astro Image Service Endpoint

Source: https://docs.astro.build/en/reference/image-service-reference

An example of an Astro API route that leverages the configured image service to parse URLs and transform images at runtime.

```APIDOC
## GET /api/images

### Description
This is an Astro API route that acts as a runtime image processing endpoint. It uses `getConfiguredImageService` to retrieve the configured image service and then calls its `parseURL` and `transform` methods to process the image based on the request URL.

### Method
GET

### Endpoint
`/api/images` (or any custom endpoint defined in your Astro config)

### Parameters
#### Query Parameters
- **href** (string) - Required - The source path or URL of the image (passed via the request URL).
- **w** (number) - Optional - The desired width of the image.
- **h** (number) - Optional - The desired height of the image.
- **q** (number) - Optional - The desired quality of the image.
- **f** (string) - Optional - The desired format of the image.

### Request Example
```json
{
  "example": "GET /api/images?href=/path/to/image.jpg&w=500&f=png"
}
```

### Response
#### Success Response (200)
- **data** (Uint8Array) - The transformed image binary data.

#### Response Example
```json
{
  "example": "[Binary image data]"
}
```

### Notes
- This endpoint requires `inputBuffer` to be fetched from `imageTransform.src` before calling `imageService.transform`.
- The `Content-Type` header is set based on the format returned by the `transform` method.
```

--------------------------------

### Enable Server Island Rendering with `server:defer`

Source: https://docs.astro.build/en/guides/server-islands

To turn an Astro component into a server island, use the `server:defer` directive. This tells Astro to delay rendering the component until its content is ready, displaying fallback content initially. This requires an adapter to be installed for delayed server-side rendering.

```astro
---\nimport Avatar from '../components/Avatar.astro';
---
<Avatar server:defer />
```

--------------------------------

### Run Cypress Tests from Command Line

Source: https://docs.astro.build/en/guides/testing

Commands to execute Cypress tests. `npx cypress run` executes all end-to-end tests headlessly, suitable for CI environments. `npx cypress open` launches the Cypress App for interactive test running and debugging.

```bash
npx cypress run
```

```bash
npx cypress open
```

--------------------------------

### Install Decap CMS using npm

Source: https://docs.astro.build/en/guides/cms/decap-cms

This command installs the Decap CMS application package using npm, a popular JavaScript package manager. This is one of the primary methods to add Decap CMS to an Astro project.

```bash
npm install decap-cms-app
```

--------------------------------

### Glob Loader for Markdown and MDX Files in Astro

Source: https://docs.astro.build/en/reference/content-loader-reference

This `glob()` loader example demonstrates how to retrieve both Markdown (`.md`) and MDX (`.mdx`) files from a specified directory ('./src/data/blog'). It utilizes glob patterns and requires `astro:content` and `astro/loaders`.

```typescript
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';


const blog = defineCollection({
  /* Retrieve all Markdown and MDX files in your blog directory. */
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/blog" }),
  schema: /* ... */
});

```

--------------------------------

### Import Placement in Astro Components (v0.21+ Bug)

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Astro v0.21+ introduced a bug requiring all imports within Astro components to be placed at the top of the frontmatter section.

```astro
---
import Component from '../components/Component.astro'
const whereShouldIPutMyImports = "on top!"
---
```

--------------------------------

### Import Single MDX File

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Shows how to import a single MDX file and assign its default export to a component. This allows for direct usage of the MDX content as a React component.

```javascript
---
// Import a single page
import { default as About } from './about.mdx';
---


<About />

```

--------------------------------

### Install Day.js for Time Manipulation (npm)

Source: https://docs.astro.build/en/recipes/modified-time

Installs the Day.js library using npm, which is a lightweight alternative to Moment.js for date and time formatting and manipulation. This is a prerequisite for formatting the last modified timestamp.

```bash
npm install dayjs
```

--------------------------------

### Astro API Routes: Handle Multiple HTTP Methods (GET, POST, DELETE, ALL)

Source: https://docs.astro.build/en/guides/endpoints

This snippet demonstrates how to define handlers for different HTTP methods (GET, POST, DELETE) within an Astro API route. It also includes an ALL handler to catch any unhandled HTTP methods, providing a flexible way to manage API requests.

```typescript
export const GET: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!",
    }),
  );
};


export const POST: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    }),
  );
};


export const DELETE: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a DELETE!",
    }),
  );
};


export const ALL: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`,
    }),
  );
};
```

--------------------------------

### Display Request Details with Astro.request

Source: https://docs.astro.build/en/reference/api-reference

This example demonstrates how to display the HTTP method and URL of an incoming request using Astro.request. It also shows how to stringify and display request headers.

```html
<p>Received a {Astro.request.method} request to "{Astro.request.url}".</p>
<p>Received request headers:</p>
<p><code>{JSON.stringify(Object.fromEntries(Astro.request.headers))}</code></p>
```

--------------------------------

### Install Twinkle Star Font via npm

Source: https://docs.astro.build/en/guides/fonts

Command to install the Twinkle Star font package using npm. This is the first step when using Fontsource to manage custom fonts within an Astro project.

```bash
npm install @fontsource/twinkle-star
```

--------------------------------

### Run Astro Docker Container Locally

Source: https://docs.astro.build/en/recipes/docker

Runs the built Docker image as a local container. Map a local port to a container port. Access your site via `http://localhost:<local-port>`. Replace `<local-port>` with an available port on your machine and `<container-port>` with the port exposed by your container (e.g., 4321, 80, or 8080).

```docker
docker run -p <local-port>:<container-port> <your-astro-image-name>
```

--------------------------------

### Configure Netlify Build and Publish Directory

Source: https://docs.astro.build/en/guides/deploy/netlify

Defines the build command and publish directory for an Astro project in a netlify.toml file. This configuration is read by Netlify to automate the deployment process. It specifies that the project is built using 'npm run build' and the output is in the 'dist' folder.

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

--------------------------------

### Fetch all posts from Cosmic using Astro

Source: https://docs.astro.build/en/guides/cms/cosmic

Fetches metadata for all 'posts' objects from Cosmic using the SDK and environment variables. It returns an array of post objects, each containing title, slug, metadata, and creation date.

```javascript
import { createBucketClient } from '@cosmicjs/sdk'


const cosmic = createBucketClient({
  bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY
})


export async function getAllPosts() {
  const data = await cosmic.objects
    .find({
      type: 'posts'
    })
    .props('title,slug,metadata,created_at')
  return data.objects
}
```

--------------------------------

### Manual Coercion Example for Environment Variables

Source: https://docs.astro.build/en/reference/experimental-flags/static-import-meta-env

When the experimental.staticImportMetaEnv flag is enabled, Astro no longer automatically coerces environment variable values. This example demonstrates how to manually coerce string values to booleans if your project relied on the previous automatic coercion.

```javascript
const enabled: boolean = import.meta.env.ENABLED === "true";
```

--------------------------------

### Enable Solid DevTools in Astro Config (Yarn)

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

Enables SolidJS DevTools in Astro development by setting `devtools: true` in the integration config and installing `solid-devtools` via Yarn.

```bash
yarn add solid-devtools
```

--------------------------------

### Add Custom Vite Plugins to Astro

Source: https://docs.astro.build/en/reference/configuration-reference

This example shows how to integrate custom Vite plugins into an Astro project. By adding plugins to the `vite.plugins` array, you can extend Vite's functionality within your Astro build process.

```javascript
{
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [myPlugin()],
  }
}
```

--------------------------------

### Astro Component Composition with Reusable Buttons

Source: https://docs.astro.build/en/basics/astro-components

Illustrates how to compose Astro components by using one component (Button) inside another. This example shows a parent component rendering multiple instances of a Button component, demonstrating reusability and composability in Astro.

```astro
---
import Button from './Button.astro';
---
<div>
  <Button title="Button 1" />
  <Button title="Button 2" />
  <Button title="Button 3" />
</div>

```

--------------------------------

### Highlight Element with Astro Dev Toolbar

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Demonstrates two ways to use the `astro-dev-toolbar-highlight` component. The first shows how to highlight the entire page using inline styles. The second shows how to dynamically position and size the highlight to match a specific element.

```html
<!-- Highlight the entire page -->
<astro-dev-toolbar-highlight style="top: 0; left: 0; width: 100%; height: 100%;"></astro-dev-toolbar-highlight>
```

```javascript
const elementToHighlight = document.querySelector('h1');
const rect = elementToHighlight.getBoundingClientRect();

const highlight = document.createElement('astro-dev-toolbar-highlight');

highlight.style.top = `${Math.max(rect.top + window.scrollY - 10, 0)}px`;
highlight.style.left = `${Math.max(rect.left + window.scrollX - 10, 0)}px`;
highlight.style.width = `${rect.width + 15}px`;
highlight.style.height = `${rect.height + 15}px`;
highlight.icon = 'astro:logo';
```

--------------------------------

### Add Node.js Adapter to Astro Project (npm)

Source: https://docs.astro.build/en/guides/deploy/seenode

Installs the Node.js adapter for Astro using npm, enabling server-side rendering (SSR). This command automatically updates the astro.config.mjs file.

```bash
npx astro add node
```

--------------------------------

### Initializing Dev Toolbar App UI in Canvas

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Shows how to render content into the dev toolbar app's canvas using the `init` function. This snippet appends a simple text node to the provided `ShadowRoot` (`canvas`), demonstrating basic DOM manipulation within the isolated app environment.

```javascript
export default defineToolbarApp({
  init(canvas) {
    canvas.appendChild(document.createTextNode('Hello World!'))
  }
});
```

--------------------------------

### Configure Standalone Server Host and Port

Source: https://docs.astro.build/en/guides/integrations-guide/node

This example shows how to override the default host and port for the standalone Astro server using environment variables. By setting `HOST` and `PORT`, you can control the network interface and port the server listens on at runtime.

```bash
HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs
```

--------------------------------

### Remove @astrojs/image Integration

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Example configuration showing the removal of the deprecated '@astrojs/image' integration from Astro. This integration has been replaced by the built-in 'astro:assets' API.

```javascript
import { defineConfig } from 'astro/config';
import image from '@astrojs/image';


export default defineConfig({
  integrations: [
    image(),
  ]
})
```

--------------------------------

### Configure Warp for Astro Docs MCP Server

Source: https://docs.astro.build/en/guides/build-with-ai

This configuration snippet allows Warp (formerly Warp Terminal) to connect to the Astro Docs MCP server. It specifies the command to run and arguments to pass, enabling Warp to access the latest Astro documentation. The `start_on_launch` flag is optional and can be set to true to activate the server on startup.

```json
{
  "mcpServers": {
    "Astro docs": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.docs.astro.build/mcp"],
      "env": {},
      "working_directory": null,
      "start_on_launch": true
    }
  }
}
```

--------------------------------

### Initialize Firebase Hosting

Source: https://docs.astro.build/en/guides/deploy/google-firebase

Initializes Firebase Hosting for your project, generating essential configuration files like `firebase.json` and `.firebaserc`. This command sets up your project to use Firebase Hosting. It can be executed using npm, pnpm, or Yarn.

```bash
npx firebase init hosting
```

```bash
pnpm exec firebase init hosting
```

```bash
yarn firebase init hosting
```

--------------------------------

### Submit Feedback Form with API Request (Solid)

Source: https://docs.astro.build/en/recipes/build-forms-api

This Solid.js example shows a feedback form that uses `createSignal` and `createResource` to manage form data and the API response. It sends a POST request to '/api/feedback' and displays the server's message upon successful submission.

```typescript
import { createSignal, createResource, Suspense } from "solid-js";

async function postFormData(formData: FormData) {
  const response = await fetch("/api/feedback", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
}

export default function Form() {
  const [formData, setFormData] = createSignal<FormData>();
  const [response] = createResource(formData, postFormData);

  function submit(e: SubmitEvent) {
    e.preventDefault();
    setFormData(new FormData(e.target as HTMLFormElement));
  }

  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input type="text" id="name" name="name" required />
      </label>
      <label>
        Email
        <input type="email" id="email" name="email" required />
      </label>
      <label>
        Message
        <textarea id="message" name="message" required />
      </label>
      <button>Send</button>
      <Suspense>{response() && <p>{response().message}</p>}</Suspense>
    </form>
  );
}
```

--------------------------------

### Server-Side Form Data Validation in Astro

Source: https://docs.astro.build/en/recipes/build-forms

This comprehensive example performs server-side validation on form data, including checking data types, formats, and database existence, before registering a user and redirecting.

```astro
---
export const prerender = false; // Not needed in 'server' mode


import { isRegistered, registerUser } from "../../data/users"
import { isValidEmail } from "../../utils/isValidEmail";


const errors = { username: "", email: "", password: "" };
if (Astro.request.method === "POST") {
  try {
    const data = await Astro.request.formData();
    const name = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    if (typeof name !== "string" || name.length < 1) {
      errors.username += "Please enter a username. ";
    }
    if (typeof email !== "string" || !isValidEmail(email)) {
      errors.email += "Email is not valid. ";
    } else if (await isRegistered(email)) {
      errors.email += "Email is already registered. ";
    }
    if (typeof password !== "string" || password.length < 6) {
      errors.password += "Password must be at least 6 characters. ";
    }
    const hasErrors = Object.values(errors).some(msg => msg)
    if (!hasErrors) {
      await registerUser({name, email, password});
      return Astro.redirect("/login");
    }
  } catch (error) {
    if (error instanceof Error) {

```

--------------------------------

### Construct Canonical URL with Astro.url

Source: https://docs.astro.build/en/guides/upgrade-to/v2

Astro v2.0 deprecates `Astro.canonicalURL` for constructing canonical URLs. This example shows the current recommended approach using `Astro.url`.

```astro
---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
```

--------------------------------

### Define Prisma Schema for Postgres

Source: https://docs.astro.build/en/guides/backend/prisma-postgres

Configures the Prisma schema file to connect to a PostgreSQL database and defines a placeholder 'Post' model. Updates the generator provider and datasource URL.

```prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}


model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
}
```

--------------------------------

### Configure Session Storage Driver Options

Source: https://docs.astro.build/en/reference/configuration-reference

Sets driver-specific options for session storage, depending on the chosen driver. For example, the 'redis' driver can use a URL from environment variables. Requires Unstorage documentation for driver specifics.

```javascript
{
   session: {
     driver: "redis",
     options: {
       url: process.env.REDIS_URL
     },
   }
}
```

--------------------------------

### POST /websites/astro_build/api/data

Source: https://docs.astro.build/en/guides/endpoints

Example of a POST API route that processes JSON data from the request body and returns a personalized message.

```APIDOC
## POST /websites/astro_build/api/data

### Description
This endpoint handles POST requests with a JSON `Content-Type`. It extracts a 'name' field from the request body and returns a greeting message.

### Method
POST

### Endpoint
`/websites/astro_build/api/data`

### Parameters
#### Path Parameters
- **(none)**

#### Query Parameters
- **(none)**

#### Request Body
- **name** (string) - Required - The name to include in the greeting.

### Request Example
```json
{
  "name": "Astro User"
}
```

### Response
#### Success Response (200)
- **message** (string) - A message confirming the received name.

#### Response Example
```json
{
  "message": "Your name was: Astro User"
}
```

#### Error Response (400)
- **(no body)** - Returned if the `Content-Type` is not `application/json`.
```

--------------------------------

### Hydrate Interactive Components with Client Directives

Source: https://docs.astro.build/en/guides/framework-components

Shows examples of how to make framework components interactive on the client-side using Astro's `client:*` directives. These directives control when a component's JavaScript is sent to the browser for hydration. Directives include `client:load`, `client:visible`, and `client:only`.

```astro
---
// Example: hydrating framework components in the browser.
import InteractiveButton from '../components/InteractiveButton.jsx';
import InteractiveCounter from '../components/InteractiveCounter.jsx';
import InteractiveModal from '../components/InteractiveModal.svelte';
---
<!-- This component's JS will begin importing when the page loads -->
<InteractiveButton client:load />


<!-- This component's JS will not be sent to the client until
the user scrolls down and the component is visible on the page -->
<InteractiveCounter client:visible />


<!-- This component won't render on the server, but will render on the client when the page loads -->
<InteractiveModal client:only="svelte" />

```

--------------------------------

### Build Astro Site Locally using npm, pnpm, or Yarn

Source: https://docs.astro.build/en/guides/deploy

Executes the build command for an Astro site using npm, pnpm, or Yarn. This process generates the static site files, typically in the 'dist' directory, for local preview or deployment.

```bash
npm run build
```

```bash
pnpm run build
```

```bash
yarn run build
```

--------------------------------

### Prefetching Multiple Links with Moderate Eagerness

Source: https://docs.astro.build/en/guides/prefetch

Shows how to programmatically prefetch a list of links using a 'moderate' eagerness level, suitable for large sets of links where a FIFO strategy and browser heuristics are beneficial. This example selects links by a class name and applies the prefetch function.

```javascript
  import { prefetch } from 'astro:prefetch';


  const linkModerate = document.getElementsByClassName('link-moderate');
  linkModerate.forEach((link) => prefetch(link.getAttribute('href'), {eagerness: 'moderate'}));
```

--------------------------------

### Import YAML data in Astro

Source: https://docs.astro.build/en/recipes/add-yaml-support

Demonstrates how to import data from a YAML file directly into your Astro components using a standard import statement after the '@rollup/plugin-yaml' plugin is configured.

```javascript
import yml from './data.yml';
```

--------------------------------

### Define Xata Database URL (JSON)

Source: https://docs.astro.build/en/guides/backend/xata

Specifies the database URL for Xata, which is crucial for the SDK to locate and connect to your Xata database instance.

```json
{
  "databaseUrl": "https://your-database-url"
}
```

--------------------------------

### Integrate Astro SSR Handler with Express Middleware

Source: https://docs.astro.build/en/guides/integrations-guide/node

This example demonstrates how to integrate the Astro server handler (`ssrHandler`) with an Express.js application. It shows setting up static file serving for client assets and then using the `ssrHandler` to manage server-side rendering for dynamic routes. It assumes the Astro build output is in `./dist/server/entry.mjs` and client assets in `./dist/client/`.

```javascript
import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';


const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);


app.listen(8080);
```

--------------------------------

### Astro Static Site Build Configuration (npm) (YAML)

Source: https://docs.astro.build/en/guides/deploy/zerops

Configures the build process for an Astro static site using npm. It specifies the base Node.js version, build commands, and files to deploy. This `zerops.yml` enables Zerops to build and serve your static site.

```yaml
# see https://docs.zerops.io/zerops-yml/specification for full reference
zerops:
  - setup: app
    build:
      base: nodejs@20
      buildCommands:
        - npm i
        - npm build
      deployFiles:
        - dist/~ 
    run:
      base: static

```

--------------------------------

### Configure Neon Branch Environment Variables

Source: https://docs.astro.build/en/guides/backend/neon

Manage different database states for development and production by setting separate NEON_DATABASE_URL environment variables for each Neon branch.

```dotenv
NEON_DATABASE_URL=your_development_branch_url
```

```dotenv
NEON_DATABASE_URL=your_production_branch_url
```

--------------------------------

### Example Dynamic Image Object Structure

Source: https://docs.astro.build/en/recipes/dynamically-importing-images

Illustrates the structure of the object returned by `import.meta.glob` for image assets. Each key is a relative path, and the value is a function that resolves the image import.

```javascript
const images = {
  './assets/avatar-1.jpg': () => import('./assets/avatar-1.jpg'),
  './assets/avatar-2.png': () => import('./assets/avatar-2.png'),
  './assets/avatar-3.jpeg': () => import('./assets/avatar-3.jpeg')
}
```

--------------------------------

### HTML Link with Base Path

Source: https://docs.astro.build/en/guides/deploy/gitlab

Example of an HTML anchor tag demonstrating how to correctly link to internal pages when a `base` path is configured in Astro. The `href` attribute must be prefixed with the specified `base` value to ensure the link works correctly.

```html
<a href="/my-repo/about">About</a>
```

--------------------------------

### Initialize Drupal API Client in TypeScript

Source: https://docs.astro.build/en/guides/cms/drupal

Sets up the initial part of the Drupal API client in TypeScript. It imports necessary libraries like `Jsona` for deserialization and `DrupalJsonApiParams` for query building. It also retrieves the Drupal base URL from environment variables, which is crucial for making API requests.

```typescript
import {
    Jsona
} from "jsona";
import {
    DrupalJsonApiParams
} from "drupal-jsonapi-params";
import type {
    DrupalNode
} from "../types.ts";
import type {
    TJsonApiBody
} from "jsona/lib/JsonaTypes";


// Get the Drupal Base Url.
export const baseUrl: string = import.meta.env.DRUPAL_BASE_URL;
```

--------------------------------

### Fetch and Display Shop Items Collection in Astro

Source: https://docs.astro.build/en/guides/cms/buttercms

This Astro code snippet demonstrates fetching a 'shopitem' collection from ButterCMS using the initialized client. It then maps over the retrieved items to display their name, price, and description.

```astro
---
import { butterClient } from "../lib/buttercms";
const response = await butterClient.content.retrieve(["shopitem"]);


interface ShopItem {
  name: string,
  price: number,
  description: string,
}


const items = response.data.data.shopitem as ShopItem[];
---
<body>
  {items.map(item => <div>
    <h2>{item.name} - ${item.price}</h2>
    <p set:html={item.description}></p>
  </div>)}
</body>
```

--------------------------------

### Astro Static Site Build Configuration (pnpm) (YAML)

Source: https://docs.astro.build/en/guides/deploy/zerops

Configures the build process for an Astro static site using pnpm. It specifies the base Node.js version, build commands, and files to deploy. This `zerops.yml` enables Zerops to build and serve your static site.

```yaml
# see https://docs.zerops.io/zerops-yml/specification for full reference
zerops:
  - setup: app
    build:
      base: nodejs@20
      buildCommands:
        - pnpm i
        - pnpm build
      deployFiles:
        - dist/~ 
    run:
      base: static

```

--------------------------------

### Astro: Apply class-based styles in <li>

Source: https://docs.astro.build/en/tutorial/2-pages/4

This example demonstrates applying a CSS class 'skill' to list items generated using Astro's mapping functionality. The associated CSS rules, defined in a subsequent `<style>` block, will target these elements. This approach separates structure from presentation.

```astro
<p>My skills are:</p>
<ul>
  {skills.map((skill) => <li class="skill">{skill}</li>)}
</ul>


```

--------------------------------

### Enable Experimental Static Headers in Astro Netlify Adapter

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

This snippet demonstrates how to enable the `experimentalStaticHeaders` option within the Astro Netlify adapter configuration. This feature allows for specifying custom headers for prerendered pages directly in Netlify's configuration, particularly useful when integrating with Astro's experimental CSP. Ensure you have the `@astrojs/netlify` adapter installed and configured.

```javascript
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  experimental: {
    csp: true
  },
  adapter: netlify({
    experimentalStaticHeaders: true
  })
});
```

--------------------------------

### Cloudflare Workers Static Site Configuration

Source: https://docs.astro.build/en/guides/deploy/cloudflare

Example configuration for a static site deployment to Cloudflare Workers using a wrangler.json file. Specifies the output directory for assets.

```json
{
  "name": "my-astro-app",
  "compatibility_date": "YYYY-MM-DD", // Update to the day you deploy
  "assets": {
    "binding": "ASSETS",
    "directory": "./dist"
  }
}
```

--------------------------------

### Import CSS with ESM for Automatic Optimization

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Use an ESM import to include CSS files located in the `src/` directory. Astro automatically builds, optimizes, and includes these styles, providing the easiest migration path from `Astro.resolve()` while leveraging Astro's features. `@import` statements and `url()` references within the CSS are also handled.

```astro
---
// Example: Astro will include and optimize this CSS for you automatically
import './style.css';
---
<html><!-- Your page here --></html>

```

--------------------------------

### Configure remark-rehype Options in Astro

Source: https://docs.astro.build/en/reference/configuration-reference

Allows passing options to the remark-rehype transformer, which bridges remark and rehype processing. This example shows how to customize footnote labels.

```javascript
{
  markdown: {
    remarkRehype: { footnoteLabel: "Footnotes", footnoteBackLabel: "Back to reference 1"},
  },
};

```

--------------------------------

### Removed Dynamic Prerender Export Example

Source: https://docs.astro.build/en/guides/upgrade-to/v5

This code snippet represents a pattern that is no longer supported in Astro v5.0. It shows how environment variables were previously used to dynamically set the 'prerender' export in Astro routes. Users are instructed to remove this pattern.

```astro
---
export const prerender = import.meta.env.SOME_VAR;
---
```

--------------------------------

### Add Cloudflare Adapter to Astro

Source: https://docs.astro.build/en/guides/deploy/cloudflare

Adds the official Cloudflare adapter to your Astro project. This command automates the installation of the adapter and modifies your astro.config.mjs file for on-demand rendering.

```bash
npx astro add cloudflare
```

```bash
pnpm astro add cloudflare
```

```bash
yarn astro add cloudflare
```

--------------------------------

### User Configuration

Source: https://docs.astro.build/en/reference/image-service-reference

Demonstrates how to configure the image service in `astro.config.mjs`.

```APIDOC
## User Configuration

### Description
Configure the image service to use in `astro.config.mjs`. The config takes the following form:

### Method
Not applicable (configuration)

### Endpoint
Not applicable (configuration)

### Parameters
None

### Request Example
```javascript
import { defineConfig } from "astro/config";

export default defineConfig({
  image: {
    service: {
      entrypoint: "your-entrypoint", // e.g., 'astro/assets/services/sharp' | string
      config: {
        // ... service-specific config. Optional.
      }
    }
  },
});
```

### Response
None

```

--------------------------------

### Set Response Headers with Astro.response

Source: https://docs.astro.build/en/reference/api-reference

This example demonstrates how to set an HTTP cookie header in the response using `Astro.response.headers.set()`. This is a common practice for managing user sessions or preferences.

```html
---
Astro.response.headers.set('Set-Cookie', 'a=b; Path=/;');
---
```

--------------------------------

### Astro MarkdownPostLayout Component

Source: https://docs.astro.build/en/tutorial/5-astro-api/3

This Astro component defines the layout for blog posts written in Markdown. It imports a BaseLayout and uses frontmatter data to display the title, description, publication date, author, and image. It also includes a section for tags, each linking to a category page, and a slot for the post content. Basic styling is included for links and tags.

```astro
---
import BaseLayout from './BaseLayout.astro';
const { frontmatter } = Astro.props;
---
<BaseLayout pageTitle={frontmatter.title}>
  <p><em>{frontmatter.description}</em></p>
  <p>{frontmatter.pubDate.toString().slice(0,10)}</p>


  <p>Written by: {frontmatter.author}</p>


  <img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />


  <div class="tags">
    {frontmatter.tags.map((tag: string) => (
      <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
    ))}
  </div>


  <slot />
</BaseLayout>
<style>
  a {
    color: #00539F;
  }


  .tags {
    display: flex;
    flex-wrap: wrap;
  }


  .tag {
    margin: 0.25em;
    border: dotted 1px #a1a1a1;
    border-radius: .5em;
    padding: .5em 1em;
    font-size: 1.15em;
    background-color: #F8FCFD;
  }
</style>
```

--------------------------------

### Configure Xata Environment Variables (.env)

Source: https://docs.astro.build/en/guides/backend/xata

Sets up essential environment variables for Xata integration, including API key and branch. These are used by the Xata SDK to connect to your database.

```dotenv
XATA_API_KEY=hash_key


# Xata branch that will be used
# if there's not a xata branch with
# the same name as your git branch
XATA_BRANCH=main
```

--------------------------------

### Replace import.meta.glob() with getCollection() in Astro

Source: https://docs.astro.build/en/tutorial/6-islands/4

This snippet demonstrates the migration from `import.meta.glob()` to `getCollection()` for fetching blog posts in Astro. It updates how posts are retrieved and how frontmatter data and URLs are accessed. The `post.frontmatter.title` is replaced with `post.data.title` and the URL is constructed using the post's ID.

```astro
---import { getCollection } from "astro:content";
import BaseLayout from "../layouts/BaseLayout.astro";
import BlogPost from "../components/BlogPost.astro";

const pageTitle = "My Astro Learning Blog";
const allPosts = await getCollection("blog");
---
<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    {
      allPosts.map((post) => (
        <BlogPost url={`/posts/${post.id}/`} title={post.data.title} />
      ))
    }
  </ul>
</BaseLayout>
```

--------------------------------

### Add Astro Integrations

Source: https://docs.astro.build/en/reference/configuration-reference

Extends Astro's functionality by adding custom integrations. This example demonstrates how to include support for React components and MDX files using official Astro integrations.

```javascript
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
{
  // Example: Add React + MDX support to Astro
  integrations: [react(), mdx()]
}
```

--------------------------------

### Update Integrations API `entryPoint` to `entrypoint`

Source: https://docs.astro.build/en/guides/upgrade-to/v4

Illustrates the change in the Astro Integrations API, renaming the `entryPoint` property within `injectRoute` to `entrypoint` for consistency. This example shows how to support both versions for backward compatibility.

```javascript
injectRoute({
  pattern: '/fancy-dashboard',
  entryPoint: '@fancy/dashboard/dashboard.astro'
  entrypoint: '@fancy/dashboard/dashboard.astro'
});

```

--------------------------------

### Customize Astro Image Endpoint Configuration

Source: https://docs.astro.build/en/guides/upgrade-to/v5

This snippet demonstrates how to customize the route and entrypoint for Astro's image optimization endpoint. It shows the migration from the previous `image.endpoint` configuration to the new `image.endpoint.route` and `image.endpoint.entrypoint` properties. This is useful when the default `/_image` route conflicts with existing project routes or server setups.

```javascript
import { defineConfig } from "astro/config";


defineConfig({
  image: {
    endpoint: './src/image-endpoint.ts',
    endpoint: {
      route: "/image",
      entrypoint: "./src/image_endpoint.ts"
    }
  },
})
```

--------------------------------

### Enable Client Prerendering in Astro Config

Source: https://docs.astro.build/en/reference/experimental-flags/client-prerender

This configuration snippet shows how to enable client-side prerendering and set prefetching options within the `astro.config.mjs` file. It utilizes the `experimental.clientPrerender` flag and configures global prefetching behavior.

```javascript
{
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    clientPrerender: true,
  },
}
```

--------------------------------

### Astro: Setup Event Listeners After Page Load (JavaScript)

Source: https://docs.astro.build/en/guides/view-transitions

Fires the `astro:page-load` event after a new page is visible and its critical resources are loaded. This JavaScript snippet demonstrates setting up event listeners that persist across navigations, ensuring they are not lost.

```javascript
<script>
  document.addEventListener("astro:page-load", () => {
    // This runs on first page load and after every navigation.
    setupStuff(); // e.g. add event listeners
  });
</script>
```

--------------------------------

### Reset Astro Preference

Source: https://docs.astro.build/en/reference/cli-reference

Resets a specific user preference to its default value. For example, resetting the `devToolbar` preference.

```bash
astro preferences reset devToolbar
```

--------------------------------

### Configure image service entrypoint and config

Source: https://docs.astro.build/en/reference/configuration-reference

Defines the image service used for Astro's asset support. It takes an `entrypoint` for the service (e.g., 'astro/assets/services/sharp') and an optional `config` object. Defaults to 'astro/assets/services/sharp' with an empty config.

```javascript
{
  image: {
    // Example: Enable the Sharp-based image service with a custom config
    service: {
       entrypoint: 'astro/assets/services/sharp',
       config: {
         limitInputPixels: false,
      },
     },
  },
}
```

--------------------------------

### Remove Integration from Astro Configuration

Source: https://docs.astro.build/en/guides/integrations-guide

Example of how to remove an integration from the `astro.config.*` file after uninstalling the package. This ensures the integration is no longer loaded during the build process.

```javascript
import { defineConfig } from 'astro/config';


import react from '@astrojs/react';


export default defineConfig({
  integrations: [
    react()
  ]
});
```

--------------------------------

### Customize Astro-Generated Assets Directory

Source: https://docs.astro.build/en/reference/configuration-reference

This example renames the directory for Astro-generated assets (like bundled JS and CSS) from the default `_astro` to `_custom` by setting `build.assets`. This is useful for organizing your build output.

```javascript
{
  build: {
    assets: '_custom'
  }
}
```

--------------------------------

### package.json Script for Static Deno Deploy

Source: https://docs.astro.build/en/guides/deploy/deno

Adds a `deno-deploy` script to `package.json` for simplified static site deployment to Deno Deploy. It first builds the Astro site and then deploys the static file server.

```json
{
  // ...
  "scripts": {
  "dev": "astro dev",
  "start": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "deno-deploy": "npm run build && cd dist && deployctl deploy jsr:@std/http/file-server"
  }
}

```

--------------------------------

### Add Node.js Adapter to Astro Project (Yarn)

Source: https://docs.astro.build/en/guides/deploy/seenode

Installs the Node.js adapter for Astro using Yarn, enabling server-side rendering (SSR). This command automatically updates the astro.config.mjs file.

```bash
yarn astro add node
```

--------------------------------

### Alpine.js usage example with Collapse plugin

Source: https://docs.astro.build/en/guides/integrations-guide/alpinejs

Demonstrates how to use Alpine.js directives within an Astro component, including adding the Collapse plugin script to the page's head for dynamic content expansion and collapse.

```html
---
---
<html>
  <head>
    <!-- ... -->
    <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
  </head>
  <body>
    <!-- ... -->
    <div x-data="{ expanded: false }">
      <button @click="expanded = ! expanded">Toggle Content</button>


      <p id="foo" x-show="expanded" x-collapse>
        Lorem ipsum
      </p>
    </div>
  </body>
</html>
```

--------------------------------

### Astro Image and HTML img Tag Examples

Source: https://docs.astro.build/en/guides/images

Demonstrates the usage of Astro's <Image /> component and native <img> tags for displaying local, public, and remote images. The <Image /> component handles optimization, while the <img> tag uses the src property of the import for local images. Local images from `src/` are imported, public images use relative paths, and remote images use full URLs.

```astro
---
import { Image } from 'astro:assets';
import localBirdImage from '../../images/subfolder/localBirdImage.png';
---
<Image src={localBirdImage} alt="A bird sitting on a nest of eggs." />
<Image src="/images/bird-in-public-folder.jpg" alt="A bird." width="50" height="50" />
<Image src="https://example.com/remote-bird.jpg" alt="A bird." width="50" height="50" />


<img src={localBirdImage.src} alt="A bird sitting on a nest of eggs.">
<img src="/images/bird-in-public-folder.jpg" alt="A bird.">
<img src="https://example.com/remote-bird.jpg" alt="A bird.">

```

--------------------------------

### Login to Azion CLI

Source: https://docs.astro.build/en/guides/deploy/azion

Authenticates the Azion CLI with your Azion account. This command is necessary before performing other CLI operations like initialization or deployment.

```bash
azion login
```

--------------------------------

### Generate dynamic post pages in Astro

Source: https://docs.astro.build/en/guides/cms/ghost

This snippet illustrates how to dynamically generate individual pages for each blog post using Astro's `getStaticPaths` function. It fetches all posts, then returns an array of objects containing parameters (slug) and props (post data) for each post, enabling Astro to create a unique page for every blog entry.

```astro
import { ghostClient } from '../../lib/ghost';


export async function getStaticPaths() {
    const posts = await ghostClient.posts
        .browse({
            limit: 'all',
        })
        .catch((err) => {
            console.error(err);
        });


    return posts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
            props: {
                post: post,
            },
        };
    });
}


const { post } = Astro.props;

```

--------------------------------

### Fetch and Display DatoCMS Content in Astro

Source: https://docs.astro.build/en/guides/cms/datocms

This Astro component fetches the 'title' field from the 'home' page in DatoCMS using its GraphQL API and displays it. It requires the DATOCMS_API_KEY environment variable to be set.

```astro
---
const response = await fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
  },
  body: JSON.stringify({
    query: `query Homepage {
          home {
            title
          }
        }`,
  }),
});

const json = await response.json();
const data = json.data.home;
---


<h1>{data.title}</h1>
```

--------------------------------

### Astro Dynamic Blog Post Page with Cosmic Data

Source: https://docs.astro.build/en/guides/cms/cosmic

This Astro component generates individual blog post pages by fetching data from Cosmic. It uses `getStaticPaths` to create routes for each post based on its slug and `Astro.props` to pass post data to the template. The `set:html` directive is used to render rich text content directly as HTML.

```astro
---
import { getAllPosts } from '../../lib/cosmic'
import { Image } from 'astro:assets'


export async function getStaticPaths() {
  const data = (await getAllPosts()) || []


  return data.map((post) => {
    return {
      params: { slug: post.slug },
      props: { post }
    }
  })
}


const { post } = Astro.props
---


<article class="mx-auto max-w-screen-md pt-20">
  <section class="border-b pb-8">
    <h1 class="text-4xl font-bold">{post.title}</h1>
    <div class="my-4"></div>
    <span class="text-sm font-semibold">{post.metadata.author?.title}</span>
  </section>
  {
    post.metadata.cover_image && (
      <Image
        src={post.metadata.cover_image.imgix_url}
        format="webp"
        width={1200}
        height={675}
        aspectRatio={16 / 9}
        quality={50}
        alt={`Cover image for the blog ${post.title}`}
        class={'my-12 rounded-md shadow-lg'}
      />
    )
  }
  <div set:html={post.metadata.content} />
</article>
```

--------------------------------

### Initialize ButterCMS Client in Astro

Source: https://docs.astro.build/en/guides/cms/buttercms

This JavaScript code initializes the ButterCMS SDK client using the API token stored in environment variables. The client is then exported for use throughout the Astro project.

```javascript
import Butter from "buttercms";


export const butterClient = Butter(import.meta.env.BUTTER_TOKEN);
```

--------------------------------

### Configure Neon Environment Variable (.env)

Source: https://docs.astro.build/en/guides/backend/neon

Set the NEON_DATABASE_URL environment variable in your Astro project's .env file to connect to your Neon Postgres database. Replace placeholders with your actual project credentials.

```dotenv
NEON_DATABASE_URL="postgresql://<user>:<password>@<endpoint_hostname>.neon.tech:<port>/<dbname>?sslmode=require"
```

--------------------------------

### Get Cookie Headers in Astro

Source: https://docs.astro.build/en/reference/api-reference

Retrieves an iterator of `Set-Cookie` header values that will be sent with the response. This is useful for inspecting the cookies being set.

```typescript
Astro.cookies.headers() => Iterator<string>
```

--------------------------------

### Run Astro Development Server Programmatically

Source: https://docs.astro.build/en/reference/programmatic-reference

The `dev()` function from the `astro` package starts Astro's development server, similar to running `astro dev` from the CLI. It accepts an `AstroInlineConfig` object for customization and returns a `DevServer` interface with methods to access server details and stop the server.

```typescript
import { dev } from "astro";


const devServer = await dev({
  root: "./my-project",
});


// Stop the server if needed
await devServer.stop();
```

--------------------------------

### Configure Astro Fonts API with Fontshare Provider

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Illustrates the configuration for using the Fontshare font provider within Astro's experimental Fonts API. It uses the `fontProviders.fontshare()` function for setup.

```javascript
provider: fontProviders.fontshare()
```

--------------------------------

### Add React and Markdoc Integrations to Astro (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/guides/cms/keystatic

Installs and adds the React and Markdoc integrations to an Astro project using the `astro add` command. These integrations are necessary for Keystatic's Admin UI and content rendering.

```bash
npx astro add react markdoc
```

```bash
pnpm astro add react markdoc
```

```bash
yarn astro add react markdoc
```

--------------------------------

### Add Custom Dev Toolbar App in Astro

Source: https://docs.astro.build/en/reference/integrations-reference

This example shows how to integrate a custom application into the Astro development toolbar. It requires defining an integration that uses `addDevToolbarApp` and specifying the entrypoint, ID, and name for the app. The app itself is defined as an object with an `init` function.

```javascript
import { defineConfig } from 'astro/config';
import devToolbarIntegration from './astro-dev-toolbar-app/integration.js'


// https://astro.build/config
export default defineConfig({
  integrations: [
    devToolbarIntegration()
  ],
});
```

```javascript
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "dev-toolbar-app",
  hooks: {
    "astro:config:setup": ({ addDevToolbarApp }) => {
      addDevToolbarApp({
        entrypoint: "./astro-dev-toolbar-app/plugin.js",
        id: "my-plugin",
        name: "My Plugin"
      });
    },
  },
});
```

```javascript
/**
 * @type {import('astro').DevToolbarApp}
 */
export default {
  id: "my-plugin",
  name: "My Plugin",
  icon: "<svg>...</svg>",
  init() {
    console.log("I'm a dev toolbar app!")
  },
};

```

--------------------------------

### Astro SSR Site Build Configuration (Yarn) (YAML)

Source: https://docs.astro.build/en/guides/deploy/zerops

Configures the build and run process for an Astro SSR site using Yarn. It specifies the Node.js base, build commands, files to deploy, port, environment variables, and the start script.

```yaml
# see https://docs.zerops.io/zerops-yml/specification for full reference
zerops:
  - setup: app
    build:
      base: nodejs@20
      buildCommands:
        - yarn
        - yarn build
      deployFiles:
        - dist
        - package.json
        - node_modules
    run:
      base: nodejs@20
      ports:
        - port: 3000
          httpSupport: true
      envVariables:
        PORT: 3000
        HOST: 0.0.0.0
      start: yarn start

```

--------------------------------

### Update TypeScript to v5.0

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Update the local TypeScript installation to version 5.0 or later. Astro v3.0's tsconfig.json presets now exclusively support TypeScript 5.x.

```shell
npm install typescript@latest --save-dev
```

--------------------------------

### Render Blog Post Previews in Astro Template

Source: https://docs.astro.build/en/guides/cms/contentful

Renders a list of blog post previews using the `posts` array. Each post is displayed as a list item with a link to its individual page, title, formatted date, and description. This assumes the `posts` array has been previously generated.

```astro
---
import { contentfulClient } from "../lib/contentful";
import type { BlogPost } from "../lib/contentful";


const entries = await contentfulClient.getEntries<BlogPost>({
  content_type: "blogPost",
});


const posts = entries.items.map((item) => {
  const { title, date, description, slug } = item.fields;
  return {
    title,
    slug,
    description,
    date: new Date(date).toLocaleDateString()
  };
});
---
<html lang="en">
  <head>
    <title>My Blog</title>
  </head>
  <body>
    <h1>My Blog</h1>
    <ul>
      {posts.map((post) => (
        <li>
          <a href={`/posts/${post.slug}/`}>
            <h2>{post.title}</h2>
          </a>
          <time>{post.date}</time>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  </body>
</html>

```

--------------------------------

### Configure Astro Project

Source: https://docs.astro.build/en/reference/configuration-reference

Basic Astro project configuration using the defineConfig function. This is the entry point for setting up your Astro project's behavior and features.

```javascript
import { defineConfig } from 'astro/config'


export default defineConfig({
  // your configuration options here...
})
```

--------------------------------

### Resolve Asset Paths using Import

Source: https://docs.astro.build/en/guides/upgrade-to/v2

Astro v2.0 removes `Astro.resolve()` for resolving asset URLs. This example shows the recommended method of using `import` to reference assets like CSS and images.

```astro
---
import 'style.css';
import imageUrl from './image.png';
---


<img src={imageUrl} />
```

--------------------------------

### Endpoint Accessing Request URL

Source: https://docs.astro.build/en/guides/endpoints

Shows how to access the `request.url` property within a static endpoint to get the full URL of the current endpoint.

```APIDOC
## GET /some/endpoint

### Description
Accesses the full URL of the current endpoint using the `request.url` property.

### Method
GET

### Endpoint
/some/endpoint

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **path** (string) - The pathname of the request URL.

#### Response Example
```json
{
  "path": "/some/endpoint"
}
```
```

--------------------------------

### Use `withState` with `useActionState`

Source: https://docs.astro.build/en/guides/integrations-guide/react

Integrates Astro Actions with React's `useActionState` hook using the `withState` function. This example demonstrates updating a like counter.

```typescript
import { actions } from 'astro:actions';
import { withState } from '@astrojs/react/actions';
import { useActionState } from "react";


export function Like({ postId }: { postId: string }) {
  const [state, action, pending] = useActionState(
    withState(actions.like),
    { data: 0, error: undefined }, // initial likes and errors
  );


  return (
    <form action={action}>
      <input type="hidden" name="postId" value={postId} />
      <button disabled={pending}>{state.data} ❤️</button>
    </form>
  );
}

```

--------------------------------

### Astro Middleware: Setting Last Visit Time

Source: https://docs.astro.build/en/guides/sessions

An example of Astro middleware that sets the current date and time as the 'lastVisit' in the session before proceeding to the next request handler.

```typescript
import { defineMiddleware } from 'astro:middleware';


export const onRequest = defineMiddleware(async (context, next) => {
  context.session?.set('lastVisit', new Date());
  return next();
});

```

--------------------------------

### Configure Astro SSR astro.config.mjs

Source: https://docs.astro.build/en/guides/deploy/kinsta

This snippet illustrates the `astro.config.mjs` setup for Astro SSR, specifically using the '@astrojs/node' adapter with 'standalone' mode. It also configures the server to listen on all available hosts by setting `server: { host: true }`.

```javascript
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";


export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  server: {
    host: true
  }
});
```

--------------------------------

### Cloudflare Workers On-Demand Rendering Configuration

Source: https://docs.astro.build/en/guides/deploy/cloudflare

Example configuration for an on-demand rendered site deployment to Cloudflare Workers using a wrangler.json file. Includes Node.js compatibility and observability settings.

```json
{
  "main": "dist/_worker.js/index.js",
  "name": "my-astro-app",
  "compatibility_date": "YYYY-MM-DD", // Update to the day you deploy
  "compatibility_flags": [
    "nodejs_compat",
    "global_fetch_strictly_public"
  ],
  "assets": {
    "binding": "ASSETS",
    "directory": "./dist"
  },
  "observability": {
    "enabled": true
  }
}
```

--------------------------------

### Multi-stage Dockerfile for Astro SSR optimization

Source: https://docs.astro.build/en/recipes/docker

This multi-stage Dockerfile optimizes the build process for an Astro SSR site. It separates dependency installation from source code copying, allowing Docker to cache `node_modules` more effectively and reduce build times when only source code changes.

```dockerfile
FROM node:lts AS base
WORKDIR /app


# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY package.json package-lock.json ./


FROM base AS prod-deps
RUN npm install --omit=dev


FROM base AS build-deps
RUN npm install


FROM build-deps AS build
COPY . .
RUN npm run build


FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist


ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
```

--------------------------------

### Migrate Astro.canonicalURL to Astro.url

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Demonstrates the change from the deprecated `Astro.canonicalURL` to the new `Astro.url` helper for constructing canonical URLs. This change requires updating how canonical URLs are generated within Astro components or pages.

```javascript
// Before:
const canonicalURL = ~~Astro.canonicalURL~~
// After:
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
```

--------------------------------

### Astro Page to Display Individual Blog Post

Source: https://docs.astro.build/en/guides/cms/preprcms

This Astro component dynamically creates pages for individual blog posts. It imports a layout, a Prepr helper function, and the GraphQL query. It fetches article data using the slug from the URL parameters and renders the title and content, handling different content types like text and images.

```astro
---
import Layout from '../layouts/Layout.astro';
import {Prepr} from '../lib/prepr.js';
import GetArticleBySlug from '../queries/get-article-by-slug.js';


const { slug } = Astro.params;
const response = await Prepr(GetArticleBySlug, {slug})
const { data } = await response.json()
const article = data.Article
---


<Layout title={article.title}>
  <main>
    <h1>{article.title}</h1>
    {
      article.content.map((content) => (
        <div>
          {
            content.__typename === "Assets" &&
            <img src={content.items[0].url} width="300" height="250"/>
          }
          {
            content.__typename === 'Text' &&
            <div set:html={content.body}></div>
          }
        </div>
      ))
    }
  </main>
</Layout>
```

--------------------------------

### Use `getActionState` in Astro Actions

Source: https://docs.astro.build/en/guides/integrations-guide/react

Retrieves client-side state managed by `useActionState` on the server within an Astro Action handler. This example increments a like counter.

```typescript
import { defineAction, type SafeResult } from 'astro:actions';
import { z } from 'astro:schema';
import { getActionState } from '@astrojs/react/actions';


export const server = {
  like: defineAction({
    input: z.object({
      postId: z.string(),
    }),
    handler: async ({ postId }, ctx) => {
      const { data: currentLikes = 0, error } = await getActionState<SafeResult<any, number>>(ctx);


      // handle errors
      if (error) throw error;


      // write to database
      return currentLikes + 1;
    },
  })
};

```

--------------------------------

### Astro Layout Component for Markdown Pages

Source: https://docs.astro.build/en/basics/layouts

An example Astro component designed to serve as a layout for Markdown pages. It accesses frontmatter data (title, author, date) from `Astro.props` and renders them. A default `<slot />` is used to display the compiled Markdown content.

```astro
---
// 1. The frontmatter prop gives access to frontmatter and other data
const { frontmatter } = Astro.props;
---
<html>
  <head>
    <!-- Add other Head elements here, like styles and meta tags. -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <title>{frontmatter.title}</title>
  </head>
  <body>
    <!-- Add other UI components here, like common headers and footers. -->
    <h1>{frontmatter.title} by {frontmatter.author}</h1>
    <!-- 2. Rendered HTML will be passed into the default slot. -->
    <slot />
    <p>Written on: {frontmatter.date}</p>
  </body>
</html>

```

--------------------------------

### Configure Astro Node Adapter in standalone mode

Source: https://docs.astro.build/en/guides/integrations-guide/node

This configuration enables the Astro Node.js adapter in 'standalone' mode within your `astro.config.js` or `astro.config.mjs` file. Standalone mode builds a server that starts automatically when the entry module is run, simplifying deployment.

```javascript
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
});
```

--------------------------------

### Configure No-Op Image Service in Astro Config

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Provides an example of configuring Astro to use a no-op image service, which is useful for environments that do not support image optimization but can still benefit from `astro:assets` features.

```javascript
import { defineConfig } from 'astro/config';


export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});
```

--------------------------------

### Define a Blog Collection with Schema and Loader

Source: https://docs.astro.build/en/reference/modules/astro-content

Demonstrates how to configure a content collection named 'blog' using `defineCollection`. It specifies a `loader` to find Markdown files and defines a `schema` for frontmatter, including optional `permalink`. The collection is then exported for Astro to recognize.

```javascript
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';


const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    permalink: z.string().optional(),
  }),
});


// Expose your defined collection to Astro
// with the `collections` export
export const collections = { blog };
```

--------------------------------

### Fetch Tags using getCollection in Astro

Source: https://docs.astro.build/en/tutorial/6-islands/4

This snippet demonstrates how to import and use `getCollection` from 'astro:content' to fetch all blog posts and extract unique tags from their frontmatter. It's useful for creating tag indexes or filtering content.

```astro
import { getCollection } from "astro:content";
import BaseLayout from "../../layouts/BaseLayout.astro";
const allPosts = await getCollection("blog");
const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
const pageTitle = "Tag Index";

```

--------------------------------

### Astro Dev Toolbar Button Component

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Demonstrates the usage of the `astro-dev-toolbar-button` web component. It shows how to create a button, set its text content, style (`buttonStyle`), and size (`size`), and attach a click event listener.

```javascript
const myButton = document.createElement('astro-dev-toolbar-button');
myButton.textContent = 'Click me!';
myButton.buttonStyle = "purple";
myButton.size = "medium";


myButton.addEventListener('click', () => {
  console.log('Clicked!');
});
```

--------------------------------

### Astro 404 Page

Source: https://docs.astro.build/en/guides/cms/strapi

A simple Astro component for a 404 Not Found page. It displays a message indicating the page does not exist and includes a cat image, likely for user experience.

```astro
<html lang="en">
  <head>
    <title>Not found</title>
  </head>
  <body>
    <p>Sorry, this page does not exist.</p>
    <img src="https://http.cat/404" />
  </body>
</html>

```

--------------------------------

### Create a Basic Playwright Test in Astro

Source: https://docs.astro.build/en/guides/testing

Shows how to write a basic end-to-end test using Playwright for an Astro application. This example verifies the page title of a given Astro page by navigating to it and asserting the title's content.

```javascript
import { test, expect } from '@playwright/test';


test('meta is correct', async ({ page }) => {
  await page.goto("http://localhost:4321/");


  await expect(page).toHaveTitle('Astro is awesome!');
});

```

--------------------------------

### Configure Local Font with Display and Other Properties (Astro)

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Demonstrates configuring a local font variant in Astro, including 'display' and other properties like 'weight', 'style', and 'src'. This example shows how to set 'display' to 'block'.

```javascript
import { defineConfig } from "astro/config";


export default defineConfig({
    experimental: {
        fonts: [{
            provider: "local",
            name: "Custom",
            cssVariable: "--font-custom",
            variants: [
                {
                    weight: 400,
                    style: "normal",
                    src: ["./src/assets/fonts/custom-400.woff2"],
                    display: "block"
                }
            ]
        }]
    }
});
```

--------------------------------

### Article Page Template with Content Rendering - Astro

Source: https://docs.astro.build/en/guides/cms/strapi

This Astro component dynamically generates an individual article page. It includes the `getStaticPaths` function to fetch articles and create pages based on slugs. The page template displays the article's title, image (fetched from Strapi URL), content as plain text, markdown, or HTML.

```astro
---
import fetchApi from '../../lib/strapi';
import type Article from '../../interfaces/article';


export async function getStaticPaths() {
  const articles = await fetchApi<Article[]>({
    endpoint: 'articles',
    wrappedByKey: 'data',
  });


  return articles.map((article) => ({
    params: { slug: article.slug },
    props: article,
  }));
}
type Props = Article;


const article = Astro.props;
---


<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{article.title}</title>
  </head>


  <body>
    <main>
      <img src={import.meta.env.STRAPI_URL + article.image.data.url} />


      <h1>{article.title}</h1>


      <!-- Render plain text -->
      <p>{article.content}</p>
      <!-- Render markdown -->
      <MyMarkdownComponent>
        {article.content}
      </MyMarkdownComponent>
      <!-- Render html -->
      <Fragment set:html={article.content} />
    </main>
  </body>
</html>
```

--------------------------------

### Subscribe to Nano Stores for UI updates (JavaScript)

Source: https://docs.astro.build/en/recipes/sharing-state

Shows how to subscribe to changes in a Nano Store and update the UI accordingly. This example toggles the display style of a dialog based on the store's boolean value.

```javascript
<div id="dialog" style="display: none">Hello world!</div>


<script>
  import { isOpen } from '../store.js';


  // Listen to changes in the store, and show/hide the dialog accordingly
  isOpen.subscribe(open => {
    if (open) {
      document.getElementById('dialog').style.display = 'block';
    } else {
      document.getElementById('dialog').style.display = 'none';
    }
  })
</script>
```

--------------------------------

### Disable Prerendering for a Page

Source: https://docs.astro.build/en/guides/on-demand-rendering

Example of how to disable prerendering for a specific Astro page or endpoint by exporting `prerender = false`. This enables on-demand rendering for the marked routes.

```astro
---
export const prerender = false
---
<html>
<!--
This content will be server-rendered on demand!
Just add an adapter integration for a server runtime!
All other pages are statically-generated at build time!
-->
<html>
```

--------------------------------

### Configure Rehype Plugins for HTML Output in Astro

Source: https://docs.astro.build/en/reference/configuration-reference

Enables customization of the HTML output generated from Markdown using rehype plugins. This example demonstrates integrating rehype-accessible-emojis for improved accessibility.

```javascript
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
{
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis]
  }
}
```

--------------------------------

### Get Action Path for sendBeacon API

Source: https://docs.astro.build/en/reference/modules/astro-actions

Generates a URL path for an Astro action, enabling its invocation using the navigator.sendBeacon API, suitable for asynchronous data transmission.

```javascript
<script>
import { actions, getActionPath } from 'astro:actions'


navigator.sendBeacon(
  getActionPath(actions.like),
  new Blob([JSON.stringify({ id: 'YOUR_ID' })], {
    type: 'application/json'
  })
)
</script>
```

--------------------------------

### Fetch Blog Posts in Astro

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-gatsby

This snippet demonstrates how to fetch all blog posts from the 'blog' collection in Astro using `getCollection()`. It also shows how to fetch all Markdown files from a local directory using `import.meta.glob()`.

```astro
import { graphql } from "gatsby"
import { getCollection } from 'astro:content';


// Get all `src/content/blog/` entries
const allBlogPosts = await getCollection('blog');


// Get all `src/pages/posts/` entries
const allPosts = Object.values(import.meta.glob('../pages/post/*.md', { eager: true }));

```

--------------------------------

### Get Action Path for Fetch API

Source: https://docs.astro.build/en/reference/modules/astro-actions

Generates a URL path for an Astro action, allowing it to be called directly via the fetch API with custom headers and options.

```javascript
<script>
import { actions, getActionPath } from 'astro:actions'


await fetch(getActionPath(actions.like), {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({ id: 'YOUR_ID' }),
  keepalive: true
})
</script>
```

--------------------------------

### Astro Build Hook for Writing Output Data

Source: https://docs.astro.build/en/reference/modules/astro-config

An example of a custom Astro integration that utilizes the `astro:build:done` hook. It imports the output directory (`outDir`) from `astro:config/server`, constructs a file path for `result.json`, and writes an empty JSON array to this file upon completion of the build process. This demonstrates file system interaction within an integration.

```javascript
import { outDir } from "astro:config/server";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";


export default function() {
  return {
    name: "internal-integration",
    hooks: {
      "astro:build:done": () => {
        let file = new URL("result.json", outDir);
        // generate data from some operation
        let data = JSON.stringify([]);
        writeFileSync(fileURLToPath(file), data, "utf-8");
      }
    }
  }
}
```

--------------------------------

### Format Files with Prettier (npm)

Source: https://docs.astro.build/en/editor-setup

Executes Prettier using npm to format all files in the current directory and its subdirectories, applying the configured formatting rules.

```bash
npx prettier . --write
```

--------------------------------

### Astro Compiler Transform with New Entry Points

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Shows how to use the `@astrojs/compiler` with the new internal entry points `astro/runtime/server/index.js` and `astro/compiler-runtime` for transforming source code.

```javascript
import { transform } from '@astrojs/compiler';


const result = await transform(source, {
  internalURL: 'astro/runtime/server/index.js',
  internalURL: 'astro/compiler-runtime',
  // ...
});
```

--------------------------------

### Astro Vue Integration with Custom Elements Option

Source: https://docs.astro.build/en/guides/integrations-guide/vue

Applies the Vue integration to Astro, configuring the Vue compiler to treat tags starting with 'ion-' as custom elements.

```javascript
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';


export default defineConfig({
  // ...
  integrations: [
    vue({
      template: {
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: (tag) => tag.startsWith('ion-'),
        },
      },
      // ...
    }),
  ],
});
```

--------------------------------

### Astro Dynamic Route with Multiple Parameters

Source: https://docs.astro.build/en/guides/routing

Shows how to define dynamic routes with multiple parameters in the filename (e.g., `[lang].astro`). The `getStaticPaths()` function must provide `params` for each defined parameter. The example demonstrates parameters like `lang` and `version`.

```astro
---
export function getStaticPaths() {
  return [
    { params: { lang: "en", version: "v1" }},
    { params: { lang: "fr", version: "v2" }},
  ];
}


const { lang, version } = Astro.params;
---


```

--------------------------------

### Clever Cloud Environment Variables for Static Site (Yarn)

Source: https://docs.astro.build/en/guides/deploy/clever-cloud

Defines environment variables for deploying a static Astro site on Clever Cloud using Yarn. This involves setting the post-build hook, pre-build hook for installation and telemetry, and the webroot.

```bash
CC_POST_BUILD_HOOK="yarn build"
CC_PRE_BUILD_HOOK="yarn && yarn run astro telemetry disable"
CC_WEBROOT="/dist"
```

--------------------------------

### Display List of Articles with Links - Astro

Source: https://docs.astro.build/en/guides/cms/strapi

Renders a list of articles fetched from Strapi. Each article title is a link to its individual page, constructed using the article's slug. It assumes the 'articles' array has been fetched previously. The `?populate=image` query parameter is added to fetch associated images.

```astro
---
import fetchApi from '../lib/strapi';
import type Article from '../interfaces/article';


const articles = await fetchApi<Article[]>({
  endpoint: 'articles?populate=image',
  wrappedByKey: 'data',
});
---


<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Strapi & Astro</title>
  </head>


  <body>
    <main>
      <ul>
        {
          articles.map((article) => (
            <li>
              <a href={`/blog/${article.slug}/`}>
                {article.title}
              </a>
            </li>
          ))
        }
      </ul>
    </main>
  </body>
</html>
```

--------------------------------

### Build Astro Project (pnpm)

Source: https://docs.astro.build/en/recipes/analyze-bundle-size

Initiates the Astro project build using the pnpm package manager. This command runs the build script, enabling the creation of bundle analysis reports.

```bash
pnpm build
```

--------------------------------

### Use Transferred Slots in a Layout

Source: https://docs.astro.build/en/basics/astro-components

An example of a parent component that utilizes transferred slots, passing content to both the default slot and a named slot ('head') which is then passed further to a base layout.

```astro
---
import HomeLayout from '../layouts/HomeLayout.astro';
---
<HomeLayout>
  <title slot="head">Astro</title>
  <h1>Astro</h1>
</HomeLayout>
```

--------------------------------

### Configure Astro Fonts API with Bunny Font Provider

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Shows how to configure the experimental Fonts API in Astro to use the Bunny font provider. This is a straightforward setup using the `fontProviders.bunny()` function.

```javascript
provider: fontProviders.bunny()
```

--------------------------------

### Static API Endpoint in Server Render Mode

Source: https://docs.astro.build/en/guides/on-demand-rendering

An example of an Astro API endpoint configured to be statically prerendered (`prerender = true`), even when the project's default output is set to `'server'`.

```javascript
export const prerender = true;


export async function GET() {
  return new Response(
    JSON.stringify({
      message: `This is my static endpoint`,
    }),
  );
}
```

--------------------------------

### Create and Configure Astro Dev Toolbar Select

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Demonstrates creating an `astro-dev-toolbar-select` element, defining its options, and appending them. It also shows how to set the `selectStyle` property and attach an event listener to the native select element for handling changes.

```javascript
const mySelect = document.createElement("astro-dev-toolbar-select");
const options = [
  { label: "First option", value: "first" },
  { label: "Second option", value: "second", isDefault: true },
];
const myOptions = options.map((option) => {
  const optionEl = document.createElement("option");
  optionEl.textContent = option.label;
  optionEl.setAttribute("value", option.value);
  optionEl.selected = option.isDefault || false;
  return optionEl;
});


mySelect.selectStyle = "green";
mySelect.append(...myOptions);


mySelect.element.addEventListener("change", (evt) => {
  if (evt.currentTarget instanceof HTMLSelectElement) {
    console.log(`The select value is now ${evt.currentTarget.value}!`);
  }
});
```

--------------------------------

### Configure Remark Plugins for Markdown in Astro

Source: https://docs.astro.build/en/reference/configuration-reference

Allows customization of Markdown processing using remark plugins. You can import and use plugin functions or pass plugin names as strings. This example shows how to add remark-toc.

```javascript
import remarkToc from 'remark-toc';
{
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: "contents"} ] ]
  }
}
```

--------------------------------

### Initialize Toolbar App with Server Communication (JavaScript)

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Initializes a toolbar app and demonstrates sending messages to the server and listening for server messages. This is useful for two-way communication between the client-side app and the server.

```javascript
export default defineToolbarApp({
  init(canvas, app, server) {
    server.send('my-message', { message: 'Hello!' });


    server.on('server-message', (data) => {
      console.log(data.message);
    });
  },
});
```

--------------------------------

### Configure Amplify for Astro Static Site Build with pnpm

Source: https://docs.astro.build/en/guides/deploy/aws

Defines the build settings for an Astro static site deployment using pnpm on AWS Amplify. It includes commands for installing pnpm, dependencies, and building the project, along with artifact and cache configurations.

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm i -g pnpm
        - pnpm config set store-dir .pnpm-store
        - pnpm i
    build:
      commands:
        - pnpm run build
  artifacts:
    baseDirectory: /dist
    files:
      - '**/*'
  cache:
    paths:
      - .pnpm-store/**/*
```

--------------------------------

### Astro Component with Default Prop Values

Source: https://docs.astro.build/en/basics/astro-components

A concise example of an Astro component where default values are provided for props when they are destructured from `Astro.props`. This ensures the component renders correctly even if certain props are not explicitly passed during usage.

```astro
---
const { greeting = "Hello", name = "Astronaut" } = Astro.props;
---
<h2>{greeting}, {name}!</h2>

```

--------------------------------

### Configure Vite plugins in astro.config.mjs

Source: https://docs.astro.build/en/recipes/add-yaml-support

Imports and configures the '@rollup/plugin-yaml' plugin within your Astro project's Vite configuration. This enables the plugin's functionality for your build process.

```javascript
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';


export default defineConfig({
  vite: {
    plugins: [yaml()]
  }
});
```

--------------------------------

### Configure Import Aliases in tsconfig.json

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Astro v0.21+ allows defining import aliases directly in `tsconfig.json`. This configuration enables shorthand imports, such as mapping `@/components/*` to `src/components/*`.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["src/components/*"]
    }
  }
}
```

--------------------------------

### Fetch and Display a Page in Astro

Source: https://docs.astro.build/en/guides/cms/buttercms

This Astro code retrieves a specific page (e.g., 'simple-page') from ButterCMS and displays its SEO title, headline, and hero image. It includes an interface definition for the page's fields.

```astro
---
import { butterClient } from "../lib/buttercms";
const response = await butterClient.page.retrieve("*", "simple-page");
const pageData = response.data.data;


interface Fields {
  seo_title: string,
  headline: string,
  hero_image: string,
}


const fields = pageData.fields as Fields;
---
<html>
  <title>{fields.seo_title}</title>
  <body>
    <h1>{fields.headline}</h1>
    <img src={fields.hero_image} />
  </body>
</html>
```

--------------------------------

### Display Client IP Address with Astro.clientAddress

Source: https://docs.astro.build/en/reference/api-reference

This example shows how to display the client's IP address using Astro.clientAddress. It's important to note that this property is only available for routes rendered on demand and not for prerendered pages.

```html
export const prerender = false; // Not needed in 'server' mode


<div>Your IP address is: <span class="address">{Astro.clientAddress}</span></div>
```

--------------------------------

### Configure Astro Site and Base Options

Source: https://docs.astro.build/en/guides/deploy/gitlab

This snippet shows how to set the `site` and `base` options in `astro.config.mjs`. The `site` option specifies the deployment URL, and the `base` option is used for repository-based deployments. The `outDir` and `publicDir` are also configured for GitLab Pages compatibility.

```javascript
import { defineConfig } from 'astro/config';


export default defineConfig({
  site: 'https://<username>.gitlab.io',
  base: '/<my-repo>',
  outDir: 'public',
  publicDir: 'static',
});
```

--------------------------------

### Configure Zed for Astro Docs MCP Server

Source: https://docs.astro.build/en/guides/build-with-ai

This configuration snippet enables Zed to connect to the Astro Docs MCP server. As Zed requires a local proxy configuration due to its lack of streaming HTTP support, this JSON defines the context servers, including the command and arguments to establish the connection to the Astro documentation.

```json
{
  "context_servers": {
    "Astro docs": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.docs.astro.build/mcp"]
    }
  }
}
```

--------------------------------

### Imported CSS Leakage Example in Astro

Source: https://docs.astro.build/en/guides/styling

Shows that imported CSS applies globally within the component's scope, even if the component itself is not directly used. The `h1` will be styled by `make-it-purple.css`.

```html
---
import "./make-it-purple.css"
---
<div>
  <h1>I import purple CSS.</h1>
</div>
```

--------------------------------

### Access Live Content Collections Data

Source: https://docs.astro.build/en/reference/experimental-flags/live-content-collections

Provides examples of fetching data from live content collections using `getLiveCollection` and `getLiveEntry`. It illustrates retrieving all entries, filtered entries, and individual entries by ID or slug, including basic error handling.

```typescript
---
export const prerender = false; // Not needed in 'server' mode


import { getLiveCollection, getLiveEntry } from 'astro:content';


// Get all products
const { entries: allProducts, error } = await getLiveCollection('products');
if (error) {
  // Handle error appropriately
  console.error(error.message);
}


// Get products with a filter (if supported by your loader)
const { entries: electronics } = await getLiveCollection('products', { category: 'electronics' });


// Get a single product by ID (string syntax)
const { entry: product, error: productError } = await getLiveEntry('products', Astro.params.id);
if (productError) {
  return Astro.redirect('/404');
}


// Get a single product with a custom query (if supported by your loader) using a filter object
const { entry: productBySlug } = await getLiveEntry('products', { slug: Astro.params.slug });
---
```

--------------------------------

### Form with Application/x-www-form-urlencoded

Source: https://docs.astro.build/en/guides/view-transitions

Example of an HTML form configured to submit data using the application/x-www-form-urlencoded enctype, mimicking default browser behavior for POST requests. This ensures compatibility when transitioning from default Astro form handling.

```html
<form
  action="/contact"
  method="POST"
  enctype="application/x-www-form-urlencoded"
>

```

--------------------------------

### Create Contentful Client for Astro

Source: https://docs.astro.build/en/guides/cms/contentful

Initializes a Contentful client instance within an Astro project. It uses environment variables for authentication and dynamically sets the API host based on the development environment. This client is used to interact with the Contentful API.

```typescript
import * as contentful from "contentful";


export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
```

--------------------------------

### Get Help for a Specific Astro Command (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/reference/cli-reference

Retrieves detailed help information, including all available flags, for a specific Astro CLI command, such as `dev`. The `--` is necessary for npm to pass flags correctly. Usable with npm, pnpm, and Yarn.

```shell
# get a list of all flags for the `dev` command
npm run dev -- --help
```

```shell
# get a list of all flags for the `dev` command
pnpm dev --help
```

```shell
# get a list of all flags for the `dev` command
yarn dev --help
```

--------------------------------

### Fetch and display data from an Astro API endpoint

Source: https://docs.astro.build/en/recipes/call-endpoints

This Astro component script demonstrates how to import and call a server endpoint (GET function) from an API route. It then parses the JSON response and displays the greeting on the page. This requires the endpoint to be accessible.

```astro
---
import { GET } from './api/hello.ts'


let response = await GET(Astro)
const data = await response.json()
---


<h1>{data.greeting} world!</h1>
```

--------------------------------

### Execute npm deno-deploy Script

Source: https://docs.astro.build/en/guides/deploy/deno

Command to execute the `deno-deploy` script defined in `package.json`. This command conveniently builds and deploys the Astro site in a single step.

```bash
npm run deno-deploy

```

--------------------------------

### Import Raw CSS Content in Astro for Advanced Use Cases

Source: https://docs.astro.build/en/guides/styling

This advanced example demonstrates importing CSS content directly from a file using the `?raw` import query. The imported CSS is then applied inline using `<style is:inline>`. This bypasses Astro's default bundling and optimization and is not recommended for general use.

```astro
---
// Advanced example! Not recommended for most users.
import rawStylesCSS from '../styles/main.css?raw';
---
<style is:inline set:html={rawStylesCSS}></style>
```

--------------------------------

### Accessing Props in Astro Components

Source: https://docs.astro.build/en/reference/api-reference

Demonstrates how to access and use props passed to an Astro component. Props are available through the `Astro.props` object. This example shows destructuring `title` and `date` from `Astro.props` to display them.

```astro
---
const { title, date } = Astro.props;
---
<div>
  <h1>{title}</h1>
  <p>{date}</p>
</div>
```

--------------------------------

### Build Astro Project (Yarn)

Source: https://docs.astro.build/en/recipes/analyze-bundle-size

Executes the Astro project build using the Yarn package manager. This command is used to generate the production-ready site and its associated bundle analysis files.

```bash
yarn build
```

--------------------------------

### Updating CSS Styles for CamelCase in Astro

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Example of how to update CSS styles to use camelCase for CSS variables when migrating from Astro v2.x to v3.0, ensuring styles are correctly applied.

```css
<style>
  div {
   color: var(--my-value);
   color: var(--myValue);
  }
</style>
```

--------------------------------

### Load Environment Variables with dotenvx for Astro

Source: https://docs.astro.build/en/guides/integrations-guide/node

This command shows how to use `dotenvx` to load environment variables (like `DB_HOST` and `DB_PASSWORD`) before running the Astro entry point. This is a common pattern for managing secrets in self-hosted applications.

```bash
npx dotenvx run -- node ./dist/server/entry.mjs
```

--------------------------------

### Configure Amplify for Astro Server-Rendered Build with Yarn

Source: https://docs.astro.build/en/guides/deploy/aws

Defines the build settings for a server-rendered Astro site using the AWS Amplify adapter with Yarn. It specifies commands for installing dependencies, building, and moving node_modules for the compute environment.

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - yarn build
        - mv node_modules ./.amplify-hosting/compute/default
  artifacts:
    baseDirectory: .amplify-hosting
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

--------------------------------

### Import NPM Package (Astro)

Source: https://docs.astro.build/en/guides/imports

Demonstrates how to import an installed NPM package within an Astro project using standard `import` syntax. Astro attempts to convert legacy package formats to ESM for compatibility.

```astro
---
import { Icon } from 'astro-icon'
---
```

--------------------------------

### Configure Hygraph Endpoint in Astro (.env)

Source: https://docs.astro.build/en/guides/cms/hygraph

This snippet shows how to set the Hygraph GraphQL endpoint in an Astro project's environment variables. It requires creating a `.env` file in the project root.

```dotenv
HYGRAPH_ENDPOINT=YOUR_HIGH_PERFORMANCE_API
```

--------------------------------

### Astro: Nuxt Links to HTML Anchor Tags

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-nuxtjs

Shows the conversion of Nuxt `<NuxtLink>` components to standard HTML `<a>` tags in Astro. It also includes an example of creating a custom reusable Link component in Astro.

```html
<NuxtLink to="/blog">Blog</Link>
<a href="/blog">Blog</a>
```

```astro
---
const { to } = Astro.props
---
<a href={to}><slot /></a>
```

--------------------------------

### Protect Astro Routes with Middleware

Source: https://docs.astro.build/en/guides/authentication

This example demonstrates how to implement middleware in Astro to protect routes. It checks for user authentication using `auth.api.getSession` and redirects unauthenticated users away from the '/dashboard' route.

```typescript
import { auth } from "../../../auth"; // import your Better Auth instance
import { defineMiddleware } from "astro:middleware";


export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api
    .getSession({
      headers: context.request.headers,
    })
  if (context.url.pathname === "/dashboard" && !isAuthed) {
    return context.redirect("/");
  }
  return next();
});

```

--------------------------------

### Upgrade Astro and Integrations using pnpm

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Update Astro and any associated integrations to their latest versions using the pnpm package manager. This command installs the latest version of Astro and specific integrations like React and Tailwind.

```shell
pnpm add astro@latest

# Example: upgrade React and Tailwind integrations
pnpm add @astrojs/react@latest @astrojs/tailwind@latest
```

--------------------------------

### Configure Astro Fonts API with Fontsource Provider

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Details the configuration for integrating the Fontsource font provider with Astro's experimental Fonts API. This setup involves calling the `fontProviders.fontsource()` function.

```javascript
provider: fontProviders.fontsource()
```

--------------------------------

### Skip SSR for External Packages (Vite)

Source: https://docs.astro.build/en/reference/configuration-reference

This configuration example demonstrates how to use Vite's `ssr.external` option to prevent specific npm packages from being processed during Server-Side Rendering (SSR). This is useful for packages that may not be compatible with the SSR environment.

```javascript
{
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['broken-npm-package'],
    }
  }
}
```

--------------------------------

### Run Playwright Tests from Command Line

Source: https://docs.astro.build/en/guides/testing

Demonstrates how to execute Playwright tests using the command line interface. This includes commands to run all tests or a specific test file, and a command to generate and open an HTML report for detailed test results.

```bash
npx playwright test index.spec.ts

```

```bash
npx playwright show-report

```

--------------------------------

### Call Astro Action from Component Script

Source: https://docs.astro.build/en/guides/actions

This example illustrates how to call an Astro action directly from an Astro component's script section. It uses `Astro.callAction()` to invoke the `actions.findProduct` action with a search query parameter and handles the returned data or error.

```astro
---
import { actions } from 'astro:actions';


const searchQuery = Astro.url.searchParams.get('search');
if (searchQuery) {
  const { data, error } = await Astro.callAction(actions.findProduct, { query: searchQuery });
  // handle result
}
---

```

--------------------------------

### TypeScript Environment Variable Definitions

Source: https://docs.astro.build/en/guides/backend/xata

Defines the expected environment variables for IntelliSense and type safety in a TypeScript Astro project. This ensures correct typing for Xata-related environment variables.

```typescript
interface ImportMetaEnv {
  readonly XATA_API_KEY: string;
  readonly XATA_BRANCH?: string;
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

--------------------------------

### Astro Component with Destructured Props

Source: https://docs.astro.build/en/basics/astro-components

Shows an Astro component that defines and accepts props. Props are destructured from `Astro.props` in the component's script to be used in the template for dynamic HTML rendering. This example receives `greeting` and `name` props.

```astro
---
// Usage: <GreetingHeadline greeting="Howdy" name="Partner" />
const { greeting, name } = Astro.props;
---
<h2>{greeting}, {name}!</h2>

```

--------------------------------

### Astro: Specify Renderer Hint for client:only

Source: https://docs.astro.build/en/reference/errors/no-client-only-hint

When using the `client:only` hydration strategy in Astro, you must provide a hint specifying the renderer to be used. This is because these components are not rendered on the server, and Astro needs this hint to determine the correct rendering engine. Without it, Astro cannot guess which renderer to use.

```html
<SomeReactComponent client:only="react" />
```

--------------------------------

### Configure Font Subsets in Astro

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Specifies a list of font subsets to preload for a given font in Astro's configuration. This example includes only the 'latin' subset to reduce download size. The default includes multiple language subsets.

```typescript
import { defineConfig } from "astro/config";


export default defineConfig({
  experimental: {
    fonts: [{
      provider: "local",
      name: "Roboto",
      cssVariable: "--font-roboto",
      subsets: ["latin"]
    }]
  }
});
```

--------------------------------

### Configure Font Styles in Astro

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Defines the font styles to be included for a font configuration in Astro. This example specifies 'normal' and 'oblique' styles. By default, 'normal' and 'italic' are included if not specified.

```typescript
import { defineConfig } from "astro/config";


export default defineConfig({
  experimental: {
    fonts: [{
      provider: "local",
      name: "Roboto",
      cssVariable: "--font-roboto",
      styles: ["normal", "oblique"]
    }]
  }
});
```

--------------------------------

### Configure Astro Netlify Adapter: Glob Patterns

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

Use glob patterns with includeFiles and excludeFiles to match multiple files for inclusion or exclusion in the Astro Netlify adapter configuration. This allows for more flexible file management.

```javascript
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  adapter: netlify({
    includeFiles: [
      './data/**/*.json'
    ],
    excludeFiles: [
      './node_modules/package/**/*',
      './src/**/*.test.js'
    ]
  }),
});
```

--------------------------------

### Astro Dynamic Route Page Rendering

Source: https://docs.astro.build/en/guides/cms/contentful

This Astro code demonstrates how to render a dynamic page using props passed from getStaticPaths. It fetches blog post details (title, content, date) and renders them within an HTML structure, utilizing set:html for content display.

```astro
---
import { contentfulClient } from "../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { BlogPost } from "../../lib/contentful";


export async function getStaticPaths() {
  const { items } = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
  });
  const pages = items.map((item) => ({
    params: { slug: item.fields.slug },
    props: {
      title: item.fields.title,
      content: documentToHtmlString(item.fields.content),
      date: new Date(item.fields.date).toLocaleDateString(),
    },
  }));
  return pages;
}


const { content, title, date } = Astro.props;
---
<html lang="en">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <time>{date}</time>
    <article set:html={content} />
  </body>
</html>

```

--------------------------------

### Astro Dynamic Route for Blog Post

Source: https://docs.astro.build/en/guides/cms/strapi

This Astro component dynamically fetches and renders a blog post based on the 'slug' parameter. It imports necessary modules for fetching data from an API and defines the Article interface. Error handling redirects to a 404 page if the article is not found. It renders the article title, image, and content, supporting plain text, markdown, and HTML.

```astro
---
import fetchApi from '../../../lib/strapi';
import type Article from '../../../interfaces/article';


const { slug } = Astro.params;


let article: Article;


try {
  article = await fetchApi<Article>({
    endpoint: 'articles',
    wrappedByKey: 'data',
    wrappedByList: true,
    query: {
      'filters[slug][$eq]': slug || '',
    },
  });
} catch (error) {
  return Astro.redirect('/404');
}
---


<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{article.title}</title>
  </head>


  <body>
    <main>
      <img src={import.meta.env.STRAPI_URL + article.image.data.url} />


      <h1>{article.title}</h1>


      <!-- Render plain text -->
      <p>{article.content}</p>
      <!-- Render markdown -->
      <MyMarkdownComponent>
        {article.content}
      </MyMarkdownComponent>
      <!-- Render html -->
      <Fragment set:html={article.content} />
    </main>
  </body>
</html>

```

--------------------------------

### Upgrade Astro and Integrations using Yarn

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Update Astro and any associated integrations to their latest versions using the Yarn package manager. This command installs the latest version of Astro and specific integrations like React and Tailwind.

```shell
yarn add astro@latest

# Example: upgrade React and Tailwind integrations
yarn add @astrojs/react@latest @astrojs/tailwind@latest
```

--------------------------------

### Create a basic API endpoint in Astro

Source: https://docs.astro.build/en/recipes/call-endpoints

This TypeScript code defines a simple GET endpoint for an Astro API route. It returns a JSON response containing a greeting. Ensure your Astro project has SSR enabled.

```typescript
import type { APIRoute } from 'astro'


export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      greeting: 'Hello',
    }),
  )
}
```

--------------------------------

### Upgrade Astro and Integrations using npm

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Update Astro and any associated integrations to their latest versions using the npm package manager. This command installs the latest version of Astro and specific integrations like React and Tailwind.

```shell
npm install astro@latest

# Example: upgrade React and Tailwind integrations
npm install @astrojs/react@latest @astrojs/tailwind@latest
```

--------------------------------

### Astro: Implement custom DOM swap

Source: https://docs.astro.build/en/guides/view-transitions

Demonstrates how to override Astro's default DOM swapping behavior using the `astro:before-swap` event. This example shows how to define a custom `event.swap` function to completely control how the new document replaces the old one.

```html
<script is:inline>
document.addEventListener("astro:before-swap", (event) => {
  event.swap = () => {
    diff(document, event.newDocument);
  };
});
</script>
```

--------------------------------

### Register New User API Endpoint (Astro/TypeScript)

Source: https://docs.astro.build/en/guides/backend/supabase

This endpoint handles the registration of new users. It accepts a POST request containing email and password, uses the Supabase SDK to create a new user, and redirects to the sign-in page upon successful registration. It requires the Supabase SDK and specifies that it should not be prerendered if the project uses static rendering.

```typescript
// With `output: 'static'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";


export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();


  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }


  const { error } = await supabase.auth.signUp({
    email,
    password,
  });


  if (error) {
    return new Response(error.message, { status: 500 });
  }


  return redirect("/signin");
};

```

--------------------------------

### Astro Toolbar: Sending Data to Client (Server)

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

This snippet shows how to send data from the server to a client-side toolbar app using the `toolbar.send()` method within the `astro:server:setup` hook. The event name is specified along with the payload.

```javascript
'astro:server:setup': ({ toolbar }) => {
  toolbar.send('server-message', { message: 'Hello!' });
},
```

--------------------------------

### File Extension Handling in Imports (Astro v0.21+)

Source: https://docs.astro.build/en/guides/upgrade-to/v1

In Astro v0.21+, import statements must reference files using their exact, on-disk extension. This change applies to JavaScript, TypeScript, and CSS preprocessor files.

```javascript
import Div from './Div.jsx' // Astro v0.20
import Div from './Div.tsx' // Astro v0.21
```

```html
<link rel="stylesheet" href={Astro.resolve('./Div.css')}>
<link rel="stylesheet" href={Astro.resolve('./Div.scss')}>
```

--------------------------------

### Import and Use Wasm Module in Astro

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

This Astro code snippet shows how to import a WebAssembly module and use it to perform computations. It instantiates the Wasm module and defines a GET request handler that utilizes a function from the module.

```javascript
// Import the WebAssembly module
import mod from '../util/add.wasm';


// Instantiate first in order to use it
const addModule: any = new WebAssembly.Instance(mod);


export async function GET(context) {
  const a = Number.parseInt(context.params.a);
  const b = Number.parseInt(context.params.b);
  return new Response(`${addModule.exports.add(a, b)}`);
}
```

--------------------------------

### Run Astro Scripts with Flags (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/reference/cli-reference

Demonstrates how to execute Astro commands using `package.json` scripts while passing custom flags. For example, running the dev server on a specific port or enabling verbose logging for the build. The `--` is required for npm to pass flags to the script. Usable with npm, pnpm, and Yarn.

```shell
# run the dev server on port 8080 using the `dev` script in `package.json`
npm run dev -- --port 8080


# build your site with verbose logs using the `build` script in `package.json`
npm run build -- --verbose
```

```shell
# run the dev server on port 8080 using the `dev` script in `package.json`
pnpm dev --port 8080


# build your site with verbose logs using the `build` script in `package.json`
pnpm build --verbose
```

```shell
# run the dev server on port 8080 using the `dev` script in `package.json`
yarn dev --port 8080


# build your site with verbose logs using the `build` script in `package.json`
yarn build --verbose
```

--------------------------------

### Define TypeScript Environment Interfaces (src/env.d.ts)

Source: https://docs.astro.build/en/guides/backend/neon

Enhance TypeScript support by defining environment variable interfaces in src/env.d.ts. This ensures type safety when accessing environment variables like NEON_DATABASE_URL.

```typescript
interface ImportMetaEnv {
  readonly NEON_DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

--------------------------------

### Create Astro Dev Toolbar Radio Checkbox

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Illustrates the creation of an `astro-dev-toolbar-radio-checkbox` component, which acts as a radio button. It includes an example of adding an event listener to detect changes in its selected state.

```javascript
const radio = document.createElement('astro-dev-toolbar-radio-checkbox');

radio.input.addEventListener('change', (evt) => {
  console.log(`The radio is now ${evt.currentTarget.checked ? 'enabled' : 'disabled'}!`);
});
```

--------------------------------

### Define Global Markdoc Variables

Source: https://docs.astro.build/en/guides/integrations-guide/markdoc

Configures global variables for all Markdoc files within an Astro project by using the 'variables' attribute in the 'markdoc.config.mjs|ts' configuration file. Example shows setting an 'environment' variable.

```javascript
import { defineMarkdocConfig } from '@astrojs/markdoc/config';


export default defineMarkdocConfig({
  variables: {
    environment: process.env.IS_PROD ? 'prod' : 'dev',
  },
});
```

--------------------------------

### Implement Unifont Provider

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Example of implementing a custom unifont provider. This file exports a `provider` constant defined using `defineFontProvider`, which accepts a name and an async function for fetching or defining custom fonts. The implementation logic resides within the async function.

```typescript
import { defineFontProvider } from "unifont";


export const provider = defineFontProvider("my-provider", async (options, ctx) => {
    // fetch/define your custom fonts
    // ...
});
```

--------------------------------

### Glob Loader for Markdown Files in Astro

Source: https://docs.astro.build/en/reference/content-loader-reference

The `glob()` loader in Astro is used to create content collection entries from directories of files. This example retrieves all Markdown files from the './src/data/pages' directory. It requires the `astro:content` and `astro/loaders` modules.

```typescript
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';


const pages = defineCollection({
  /* Retrieve all Markdown files in your pages directory. */
  loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
  schema: /* ... */
});

```

--------------------------------

### Configure i18n Routing Strategy in Astro

Source: https://docs.astro.build/en/reference/configuration-reference

Configures the i18n routing strategy in Astro, controlling how URLs are generated and how the default locale is handled. This example disables prefixing the default locale and enables redirection to it.

```javascript
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
      fallbackType: "redirect",
    }
  }
})
```

--------------------------------

### Create Turso Database CLI Command

Source: https://docs.astro.build/en/guides/astro-db

This command uses the Turso CLI to create a new database instance. Replace `[database-name]` with your desired name for the database. This is the first step in migrating a database to Turso.

```bash
turso db create [database-name]
```

--------------------------------

### Render Blog Post Cover Images in Astro

Source: https://docs.astro.build/en/guides/images

Fetch blog posts using `getCollection` and render their cover images using the `<Image />` component from `astro:assets`. This example demonstrates displaying cover photos and titles from content collection entries.

```astro
---
import { Image } from "astro:assets";
import { getCollection } from "astro:content";
const allBlogPosts = await getCollection("blog");
---


{
  allBlogPosts.map((post) => (
    <div>
      <Image src={post.data.cover} alt={post.data.coverAlt} />
      <h2>
        <a href={"/blog/" + post.slug}>{post.data.title}</a>
      </h2>
    </div>
  ))
}
```

--------------------------------

### Load Custom Data Files with Astro.glob()

Source: https://docs.astro.build/en/reference/api-reference

This example demonstrates how to use Astro.glob() with a custom TypeScript generic to load and type data from various file types, such as JavaScript files in a data directory. It shows how to handle unrecognized file structures.

```astro
---
interface CustomDataFile {
  default: Record<string, any>;
}
const data = await Astro.glob<CustomDataFile>('../data/**/*.js');
---

```

--------------------------------

### Get Data Entry from Astro Store

Source: https://docs.astro.build/en/reference/content-loader-reference

Retrieves a specific data entry from the store using its unique ID. If the entry does not exist, it returns undefined. The retrieved entry is of type DataEntry.

```javascript
const existingEntry = store.get("my-entry");
```

--------------------------------

### Create and Configure Astro Dev Toolbar Tooltip

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

Demonstrates how to create an `astro-dev-toolbar-tooltip` element and populate it with sections. Sections can include titles, icons, content, and click actions. The tooltip is initially hidden and can be shown via a `data-show` attribute.

```javascript
const tooltip = document.createElement('astro-dev-toolbar-tooltip');

tooltip.sections = [{
  title: 'My section',
  icon: 'astro:logo',
  content: 'My content',
  clickAction: () => {
    console.log('Clicked!')
  },
  clickDescription: 'Click me!'
}]
```

--------------------------------

### Display Collection List in Astro

Source: https://docs.astro.build/en/guides/cms/keystatic

Uses Astro's Content Collections API to fetch and display a list of post titles with links to individual post pages. This example demonstrates how to query and render dynamic content managed by Keystatic.

```astro
---
import { getCollection } from 'astro:content'


const posts = await getCollection('posts')
---
<ul>
  {posts.map(post => (
    <li>
      <a href={`/posts/${post.slug}`}>{post.data.title}</a>
    </li>
  ))}
</ul>
```

--------------------------------

### Seed Development Database with Astro DB (TypeScript)

Source: https://docs.astro.build/en/guides/astro-db

This snippet demonstrates how to seed your development database with initial data for testing and debugging. It imports the `db` object and table definitions from `astro:db` to insert data into `Author` and `Comment` tables. This data is regenerated each time the dev server starts.

```typescript
import { db, Comment, Author } from 'astro:db';


export default async function() {
  await db.insert(Author).values([
    { id: 1, name: "Kasim" },
    { id: 2, name: "Mina" },
  ]);


  await db.insert(Comment).values([
    { authorId: 1, body: 'Hope you like Astro DB!' },
    { authorId: 2, body: 'Enjoy!'},
  ])
}
```

--------------------------------

### Adding Event Listeners with Client-Side Scripts in Astro

Source: https://docs.astro.build/en/reference/astro-syntax

Provides an example of adding an event listener to an HTML element in Astro by using a client-side `<script>` tag, as direct assignment of functions to HTML attributes is not supported.

```astro
---
---
<button id="button">Click Me</button>
<script>
  function handleClick () {
    console.log("button clicked!");
  }
  document.getElementById("button").addEventListener("click", handleClick);
</script>
```

--------------------------------

### Using htmx with an Astro Partial for Dynamic Updates

Source: https://docs.astro.build/en/basics/astro-pages

This example illustrates how to integrate Astro Partials with the htmx library to dynamically update a section of a web page. The HTML includes a button with htmx attributes (`hx-post`, `hx-trigger`, `hx-target`, `hx-swap`) that trigger a POST request to an Astro partial. The response from the partial then replaces the content of the target element. Requires htmx library to be included via CDN.

```html
<html>
  <head>
    <title>My page</title>
    <script src="https://unpkg.com/htmx.org@1.9.6"
      integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni"
      crossorigin="anonymous"></script>
  </head>
  <body>
    <section>
      <div id="parent-div">Target here</div>


      <button hx-post="/partials/clicked/"
        hx-trigger="click"
        hx-target="#parent-div"
        hx-swap="innerHTML"
      >
        Click Me!
      </button>
    </section>
  </body>
</html>
```

```astro
---
export const partial = true;
---
<div>I was clicked!</div>
```

--------------------------------

### Enable Experimental Web Frameworks Support

Source: https://docs.astro.build/en/guides/deploy/google-firebase

Enables experimental features within the Firebase CLI that improve detection and configuration for modern web frameworks like Astro. This is a prerequisite for seamless integration. The command can be run via npm, pnpm, or Yarn.

```bash
npx firebase experiments:enable webframeworks
```

```bash
pnpm exec firebase experiments:enable webframeworks
```

```bash
yarn firebase experiments:enable webframeworks
```

--------------------------------

### Render Markdown with Prose Component in Astro

Source: https://docs.astro.build/en/recipes/tailwind-rendered-markdown

Astro page example demonstrating how to fetch a content collection entry, render its Markdown content, and pass it to the `<Prose />` component for styling. It assumes a layout component is also used.

```astro
---
import Prose from '../components/Prose.astro';
import Layout from '../layouts/Layout.astro';
import { getEntry, render } from 'astro:content';


const entry = await getEntry('collection', 'entry');
const { Content } = await render(entry);
---
<Layout>
  <Prose>
    <Content />
  </Prose>
</Layout>
```

--------------------------------

### Configure Fonts with defineConfig in Astro

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Configures font providers and settings for Astro projects. This example demonstrates using Google Fonts, Fontsource, and local font files, specifying CSS variables, weights, styles, subsets, and fallbacks. It is crucial for optimizing font loading and ensuring correct display across different browsers and languages.

```typescript
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
  experimental: {
    fonts: [
      {
        name: "Roboto",
        cssVariable: "--font-roboto"
        provider: fontProviders.google(),
        // Default included:
        // weights: [400] ,
        // styles: ["normal", "italics"],
        // subsets: ["cyrillic-ext", "cyrillic", "greek-ext", "greek", "vietnamese", "latin-ext", "latin"],
        // fallbacks: ["sans-serif"],
      },
      {
        name: "Inter",
        cssVariable: "--font-inter",
        provider: fontProviders.fontsource(),
        // Specify weights that are actually used
        weights: [400, 500, 600, 700],
        // Specify styles that are actually used
        styles: ["normal"],
        // Download only font files for characters used on the page
        subsets: ["cyrillic"],
      },
      {
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        provider: fontProviders.fontsource(),
        // Download only font files for characters used on the page
        subsets: ["latin"],
        // Use a fallback font family matching the intended appearance
        fallbacks: ["monospace"],
      },
      {
        name: "Poppins",
        cssVariable: "--font-poppins",
        provider: "local",
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [
          {
            src: [
              "./src/assets/fonts/Poppins-regular.woff2",
              "./src/assets/fonts/Poppins-regular.woff",
            ]
          },
          {
            src: [
              "./src/assets/fonts/Poppins-bold.woff2",
              "./src/assets/fonts/Poppins-bold.woff",
            ]
          },
        ]
      }
    ],
  }
});

```

--------------------------------

### Enable Server-Side Secret Validation in Astro

Source: https://docs.astro.build/en/reference/configuration-reference

Enables server-side validation of secret environment variables when the dev server starts or during a build. This is useful for CI pipelines to ensure all secrets are correctly set before deployment.

```javascript
import { defineConfig, envField } from "astro/config"


export default defineConfig({
  env: {
    schema: {
      // ...
    },
    validateSecrets: true
  }
})
```

--------------------------------

### Astro Server Middleware Injection (JavaScript)

Source: https://docs.astro.build/en/reference/integrations-reference

Injects custom middleware into the Vite development server using the `astro:server:setup` hook. This allows integrations to modify how the server handles requests, such as adding a Partytown server.

```javascript
export default {
  name: 'partytown',
  hooks: {
    'astro:server:setup': ({ server }) => {
      server.middlewares.use(
        function middleware(req, res, next) {
          // handle requests
        }
      );
    }
  }
}
```

--------------------------------

### Configure Amplify for Astro Static Site Build with Yarn

Source: https://docs.astro.build/en/guides/deploy/aws

Defines the build settings for an Astro static site deployment using Yarn on AWS Amplify. It specifies commands for installing dependencies and building the project, along with artifact and cache configurations.

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - yarn build
  artifacts:
    baseDirectory: /dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

--------------------------------

### Dynamic Rendering of DatoCMS Modular Content in Astro

Source: https://docs.astro.build/en/guides/cms/datocms

This Astro component demonstrates fetching modular content from DatoCMS using a GraphQL query. It dynamically renders different content blocks (Image and Text) based on the `_modelApiKey` received from DatoCMS, using a switch statement for conditional rendering. It requires an environment variable `DATOCMS_API_KEY` for authentication.

```astro
---
import Image from '../components/Image.astro';
import Text from '../components/Text.astro';

const response = await fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
  },
  body: JSON.stringify({
    query: `query Homepage {
          home {
            title
            content {
              ... on ImageRecord {
                _modelApiKey
               image{
                url
               }
              }
              ... on TextRecord {
                _modelApiKey
                text(markdown: true)
              }
            }
          }
        }`,
  }),
});

const json = await response.json();
const data = json.data.home;
---

<h1>{data.title}</h1>
{
  data.content.map((item: any) => {
    switch (item._modelApiKey) {
      case 'image':
        return <Image item={item} />;
      case 'text':
        return <Text item={item} />;
      default:
        return null;
    }
  })
}
```

--------------------------------

### Pass Props to Astro Component

Source: https://docs.astro.build/en/tutorial/3-components/2

When using an Astro component, you can pass values to its defined props using attribute-like syntax. This example demonstrates passing `title`, `author`, and `date` props to a `BlogPost` component.

```astro
<BlogPost title="My First Post" author="Dan" date="12 Aug 2022" />
```

--------------------------------

### Get Astro Environment Info with `astro info`

Source: https://docs.astro.build/en/reference/cli-reference

Reports essential information about your current Astro environment, including Astro version, Vite version, Node.js version, system details, package manager, output format, and adapter/integration information. This is useful for debugging and when reporting issues.

```bash
astro info
```

--------------------------------

### Configure Astro Integrations for UI Frameworks

Source: https://docs.astro.build/en/reference/errors/no-matching-renderer

This configuration snippet shows how to set up UI framework integrations in Astro. Ensure you have the correct integration installed for the framework of your component (e.g., React, Vue, Svelte) to enable server-side rendering.

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [
    react(),
    vue()
  ]
});

```

--------------------------------

### Format Files with Prettier (pnpm)

Source: https://docs.astro.build/en/editor-setup

Executes Prettier using pnpm to format all files in the current directory and its subdirectories, applying the configured formatting rules.

```bash
pnpm exec prettier . --write
```

--------------------------------

### Update Astro Site Configuration for Custom Domain

Source: https://docs.astro.build/en/guides/deploy/github

Modify your Astro configuration file (`astro.config.js` or `astro.config.ts`) to set the `site` property to your custom domain. Ensure that the `base` property is not set or is removed to avoid conflicts with the custom domain setup.

```javascript
import { defineConfig } from 'astro/config'


export default defineConfig({
  site: 'https://example.com',
  base: '/my-repo'
})
```

--------------------------------

### Astro Scoped Styles Compilation Example

Source: https://docs.astro.build/en/guides/styling

Illustrates how Astro compiles CSS rules within a `<style>` tag to ensure they are scoped to the component. This involves adding unique attributes to selectors to prevent style leakage.

```astro
<style>
  h1 {
    color: red;
  }


  .text {
    color: blue;
  }
</style>
```

```astro
<style>
  h1[data-astro-cid-hhnqfkh6] {
     color: red;
  }


  .text[data-astro-cid-hhnqfkh6] {
    color: blue;
  }
</style>
```

--------------------------------

### Astro Middleware: Redacting HTML Content

Source: https://docs.astro.build/en/guides/middleware

An example of Astro middleware that modifies the response body. It fetches the response, reads it as text, replaces specific content, and then returns a new `Response` with the modified HTML.

```javascript
export const onRequest = async (context, next) => {
    const response = await next();
    const html = await response.text();
    const redactedHtml = html.replaceAll("PRIVATE INFO", "REDACTED");


    return new Response(redactedHtml, {
        status: 200,
        headers: response.headers
    });
};
```

--------------------------------

### Fetch Blog Posts from Hygraph in Astro

Source: https://docs.astro.build/en/guides/cms/hygraph

This JavaScript code demonstrates fetching blog post data from a Hygraph GraphQL endpoint within an Astro component. It defines the data structure, constructs a GraphQL query, makes a POST request using `fetch`, and processes the JSON response. The response is then mapped to render blog post titles in HTML.

```javascript
---
interface Post {
  title: string;
}


const query = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
      {
        blogPosts {
          title
        }
      }`,
  }),
};


const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
const json = await response.json();
const posts: Post[] = json.data.blogPosts;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
  </head>
  <body>
    <h1>Astro</h1>
    {
      posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
        </div>
      ))
    }
  </body>
</html>
```

--------------------------------

### Configure rehype-external-links in Astro

Source: https://docs.astro.build/en/recipes/external-links

Configure the `rehypeExternalLinks` plugin in your `astro.config.mjs` file. You can add text or raw HTML content to the end of external links. This example adds a text icon '🔗'.

```javascript
// ...
import rehypeExternalLinks from 'rehype-external-links';


export default defineConfig({
  // ...
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' }
        }
      ],
    ]
  },
});

```

--------------------------------

### Define Astro Action with Input Validation and Handler

Source: https://docs.astro.build/en/guides/actions

Provides a complete example of defining an Astro Action named 'getGreeting'. It includes Zod schema for input validation ('name' as a string) and an asynchronous handler function that returns a personalized greeting.

```typescript
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';


export const server = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      return `Hello, ${input.name}!`
    }
  })
}
```

--------------------------------

### Build Astro Site for Deployment with `astro build`

Source: https://docs.astro.build/en/reference/cli-reference

Builds your Astro site for deployment, generating static files in the `dist/` directory by default. For on-demand rendering routes, it also generates server files. The `--devOutput` flag can produce a development-like build with extra debugging information.

```bash
astro build
```

```bash
astro build --devOutput
```

--------------------------------

### Get Request Cookie with Astro.request.headers

Source: https://docs.astro.build/en/guides/on-demand-rendering

Shows how to access request headers, specifically the 'cookie' header, using `Astro.request.headers`. This is essential for reading cookies sent by the client in on-demand rendered pages.

```javascript
export const prerender = false;


const cookie = Astro.request.headers.get('cookie');
// ...

```

--------------------------------

### Prioritize above-the-fold images in Astro

Source: https://docs.astro.build/en/reference/modules/astro-assets

This example demonstrates the use of the `priority` prop in the Astro Image component. Setting `priority` to `true` optimizes above-the-fold images by automatically applying `loading="eager"`, `decoding="sync"`, and `fetchpriority="high"` attributes. This instructs the browser to load and render the image immediately, improving perceived performance for critical content.

```javascript
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';

<Image src={myImage} priority alt="A description of my image" />
```

--------------------------------

### Astro about.astro page using Layout component

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-gatsby

This Astro component (`about.astro`) is another example of using the `Layout.astro` component. Similar to `index.astro`, it passes `title` and `pathname` props to the layout and includes content within the slot. This allows testing the conditional header logic when navigating away from the root path.

```astro
---
import Layout from '../layouts/Layout.astro';
const pagePathname = Astro.url.pathname
---
<Layout title="About" pathname={pagePathname}>
    <p>About</p>
</Layout>
```

--------------------------------

### Import Core Middleware Utilities from Astro

Source: https://docs.astro.build/en/reference/modules/astro-middleware

Imports essential utilities for building Astro middleware, including functions for sequencing, context creation, serialization, and defining middleware handlers.

```javascript
import {
  sequence,
  createContext,
  trySerializeLocals,
  defineMiddleware,
 } from 'astro:middleware';

```

--------------------------------

### Generate Blog Post Pages with Astro Collections

Source: https://docs.astro.build/en/tutorial/6-islands/4

This code defines the necessary functions to dynamically generate individual blog post pages using Astro's content collections. It queries the 'blog' collection and maps each post to a unique route based on its ID, making the post data available as props. The rendered content is then placed within a MarkdownPostLayout.

```astro
---import { getCollection, render } from 'astro:content';
import MarkdownPostLayout from '../../layouts/MarkdownPostLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.id }, props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
<MarkdownPostLayout frontmatter={post.data}>
  <Content />
</MarkdownPostLayout>
```

--------------------------------

### Astro API Endpoint: Adding Item to Cart

Source: https://docs.astro.build/en/guides/sessions

An example of an API endpoint that retrieves the current cart from the session, adds a new item, and updates the session. It handles potential errors and returns the updated cart.

```typescript
export async function POST(context: APIContext) {
  const cart = await context.session?.get('cart') || [];
  const data = await context.request.json<{ item: string }>();
  if(!data?.item) {
    return new Response('Item is required', { status: 400 });
  }
  cart.push(data.item);
  await context.session?.set('cart', cart);
  return Response.json(cart);
}

```

--------------------------------

### Markdown Frontmatter Layout Property in Astro

Source: https://docs.astro.build/en/guides/markdown-content

This Markdown frontmatter example specifies a relative path to an Astro layout component (`BlogPostLayout.astro`) to wrap the content. It also includes properties like `title`, `author`, and `description` which can be accessed within the layout.

```markdown
---
layout: ../../layouts/BlogPostLayout.astro
title: Astro in brief
author: Himanshu
description: Find out what makes Astro awesome!
---
This is a post written in Markdown.
```

--------------------------------

### Display Blog Post Content in Astro

Source: https://docs.astro.build/en/guides/cms/drupal

This Astro component code snippet demonstrates how to render a blog post using the `props` passed from the `getStaticPaths` function. It displays the title in both the page's head and as an H1 heading, shows the formatted publication date, and renders the article's body content using `set:html` for raw HTML. This code assumes `title`, `body`, and `date` props are available.

```astro
import {
	Jsona
} from "jsona";
import {
	DrupalJsonApiParams
} from "drupal-jsonapi-params";
import type {
	TJsonaBody
} from "jsona/lib/JsonaTypes";


import type {
	DrupalNode
} from "../../types";
import {
	getArticles
} from "../../api/drupal";


// Get all published articles.
export async function getStaticPaths() {
    const articles = await getArticles();
    return articles.map((article: DrupalNode) => {
        return {
            params: {
                path: article.path.alias.split('/')[2]
            },
            props: {
                title: article.title,
                body: article.body,
                date: new Date(article.created).toLocaleDateString('en-EN', {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })
            }
        }
    });
}


const {title, date, body} = Astro.props;
---
<html lang="en">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <time>{date}</time>
    <article set:html={body.value} />
  </body>
</html>

```

--------------------------------

### Import Markdown Posts with Glob in Astro

Source: https://docs.astro.build/en/tutorial/5-astro-api/1

This code snippet demonstrates how to import all markdown files from a specific directory using Astro's `import.meta.glob` function. The `eager: true` option ensures all modules are loaded immediately. This is useful for fetching blog post data.

```javascript
const myPosts = Object.values(import.meta.glob('./posts/*.md', { eager:  true }));
```

--------------------------------

### Generate Static Article Pages with getStaticPaths - Astro

Source: https://docs.astro.build/en/guides/cms/strapi

Defines the `getStaticPaths` function to enable static site generation for individual article pages. It fetches all articles from Strapi and maps them to paths based on their slugs. Each path is associated with the article data as props, making it available to the page component.

```astro
---
import fetchApi from '../../lib/strapi';
import type Article from '../../interfaces/article';


export async function getStaticPaths() {
  const articles = await fetchApi<Article[]>({
    endpoint: 'articles',
    wrappedByKey: 'data',
  });


  return articles.map((article) => ({
    params: { slug: article.slug },
    props: article,
  }));
}
type Props = Article;


const article = Astro.props;
---
```

--------------------------------

### Add YAML type definitions for editor support

Source: https://docs.astro.build/en/recipes/add-yaml-support

Provides a TypeScript declaration file to enable type hinting for imported YAML data in your editor. This improves developer experience by offering autocompletion and type checking.

```typescript
// Specify the file extension you want to import
declare module "*.yml" {
  const value: any; // Add type definitions here if desired
  export default value;
}
```

--------------------------------

### Configure Environment Variables in Astro env.d.ts

Source: https://docs.astro.build/en/guides/cms/strapi

This TypeScript snippet defines the environment variables available in an Astro project. It specifically configures the `ImportMetaEnv` interface to include `STRAPI_URL`, enabling IntelliSense for environment variables. This file should be placed in the `src/` directory.

```typescript
interface ImportMetaEnv {
  readonly STRAPI_URL: string;
}
```

--------------------------------

### Authorize Remote Images with Netlify Adapter

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

This configuration example demonstrates how to authorize specific domains for remote image optimization when using the Netlify adapter. It uses the `image.domains` option to specify allowed domains, ensuring that only trusted external images are processed by Netlify's Image CDN.

```javascript
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
    // ...
    adapter: netlify(),
    image: {
      domains: ['example.com'],
    },
});
```

--------------------------------

### Using LoaderContext Metadata (TypeScript)

Source: https://docs.astro.build/en/reference/content-loader-reference

An example showcasing the usage of `meta` from `LoaderContext` within an object loader's `load` method. This demonstrates how to retrieve and set metadata, such as a 'lastModified' timestamp, which can be persisted between build processes.

```typescript
const lastModified = meta.get("lastModified");
// ...
meta.set("lastModified", new Date().toISOString());
```

--------------------------------

### Accessing Frontmatter in New Markdown API

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Explains how to access frontmatter properties in Markdown objects after migrating to Astro v0.26+. The frontmatter is now located under the `.frontmatter` property, requiring a change from `post.title` to `post.frontmatter.title`.

```javascript
// When migrating, be careful about the new Markdown object interface. Frontmatter, for example, has been moved to the .frontmatter property, so references like post.title should change to post.frontmatter.title.

```

--------------------------------

### Astro Middleware for Action Results

Source: https://docs.astro.build/en/guides/actions

This example shows how to create custom middleware in Astro using `defineMiddleware` and `getActionContext` to intercept action requests. It allows for programmatic handling of action results, including persisting them using `setActionResult` and `serializeActionResult`.

```javascript
import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';


export const onRequest = defineMiddleware(async (context, next) => {
  const { action, setActionResult, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom === 'form') {
    const result = await action.handler();
    // ... handle the action result
    setActionResult(action.name, serializeActionResult(result));
  }
  return next();
});
```

--------------------------------

### Astro: Basic Page Component Structure

Source: https://docs.astro.build/en/tutorial/5-astro-api/3

This snippet demonstrates the basic structure of an Astro page component, including importing a layout and defining a page title.

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const pageTitle = "Tag Index";
---
<BaseLayout pageTitle={pageTitle}></BaseLayout>
```

--------------------------------

### Import Node.js util Module in Astro

Source: https://docs.astro.build/en/guides/imports

Demonstrates importing the 'util' built-in module from Node.js using the 'node:' prefix in Astro. This example shows how to parse a MIME type from Astro props and display its type and subtype. It relies on the Node.js runtime and Astro's build process.

```javascript
// Example: import the "util" built-in from Node.js
import util from 'node:util';


export interface Props {
  mimeType: string,
}


const mime = new util.MIMEType(Astro.props.mimeType)

```

--------------------------------

### Clever Cloud Environment Variables for Node.js (npm)

Source: https://docs.astro.build/en/guides/deploy/clever-cloud

Sets environment variables for a Node.js deployment on Clever Cloud using npm. This includes defining the build tool and pre-build hook for installing dependencies, disabling telemetry, and building the Astro project.

```bash
CC_NODE_BUILD_TOOL="npm"
CC_PRE_BUILD_HOOK="npm install && npm run astro telemetry disable && npm run build"
```

--------------------------------

### Configure Multiple JSX Frameworks in Astro v3.0

Source: https://docs.astro.build/en/guides/upgrade-to/v3

This example shows how to configure multiple JSX framework integrations (Preact, React, Solid) in Astro v3.0. It uses `include` options to specify which files belong to each framework, ensuring proper rendering and supporting features like React Fast Refresh. This is necessary when more than one JSX framework is used.

```javascript
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';


export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  // No `include` is needed if you are only using a single framework!
  integrations: [
    preact({
      include: ['**/preact/*']
    }),
    react({
      include: ['**/react/*']
    }),
    solid({
      include: ['**/solid/*'],
    }),
  ]
});

```

--------------------------------

### Include JavaScript with Absolute URL Path

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Reference JavaScript files located in the `public/` directory using an absolute URL path within an HTML `<script>` tag. This is suitable for external scripts that have already been processed or downloaded, as it bypasses Astro's JavaScript bundling and optimization.

```html
<script src="/some-external-script.js" />

```

--------------------------------

### Update Astro API Entry Points

Source: https://docs.astro.build/en/guides/upgrade-to/v3

Demonstrates the updated import paths for Astro's internal APIs in v3.0, moving from `astro/internal/*` and `astro/runtime/server/*` to `astro/server/*` and `astro/compiler-runtime`.

```javascript
import 'astro/internal/index.js';
import 'astro/runtime/server/index.js';


import 'astro/server/index.js';
import 'astro/runtime/server/index.js';
```

--------------------------------

### Load Session from Header in Astro

Source: https://docs.astro.build/en/reference/api-reference

Loads a user session from a custom 'x-session-id' header in Astro's templating language, bypassing standard cookie retrieval. This example then retrieves and displays items from a 'cart' stored in the loaded session.

```astro
---
// Load the session from a header instead of cookies
const sessionId = Astro.request.headers.get('x-session-id');
await Astro.session?.load(sessionId);
const cart = await Astro.session?.get('cart');
---
<h1>Your cart</h1>
<ul>
  {cart?.map((item) => (
    <li>{item.name}</li>
  ))}
</ul>
```

--------------------------------

### Get locale by path using getLocaleByPath

Source: https://docs.astro.build/en/reference/modules/astro-i18n

Retrieves the primary locale code associated with a custom path. If multiple locale codes are mapped to the same path, it returns the first one configured.

```javascript
export default defineConfig({
  i18n: {
    locales: ["es", "en", {
      path: "french",
      codes: ["fr", "fr-BR", "fr-CA"]
    }]
  }
})
```

```javascript
---
import { getLocaleByPath } from 'astro:i18n';

getLocaleByPath("french"); // returns "fr" because that's the first code configured
---
```

--------------------------------

### Define Package Entrypoint for Astro and React Components

Source: https://docs.astro.build/en/reference/publish-to-npm

This JavaScript file serves as the main entry point for an Astro package, exporting default components written in Astro and React. It enables bundling multiple component types into a single importable interface for users of the package. No specific dependencies are required beyond standard JavaScript.

```javascript
export { default as MyAstroComponent } from './MyAstroComponent.astro';


export { default as MyReactComponent } from './MyReactComponent.jsx';
```

--------------------------------

### Define Astro Content Collection Schema

Source: https://docs.astro.build/en/tutorial/6-islands/4

TypeScript configuration file to define a content collection for blog posts. It uses Zod for schema validation, specifying properties like title, date, description, author, image, and tags.

```typescript
// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };

```

--------------------------------

### Add React Integration to Astro Project

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-create-react-app

Shows how to add the Astro React integration and optionally other integrations like Tailwind and MDX using the `astro add` command. This command simplifies the setup process for using React components within Astro.

```bash
npx astro add react
npx astro add react tailwind mdx
```

```bash
pnpm astro add react
pnpm astro add react tailwind mdx
```

```bash
yarn astro add react
yarn astro add react tailwind mdx
```

--------------------------------

### Render Astro Component to String with renderToString()

Source: https://docs.astro.build/en/reference/container-reference

Renders a specified Astro component to an HTML string using the `renderToString` function within an Astro container. This function is useful for getting the static HTML output of a component.

```javascript
import { experimental_AstroContainer } from "astro/container";
import Card from "../src/components/Card.astro";


const container = await experimental_AstroContainer.create();
const result = await container.renderToString(Card);
```

--------------------------------

### Fetch and Render Remote Markdown using 'marked' in JavaScript

Source: https://docs.astro.build/en/guides/markdown-content

This snippet demonstrates how to fetch Markdown content from a remote URL using the Fetch API and then parse it into HTML using the 'marked' library. It's suitable for runtime rendering and requires the 'marked' package to be installed.

```javascript
import { marked } from 'marked';
const response = await fetch('https://raw.githubusercontent.com/wiki/adam-p/markdown-here/Markdown-Cheatsheet.md');
const markdown = await response.text();
const content = marked.parse(markdown);
```

--------------------------------

### Configure On-Demand Server Rendering for Routes in Astro

Source: https://docs.astro.build/en/reference/integrations-reference

This code snippet demonstrates how to use the `astro:route:setup` hook to conditionally set the `prerender` property for specific routes. It configures Astro to use on-demand server rendering for blog post slugs. If the `prerender` value is `undefined` after hooks run, it falls back to defaults based on the `output` option.

```typescript
import { defineConfig } from 'astro/config';


export default defineConfig({
  integrations: [setPrerender()],
});


function setPrerender() {
  return {
    name: 'set-prerender',
    hooks: {
      'astro:route:setup': ({ route }) => {
        if (route.component.endsWith('/blog/[slug].astro')) {
          route.prerender = true;
        }
      },
    },
  };
}
```

--------------------------------

### Create a New libSQL Database with Turso CLI

Source: https://docs.astro.build/en/guides/astro-db

This command uses the Turso CLI to create a new libSQL database instance. Replace `andromeda` with your desired database name. This is a prerequisite for setting up a remote database connection.

```bash
turso db create andromeda
```

--------------------------------

### Astro Middleware: Returning Response Object

Source: https://docs.astro.build/en/reference/errors/middleware-no-data-or-next-called

This example demonstrates correct middleware implementation in Astro. It shows how to define middleware using `defineMiddleware` and ensure it either returns a Response directly or by calling the `next` function. Failure to do so results in the MiddlewareNoDataOrNextCalled error.

```javascript
import {defineMiddleware} from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Example: Modify locals and then call next()
  context.locals.someData = true;
  return next(); 
  // Or, return a Response directly:
  // return new Response("Hello from middleware");
});

```

--------------------------------

### Build Astro Site (pnpm)

Source: https://docs.astro.build/en/guides/deploy/deno

Command to build an Astro site using pnpm. This command is used for Astro projects where pnpm is the chosen package manager.

```bash
pnpm run build

```

--------------------------------

### Access Environment Variables in Astro Components

Source: https://docs.astro.build/en/guides/environment-variables

Illustrates how to access environment variables within Astro components using `import.meta.env`. It shows examples for both server-side (SSR) and client-side contexts, differentiating between general variables and public ones.

```javascript
// When import.meta.env.SSR === true
const data = await db(import.meta.env.DB_PASSWORD);


// When import.meta.env.SSR === false
const data = fetch(`${import.meta.env.PUBLIC_POKEAPI}/pokemon/squirtle`);

```

--------------------------------

### Fetch Blog Posts from Contentful (Astro)

Source: https://docs.astro.build/en/guides/cms/contentful

Fetches all entries of type `blogPost` from Contentful using the initialized client. The response is typed with the `BlogPost` interface. This code is intended to be placed within an Astro component's script tag.

```astro
---
import { contentfulClient } from "../lib/contentful";
import type { BlogPost } from "../lib/contentful";


const entries = await contentfulClient.getEntries<BlogPost>({
  content_type: "blogPost",
});
---

```

--------------------------------

### Create a remark plugin to modify frontmatter programmatically

Source: https://docs.astro.build/en/guides/markdown-content

Provides an example of a remark plugin in JavaScript that programmatically adds a 'customProperty' to the frontmatter of Markdown or MDX files. This function takes a 'tree' and 'file' argument, modifying `file.data.astro.frontmatter`.

```javascript
export function exampleRemarkPlugin() {
  // All remark and rehype plugins return a separate function
  return function (tree, file) {
    file.data.astro.frontmatter.customProperty = 'Generated property';
  }
}
```

--------------------------------

### Extend GlobalThis and Window Objects in Astro

Source: https://docs.astro.build/en/guides/typescript

This example shows how to add custom properties and functions to the global `globalThis` and `window` objects by declaring them in `env.d.ts`. It also illustrates how to specifically type the `window` object using an interface for client-side only properties.

```typescript
declare var myString: string;
declare function myFunction(): boolean;

interface Window {
  myFunction(): boolean;
}

```

--------------------------------

### File Loader for JSON Data in Astro

Source: https://docs.astro.build/en/reference/content-loader-reference

The `file()` loader in Astro is used to create content collection entries from a single file. This example loads entries from a JSON file located at 'src/data/authors.json'. It requires `astro:content` and `astro/loaders`.

```typescript
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';


const authors = defineCollection({
  /* Retrieve all entries from a JSON file. */
  loader: file("src/data/authors.json"),
  schema: /* ... */
});

```

--------------------------------

### Gate Astro Actions from Middleware

Source: https://docs.astro.build/en/guides/actions

This example shows how to gate access to Astro actions using middleware. It utilizes `getActionContext` to inspect incoming action requests and enforces session token validation for client-side RPC calls. If the session is invalid, it returns a 'Forbidden' response.

```typescript
import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';


export const onRequest = defineMiddleware(async (context, next) => {
  const { action } = getActionContext(context);
  // Check if the action was called from a client-side function
  if (action?.calledFrom === 'rpc') {
    // If so, check for a user session token
    if (!context.cookies.has('user-session')) {
      return new Response('Forbidden', { status: 403 });
    }
  }


  context.cookies.set('user-session', /* session token */);
  return next();
});
```

--------------------------------

### API Endpoint Accessing Route Parameters in Astro

Source: https://docs.astro.build/en/reference/api-reference

Demonstrates an API endpoint (`GET` function) that retrieves a route parameter (`id`) from `Astro.params` and uses it to construct a JSON response. This is useful for dynamic API routes.

```astro
import type { APIContext } from 'astro';


export function getStaticPaths() {
  return [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } }
  ];
}


export function GET({ params }: APIContext) {
  return new Response(
    JSON.stringify({ id: params.id }),
  );
}
```

--------------------------------

### Configure Astro Passthrough Image Service

Source: https://docs.astro.build/en/reference/errors/missing-sharp

This configuration sets Astro to use a passthrough image service. This service bypasses image processing and is useful when Sharp is not installed or not required. It ensures images are served directly without modification.

```typescript
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
});

```

--------------------------------

### Define BlogPost Interface and Contentful Client (TypeScript)

Source: https://docs.astro.build/en/guides/cms/contentful

Defines the `BlogPost` interface to match Contentful content types and initializes the Contentful client. This ensures type safety when fetching blog post data. It uses environment variables for API keys and host configuration.

```typescript
import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";


export interface BlogPost {
  contentTypeId: "blogPost",
  fields: {
    title: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText,
    date: EntryFieldTypes.Date,
    description: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text
  }
}


export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

```

--------------------------------

### Server-side Data Fetching with Solid Resource in Astro

Source: https://docs.astro.build/en/guides/integrations-guide/solid-js

This snippet demonstrates how to use Solid's `createResource` to fetch asynchronous data on the server. The fetched data is then included in the initial server-rendered HTML by Astro. This approach leverages Astro's automatic Suspense boundary handling for server-only components.

```jsx
function CharacterName() {
  const [name] = createResource(() =>
    fetch('https://swapi.dev/api/people/1')
      .then((result) => result.json())
      .then((data) => data.name)
  );


  return (
    <>
      <h2>Name:</h2>
      {/* Luke Skywalker */}
      <div>{name()}</div>
    </>
  );
}

```

--------------------------------

### Clever Cloud Environment Variables for Node.js (Yarn)

Source: https://docs.astro.build/en/guides/deploy/clever-cloud

Defines environment variables for a Node.js deployment on Clever Cloud using Yarn. This involves setting the build tool, installing dependencies, disabling telemetry, and building the Astro site.

```bash
CC_NODE_BUILD_TOOL="yarn"
CC_PRE_BUILD_HOOK="yarn && yarn run astro telemetry disable && yarn build"
```

--------------------------------

### Explicit Type Imports in TypeScript

Source: https://docs.astro.build/en/guides/typescript

This example illustrates explicit type imports in TypeScript. Using `import type` prevents potential issues where Astro's bundler might misinterpret type imports as regular JavaScript modules.

```typescript
import { SomeType } from "./script";
import type { SomeType } from "./script";
```

--------------------------------

### Astro HookParameters: Type Hook Arguments

Source: https://docs.astro.build/en/reference/integrations-reference

Shows how to use the HookParameters utility type in Astro to correctly type the arguments of a hook function. This ensures type safety when accessing hook parameters, such as `updateConfig` in the `astro:config:setup` hook.

```typescript
import type { HookParameters } from 'astro';


function mySetup(options: HookParameters<'astro:config:setup'>) {
  options.updateConfig({ /* ... */ });
}
```

--------------------------------

### Access Data from Multiple Live Collections

Source: https://docs.astro.build/en/reference/experimental-flags/live-content-collections

Demonstrates accessing data from multiple live collections defined with different loaders. This example shows how to use loader-specific filters for one collection (articles) and retrieve a specific entry from another (products) using a unified API.

```typescript
---
export const prerender = false; // Not needed in 'server' mode


import { getLiveCollection, getLiveEntry } from 'astro:content';


// Use loader-specific filters
const { entries: draftArticles } = await getLiveCollection('articles', {
  status: 'draft',
  author: 'john-doe',
});


// Get a specific product by ID
const { entry: product } = await getLiveEntry('products', Astro.params.slug);
---
```

--------------------------------

### Use Astro Component as Markdoc Tag in Markdoc File

Source: https://docs.astro.build/en/guides/integrations-guide/markdoc

Demonstrates how to use a configured Markdoc tag within a Markdoc file. The example uses the `aside` tag with a `type` attribute, showcasing how to pass props and content to the rendered Astro component.

```markdoc
# Welcome to Markdoc 👋


{% aside type="tip" %}


Use tags like this fancy "aside" to add some _flair_ to your docs.


{% /aside %}
```

--------------------------------

### Set a Global Assets Prefix for CDN

Source: https://docs.astro.build/en/reference/configuration-reference

This configuration sets `build.assetsPrefix` to a CDN domain like `'https://cdn.example.com'`. This directs Astro to prepend this URL to all generated asset links, useful when serving assets from a different domain.

```javascript
{
  build: {
    assetsPrefix: 'https://cdn.example.com'
  }
}
```

--------------------------------

### getStaticPaths Example in JavaScript

Source: https://docs.astro.build/en/reference/errors/get-static-paths-expected-params

This snippet demonstrates the correct usage of getStaticPaths in JavaScript, including the required 'params' property for defining route parameters. It returns an array of objects, each with a 'params' property containing the necessary path parameters.

```javascript
export async function getStaticPaths() {
  return [
    { params: { id: '1' } }
  ];
}
```

--------------------------------

### Importing Global CSS and CSS Modules in React/Preact

Source: https://docs.astro.build/en/guides/styling

Example of how to import global CSS and CSS Modules within `.jsx` files in Astro projects using React or Preact. CSS Modules require the file to end with `.module.css` (or `.module.scss`/`.module.sass`).

```jsx
import './global.css'; // include global CSS
import Styles from './styles.module.css'; // Use CSS Modules (must end in `.module.css`, `.module.scss`, or `.module.sass`!)
```

--------------------------------

### Sign Out User API Endpoint (Astro/TypeScript)

Source: https://docs.astro.build/en/guides/backend/supabase

This endpoint handles user sign-out. It accepts a GET request, deletes the user's access and refresh tokens from cookies, and then redirects the user to the sign-in page. It specifies that it should not be prerendered if the project uses static rendering.

```typescript
// With `output: 'static'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";


export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  return redirect("/signin");
};

```

--------------------------------

### Astro: Dynamically list blog posts with import.meta.glob()

Source: https://docs.astro.build/en/tutorial/5-astro-api/1

This snippet demonstrates how to use import.meta.glob() to fetch all Markdown files from a specified directory and display their titles and URLs in a dynamically generated list on an Astro blog page. It requires an Astro project with Markdown files in the './posts/' directory.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
const allPosts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
const pageTitle = "My Astro Learning Blog";
---
<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    {allPosts.map((post: any) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
  </ul>
</BaseLayout>
```

--------------------------------

### Enable Unsigned Uploads with CldUploadWidget in Astro

Source: https://docs.astro.build/en/guides/media/cloudinary

Integrates the Cloudinary Upload Widget into an Astro component for enabling file uploads. This example shows an unsigned upload configuration using an upload preset. For signed uploads, consult the documentation.

```astro
---
import { CldUploadWidget } from 'astro-cloudinary';
---
<CldUploadWidget uploadPreset="<Upload Preset>">
  <button>Upload</button>
</CldUploadWidget>
```

--------------------------------

### Define Environment Variable Type in Astro (env.d.ts)

Source: https://docs.astro.build/en/guides/cms/hygraph

This code defines the type for the Hygraph endpoint environment variable within an Astro project. It helps with IntelliSense and type safety by configuring `ImportMetaEnv` in `env.d.ts`.

```typescript
interface ImportMetaEnv {
  readonly HYGRAPH_ENDPOINT: string;
}
```

--------------------------------

### Astro Rendering Formatted Contentful Blog Post

Source: https://docs.astro.build/en/guides/cms/contentful

Renders a blog post fetched from Contentful. It displays the title, formatted date, and HTML content within a basic HTML structure. Assumes the 'post' object with title, date, and content properties has been prepared.

```astro
---
import Layout from "../../layouts/Layout.astro";
import { contentfulClient } from "../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { BlogPost } from "../../lib/contentful";


let post;
const { slug } = Astro.params;
try {
  const data = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
    "fields.slug": slug,
  });
  const { title, date, content } = data.items[0].fields;
  post = {
    title,
    date: new Date(date).toLocaleDateString(),
    content: documentToHtmlString(content),
  };
} catch (error) {
  return Astro.redirect("/404");
}
---
<html lang="en">
  <head>
    <title>{post?.title}</title>
  </head>
  <body>
    <h1>{post?.title}</h1>
    <time>{post?.date}</time>
    <article set:html={post?.content} />
  </body>
</html>

```

--------------------------------

### Astro Rewrite: Endpoint File Logic

Source: https://docs.astro.build/en/guides/routing

Implement rewrites within Astro endpoint files using `context.rewrite()`. This example shows how to conditionally rewrite the request to the homepage if a specific condition (`context.locals.allowed`) is not met, providing a way to manage routing logic server-side.

```javascript
export function GET(context) {
  if (!context.locals.allowed) {
    return context.rewrite("/");
  }
}

```

--------------------------------

### Suppress All Log Messages in Astro Adapter

Source: https://docs.astro.build/en/reference/adapter-reference

This example shows how to configure an Astro adapter with `suppress: 'all'` to completely hide all log messages related to a specific feature, which is useful when the feature is not utilized due to other configuration settings.

```javascript
export default function createIntegration() {
  return {
    name: '@example/my-adapter',
    hooks: {
      'astro:config:done': ({ setAdapter }) => {
        setAdapter({
          name: '@example/my-adapter',
          serverEntrypoint: '@example/my-adapter/server.js',
          supportedAstroFeatures: {
            sharpImageService: {
              support: 'limited',
              message: 'This adapter has limited support for Sharp. Certain features may not work as expected.',
              suppress: 'all'
            }
          }
        });
      },
    },
  };
}
```

--------------------------------

### Import Order Precedence Example in Astro

Source: https://docs.astro.build/en/guides/styling

Illustrates how, for styles with the same specificity, the last imported stylesheet determines the final styles. In this case, `make-it-purple.css` is imported last and its `div > h1` rule is overridden by the scoped `h1 { color: red }`.

```html
---
import "./make-it-green.css"
import "./make-it-purple.css"
---
<style>
  h1 { color: red }
</style>
<div>
  <h1>
    This header will be purple!
  </h1>
</div>
```

--------------------------------

### Nginx configuration for Astro static sites

Source: https://docs.astro.build/en/recipes/docker

This Nginx configuration file is used to serve a static Astro site. It listens on port 8080, sets the document root, and includes configurations for gzip compression and handling of static assets.

```nginx
worker_processes  1;

events {
  worker_connections  1024;
}


http {
  server {
    listen 8080;
    server_name   _;


    root   /usr/share/nginx/html;
    index  index.html index.htm;
    include /etc/nginx/mime.types;


    gzip on;
    gzip_min_length 1000;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;


    error_page 404 /404.html;
    location = /404.html {
            root /usr/share/nginx/html;
            internal;
    }


    location / {
            try_files $uri $uri/index.html =404;
    }
  }
}
```

--------------------------------

### Push Database Changes with Astro DB CLI

Source: https://docs.astro.build/en/guides/integrations-guide/db

Safely pushes database configuration changes to your project database. It checks for data loss risks and guides through migration steps. The `--force-reset` flag can be used to reset all production data in case of a breaking schema change.

```bash
astro db push
astro db push --force-reset
```

--------------------------------

### Import Markdown Files and Extract Unique Tags (Astro/JavaScript)

Source: https://docs.astro.build/en/tutorial/5-astro-api/2

This snippet imports all Markdown files from a 'posts' directory using `import.meta.glob` and then processes their frontmatter to extract a unique list of tags. It uses `Object.values` to get an array of post objects, `map` to access the 'tags' array from each post's frontmatter, `flat` to combine all tags into a single array, and `Set` to ensure uniqueness before converting back to an array.

```javascript
import BaseLayout from '../../layouts/BaseLayout.astro';


export async function getStaticPaths() {
  const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));


  const uniqueTags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];
}
```

--------------------------------

### Import and Use Astro and React Components with Individual Imports

Source: https://docs.astro.build/en/reference/publish-to-npm

This example shows how to import Astro and React components individually from specific paths within an Astro package. This approach allows for cleaner imports when you only need a subset of components or want to explicitly reference their type (e.g., '/astro', '/react').

```astro
---
import MyAstroComponent from 'example-astro-component/astro';
import MyReactComponent from 'example-astro-component/react';
---
<MyAstroComponent />
<MyReactComponent />
```

--------------------------------

### Configure i18n Routing with Fallback in Astro

Source: https://docs.astro.build/en/reference/configuration-reference

Sets up internationalization (i18n) routing for an Astro site, including defining locales, the default locale, and a fallback strategy for unavailable pages. This example configures fallbacks from 'pt' to 'es' and 'fr' to 'en'.

```javascript
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "pt-br", "es"],
    fallback: {
      pt: "es",
      fr: "en"
    }
  }
})
```

--------------------------------

### GitHub Actions Workflow for Astro Deployment to AWS

Source: https://docs.astro.build/en/guides/deploy/aws

This YAML workflow automates the build and deployment of an Astro website. It checks out the code, configures AWS credentials using secrets, installs dependencies, builds the application, deploys to S3, and invalidates CloudFront. Ensure all necessary secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `BUCKET_ID`, `DISTRIBUTION_ID`) are configured in your GitHub repository settings.

```yaml
name: Deploy Website


on:
  push:
    branches:
      - main


jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - name: Install modules
        run: npm ci
      - name: Build application
        run: npm run build
      - name: Deploy to S3
        run: aws s3 sync --delete ./dist/ s3://${{ secrets.BUCKET_ID }}
      - name: Create CloudFront invalidation
        run: aws cloudfront create-invalidation --distribution-id ${{ secrets.DISTRIBUTION_ID }} --paths "/*"
```

--------------------------------

### Astro Endpoint Returning a JSON Response

Source: https://docs.astro.build/en/reference/errors/endpoint-did-not-return-aresponse

This example demonstrates a correct Astro endpoint function that returns a JSON Response. It uses the standard `Response.json()` method to create the response object, fulfilling the endpoint's requirement.

```typescript
import type { APIContext } from 'astro';


export async function GET({ request, url, cookies }: APIContext): Promise<Response> {
    return Response.json({
        success: true,
        result: 'Data from Astro Endpoint!'
    })
}
```

--------------------------------

### Using Astro's Image Component for Local Images

Source: https://docs.astro.build/en/guides/images

Demonstrates the basic usage of the `<Image />` component from `astro:assets` to display a local image. It shows how to import the component and an image, and then use it within an HTML template. The component automatically enforces `alt` text and optimizes the image for display, ensuring correct dimensions for CLS prevention.

```astro
---
// import the Image component and the image
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png'; // Image is 1600x900
---


<!-- `alt` is mandatory on the Image component -->
<Image src={myImage} alt="A description of my image." />
```

```html
<!-- Prerendered output -->
<!-- Image is optimized, proper attributes are enforced -->
<img
  src="/_astro/my_image.hash.webp"
  width="1600"
  height="900"
  decoding="async"
  loading="lazy"
  alt="A description of my image."
/>


<!-- Output rendered on demand-->
<!-- src will use an endpoint generated on demand-->
<img
  src="/_image?href=%2F_astro%2Fmy_image.hash.webp&amp;w=1600&amp;h=900&amp;f=webp"
  <!-- ... -->
/>
```

--------------------------------

### Handle Button Clicks with addEventListener in Astro

Source: https://docs.astro.build/en/guides/client-side-scripts

This snippet demonstrates how to handle user interactions like clicks in Astro by using the standard `addEventListener` method within a `<script>` tag. It finds all buttons with a specific class and attaches a click event listener to each, showing how to manage events without framework-specific syntax. It ensures scripts are bundled and run once per page, with `querySelectorAll` targeting all relevant elements.

```html
<button class="alert">Click me!</button>


<script>
  // Find all buttons with the `alert` class on the page.
  const buttons = document.querySelectorAll('button.alert');


  // Handle clicks on each button.
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Button was clicked!');
    });
  });
</script>
```

--------------------------------

### Configure Contentful Environment Variables in Astro

Source: https://docs.astro.build/en/guides/cms/contentful

Sets up environment variables for Contentful integration in an Astro project. It requires creating an .env file for credentials and an env.d.ts file for TypeScript IntelliSense. These variables are crucial for authenticating with the Contentful API.

```env
CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
CONTENTFUL_DELIVERY_TOKEN=YOUR_DELIVERY_TOKEN
CONTENTFUL_PREVIEW_TOKEN=YOUR_PREVIEW_TOKEN
```

```typescript
interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
}
```

--------------------------------

### Configure Markdoc VS Code Extension

Source: https://docs.astro.build/en/guides/integrations-guide/markdoc

Sets up the Markdoc VS Code extension by creating a 'markdoc.config.json' file in the project root. Defines the content path and schema configuration for Markdoc files.

```json
[
  {
    "id": "my-site",
    "path": "src/content",
    "schema": {
      "path": "markdoc.config.mjs",
      "type": "esm",
      "property": "default",
      "watch": true
    }
  }
]
```

--------------------------------

### Configure Snipcart Basic Settings

Source: https://docs.astro.build/en/guides/ecommerce

Demonstrates basic Snipcart configuration by adding the Snipcart script to an Astro page and setting fundamental options like the public API key and load strategy.

```html
<script>
  window.SnipcartSettings = {
    publicApiKey: "YOUR_API_KEY",
    loadStrategy: "on-user-interaction",
  };


  (function()...); // available from the Snipcart documentation
</script>
```

--------------------------------

### Astro Configuration with Site and Base Path

Source: https://docs.astro.build/en/guides/deploy/github

This JavaScript code snippet shows how to configure both the `site` and `base` properties in an Astro project's configuration file (`astro.config.mjs`). The `base` property is essential when deploying to a repository other than the special `<username>.github.io` format, specifying the repository's name as the root path for the website. Internal links must then be prefixed with this `base` value.

```javascript
import { defineConfig } from 'astro/config'


export default defineConfig({
  site: 'https://astronaut.github.io',
  base: '/my-repo',
})

```

--------------------------------

### Filter Astro Content Entries by Sub-directory

Source: https://docs.astro.build/en/guides/content-collections

Illustrates how to filter content entries within a collection based on their nested directory using the `id` property. This is achieved by checking if the `id` starts with a specific path prefix.

```astro
// Example: Filter entries by sub-directory in the collection
import { getCollection } from 'astro:content';
const englishDocsEntries = await getCollection('docs', ({ id }) => {
  return id.startsWith('en/');
});

```

--------------------------------

### Set Default Prefetch Strategy in Astro Config

Source: https://docs.astro.build/en/guides/prefetch

Configures the default prefetch strategy for all links that opt-in via `data-astro-prefetch`. This example sets the default strategy to 'viewport', meaning links will prefetch as they enter the user's viewport. The default is 'hover'.

```javascript
import { defineConfig } from 'astro/config';


export default defineConfig({
  prefetch: {
    defaultStrategy: 'viewport'
  }
});
```

--------------------------------

### Inline Conditional Script Tag in Astro

Source: https://docs.astro.build/en/guides/upgrade-to/v5

This example demonstrates how to ensure a conditionally rendered script tag is inlined in Astro. Previously, these were implicitly inlined. With the default behavior change in v5.0, you must add `is:inline` to preserve this behavior.

```html
---
type Props = {
  showAlert: boolean
}

const { showAlert } = Astro.props;
---

{
  showAlert && <script is:inline>alert("Some very important code!!")</script>
}
```

--------------------------------

### Add Middleware to Astro Project

Source: https://docs.astro.build/en/reference/integrations-reference

This code demonstrates how to add middleware to an Astro project using the `addMiddleware` configuration option. Middleware can be defined in a separate module with an `onRequest` function and specified to run before (`pre`) or after (`post`) other middleware. It also shows how to use a URL object for the entrypoint.

```javascript
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "my-middleware-package",
  hooks: {
    "astro:config:setup": ({ addMiddleware }) => {
      addMiddleware({
        entrypoint: '@my-package/middleware',
        order: 'pre'
      });
    },
  },
});
```

```javascript
import { defineMiddleware } from 'astro:middleware'


export const onRequest = defineMiddleware(async (context, next) => {
  if(context.url.pathname === '/some-test-path') {
    return Response.json({
      ok: true
    });
  }


  return next();
});
```

```javascript
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "my-middleware-package",
  hooks: {
    "astro:config:setup": ({ addMiddleware }) => {
      addMiddleware({
        entrypoint: new URL('./middleware.js', import.meta.url),
        order: 'pre'
      });
    },
  },
});
```

--------------------------------

### Astro Content Refresh with Webhook (JavaScript)

Source: https://docs.astro.build/en/reference/integrations-reference

Demonstrates using the `refreshContent` function within an `astro:server:setup` hook to trigger content updates based on incoming webhook requests. It configures a dev server endpoint to receive POST requests and refresh specific content loaders with context data.

```javascript
{
  name: 'my-integration',
  hooks: {
    'astro:server:setup': async ({ server, refreshContent }) => {
      // Register a dev server webhook endpoint
      server.middlewares.use('/_refresh', async (req, res) => {
        if(req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method Not Allowed');
          return
        }
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const webhookBody = JSON.parse(body);
            await refreshContent({
              context: { webhookBody },
              loaders: ['my-loader']
            });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Content refreshed successfully' }));
          } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to refresh content: ' + error.message }));
          }
        });
      });
    }
  }
}
```

--------------------------------

### Display Astro CLI Help (npm, pnpm, Yarn)

Source: https://docs.astro.build/en/reference/cli-reference

Displays a list of all available Astro CLI commands and global flags. This is useful for understanding the full range of functionalities. Executable with npm, pnpm, or Yarn.

```shell
npx astro --help
```

```shell
pnpm astro --help
```

```shell
yarn astro --help
```

--------------------------------

### Update ViewTransitions Component Import Source (Astro HTML)

Source: https://docs.astro.build/en/guides/upgrade-to/v3

This snippet shows how to update the import source for the ViewTransitions component in Astro projects. Previously located in 'astro:components', it has been moved to 'astro:transitions' starting from Astro v3.0.

```html
---
import { ViewTransitions } from "~~astro:components~~ astro:transitions"
---
<html lang="en">
  <head>
    <title>My Homepage</title>
    <ViewTransitions />
  </head>
  <body>
    <h1>Welcome to my website!</h1>
  </body>
</html>
```

--------------------------------

### Build Docker Image for Astro Project

Source: https://docs.astro.build/en/recipes/docker

Builds a Docker image from your Astro project's root directory. Replace `<your-astro-image-name>` with your desired image name. This command generates an image that can be run locally or deployed.

```docker
docker build -t <your-astro-image-name> .
```

--------------------------------

### Set Up Drupal Credentials in Astro .env File

Source: https://docs.astro.build/en/guides/cms/drupal

Optionally, configure authentication credentials for your Drupal JSON:API endpoint in your Astro project's .env file. This is useful if you need to restrict access to your Drupal data. Supported methods include Basic Authentication and JWT Token authentication.

```env
DRUPAL_BASIC_USERNAME="editor"
DRUPAL_BASIC_PASSWORD="editor"
DRUPAL_JWT_TOKEN="abc123"
```

--------------------------------

### Astro Static Site Build Configuration (Yarn) (YAML)

Source: https://docs.astro.build/en/guides/deploy/zerops

Configures the build process for an Astro static site using Yarn. It specifies the base Node.js version, build commands, and files to deploy. This `zerops.yml` enables Zerops to build and serve your static site.

```yaml
# see https://docs.zerops.io/zerops-yml/specification for full reference
zerops:
  - setup: app
    build:
      base: nodejs@20
      buildCommands:
        - yarn
        - yarn build
      deployFiles:
        - dist/~ 
    run:
      base: static

```

--------------------------------

### Astro Dev Toolbar App Entrypoint with URL

Source: https://docs.astro.build/en/reference/dev-toolbar-app-reference

This code snippet illustrates an alternative way to specify the `entrypoint` for a dev toolbar app within an Astro integration. Instead of a string path, it uses a `URL` object, which can be particularly useful for more complex module resolution scenarios or when working with dynamic imports.

```javascript
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "my-integration",
  hooks: {
    "astro:config:setup": ({ addDevToolbarApp }) => {
      addDevToolbarApp({
        id: "my-app",
        name: "My App",
        icon: "<svg>...</svg>",
        entrypoint: new URL("./my-app.js", import.meta.url),
      });
    },
  },
});
```

--------------------------------

### Construct Form Action URLs with queryString in Astro

Source: https://docs.astro.build/en/reference/modules/astro-actions

The `queryString` property generates a string representation of form action URLs, useful for creating dynamic form actions. This example demonstrates constructing a URL for a feedback form using `queryString` and passing it as a prop.

```astro
---
import { actions } from 'astro:actions';
import FeedbackForm from "../components/FeedbackForm.astro";


const feedbackUrl = new URL('/feedback', Astro.url);
feedbackUrl.search = actions.myAction.queryString;
---
<FeedbackForm sendTo={feedbackUrl.pathname} />

```

--------------------------------

### Implement Navigation with Translated Paths (Astro)

Source: https://docs.astro.build/en/recipes/i18n

This Astro component example demonstrates using the `useTranslatedPath` helper to create navigation links. It dynamically generates links for 'home' and 'about' pages, ensuring they are correctly translated based on the current language. This enhances user experience by providing localized navigation.

```astro
---
import { getLangFromUrl, useTranslations, useTranslatedPath } from '../i18n/utils';


const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const translatePath = useTranslatedPath(lang);
---
<ul>
    <li>
        <a href={translatePath('/home/')}>
          {t('nav.home')}
        </a>
    </li>
    <li>
        <a href={translatePath('/about/')}>
          {t('nav.about')}
        </a>
    </li>
    <li>
        <a href="https://twitter.com/astrodotbuild">
          {t('nav.twitter')}
        </a>
    </li>
</ul>
```

--------------------------------

### Use New render Function with Content Layer Entries

Source: https://docs.astro.build/en/guides/upgrade-to/v5

This snippet illustrates the updated method for rendering content entries in Astro's Content Layer API. It shows how to import the `render` function from `astro:content` and use it with a fetched entry to get the `Content` component and `headings`. The `render()` method is no longer available directly on entries.

```html
---
import { getEntry, render } from 'astro:content';


const post = await getEntry('blog', params.slug);


const { Content, headings } = await post.render();
const { Content, headings } = await render(post);
---
<Content />
```

--------------------------------

### Configure Astro for Bundle Visualization

Source: https://docs.astro.build/en/recipes/analyze-bundle-size

Configures the Astro build process to include the `rollup-plugin-visualizer`. This involves adding the plugin to the Vite configuration in `astro.config.mjs` to generate a `stats.html` file upon building.

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import { visualizer } from "rollup-plugin-visualizer";


export default defineConfig({
vite: {
    plugins: [visualizer({
        emitFile: true,
        filename: "stats.html",
    })]
}
});
```

--------------------------------

### Configure Trailing Slashes in RSS Feed

Source: https://docs.astro.build/en/recipes/rss

This example shows how to set `trailingSlash: false` in the `rss()` helper to ensure that links in the RSS feed match the project's `trailingSlash` configuration, preventing potential URL mismatches.

```javascript
import rss from '@astrojs/rss';


export function GET(context) {
  const posts = Object.values(postImportResult);
  return rss({
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    trailingSlash: false,
    items: posts.map((post) => ({
      link: post.url,
      ...post.frontmatter,
    })),
  });
}
```

--------------------------------

### Define Astro DB Integration with `defineDbIntegration()`

Source: https://docs.astro.build/en/guides/astro-db

This snippet demonstrates how to define a custom Astro DB integration using the `defineDbIntegration` utility. It specifies the integration name and hooks into the `astro:db:setup` event to extend the database configuration and seed files. This allows for modular database extensions in Astro projects.

```typescript
import { defineDbIntegration } from '@astrojs/db/utils';


export default function MyIntegration() {
  return defineDbIntegration({
    name: 'my-astro-db-powered-integration',
    hooks: {
      'astro:db:setup': ({ extendDb }) => {
        extendDb({
          configEntrypoint: '@astronaut/my-package/config',
          seedEntrypoint: '@astronaut/my-package/seed',
        });
      },
      // Other integration hooks...
    },
  });
}
```

--------------------------------

### Handle Mux Uploader Events in Astro

Source: https://docs.astro.build/en/guides/media/mux

Listens for and handles various events emitted by the Mux Uploader component within an Astro application using client-side JavaScript. Supports events like upload start, success, errors, and progress.

```astro
---
import { MuxUploader } from '@mux/mux-uploader-astro';
---


<MuxUploader
  id="my-uploader"
  endpoint="https://my-authenticated-url/storage?your-url-params"
  pausable
/>


<script>
  import type { MuxUploaderElement } from '@mux/mux-uploader-astro';


  const uploader = document.getElementById('my-uploader') as MuxUploaderElement;


  uploader.addEventListener('uploadstart', (event) => {
    console.log('Upload started!', event.detail);
  });


  uploader.addEventListener('success', (event) => {
    console.log('Upload successful!', event.detail);
  });


  uploader.addEventListener('uploaderror', (event) => {
    console.error('Upload error!', event.detail);
  });


  uploader.addEventListener('progress', (event) => {
    console.log('Upload progress: ', event.detail);
  });
</script>

```

--------------------------------

### Configure Prism Syntax Highlighting in Markdoc

Source: https://docs.astro.build/en/guides/integrations-guide/markdoc

This snippet shows how to apply the Prism extension to your Markdoc configuration using the `extends` property. It requires importing the `prism` function from `@astrojs/markdoc/prism` and the `defineMarkdocConfig` from `@astrojs/markdoc/config`. No specific inputs or outputs are defined, but it's a configuration step.

```javascript
import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import prism from '@astrojs/markdoc/prism';


export default defineMarkdocConfig({
  extends: [prism()],
});
```

--------------------------------

### Scoped Styles Precedence Example in Astro

Source: https://docs.astro.build/en/guides/styling

Shows that scoped styles in Astro have higher precedence in the order of appearance, overriding imported styles of the same specificity. The scoped `h1 { color: red }` takes precedence over the imported `h1 { color: purple; }`.

```html
---
import "./make-it-purple.css"
---
<style>
  h1 { color: red }
</style>
<div>
  <h1>
    This header will be red!
  </h1>
</div>
```

--------------------------------

### Build Astro Site (Yarn)

Source: https://docs.astro.build/en/guides/deploy/deno

Command to build an Astro site using Yarn. This command is used for Astro projects where Yarn is the package manager.

```bash
yarn run build

```

--------------------------------

### Astro SSR Dynamic Routes Without getStaticPaths

Source: https://docs.astro.build/en/guides/routing

Adapts a dynamic route example for SSR mode by looking up `slug` params in an object, as SSR pages cannot use `getStaticPaths()` and therefore cannot receive props directly. Redirects to a 404 page if the slug is not found.

```astro
---
const pages = [
  {
    slug: undefined,
    title: 'Astro Store',
    text: 'Welcome to the Astro store!',
  },
  {
    slug: 'products',
    title: 'Astro products',
    text: 'We have lots of products for you',
  },
  {
    slug: 'products/astro-handbook',
    title: 'The ultimate Astro handbook',
    text: 'If you want to learn Astro, you must read this book.'
  }
];


const { slug } = Astro.params;
const page = pages.find((page) => page.slug === slug);
if (!page) return Astro.redirect("/404");
const { title, text } = page;
---
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>{text}</p>
  </body>
</html>

```

--------------------------------

### Astro Static Site Generation Paths for Blog Posts

Source: https://docs.astro.build/en/guides/cms/kontent-ai

Exports a getStaticPaths function for Astro's Static Site Generation (SSG) mode. This function fetches all blog posts from Kontent.ai and returns an array of paths, each containing parameters (slug) and props (blogPost data) for individual blog post pages. It ensures that each blog post can be generated as a separate static page.

```astro
---
import { deliveryClient } from '../../lib/kontent';
import type { BlogPost } from '../../models';
import { contentTypes } from '../../models/project/contentTypes';


export async function getStaticPaths() {
    const blogPosts = await deliveryClient
        .items<BlogPost>()
        .type(contentTypes.blog_post.codename)
        .toPromise()
---

```

```astro
---
import { deliveryClient } from '../../lib/kontent';
import type { BlogPost } from '../../models';
import { contentTypes } from '../../models/project/contentTypes';


export async function getStaticPaths() {
    const blogPosts = await deliveryClient
        .items<BlogPost>()
        .type(contentTypes.blog_post.codename)
        .toPromise()


    return blogPosts.data.items.map(blogPost => ({
        params: { slug: blogPost.elements.url_slug.value },
        props: { blogPost }
    }))
}
---

```

--------------------------------

### Configure Wrapped Client-Side Component as Markdoc Tag

Source: https://docs.astro.build/en/guides/integrations-guide/markdoc

Configures a Markdoc tag to render an Astro wrapper component that itself renders a client-side UI component. This setup allows passing attributes from Markdoc to the client-side component via the Astro wrapper.

```typescript
import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';


export default defineMarkdocConfig({
  tags: {
    aside: {
      render: component('./src/components/ClientAside.astro'),
      attributes: {
        type: { type: String },
      },
    },
  },
});
```

--------------------------------

### Set DatoCMS API Key in Astro Environment

Source: https://docs.astro.build/en/guides/cms/datocms

This snippet shows how to set the DatoCMS API key as an environment variable in an Astro project's .env file. It also includes the TypeScript declaration for type safety in env.d.ts.

```dotenv
DATOCMS_API_KEY=YOUR_API_KEY
```

```typescript
interface ImportMetaEnv {
  readonly DATOCMS_API_KEY: string;
}
```

--------------------------------

### Automatically Upgrade Astro and Official Integrations

Source: https://docs.astro.build/en/guides/integrations-guide

Command to upgrade Astro and all official integrations to their latest versions simultaneously using different package managers.

```bash
# Upgrade Astro and official integrations together to latest
npx @astrojs/upgrade
```

```bash
# Upgrade Astro and official integrations together to latest
pnpm dlx @astrojs/upgrade
```

```bash
# Upgrade Astro and official integrations together to latest
yarn dlx @astrojs/upgrade
```

--------------------------------

### Link Tag CSS Precedence Example in Astro

Source: https://docs.astro.build/en/guides/styling

Illustrates that styles loaded via `<link rel="stylesheet">` tags have the lowest precedence in Astro. The imported CSS (`make-it-purple.css`) will likely override the blue style from the linked stylesheet.

```html
---
import "../components/make-it-purple.css"
---


<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
    <link rel="stylesheet" href="/styles/make-it-blue.css" />
  </head>
  <body>
    <div>
      <h1>This will be purple</h1>
    </div>
  </body>
</html>
```

--------------------------------

### Display a list of blog posts in Astro

Source: https://docs.astro.build/en/guides/cms/ghost

This snippet shows how to render a list of blog post titles and links on an Astro page. It utilizes the `posts` array fetched from Ghost CMS and maps over it to create anchor tags, with each link pointing to the individual post's page based on its slug. This is typically used on an index or blog listing page.

```astro
---
import { ghostClient } from '../lib/ghost';
const posts = await ghostClient.posts
    .browse({
        limit: 'all',
    })
    .catch((err) => {
        console.error(err);
    });
---


<html lang="en">
    <head>
        <title>Astro + Ghost 👻</title>
    </head>
    <body>


        {
            posts.map((post) => (
                <a href={`/post/${post.slug}`}>
                    <h1> {post.title} </h1>
                </a>
            ))
        }
    </body>
</html>

```

--------------------------------

### Sequence Multiple Astro Middleware Functions

Source: https://docs.astro.build/en/reference/modules/astro-middleware

Illustrates using the `sequence` function to execute multiple middleware handlers in a defined order. Each handler receives context and a `next` function to proceed to the next middleware.

```javascript
import { sequence } from "astro:middleware";


async function validation(_, next) {...}
async function auth(_, next) {...}
async function greeting(_, next) {...}


export const onRequest = sequence(validation, auth, greeting);

```

--------------------------------

### Map and Format Blog Post Data (Astro)

Source: https://docs.astro.build/en/guides/cms/contentful

Processes the raw blog post entries fetched from Contentful. It maps over `entries.items` to extract and reformat specific fields like `title`, `date`, `description`, and `slug`. The date is formatted into a readable string.

```astro
---
import { contentfulClient } from "../lib/contentful";
import type { BlogPost } from "../lib/contentful";


const entries = await contentfulClient.getEntries<BlogPost>({
  content_type: "blogPost",
});


const posts = entries.items.map((item) => {
  const { title, date, description, slug } = item.fields;
  return {
    title,
    slug,
    description,
    date: new Date(date).toLocaleDateString()
  };
});
---

```

--------------------------------

### Link to Multiple Blog Posts in Astro

Source: https://docs.astro.build/en/tutorial/2-pages/2

This Astro code snippet demonstrates how to update the main blog page (`blog.astro`) to include links to multiple blog posts, including newly added ones like 'Post 2' and 'Post 3'.

```astro
---
---
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width" />
    <title>Astro</title>
  </head>
  <body>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/blog/">Blog</a>


    <h1>My Astro Learning Blog</h1>
    <p>This is where I will post about my journey learning Astro.</p>
    <ul>
      <li><a href="/posts/post-1/">Post 1</a></li>
      <li><a href="/posts/post-2/">Post 2</a></li>
      <li><a href="/posts/post-3/">Post 3</a></li>
    </ul>
  </body>
</html>

```

--------------------------------

### Configure Astro Vite for Monorepo Dependencies

Source: https://docs.astro.build/en/guides/troubleshooting

This configuration snippet for Astro's Vite build process specifies external dependencies that should not be bundled during server-side rendering (SSR). This is particularly useful in monorepo setups where Astro-related packages might be managed at the root level or in other packages within the monorepo.

```javascript
import { defineConfig } from 'astro/config'
export default defineConfig({
  vite: {
    ssr: {
      noExternal: [
        '@astrojs/vue',
        'astro-component-lib',
      ]
    }
  }
})
```

--------------------------------

### Get path by locale using getPathByLocale

Source: https://docs.astro.build/en/reference/modules/astro-i18n

Retrieves the custom path configured for a given locale code. This is useful when you've defined aliases for locale codes in your Astro configuration.

```javascript
export default defineConfig({
  i18n: {
    locales: ["es", "en", {
      path: "french",
      codes: ["fr", "fr-BR", "fr-CA"]
    }]
  }
})
```

```javascript
---
import { getPathByLocale } from 'astro:i18n';

getPathByLocale("fr"); // returns "french"
getPathByLocale("fr-CA"); // returns "french"
---
```

--------------------------------

### Environment Variable Type Definitions

Source: https://docs.astro.build/en/reference/experimental-flags/static-import-meta-env

This code block provides example type definitions for environment variables used within Astro. It includes definitions for both `ImportMetaEnv` and `NodeJS.ProcessEnv`, allowing for better type safety and IntelliSense when accessing environment variables.

```typescript
interface ImportMetaEnv {
  readonly PUBLIC_POKEAPI: string;
  readonly DB_PASSWORD: string;
  readonly ENABLED: boolean;
  readonly ENABLED: string;
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}


namespace NodeJS {
  interface ProcessEnv {
    DB_PASSWORD: string;
  }
}
```

--------------------------------

### Create Astro POST API Endpoint for Feedback

Source: https://docs.astro.build/en/recipes/build-forms-api

This snippet sets up a POST API endpoint at /api/feedback to receive and process form data. It uses `request.formData()` to get the data and includes basic validation. It returns a JSON response indicating success or failure. The `prerender = false` directive is noted as not necessary in 'server' mode.

```typescript
export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";


export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};

```

--------------------------------

### Create New Astro Project using npm, pnpm, or Yarn

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-create-react-app

Provides the command-line instructions for initializing a new Astro project using different package managers. This is the first step in setting up an Astro environment for migrating a CRA application.

```bash
npm create astro@latest
```

```bash
pnpm create astro@latest
```

```bash
yarn create astro@latest
```

--------------------------------

### Import Local JavaScript/TypeScript Files in Astro

Source: https://docs.astro.build/en/guides/client-side-scripts

This example demonstrates how to include local JavaScript or TypeScript files within your Astro project using the `src` attribute of the <script> tag. Astro will process these scripts according to its standard rules, including bundling and TypeScript support. The paths provided are relative to the component file.

```html
<!-- relative path to script at `src/scripts/local.js` -->
<script src="../scripts/local.js"></script>


<!-- also works for local TypeScript files -->
<script src="./script-with-types.ts"></script>
```

--------------------------------

### Format Files with Prettier (Yarn)

Source: https://docs.astro.build/en/editor-setup

Executes Prettier using Yarn to format all files in the current directory and its subdirectories, applying the configured formatting rules.

```bash
yarn exec prettier . --write
```

--------------------------------

### Create Strapi API Wrapper Function in TypeScript

Source: https://docs.astro.build/en/guides/cms/strapi

This TypeScript code defines a reusable `fetchApi` function to interact with the Strapi API. It handles constructing the API URL, appending query parameters, fetching data, and unwrapping responses based on provided options. This function is intended for use in `src/lib/strapi.ts`.

```typescript
interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}


/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }


  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);


  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString());
  let data = await res.json();


  if (wrappedByKey) {
    data = data[wrappedByKey];
  }


  if (wrappedByList) {
    data = data[0];
  }


  return data as T;
}
```

--------------------------------

### Configure Static Asset Paths with Base URL in Astro

Source: https://docs.astro.build/en/guides/upgrade-to/v4

When using the Astro preview server with a configured base path (e.g., `base: '/docs'`), all static asset imports and URLs from the public directory must be prefixed with this base value. This example demonstrates how to set the `src` attribute to correctly display an image located in the public folder.

```html
<img src="/docs/images/my-image.png" alt="">

```

--------------------------------

### Generate Localized URLs with Astro i18n

Source: https://docs.astro.build/en/guides/internationalization

This example demonstrates how to use the `getRelativeLocaleUrl()` helper function from `astro:i18n` to create links to localized pages within an Astro site. It ensures correct URL generation for different languages.

```html
---
import { getRelativeLocaleUrl } from 'astro:i18n';


// defaultLocale is "es"
const aboutURL = getRelativeLocaleUrl("es", "about");
---


<a href="/get-started/">¡Vamos!</a>
<a href={getRelativeLocaleUrl('es', 'blog')}>Blog</a>
<a href={aboutURL}>Acerca</a>

```

--------------------------------

### Fetch and Display Blog Post List in Astro

Source: https://docs.astro.build/en/guides/cms/builderio

This snippet demonstrates how to fetch a list of blog post titles and slugs from the Builder.io Content API and display them as links on an Astro page. It utilizes environment variables for API keys and model names. The `fields` parameter is used to specify the data to retrieve, and the results are rendered into an unordered list.

```astro
---


const builderAPIpublicKey = import.meta.env.BUILDER_API_PUBLIC_KEY;
const builderModel = import.meta.env.BUILDER_BLOGPOST_MODEL;


const { results: posts } = await fetch(
  `https://cdn.builder.io/api/v3/content/${builderModel}?${new URLSearchParams({
    apiKey: builderAPIpublicKey,
    fields: ["data.slug", "data.title"].join(","),
    cachebust: "true",
  }).toString()}`
)
  .then((res) => res.json())
  .catch();
---


<html lang="en">
  <head>
    <title>Blog Index</title>
  </head>
  <body>
    <ul>
      {
        posts.flatMap(({ data: { slug, title } }) => (
          <li>
            <a href={`/posts/${slug}`}>{title}</a>
          </li>
        ))
      }
    </ul>
  </body>
</html>

```

--------------------------------

### Include CSS with Absolute URL Path

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Reference CSS files in the `public/` directory using an absolute URL path within an HTML `link` element. This method offers manual control over the `<link>` tag but bypasses Astro's CSS processing, bundling, and optimizations.

```html
<link href="/style.css">

```

--------------------------------

### Process Webhook Data with Astro Loader

Source: https://docs.astro.build/en/reference/content-loader-reference

An example loader that processes incoming webhook data if available in the `refreshContextData`. It logs the webhook trigger and calls a `processWebhook` function with the provided store and body. This loader is specifically designed for scenarios where integrations trigger loader updates.

```typescript
export function myLoader(options: { url: string }): Loader {
  return {
    name: "my-loader",
    load: async ({ refreshContextData, store, logger }) => {
      if(refreshContextData?.webhookBody) {
        logger.info("Webhook triggered with body");
        processWebhook(store, refreshContextData.webhookBody);
      }
      // ...
    },
  };
}

```

--------------------------------

### Astro Markdown Frontmatter Example

Source: https://docs.astro.build/en/guides/markdown-content

This snippet demonstrates how to define frontmatter properties (like title and author) in an Astro Markdown file. The frontmatter is written in YAML format and is separated from the main content by '---' delimiters. These properties can then be accessed within Astro components.

```markdown
---
title: 'The greatest post of all time'
author: 'Ben'
---


Here is my _great_ post!

```

--------------------------------

### Using an Astro Layout Component

Source: https://docs.astro.build/en/basics/astro-components

Demonstrates how to use an Astro layout component by wrapping content within its tags. The content provided between the opening and closing tags of the layout component is rendered inside the layout's `<slot />`.

```astro
---
import Wrapper from '../components/Wrapper.astro';
---
<Wrapper title="Fred's Page">
  <h2>All about Fred</h2>
  <p>Here is some stuff about Fred.</p>
</Wrapper>

```

--------------------------------

### Define Astro Font Provider Without Config

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Example of defining an Astro font provider using `defineAstroFontProvider` without passing any configuration options. This is useful for simple providers where no custom settings are needed at the Astro configuration level. It specifies the entrypoint for the provider's implementation.

```typescript
import { defineAstroFontProvider } from 'astro/config';


export function myProvider() {
    return defineAstroFontProvider({
        entrypoint: new URL('./implementation.js', import.meta.url)
    });
};
```

--------------------------------

### Create Astro Container Instance (TypeScript)

Source: https://docs.astro.build/en/reference/container-reference

Initializes a new instance of the Astro Container API. This function is asynchronous and returns a Promise that resolves to an `experimental_AstroContainer` object. It accepts an optional `AstroContainerOptions` object to configure streaming and renderers.

```typescript
import { experimental_AstroContainer } from "astro/container";


const container = await experimental_AstroContainer.create();
```

--------------------------------

### Define Astro Content Collections with Built-in Loaders

Source: https://docs.astro.build/en/guides/content-collections

Defines Astro content collections using the `glob()` and `file()` built-in loaders. `glob()` is used for fetching multiple files matching a pattern from a directory, while `file()` is for creating entries from a single file. This setup allows for schema validation and automatic ID generation.

```javascript
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API


const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: /* ... */
});
const dogs = defineCollection({
  loader: file("src/data/dogs.json"),
  schema: /* ... */
});


const probes = defineCollection({
  // `loader` can accept an array of multiple patterns as well as string patterns
  // Load all markdown files in the space-probes directory, except for those that start with "voyager-"
  loader: glob({ pattern: ['*.md', '!voyager-*'], base: 'src/data/space-probes' }),
  schema: z.object({
    name: z.string(),
    type: z.enum(['Space Probe', 'Mars Rover', 'Comet Lander']),
    launch_date: z.date(),
    status: z.enum(['Active', 'Inactive', 'Decommissioned']),
    destination: z.string(),
    operator: z.string(),
    notable_discoveries: z.array(z.string()),
  }),
});


export const collections = { blog, dogs, probes };
```

--------------------------------

### Add Drupal URL to Astro .env File

Source: https://docs.astro.build/en/guides/cms/drupal

Configure your Astro project to connect to your Drupal site by adding the Drupal base URL to your .env file. This variable is essential for all subsequent data fetching operations. Ensure the dev server is restarted after adding this variable.

```env
DRUPAL_BASE_URL="https://drupal.ddev.site/"
```

--------------------------------

### Automatic Heading ID Generation in Markdown

Source: https://docs.astro.build/en/guides/markdown-content

Illustrates how Astro automatically generates heading IDs for `<h1>` to `<h6>` elements in Markdown files, allowing for internal linking. The example shows a Markdown structure with internal links using heading slugs.

```markdown
---
title: My page of content
---
## Introduction


I can link internally to [my conclusion](#conclusion) on the same page when writing Markdown.


## Conclusion


I can visit `https://example.com/page-1/#introduction` in a browser to navigate directly to my Introduction.

```

--------------------------------

### Render Blog Post Content (Astro/HTML)

Source: https://docs.astro.build/en/guides/cms/kontent-ai

Renders the fetched blog post data, including title, teaser, content, and date, into an HTML structure. This snippet assumes the blog post data has already been fetched and is available in the `blogPost` variable. It uses Astro's `set:html` directive for rendering HTML content.

```html
---
import { deliveryClient } from '../../lib/kontent';
import type { BlogPost } from '../../models';
import { contentTypes } from '../../models/project/contentTypes';


const { slug } = Astro.params
let blogPost: BlogPost;
try {
    const data = await deliveryClient
        .items<BlogPost>()
        .equalsFilter(contentTypes.blog_post.elements.url_slug.codename, slug ?? '')
        .type(contentTypes.blog_post.codename)
        .limitParameter(1)
        .toPromise()
    blogPost = data.data.items[0]
} catch (error) {
    return Astro.redirect('/404')
}
---
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{blogPost.elements.title.value}</title>
    </head>
    <body>
        <article>
            <h1>{blogPost.elements.title.value}</h1>
            <Fragment set:html={blogPost.elements.teaser.value} />
            <Fragment set:html={blogPost.elements.content.value} />
            <time>{new Date(blogPost.elements.date.value ?? '')}</time>
    </body>
</html>

```

--------------------------------

### Astro Error Handling for Contentful Fetch

Source: https://docs.astro.build/en/guides/cms/contentful

Implements error handling for fetching blog post data from Contentful. If an error occurs during data retrieval, it redirects the user to a 404 page using Astro.redirect. Assumes contentfulClient and BlogPost type are available.

```astro
---
import { contentfulClient } from "../../lib/contentful";
import type { BlogPost } from "../../lib/contentful";


const { slug } = Astro.params;


try {
  const data = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
    "fields.slug": slug,
  });
} catch (error) {
  return Astro.redirect("/404");
}
---
```

--------------------------------

### Access and Filter Routes in Astro Integration

Source: https://docs.astro.build/en/reference/integrations-reference

This example shows how to use the `astro:routes:resolved` hook to access all resolved routes and their metadata. It filters routes originating from the project and logs their patterns to the console. This hook is useful for inspecting and manipulating route information during the build or development process.

```typescript
const integration = () => {
  return {
    name: 'my-integration',
    hooks: {
      'astro:routes:resolved': ({ routes }) => {
        const projectRoutes = routes.filter(r => r.origin === 'project').map(r => r.pattern)


        console.log(projectRoutes)
      },
    }
  }
}
```

--------------------------------

### Configure Local Development Secrets with .dev.vars

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

This file content example shows how to configure secrets for local development of a Cloudflare Worker. By creating a `.dev.vars` file in the root of your Astro project, you can define secret key-value pairs that Wrangler will use during local testing.

```ini
DB_PASSWORD=myPassword
```

--------------------------------

### Nest React Components within Astro Component

Source: https://docs.astro.build/en/guides/migrate-to-astro/from-create-react-app

Illustrates nesting React components within a parent Astro component, including placing interactive elements in designated slots. The example uses `client:idle` to defer loading of the `MyReactButton` component until the browser is idle.

```astro
---
import MyReactSidebar from '../components/MyReactSidebar.jsx';
import MyReactButton from '../components/MyReactButton.jsx';
---
<MyReactSidebar>
  <p>Here is a sidebar with some text and a button.</p>
  <div slot="actions">
    <MyReactButton client:idle />
  </div>
</MyReactSidebar>

```

--------------------------------

### Astro Script Processing Features

Source: https://docs.astro.build/en/guides/client-side-scripts

This example illustrates Astro's default script processing capabilities, which include TypeScript support, import bundling for local files and npm modules, automatic 'type="module"' conversion, deduplication across component instances, and inlining for small scripts. No external dependencies are required beyond Astro itself.

```javascript
// Processed! Bundled! TypeScript!
// Importing local scripts and from npm packages works.
```

--------------------------------

### Astro Navigation Links in HTML

Source: https://docs.astro.build/en/tutorial/2-pages/1

This code demonstrates how to add navigation links between pages in an Astro website using standard HTML anchor tags. These links allow users to move between the Home, About, and Blog pages.

```html
<a href="/">Home</a>
<a href="/about/">About</a>


<h1>About Me</h1>
<h2>... and my new Astro site!</h2>
```

--------------------------------

### Create Binary Image Endpoint - Astro

Source: https://docs.astro.build/en/guides/endpoints

Generates a binary image endpoint by fetching an image and returning its ArrayBuffer. This demonstrates how to serve non-textual data from an Astro endpoint, useful for dynamic image generation or serving assets. The endpoint is defined using an async GET function.

```typescript
export async function GET({ params, request }) {
  const response = await fetch(
    "https://docs.astro.build/assets/full-logo-light.png",
  );


  return new Response(await response.arrayBuffer());
}
```

--------------------------------

### Add Client-Side Interactivity with Canvas Confetti

Source: https://docs.astro.build/en/guides/client-side-scripts

This snippet demonstrates adding client-side interactivity to an Astro component by using a <script> tag to import the 'canvas-confetti' npm package and attach click event listeners to buttons that trigger a confetti animation. It requires the 'canvas-confetti' package to be installed.

```html
<button data-confetti-button>Celebrate!</button>

<script>
  // Import from npm package.
  import confetti from 'canvas-confetti';


  // Find our component DOM on the page.
  const buttons = document.querySelectorAll('[data-confetti-button]');


  // Add event listeners to fire confetti when a button is clicked.
  buttons.forEach((button) => {
    button.addEventListener('click', () => confetti());
  });
</script>
```

--------------------------------

### getStaticPaths Function - Astro

Source: https://docs.astro.build/en/reference/errors/invalid-get-static-paths-return

This example demonstrates the correct implementation of the getStaticPaths function in Astro. It returns an array of objects, where each object contains a params property with the necessary slug for routing. This ensures that Astro can generate static paths for your routes.

```javascript
export async function getStaticPaths() {
  return [
    { params: { slug: "blog" } },
    { params: { slug: "about" } }
  ];
}
```

--------------------------------

### File Loader with Custom Parser for CSV Files in Astro

Source: https://docs.astro.build/en/reference/content-loader-reference

This `file()` loader example demonstrates loading data from a CSV file ('src/data/products.csv') using a custom parser function. The parser is necessary for file types not supported by default. It requires `astro:content` and `astro/loaders`.

```typescript
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';


const products = defineCollection({
  /* Retrieve all entries from a CSV file using a custom parser. */
  loader: file("src/data/products.csv", {
    parser: (fileContent) => { /* your parser logic */ },
  }),
  schema: /* ... */
});

```

--------------------------------

### Object Loader Configuration and Usage (TypeScript)

Source: https://docs.astro.build/en/reference/content-loader-reference

Demonstrates how to define and use an object loader in TypeScript for Astro content collections. It includes a factory function to create the loader, defining its properties like 'name', 'load', and 'schema'. The example also shows how to configure a collection with this custom loader.

```typescript
import type { Loader, LoaderContext } from 'astro/loaders';
import { z } from 'astro:content';
import { loadFeedData } from "./feed.js";


// Define any options that the loader needs
export function myLoader(options: { url: string, apiKey: string }): Loader {
  // Configure the loader
  const feedUrl = new URL(options.url);
  // Return a loader object
  return {
    name: "my-loader",
    // Called when updating the collection.
    load: async (context: LoaderContext): Promise<void> => {
      // Load data and update the store
      const response = await loadFeedData(feedUrl, options.apiKey);
    },
    // Optionally, define the schema of an entry.
    // It will be overridden by user-defined schema.
    schema: async () => z.object({
      // ...
    })
  };
}
```

```typescript
import { defineCollection, z } from 'astro:content';
import myLoader from '../../loader.ts';


const blog = defineCollection({
  loader: myLoader({
    url: "https://api.example.com/posts",
    apiKey: "my-secret",
  }),
  schema: /* ... */
});
```

--------------------------------

### Use AstroGreet Custom Element with Different Messages

Source: https://docs.astro.build/en/guides/client-side-scripts

This example shows how to use the `AstroGreet` custom component multiple times on a page, passing different messages as props. Each instance of `<AstroGreet />` will render with its own greeting, demonstrating the effectiveness of passing data via attributes (as implemented in the previous snippet) for creating reusable and dynamic components.

```html
---
import AstroGreet from '../components/AstroGreet.astro';
---


<!-- Use the default message: “Welcome, world!” -->
<AstroGreet />


<!-- Use custom messages passed as a props. -->
<AstroGreet message="Lovely day to build components!" />
<AstroGreet message="Glad you made it! 👋" />
```

--------------------------------

### Handle Astro Form Action Errors

Source: https://docs.astro.build/en/guides/actions

This example shows how to access the result of an Astro Action, including potential errors, using `Astro.getActionResult()`. If an error is present, it conditionally renders an error message to the user, providing feedback on the form submission failure.

```astro
---
import { actions } from 'astro:actions';


const result = Astro.getActionResult(actions.newsletter);
---


{result?.error && (
  <p class="error">Unable to sign up. Please try again later.</p>
)}
<form method="POST" action={actions.newsletter}>
  <label>
    E-mail
    <input required type="email" name="email" />
  </label>
  <button>Sign up</button>
</form>

```

--------------------------------

### Configure Font Display Mode in Astro

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Sets the font display mode for a font configuration in Astro. This example uses the 'block' display mode, which can affect how the font is rendered while loading. Other options include 'auto', 'swap', 'fallback', and 'optional'.

```typescript
import { defineConfig } from "astro/config";


export default defineConfig({
  experimental: {
    fonts: [{
      provider: "local",
      name: "Roboto",
      cssVariable: "--font-roboto",
      display: "block"
    }]
  }
});
```

--------------------------------

### Astro Image Component Basic Usage

Source: https://docs.astro.build/en/reference/modules/astro-assets

Demonstrates the basic usage of the Astro `<Image />` component, which optimizes and transforms images. It shows how to import an image and use it with the `src` and `alt` properties. The output shows the optimized HTML `<img>` tag.

```astro
---
import { Image } from 'astro:assets';
import myImage from "../assets/my_image.png"; // Image is 1600x900
---


<!-- `alt` is mandatory on the Image component -->
<Image src={myImage} alt="A description of my image." />

```

```html
<!-- Output -->
<!-- Image is optimized, proper attributes are enforced -->
<img
  src="/_astro/my_image.hash.webp"
  width="1600"
  height="900"
  decoding="async"
  loading="lazy"
  alt="A description of my image."
/>

```

--------------------------------

### Configure Apostrophe Integration and Vite in Astro

Source: https://docs.astro.build/en/guides/cms/apostrophecms

Configures the `apostrophe-astro` integration and Vite in your `astro.config.mjs` file. This setup specifies the Apostrophe host URL, maps widget and template folders, and configures Vite's server-side rendering (SSR) by ensuring the Apostrophe Astro plugin is not externalized and defining necessary environment variables for `process.env.APOS_EXTERNAL_FRONT_KEY` and `process.env.APOS_HOST`.

```javascript
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import apostrophe from '@apostrophecms/apostrophe-astro';
import { loadEnv } from 'vite';


const env = loadEnv("", process.cwd(), 'APOS');


export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    apostrophe({
      aposHost: 'http://localhost:3000',
      widgetsMapping: './src/widgets',
      templatesMapping: './src/templates'
    })
  ],
  vite: {
    ssr: {
      // Do not externalize the @apostrophecms/apostrophe-astro plugin, we need
      // to be able to use virtual: URLs there
      noExternal: [ '@apostrophecms/apostrophe-astro' ],
    },
    define: {
      'process.env.APOS_EXTERNAL_FRONT_KEY': JSON.stringify(env.APOS_EXTERNAL_FRONT_KEY),
      'process.env.APOS_HOST': JSON.stringify(env.APOS_HOST)
    }
  }
});
```

--------------------------------

### Initialize Kontent.ai Delivery Client in Astro (kontent.ts)

Source: https://docs.astro.build/en/guides/cms/kontent-ai

Creates a Kontent.ai Delivery Client instance using credentials from environment variables. This client is then used throughout your Astro application to fetch content.

```typescript
import { createDeliveryClient } from "@kontent-ai/delivery-sdk";


export const deliveryClient = createDeliveryClient({
    environmentId: import.meta.env.KONTENT_ENVIRONMENT_ID,
    previewApiKey: import.meta.env.KONTENT_PREVIEW_API_KEY,
});
```

--------------------------------

### Fetch Articles from Strapi API - Astro

Source: https://docs.astro.build/en/guides/cms/strapi

Fetches a list of articles from the Strapi API. It imports a custom fetchApi function and an Article interface. The API call targets the 'articles' endpoint and unwraps the response using 'data'. This is used to populate a list of articles on the home page.

```astro
---
import fetchApi from '../lib/strapi';
import type Article from '../interfaces/article';


const articles = await fetchApi<Article[]>({
  endpoint: 'articles', // the content type to fetch
  wrappedByKey: 'data', // the key to unwrap the response
});
---
```

--------------------------------

### Import JavaScript with ESM in <script hoist>

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Use an ESM import within a `<script hoist>` element to include JavaScript files from the `src/` directory that support the ESM module type. Astro automatically builds, optimizes, and adds these scripts to the page, loading them in a `type="module"` context. This method is recommended for maintaining Astro's build and optimization features.

```astro
<script hoist>
  import './some-external-script.js';
</script>

```

--------------------------------

### Astro Blog Page Structure with Navigation

Source: https://docs.astro.build/en/tutorial/2-pages/1

This snippet represents the structure of a blog page in Astro, including navigation links and content specific to the blog. It follows the pattern of other pages by incorporating navigation and a unique heading.

```html
<body>
  <a href="/">Home</a>
  <a href="/about/">About</a>
  <a href="/blog/">Blog</a>


  <h1>My Astro Site</h1>
  <h1>My Astro Learning Blog</h1>
  <p>This is where I will post about my journey learning Astro.</p>
</body>
```

--------------------------------

### Configure Windsurf for Astro Docs MCP Server

Source: https://docs.astro.build/en/guides/build-with-ai

This configuration enables Windsurf to connect to the Astro Docs MCP server. Since Windsurf does not support streaming HTTP, a local proxy configuration is required. This JSON snippet defines the MCP server settings within Windsurf's configuration file.

```json
{
  "mcpServers": {
    "Astro docs": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.docs.astro.build/mcp"]
    }
  }
}
```

--------------------------------

### Astro Middleware: Rewriting on 404 Status

Source: https://docs.astro.build/en/guides/routing

Implement a middleware function using `onRequest` to conditionally rewrite the response when a 404 status code is encountered. This example redirects visitors to the homepage if the requested resource is not found, offering a fallback mechanism for broken links or missing pages.

```javascript
export const onRequest = async (context, next) => {
  const response = await next();
  if (response.status === 404) {
    return context.rewrite("/");
  }
  return response;
}

```

--------------------------------

### Applying CSS Classes with Astro's Image Component

Source: https://docs.astro.build/en/guides/images

Illustrates how to apply a CSS class to the `<img>` element generated by Astro's `<Image />` component. This allows for styling the optimized image using standard CSS. The example shows importing the component and image, then passing a `class` attribute to the `<Image />` tag.

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---


<!-- `alt` is mandatory on the Image component -->
<Image src={myImage} alt="" class="my-class" />
```

```html
<!-- Prerendered output -->
<img
  src="/_astro/my_image.hash.webp"
  width="1600"
  height="900"
  decoding="async"
  loading="lazy"
  class="my-class"
  alt=""
/>
```

--------------------------------

### Import Fontsource Font in Astro

Source: https://docs.astro.build/en/guides/fonts

This Astro code snippet demonstrates importing a font package installed via Fontsource. The import statement automatically adds the necessary @font-face CSS rules to the project, making the font available for use.

```astro
---
import '@fontsource/twinkle-star';
---
```

--------------------------------

### Including Promises Directly in Astro Template

Source: https://docs.astro.build/en/recipes/streaming-improve-page-performance

This example shows how to include promises directly in an Astro template. Promises are resolved in parallel, and only the markup following them is blocked until resolution, allowing earlier parts of the page to render while data is being fetched.

```astro
---\nconst personPromise = fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(personData => personData.results[0].name.first);
const factPromise = fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(factData => factData.fact);
---
<html>
  <head>
    <title>A name and a fact</title>
  </head>
  <body>
    <h2>A name</h2>
    <p>{personPromise}</p>
    <h2>A fact</h2>
    <p>{factPromise}</p>
  </body>
</html>
```

--------------------------------

### Specify Custom KV Binding Name for Session Storage

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

Sets a custom name for the KV binding used for session storage. This allows users to align the adapter's session management with their existing Cloudflare KV setup, enhancing flexibility.

```javascript
export default defineConfig({
  adapter: cloudflare({
    sessionKVBindingName: 'MY_SESSION_BINDING',
  }),
});

```

--------------------------------

### Build Astro Site using npm, pnpm, Yarn

Source: https://docs.astro.build/en/develop-and-build

Commands to build a deploy-ready version of your Astro site using various package managers. This process checks for build errors and type errors if TypeScript is configured strictly. The output is typically placed in a `dist/` folder.

```shell
npm run build
```

```shell
pnpm build
```

```shell
yarn run build
```

--------------------------------

### Set Environment Variables in .env Files

Source: https://docs.astro.build/en/guides/environment-variables

Load environment variables from .env files located in your project directory. Variables prefixed with PUBLIC_ are accessible both server-side and client-side, while others are server-side only. This example demonstrates setting a database password and an API endpoint.

```dotenv
# This will only be available when run on the server!
DB_PASSWORD="foobar"


# This will be available everywhere!
PUBLIC_POKEAPI="https://pokeapi.co/api/v2"
```

--------------------------------

### Accepting Form Data in Astro Actions

Source: https://docs.astro.build/en/guides/actions

This example shows how to configure an Astro action to accept form data instead of JSON. By setting `accept: 'form'` in `defineAction()`, the action can process data submitted from an HTML form. It uses Zod for input validation.

```typescript
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';


export const server = {
  comment: defineAction({
    accept: 'form',
    input: z.object(/* ... */),
    handler: async (input) => { /* ... */ },
  })
}
```

--------------------------------

### Astro Component for DatoCMS Text Block

Source: https://docs.astro.build/en/guides/cms/datocms

This Astro component, `Text.astro`, is designed to render a 'Multiple-paragraph text' block fetched from DatoCMS. It accepts a `TextProps` object containing the HTML content as a string and uses Astro's `set:html` directive for safe HTML rendering.

```astro
---
export interface TextProps {
  text: string
}

export interface Props {
  item: TextProps
}

const { item } = Astro.props;
---

<div set:html={item.text} />
```

--------------------------------

### Add Strapi URL to Astro .env File

Source: https://docs.astro.build/en/guides/cms/strapi

This snippet shows how to add the Strapi CMS URL to the Astro project's environment variables. It requires creating or updating a `.env` file in the project root. The STRAPI_URL variable is used by the application to connect to the CMS.

```shell
STRAPI_URL="http://127.0.0.1:1337" # or use your IP address
```

--------------------------------

### Configure Vue DevTools Editor Launch with Astro Vue

Source: https://docs.astro.build/en/guides/integrations-guide/vue

This snippet demonstrates how to configure the `launchEditor` option for Vue DevTools within an Astro project using the `@astrojs/vue` integration. It allows you to specify a preferred code editor to launch when inspecting Vue components. Ensure you have `@astrojs/vue` installed and configured.

```javascript
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";


export default defineConfig({
  // ...
  integrations: [
    vue({
      devtools: { launchEditor: "webstorm" },
    }),
  ],
});

```

--------------------------------

### Configure Specific Font Weights in Astro

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Specifies an array of desired font weights for a font in Astro's configuration. This example includes both numeric and string representations of weights, as well as a range for variable fonts, to control which font files are downloaded and used.

```typescript
import { defineConfig } from "astro/config";


export default defineConfig({
  experimental: {
    fonts: [{
      provider: "local",
      name: "Roboto",
      cssVariable: "--font-roboto",
      weights: [200, "400", "bold", "100 900"]
    }]
  }
});
```

--------------------------------

### Load Environment Variables in Astro Config (Vite)

Source: https://docs.astro.build/en/guides/environment-variables

Demonstrates how to load environment variables within the Astro configuration file (`astro.config.mjs`) using Vite's `loadEnv` helper. This is necessary because `import.meta.env` is not available in config files. It requires installing `vite` as a dev dependency if using `pnpm`.

```javascript
import { loadEnv } from "vite";


const { SECRET_PASSWORD } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

```

--------------------------------

### Astro getImage() Function for Server-Side Image Generation

Source: https://docs.astro.build/en/reference/modules/astro-assets

Illustrates the use of the `getImage()` function from 'astro:assets' for server-side image processing. This function is designed for generating images to be used in API Routes or custom components, not directly in HTML. It takes an options object similar to the Image component and returns a promise with image metadata and attributes. The example shows optimizing a background image to 'avif' format.

```astro
---
import { getImage } from "astro:assets";
import myBackground from "../background.png"


const optimizedBackground = await getImage({src: myBackground, format: 'avif'})
---


<div style={`background-image: url(${optimizedBackground.src});`}></div>

```

--------------------------------

### Astro Pagination Page Prop Interface

Source: https://docs.astro.build/en/guides/routing

Defines the TypeScript interface for the `page` prop passed by the `paginate()` function. It includes properties for data slicing, pagination metadata (start, end, total, currentPage, size, lastPage), and navigation URLs (current, prev, next, first, last).

```typescript
interface Page<T = any> {
  /** array containing the page’s slice of data that you passed to the paginate() function */
  data: T[];
  /** metadata */
  /** the count of the first item on the page, starting from 0 */
  start: number;
  /** the count of the last item on the page, starting from 0 */
  end: number;
  /** total number of results */
  total: number;
  /** the current page number, starting from 1 */
  currentPage: number;
  /** number of items per page (default: 10) */
  size: number;
  /** number of last page */
  lastPage: number;
  url: {
    /** url of the current page */
    current: string;
    /** url of the previous page (if there is one) */
    prev: string | undefined;
    /** url of the next page (if there is one) */
    next: string | undefined;
    /** url of the first page (if the current page is not the first page) */
    first: string | undefined;
    /** url of the last page (if the current page in not the last page) */
    last: string | undefined;
  };
}
```

--------------------------------

### Defining Astro Environment Variable Data Types

Source: https://docs.astro.build/en/guides/environment-variables

Provides examples of defining environment variables with different data types (string, number, boolean, enum) in Astro using `envField` from `astro/config`. Configuration options like `optional` and `default` are shown.

```javascript
import { envField } from "astro/config";

envField.string({
   // context & access
   optional: true,
   default: "foo",
})

envField.number({
   // context & access
   optional: true,
   default: 15,
})

envField.boolean({
   // context & access
   optional: true,
   default: true,
})

envField.enum({
   // context & access
   values: ["foo", "bar", "baz"],
   optional: true,
   default: "baz",
})
```

--------------------------------

### Astro GetStaticPaths Map Entries to Pages

Source: https://docs.astro.build/en/guides/cms/contentful

This Astro code snippet extends the getStaticPaths function to map fetched Contentful entries into a format suitable for page generation. It defines 'params' for the URL slug and 'props' for page content, title, and date, including converting Rich Text to HTML.

```astro
---
import { contentfulClient } from "../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { BlogPost } from "../../lib/contentful";


export async function getStaticPaths() {
  const entries = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
  });


  const pages = entries.items.map((item) => ({
    params: { slug: item.fields.slug },
    props: {
      title: item.fields.title,
      content: documentToHtmlString(item.fields.content),
      date: new Date(item.fields.date).toLocaleDateString(),
    },
  }));
  return pages;
}
---
```

--------------------------------

### Implement Custom Routing with Astro's Manual Mode

Source: https://docs.astro.build/en/guides/internationalization

Example of using Astro's manual i18n routing with helper functions like `redirectToDefaultLocale`. This demonstrates how to control routing logic within a custom middleware for scenarios like redirecting to the default locale index page.

```javascript
import { defineMiddleware } from "astro:middleware"
import { redirectToDefaultLocale } from "astro:i18n"> // function available with `manual` routing
export const onRequest = defineMiddleware(async (ctx, next) => {
  if (ctx.url.startsWith("/about")) {
    return next();
  } else {
    return redirectToDefaultLocale(302);
  }
})
```

--------------------------------

### Default Astro script rendering order

Source: https://docs.astro.build/en/reference/experimental-flags/preserve-scripts-order

Illustrates the default behavior of Astro when rendering multiple `<script>` tags. Scripts are executed in reverse order of their declaration. This example shows the compiled JavaScript output, with the last script's output appearing first.

```javascript
console.log("world!")
console.log("hello")
```

--------------------------------

### Astro API Route: Fetch Product by ID (GET)

Source: https://docs.astro.build/en/guides/endpoints

This Astro API route fetches product data based on an ID from the URL parameters. It handles cases where the product is not found by returning a 404 status. It's designed to work in SSR mode and returns JSON.

```javascript
import { getProduct } from "../db";


export async function GET({ params }) {
  const id = params.id;
  const product = await getProduct(id);


  if (!product) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }


  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
```

--------------------------------

### Initialize Turso Client in Astro (turso.ts)

Source: https://docs.astro.build/en/guides/backend/turso

TypeScript code to initialize a Turso client within an Astro project. It imports `createClient` from `@libsql/client/web` and uses environment variables for connection details.

```typescript
import { createClient } from "@libsql/client/web";


export const turso = createClient({
  url: import.meta.env.TURSO_DATABASE_URL,
  authToken: import.meta.env.TURSO_AUTH_TOKEN,
});

```

--------------------------------

### Marking an Astro File as a Partial

Source: https://docs.astro.build/en/basics/astro-pages

This code snippet demonstrates how to mark an Astro file as a partial by exporting a `partial` constant set to `true`. This is essential for Astro to recognize the file as a partial and handle its rendering accordingly. No external dependencies are required.

```astro
---
export const partial = true;
---
<li>I'm a partial!</li>
```

--------------------------------

### Configure Netlify Adapter for Static Sites and Redirects

Source: https://docs.astro.build/en/guides/integrations-guide/netlify

This JavaScript code configures the Netlify adapter for static Astro sites. It enables the adapter to manage redirects by translating the `redirects` configuration in `astro.config.mjs` into the `_redirects` file required by Netlify for production routing.

```javascript
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  // ...
  adapter: netlify(),
  redirects: {
    '/blog/old-post': '/blog/new-post',
  },
});
```

--------------------------------

### Render Compiled Markdown Content for RSS

Source: https://docs.astro.build/en/recipes/rss

This snippet demonstrates using the `compiledContent()` helper with glob imports to get rendered HTML content from Markdown files for RSS feeds. It sanitizes the HTML using `sanitize-html`. Note that this is not supported for MDX files.

```javascript
import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';


export async function GET(context) {
  const postImportResult = import.meta.glob('../posts/**/*.md', { eager: true });
  const posts = Object.values(postImportResult);
  return rss({
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: await Promise.all(posts.map(async (post) => ({
      link: post.url,
      content: sanitizeHtml((await post.compiledContent())),
      ...post.frontmatter,
    }))),
  });
}
```

--------------------------------

### Display Reading Time in Content Collection Pages

Source: https://docs.astro.build/en/recipes/reading-time

Demonstrates how to access and display the 'minutesRead' frontmatter property within a content collection page template in Astro. It uses `render(entry)` to get access to frontmatter properties processed by remark plugins.

```typescript
---
import { getCollection, render } from 'astro:content';


export async function getStaticPaths() {
  const blog = await getCollection('blog');
  return blog.map(entry => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}


const { entry } = Astro.props;
const { Content, remarkPluginFrontmatter } = await render(entry);
---


<html>
  <head>...</head>
  <body>
    ...
    <p>{remarkPluginFrontmatter.minutesRead}</p>
    ...
  </body>
</html>
```

--------------------------------

### Persist Astro Action Results with Netlify Blob and Session

Source: https://docs.astro.build/en/guides/actions

This snippet implements the POST / Redirect / GET pattern using Netlify Blob for session storage. It utilizes Astro middleware to capture action results, store them in a session managed by Netlify Blob, and then retrieve and set them after a redirect, effectively persisting results across page loads and preventing form resubmission warnings.

```javascript
import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';
import { randomUUID } from "node:crypto";
import { getStore } from "@netlify/blobs";


export const onRequest = defineMiddleware(async (context, next) => {
  // Skip requests for prerendered pages
  if (context.isPrerendered) return next();


  const { action, setActionResult, serializeActionResult } =
    getActionContext(context);
  // Create a Blob store to persist action results with Netlify Blob
  const actionStore = getStore("action-session");


  // If an action result was forwarded as a cookie, set the result
  // to be accessible from `Astro.getActionResult()`
  const sessionId = context.cookies.get("action-session-id")?.value;
  const session = sessionId
    ? await actionStore.get(sessionId, {
        type: "json",
      })
    : undefined;


  if (session) {
    setActionResult(session.actionName, session.actionResult);


    // Optional: delete the session after the page is rendered.
    // Feel free to implement your own persistence strategy
    await actionStore.delete(sessionId);
    context.cookies.delete("action-session-id");
    return next();
  }


  // If an action was called from an HTML form action,
  // call the action handler and redirect to the destination page
  if (action?.calledFrom === "form") {
    const actionResult = await action.handler();


    // Persist the action result using session storage
    const sessionId = randomUUID();
    await actionStore.setJSON(sessionId, {
      actionName: action.name,
      actionResult: serializeActionResult(actionResult),
    });


    // Pass the session ID as a cookie
    // to be retrieved after redirecting to the page
    context.cookies.set("action-session-id", sessionId);


    // Redirect back to the previous page on error
    if (actionResult.error) {
      const referer = context.request.headers.get("Referer");
      if (!referer) {
        throw new Error(
          "Internal: Referer unexpectedly missing from Action POST request.",
        );
      }
      return context.redirect(referer);
    }
    // Redirect to the destination page on success
    return context.redirect(context.originPathname);
  }


  return next();
});
```

--------------------------------

### Implement Form Submission Handler with Fetch API

Source: https://docs.astro.build/en/recipes/build-forms-api

This snippet demonstrates how to create a submit handler function for a form component. It prevents the default form submission, creates a `FormData` object, and sends it to the `/api/feedback` endpoint using the `fetch()` API. The response from the API is then processed to display a message. Examples are provided for Preact and React.

```javascript
import { useState } from "preact/hooks";


export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");


  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }


  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input type="text" id="name" name="name" required />
      </label>
      <label>
        Email
        <input type="email" id="email" name="email" required />
      </label>
      <label>
        Message
        <textarea id="message" name="message" required />
      </label>
      <button>Send</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}

```

```javascript
import { useState } from "react";
import type { FormEvent } from "react";


export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");


  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {

```

--------------------------------

### Control Page Output File Format (Build Format)

Source: https://docs.astro.build/en/reference/configuration-reference

This configuration snippet demonstrates how to set the `build.format` option to `'file'`. This will cause Astro to generate a distinct HTML file for each page route, such as `/about.html` instead of `/about/index.html`.

```javascript
{
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  }
}
```

--------------------------------

### Handle File Uploads in HTML Form Action

Source: https://docs.astro.build/en/guides/actions

This example shows how to configure an HTML form for file uploads when submitting to an Astro Action. It includes the `enctype="multipart/form-data"` attribute on the form, which is necessary for correctly sending file data to the server for processing with Zod schema validation.

```astro
---
import { actions } from 'astro:actions';
---
<form method="POST" action={actions.upload} enctype="multipart/form-data" >
  <label for="file">Upload File</label>
  <input type="file" id="file" name="file" />
  <button type="submit">Submit</button>
</form>

```

--------------------------------

### Generate RSS Feed with getCollection in Astro

Source: https://docs.astro.build/en/tutorial/6-islands/4

This snippet illustrates how to update an RSS feed function in an Astro project to use `getCollection('blog')`. It fetches blog posts and transforms their data into items suitable for an RSS feed, including title, publication date, description, and link.

```javascript
import rss from '@astrojs/rss';
import { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}

```

--------------------------------

### Astro GitHub Actions Deploy Workflow

Source: https://docs.astro.build/en/guides/deploy/github

This YAML file configures a GitHub Actions workflow to automatically build and deploy an Astro site to GitHub Pages upon pushing to the `main` branch. It utilizes the official Astro action for building and the deploy-pages action for deployment. Dependencies include `actions/checkout`, `withastro/action`, and `actions/deploy-pages`. It requires permissions for `contents`, `pages`, and `id-token`.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site
        uses: withastro/action@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

--------------------------------

### Configure Wrangler Preview Script for Astro

Source: https://docs.astro.build/en/guides/integrations-guide/cloudflare

These snippets show how to configure the `preview` script in your `package.json` to run Astro applications locally using Wrangler. Choose the appropriate command based on whether you are deploying a Worker or a Pages function.

```json
"preview": "wrangler dev"

```

```json
"preview": "wrangler pages dev ./dist"

```

--------------------------------

### class:list Directive Example - Astro

Source: https://docs.astro.build/en/reference/directives-reference

Demonstrates the `class:list` directive in Astro, which takes an array of class values (strings, objects, arrays) and converts them into a single class string for an element. It leverages the clsx library for flexible class manipulation. Values like false, null, or undefined are skipped.

```astro
<span class:list={[ 'hello goodbye', { world: true }, [ 'friend' ] ]} />
```

--------------------------------

### Displaying Dynamic Blog Posts in Astro with Builder.io

Source: https://docs.astro.build/en/guides/cms/builderio

This snippet demonstrates how to create dynamic routes for blog posts using Astro's getStaticPaths and fetch data from the Builder.io API. It includes fetching post slugs and titles for static routing and then fetching the full HTML content for a specific post based on its slug. Environment variables for Builder API keys and model names are assumed.

```astro
---
export async function getStaticPaths() {
  const builderModel = import.meta.env.BUILDER_BLOGPOST_MODEL;
  const builderAPIpublicKey = import.meta.env.BUILDER_API_PUBLIC_KEY;
  const { results: posts } = await fetch(
    `https://cdn.builder.io/api/v3/content/${builderModel}?${new URLSearchParams(
      {
        apiKey: builderAPIpublicKey,
        fields: ["data.slug", "data.title"].join(","),
        cachebust: "true",
      }
    ).toString()}`
  )
    .then((res) => res.json())
    .catch
    // ...catch some errors...
    ();
  return posts.map(({ data: { slug, title } }) => ({
    params: { slug },
    props: { title },
  }))
}
const { slug } = Astro.params;
const { title } = Astro.props;
const builderModel = import.meta.env.BUILDER_BLOGPOST_MODEL;
const builderAPIpublicKey = import.meta.env.BUILDER_API_PUBLIC_KEY;
// Builder's API requires this field but for this use case the url doesn't seem to matter - the API returns the same HTML
const encodedUrl = encodeURIComponent("moot");
const { html: postHTML } = await fetch(
  `https://cdn.builder.io/api/v1/qwik/${builderModel}?${new URLSearchParams({
    apiKey: builderAPIpublicKey,
    url: encodedUrl,
    "query.data.slug": slug,
    cachebust: "true",
  }).toString()}`
)
  .then((res) => res.json())
  .catch();
---
<html lang="en">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <header>This is your header</header>
    <article>
      <Fragment set:html={postHTML} />
    </article>
    <footer>This is your footer</footer>
  </body>
</html>

```

--------------------------------

### Fetch and Render Contentful Blog Posts in Astro

Source: https://docs.astro.build/en/guides/cms/contentful

Demonstrates fetching blog post entries from Contentful and rendering them in an Astro component. It utilizes the Contentful client and the rich text renderer to display titles and rich text content. Assumes a 'blogPost' content type with 'title' and 'content' fields.

```astro
---
import { contentfulClient } from "../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { EntryFieldTypes } from "contentful";


interface BlogPost {
  contentTypeId: "blogPost",
  fields: {
    title: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText,
  }
}


const entries = await contentfulClient.getEntries<BlogPost>({
  content_type: "blogPost",
});
---
<body>
  {entries.items.map((item) => (
    <section>
      <h2>{item.fields.title}</h2>
      <article set:html={documentToHtmlString(item.fields.content)}></article>
    </section>
  ))}
</body>
```

--------------------------------

### Authorize Users in Astro Action Handler

Source: https://docs.astro.build/en/guides/actions

This example demonstrates how to add an authentication check directly within an Astro action handler. It uses `context.locals.user` to verify user authorization and throws an `ActionError` with the 'UNAUTHORIZED' code if the user is not authenticated. This is crucial for protecting sensitive action endpoints.

```typescript
import { defineAction, ActionError } from 'astro:actions';


export const server = {
  getUserSettings: defineAction({
    handler: async (_input, context) => {
      if (!context.locals.user) {
        throw new ActionError({ code: 'UNAUTHORIZED' });
      }
      return { /* data on success */ };
    }
  })
}
```

--------------------------------

### Configure Vitest with Astro's getViteConfig

Source: https://docs.astro.build/en/guides/testing

Sets up Vitest for an Astro project using the `getViteConfig()` helper. This ensures Vitest uses your Astro project's settings for its test environment. It can also be customized with additional Astro configuration options.

```typescript
/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';


export default getViteConfig({
  test: {
    // Vitest configuration options
  },
});

```

```typescript
export default getViteConfig(
  { test: { /* Vitest configuration options */ } },
  {
    site: 'https://example.com/',
    trailingSlash: 'always',
  },
);

```

--------------------------------

### Astro inferRemoteSize() for Remote Image Dimensions

Source: https://docs.astro.build/en/reference/modules/astro-assets

Shows how to use the `inferRemoteSize()` function from 'astro:assets' to automatically determine the width and height of remote images. This function takes a URL as input and returns a promise with the image's dimensions, offering an alternative to manually specifying the `inferSize` property. The example retrieves dimensions for an image hosted on an external domain.

```javascript
import { inferRemoteSize } from 'astro:assets';
const {width, height} = await inferRemoteSize("https://example.com/cat.png");

```

--------------------------------

### Generate Tag Pages with Astro Collections

Source: https://docs.astro.build/en/tutorial/6-islands/4

This code dynamically generates pages for each tag based on blog post data fetched using Astro's content collections. It identifies unique tags, filters posts by tag, and creates a page for each tag, displaying a list of associated blog posts. The URL for each post is constructed using its ID.

```astro
---import { getCollection } from "astro:content";
import BaseLayout from "../../layouts/BaseLayout.astro";
import BlogPost from "../../components/BlogPost.astro";

export async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];

  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) =>
      post.data.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts },
    };
  });
}

const { tag } = Astro.params;
const { posts } = Astro.props;
---

<BaseLayout pageTitle={tag}>
  <p>Posts tagged with {tag}</p>
  <ul>
    { posts.map((post) => <BlogPost url={`/posts/${post.id}/`} title={post.data.title} />) }
  </ul>
</BaseLayout>
```

--------------------------------

### Implement URL Fetching and Deserialization in TypeScript

Source: https://docs.astro.build/en/guides/cms/drupal

Implements the `fetchUrl` function in TypeScript, responsible for making HTTP requests to a given URL, parsing the JSON response, and deserializing it using the `Jsona` library. This function serves as a core utility for interacting with the Drupal API, handling both single resources and collections.

```typescript
import {
    Jsona
} from "jsona";
import {
    DrupalJsonApiParams
} from "drupal-jsonapi-params";
import type {
    DrupalNode
} from "../types.ts";
import type {
    TJsonApiBody
} from "jsona/lib/JsonaTypes";


// Get the Drupal Base Url.
export const baseUrl: string = import.meta.env.DRUPAL_BASE_URL;


/**
 * Fetch url from Drupal.
 *
 * @param url
 *
 * @return Promise<TJsonaModel | TJsonaModel[]> as Promise<any>
 */
export const fetchUrl = async (url: string): Promise<any> => {
    const request: Response = await fetch(url);
    const json: string | TJsonApiBody = await request.json();
    const dataFormatter: Jsona = new Jsona();
    return dataFormatter.deserialize(json);
}
```

--------------------------------

### Scoped CSS Specificity Change in Astro

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Illustrates the change in how Astro handles scoped CSS specificity. Previously, Astro increased specificity using classes, but now uses `:where()` to preserve authored specificity, improving compatibility with external CSS like Tailwind or CSS Modules.

```html
<style>
  div { color: red; } /* 0-0-1 specificity */
</style>
```

```css
div~~.astro-XXXXXX~~ { color: red; } /* 0-1-1 specificity */
```

```css
div:where(.astro-XXXXXX) { color: red; } /* 0-0-1 specificity */
```

--------------------------------

### Configure Astro Fonts API with Google Fonts

Source: https://docs.astro.build/en/reference/experimental-flags/fonts

Configures the experimental Fonts API in Astro to use the Roboto font family from Google Fonts. It specifies the provider, font name, and a CSS variable for referencing the font. This setup is part of the Astro configuration file.

```javascript
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
    experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Roboto",
            cssVariable: "--font-roboto"
        }]
    }
});
```

--------------------------------

### Manual Process.env Reference for Private Variables

Source: https://docs.astro.build/en/reference/experimental-flags/static-import-meta-env

Previously, non-public environment variables accessed through import.meta.env might have been replaced with a reference to process.env. With the experimental.staticImportMetaEnv flag, this transformation is removed. This example shows how to manually access private environment variables using process.env if needed.

```javascript
const enabled: boolean = process.env.DB_PASSWORD;
```

--------------------------------

### Nest MarkdownPostLayout within BaseLayout in Astro

Source: https://docs.astro.build/en/tutorial/4-layouts/3

This snippet shows how to import and use BaseLayout.astro within MarkdownPostLayout.astro to wrap the existing template content. It passes the pageTitle prop and includes frontmatter details like title, date, description, and author. Ensure meta tags are handled by the BaseLayout.

```astro
---\nimport BaseLayout from './BaseLayout.astro';
const { frontmatter } = Astro.props;
---\n<BaseLayout pageTitle={frontmatter.title}>
  <h1>{frontmatter.title}</h1>
  <p>{frontmatter.pubDate.toString().slice(0,10)}</p>
  <p><em>{frontmatter.description}</em></p>
  <p>Written by: {frontmatter.author}</p>
  <img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />
  <slot />
</BaseLayout>
```

--------------------------------

### Astro Nested Pagination: Implementing Grouped Pagination

Source: https://docs.astro.build/en/guides/routing

Demonstrates nested pagination in Astro by returning an array of `paginate()` results from `getStaticPaths()`. This setup allows grouping paginated content by a dynamic route parameter, such as a 'tag'. It filters posts by tag and passes the `tag` in the `params` option to `paginate()`.

```astro
---
export function getStaticPaths({ paginate }) {
  const allTags = ["red", "blue", "green"];
  const allPosts = Object.values(import.meta.glob("../pages/post/*.md", { eager: true }));
  // For every tag, return a `paginate()` result.
  // Make sure that you pass `{ params: { tag }}` to `paginate()`
  // so that Astro knows which tag grouping the result is for.
  return allTags.flatMap((tag) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.tag === tag);
    return paginate(filteredPosts, {
      params: { tag },
      pageSize: 10
    });
  });
}


const { page } = Astro.props;
const params = Astro.params;

---

```

--------------------------------

### Astro: Markdown frontmatter for blog posts

Source: https://docs.astro.build/en/tutorial/5-astro-api/1

This code block shows the frontmatter structure for an Astro Markdown blog post. It includes essential properties like layout, title, author, description, image, publication date, and tags, which are used by the Astro build process and the dynamic listing component.

```markdown
---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Fourth Blog Post
author: Astro Learner
description: "This post will show up on its own!"
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes"]
---
This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.
```

--------------------------------

### Configure Astro Docs MCP Server (HTTP)

Source: https://docs.astro.build/en/guides/build-with-ai

This JSON configuration sets up the Astro Docs MCP server using a streamable HTTP transport. It's used by AI tools to access the latest Astro documentation in real-time. Ensure the URL is correct and the AI tool supports HTTP transport.

```json
{
  "mcpServers": {
    "Astro docs": {
      "type": "http",
      "url": "https://mcp.docs.astro.build/mcp"
    }
  }
}
```

--------------------------------

### Reference Astro JSX Types in TypeScript

Source: https://docs.astro.build/en/guides/typescript

This example shows how to use a triple-slash directive to reference Astro's JSX types in a TypeScript file, enabling the use of `astroHTML` within non-`.astro` files. It then demonstrates creating a type alias for custom image attributes.

```typescript
/// <reference types="astro/astro-jsx" />


type MyAttributes = astroHTML.JSX.ImgHTMLAttributes;

```

--------------------------------

### Astro: Import and use BlogPost component on Blog page

Source: https://docs.astro.build/en/tutorial/5-astro-api/1

This code demonstrates how to import and utilize the BlogPost component within an Astro page to dynamically render a list of blog posts. It uses import.meta.glob() to fetch post data and then maps over it, passing each post's URL and title to the BlogPost component.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import BlogPost from '../components/BlogPost.astro';
const allPosts = Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));
const pageTitle = "My Astro Learning Blog";
---
<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    {allPosts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title} />)}
  </ul>
</BaseLayout>
```

--------------------------------

### Default Astro style rendering order

Source: https://docs.astro.build/en/reference/experimental-flags/preserve-scripts-order

Illustrates the default behavior of Astro when rendering multiple `<style>` tags. Styles are rendered in reverse order of their declaration, leading to later styles potentially overriding earlier ones. This example shows the compiled CSS output.

```css
body {background:#ff0} body {background:red}
```

--------------------------------

### Get User Session Data in Astro Server-Side Code

Source: https://docs.astro.build/en/guides/authentication

This Astro server-side code snippet retrieves the current user's session data using the `auth.api.getSession` method, utilizing request headers. It then displays the user's name if available.

```astro
---
import { auth } from "../../../lib/auth"; // import your Better Auth instance


export const prerender = false; // Not needed in 'server' mode


const session = await auth.api.getSession({
  headers: Astro.request.headers,
});
---


<p>{session.user?.name}</p>

```

--------------------------------

### Exclude Namespaces in Astro Sitemap

Source: https://docs.astro.build/en/guides/integrations-guide/sitemap

This example demonstrates how to exclude specific XML namespaces (like 'news' or 'xhtml') from the generated sitemap using the `namespaces` configuration in the Astro Sitemap integration. This helps create more focused sitemaps, improving parsing efficiency for search engines.

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://example.com',
  integrations: [
    sitemap({
      namespaces: {
        news: false,
        xhtml: false,
      }
    })
  ]
});
```

--------------------------------

### Display Drupal Articles in Astro

Source: https://docs.astro.build/en/guides/cms/drupal

This snippet demonstrates how to fetch published Drupal articles using `getArticles` and render them as a list of links within an Astro page. It uses `articles.map()` to iterate over the fetched articles and display their title and publication date. Dependencies include 'jsona', 'drupal-jsonapi-params', and local type definitions.

```astro
---
import { Jsona } from "jsona";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import type { TJsonApiBody } from "jsona/lib/JsonaTypes";


import type { DrupalNode } from "../types";
import { getArticles } from "../api/drupal";


// Get all published articles.
const articles = await getArticles();
---
<html lang="en">
  <head>
    <title>My news site</title>
  </head>
  <body>
    <h1>My news site</h1>
    <ul>
      {articles.map((article: DrupalNode) => (
        <li>
          <a href={article.path.alias.replace("internal:en/", "")}>
            <h2>{article.title}</h2>
            <p>Published on {article.created}</p>
          </a>
        </li>
      ))}
    </ul>
  </body>
</html>

```

--------------------------------

### Astro Formatting Contentful Blog Post Data

Source: https://docs.astro.build/en/guides/cms/contentful

Processes fetched blog post data from Contentful, converting the date to a locale string and rich text content to HTML using documentToHtmlString. It then structures this data into a 'post' object. Assumes contentfulClient, documentToHtmlString, and BlogPost type are available.

```astro
---
import Layout from "../../layouts/Layout.astro";
import { contentfulClient } from "../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { BlogPost } from "../../lib/contentful";


let post;
const { slug } = Astro.params;
try {
  const data = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
    "fields.slug": slug,
  });
  const { title, date, content } = data.items[0].fields;
  post = {
    title,
    date: new Date(date).toLocaleDateString(),
    content: documentToHtmlString(content),
  };
} catch (error) {
  return Astro.redirect("/404");
}
---
```

--------------------------------

### Dynamic Routing for JSON Endpoint - Astro

Source: https://docs.astro.build/en/guides/endpoints

Implements dynamic routing for an API endpoint. By defining a `getStaticPaths()` function and using bracketed parameters in the filename, Astro generates multiple JSON endpoints at build time. The `params` object in the GET function provides access to these dynamic route parameters.

```typescript
import type { APIRoute } from "astro";


const usernames = ["Sarah", "Chris", "Yan", "Elian"];


export const GET: APIRoute = ({ params, request }) => {
  const id = params.id;


  return new Response(
    JSON.stringify({
      name: usernames[id],
    }),
  );
};


export function getStaticPaths() {
  return [
    { params: { id: "0" } },
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ];
}
```

--------------------------------

### Fetch Articles for Dynamic Routing in Astro

Source: https://docs.astro.build/en/guides/cms/drupal

This code snippet demonstrates how to fetch all published articles from Drupal using the `getArticles` function. It's a preliminary step within the `getStaticPaths` function in Astro to gather data for generating individual blog post routes. It requires the `getArticles` function from `src/api/drupal.ts` and the `DrupalNode` type definition.

```astro
import {
	Jsona
} from "jsona";
import {
	DrupalJsonApiParams
} from "drupal-jsonapi-params";
import type {
	TJsonaBody
} from "jsona/lib/JsonaTypes";


import type {
	DrupalNode
} from "../../types";
import {
	getArticles
} from "../../api/drupal";


// Get all published articles.
export async function getStaticPaths() {
	const articles = await getArticles();
}
```

--------------------------------

### Astro Page Template for Dynamic Post Content

Source: https://docs.astro.build/en/guides/cms/hashnode

This Astro template displays dynamic post content, including title, cover image, reading time, and the full HTML content. It utilizes the `post` object fetched in the previous step and leverages Astro's `<Fragment set:html={...} />` for rendering raw HTML safely.

```astro
import { getAllPosts, getPost } from '../../lib/client';



export async function getStaticPaths() {
  const data = await getAllPosts();
  const allPosts = data.publication.posts.edges;
  return allPosts.map((post) => {
    return {
      params: { slug: post.node.slug },
    }
  })
}
const { slug } = Astro.params;
const post = await getPost(slug);



---
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{post.title}</title>
    </head>
    <body>
        <img src={post.coverImage.url} alt={post.title} />


        <h1>{post.title}</h1>
        <p>{post.readTimeInMinutes} min read</p>


        <Fragment set:html={post.content.html} />
    </body>
</html>


```

--------------------------------

### Build and Push Docker Image for Cloud Run

Source: https://docs.astro.build/en/guides/deploy/google-cloud

Commands to build a Docker image locally, tag it for a registry, and push it to a registry like Google Artifact Registry or Docker Hub. Ensure you replace placeholders with your project-specific details.

```shell
# build your container
docker build .

docker tag SOURCE_IMAGE HOSTNAME/PROJECT-ID/TARGET-IMAGE:TAG

# Push your image to a registry
docker push HOSTNAME/PROJECT-ID/IMAGE:TAG
```

--------------------------------

### Pass Custom Components to MDX Content - Astro

Source: https://docs.astro.build/en/guides/integrations-guide/mdx

Illustrates how to pass custom components to the `<Content />` component when rendering MDX content in Astro. This example shows merging predefined components from an MDX file with a custom `h1` component. It requires importing both `Content` and `components` from the MDX file.

```astro
---
import { Content, components } from '../content.mdx';
import Heading from '../Heading.astro';
---
<!-- Creates a custom `<h1>` for the # syntax, _and_ applies any custom components defined in `content.mdx` -->
<Content components={{...components, h1: Heading }} />

```

--------------------------------

### Extend Astro's i18n Middleware with Custom Logic

Source: https://docs.astro.build/en/guides/internationalization

This example shows how to extend Astro's i18n middleware using the `sequence` utility. It allows combining custom middleware logic with Astro's built-in routing, enabling exceptions or specific handling for certain routes while respecting the overall i18n configuration.

```javascript
import {defineMiddleware, sequence} from "astro:middleware"
import { middleware } from "astro:i18n"> // Astro's own i18n routing config


export const userMiddleware = defineMiddleware(async (ctx, next) => {
  // this response might come from Astro's i18n middleware, and it might return a 404
  const response = await next();
  // the /about page is an exception and we want to render it
  if (ctx.url.startsWith("/about")) {
    return new Response("About page", {
      status: 200
    });
  } else {
    return response;
  }
});




export const onRequest = sequence(
  userMiddleware,
  middleware({
    redirectToDefaultLocale: false,
    prefixDefaultLocale: true
  })
)
```

--------------------------------

### Initialize Supabase Client in Astro

Source: https://docs.astro.build/en/guides/backend/supabase

Create a Supabase client instance in your Astro project's src/lib/supabase.ts file. This client will be used to make requests to your Supabase project, leveraging the environment variables for authentication.

```typescript
import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
);
```

--------------------------------

### Blocking Data Fetch in Astro Frontmatter

Source: https://docs.astro.build/en/recipes/streaming-improve-page-performance

This example shows how Astro waits for all fetch calls in the frontmatter to resolve before sending any HTML to the browser, thus blocking page rendering. It fetches data for a random person's name and a random cat fact.

```astro
---\nconst personResponse = await fetch('https://randomuser.me/api/');
const personData = await personResponse.json();
const randomPerson = personData.results[0];
const factResponse = await fetch('https://catfact.ninja/fact');
const factData = await factResponse.json();
---
<html>
  <head>
    <title>A name and a fact</title>
  </head>
  <body>
    <h2>A name</h2>
    <p>{randomPerson.name.first}</p>
    <h2>A fact</h2>
    <p>{factData.fact}</p>
  </body>
</html>
```

--------------------------------

### Astro Script Behavior Change (v0.25 to v0.26+)

Source: https://docs.astro.build/en/guides/upgrade-to/v1

Demonstrates the change in Astro's default script tag behavior from v0.25 to v0.26+. Previously, `hoist` was an attribute, but now it's the default behavior. Developers should remove explicit attributes like `type='module'` for the new default. The `is:inline` directive can be used to revert to the old behavior.

```astro
<script hoist type="module">
// v0.26+
<script>
```

--------------------------------

### Import Astro Footer Component

Source: https://docs.astro.build/en/tutorial/3-components/2

Shows how to import the previously created Footer component into an Astro page. It's typically placed before the closing `</body>` tag to ensure the footer appears at the bottom of the page content.

```astro
import Footer from '../components/Footer.astro';

```

```astro
<Footer />
  </body>
</html>

```
