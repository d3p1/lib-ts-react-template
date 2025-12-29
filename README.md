<div align=center>

# [LIBRARY TYPESCRIPT-REACT TEMPLATE]

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Release](https://github.com/d3p1/lib-ts-react-template/actions/workflows/release.yml/badge.svg)](https://github.com/d3p1/lib-ts-react-template/actions/workflows/release.yml)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

</div> 

## Introduction

A template to build [TypeScript](https://www.typescriptlang.org/) libraries with both [Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [React](https://react.dev/) entry points.

The goal of this template is to simplify the process of creating, maintaining, and publishing libraries. It provides a ready-to-use setup with sensible defaults, including an [automated release workflow triggered on every push to the repository](./.github/workflows/release.yml).

## Usage

Using this library is straightforward:

### 1. Create a repository

Click the **[Use this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)** button to create a new repository based on this template.

### 2. Configure `npm` authentication

Create an **`NPM_TOKEN` repository secret** in your new repository. The token must be a valid [npm access token](https://docs.npmjs.com/creating-and-viewing-access-tokens) with **read and write permissions**. On top of that, it must **bypass 2FA**, as it is used in a *CD* workflow.

> [!NOTE]
> Follow GitHub’s guide to [create repository secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets#creating-secrets-for-a-repository).

> [!NOTE]
> This token is required by the [automated release workflow](./.github/workflows/release.yml).

### 3. Update `package.json`

Edit the [package.json](./package.json) file to reflect your library’s metadata:

- `name` – Your library name
- `version` – Start at `0.0.0`
- `description` – Short and meaningful description
- `repository` – Repository URL
- `author` – Author information
- `bugs` – Issue tracker URL
- `homepage` – Project homepage (e.g. the README)
- `keywords` – Relevant keywords for discoverability

### 4. Install dependencies and start development

Execute the following commands:

```bash
npm install
npm run dev
```

### 5. Develop your library

This template comes with sample code inside the [`src` folder](./src). 

The only important thing to notice is that every feature your library wants to export should be defined inside [`src/core/index.ts`](./src/core/index.ts) and [`src/react/index.ts`](./src/react/index.ts). 

> [!NOTE]
> [`src/core/index.ts`](./src/core/index.ts) and [`src/react/index.ts`](./src/react/index.ts) are defined as [the entry points of your library](https://github.com/d3p1/lib-ts-react-template/blob/main/vite.config.ts#L17). 
 
On top of that, every commit must follow this [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format: 

```
<type>(<scope>): <description> [<issue-number>]
``` 

> [!NOTE]
> This is required by the [release workflow, which analyzes every commit to automatically generate the releases](./.github/workflows/release.yml).

### 6. Validate locally using the dev site

This template includes a local development site under the [`dev folder`](./dev).

Remove the `dependencies` from the [`package.json`](./dev/package.json), and execute `npm install ../`. This will install the local library. 

Update the [sample code](./dev/index.html) and visit `http://localhost:5173/dev/` to check the implementation.

### 7. Build a demo site

A sample [Next.js](https://nextjs.org/) demo site is included in the [`www folder`](./www).

> [!NOTE]
> There is a [GitHub Action that deploys it on every push](./.github/workflows/deploy-demo.yml).

To begin with, update the `basePath` setting inside the [`next.config.ts`](./www/next.config.ts). It should match your repository slug (e.g. `/my-repo-name/`).

Then, you can update the [sample code](./www/app) and visit `http://localhost:3000/my-repo-name` to check the implementation. 

Finally, remember to [enable GitHub Pages with GitHub Actions for your repository](http://localhost:3000/lib-ts-react-template).

### 8. Finalize documentation

Update the [`README.md`](./README.md) to describe your library’s purpose and usage.

> [!IMPORTANT]
> Don’t forget to update the release badge URL at the top of this file if you keep it — it currently points to this repository.

> [!NOTE]
> To gain a deeper understanding of how to use this library and how it works under the hood, visit the [wiki page](https://github.com/d3p1/lib-ts-react-template/wiki).

> [!NOTE]
> At the time of writing, it seems `npm` does not support fine-grained tokens for *CD* workflows. A recommended workaround is to publish the package once using the CLI: `npm login` and then `npm publish`. Then, create a token restricted to that specific package.

> [!NOTE]
> There is a [ticket](https://github.com/d3p1/lib-ts-react-template/issues/4) to add testing tools to improve the library's validation workflow.

## Changelog

Detailed changes for each release are documented in [`CHANGELOG.md`](./CHANGELOG.md).

## License

This work is published under [MIT License](./LICENSE).

## Author

Always happy to receive a greeting on:

- [LinkedIn](https://www.linkedin.com/in/cristian-marcelo-de-picciotto/)
- [Web](https://d3p1.dev/)