# Monorepo Accelerator

A monorepo project accelerator ready to help get your project off the ground quickly.

## Table of Contents

1. [Authors](#authors)
2. [Technologies Used](#technologies-used-⚙️)
3. [Monorepo Project Structure](#monorepo-project-structure)
4. [Project Setup Instructions](#project-setup-instructions-🚀)
5. [Available Scripts](#available-scripts)
6. [Branching Strategy](#branching-strategy)
7. [Branch Naming Convention](#branch-naming-convention)

## Author

**Cody Wahl** codywahl@gmail.com

## Technologies Used ⚙️

- **[Node.js](https://nodejs.org/)** - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[TypeScript](https://www.typescriptlang.org/)** - A typed superset of JavaScript that compiles to plain JavaScript.
- **[pnpm](https://pnpm.io/)** - A fast, disk space-efficient package manager.
- **[ESLint](https://eslint.org/)** - A tool for identifying and fixing problems in JavaScript code.
- **[Prettier](https://prettier.io/)** - An opinionated code formatter.
- **[cspell](https://github.com/streetsidesoftware/cspell)** - A spell checker for code.
- **[Husky](https://typicode.github.io/husky/)** - Git hooks made easy, used for running scripts before committing.
- **[lint-staged](https://github.com/okonet/lint-staged)** - Runs linters on staged git files.
- **[Jest](https://jestjs.io/)** - A JavaScript testing framework.
- **[ts-jest](https://kulshekhar.github.io/ts-jest/)** - A Jest transformer for TypeScript.
- **[Turbo](https://turbo.build/)** - A high-performance build system for JavaScript and TypeScript.

## Branching Strategy

We follow a trunk-based development strategy for our branching model. This approach involves developers frequently integrating their changes into the main branch (trunk), which helps to minimize merge conflicts and ensures that the codebase remains stable and up-to-date.

For more details on trunk-based development, please refer to this [comprehensive guide](https://trunkbaseddevelopment.com/).

## Monorepo Project Structure

This project utilizes a monorepo structure, which means that multiple packages are managed within a single repository. This approach offers several benefits and is particularly well-suited for projects with interdependent components. Additionally, we use `pnpm workspaces` to manage dependencies and scripts across the different packages efficiently.

### Workspaces / Packages

The following packages make up the project.

- **[Backend](packages/backend/README.md)**: Contains the server-side code and business logic.
- **[Frontend](packages/frontend/README.md)**: Contains the client-side code and user interface.
- **[Shared](packages/shared/README.md)**: Contains shared utilities and components used by both the backend and frontend.

Each package has its own directory within the repository and includes its own `README.md` file for more detailed information.

## Project Setup Instructions 🚀

Follow these steps to set up the project on your local machine after cloning the repository:

1. **Install Node.js**

   Ensure you have Node.js installed on your machine. You can download and install it from [Node.js](https://nodejs.org/).

2. **Install pnpm**

   This project uses `pnpm` as the package manager. Install `pnpm` globally using the following command:

   ```sh
   npm install -g pnpm
   ```

3. **Install Dependencies**

   Navigate to the root directory of the project and install all dependencies using `pnpm`:

   ```sh
   pnpm install
   ```

That's it! ✨ You're ready to start running any of the available scripts.

## Available Scripts

The root `package.json` provides several scripts to help with development, building, and testing the project. Here are the main scripts available:

- **`lint`**: Lints the codebase using ESLint to identify and fix potential issues.
- **`format`**: Formats the codebase using Prettier to ensure consistent code style.
- **`spell-check`**: Runs spellcheck using cspell.
- **`typecheck`**: Run typechecking across the TS solutions.
- **`test`**: Run tests across the solution.

** TODO: Add descriptions of build scripts etc as they're added **

These scripts can be run from the root directory of the project using `pnpm run <script-name>`. For example, to build the project, you would run:

```sh
pnpm run build
```

## Branch Naming Convention

To maintain a consistent and organized workflow, we follow a specific branch naming convention. All branch names must match the following pattern:

```sh
(chore|feat|bug|hotfix)/{project name}-{story number}
```

An optional description can also be added after the issue number, separated by a hyphen.

### Examples

- `feat/eum-123-add-login-feature`
- `bug/monorepo-456-fix-header-alignment`
- `chore/nvidia-789-update-dependencies`
- `hotfix/khi-101-critical-security-patch`
