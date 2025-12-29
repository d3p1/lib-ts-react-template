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

1. Click [`Use this template`](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) button to create a fresh repository that uses this template.

2. Inside your new repository, configure a [`NPM_TOKEN` repository secret](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets#creating-secrets-for-a-repository). This is used by the [GitHub Actions that automate the release workflow](./.github/workflows/release.yml) and should contain a valid [`npm` token](https://docs.npmjs.com/creating-and-viewing-access-tokens). It should have read and write permission, and it should bypass the 2FA because it is used in this *CD* workflow.

3. Update the [`package.json`](./package.json) file so it reflects your library information and needs:
   - `name`: Set your library name.
   - `version`: Start a fresh library with version `0.0.0`.
   - `description`: Add a useful description.
   - `repository`: Define the repository information.
   - `author`: Add the author information.
   - `bugs`: Set a page where the community can report issues.
   - `homepage`: Define a proper homepage for your library. For instance, a link to its [`README.md`](./README.md) file.
   - `keywords`: Add proper keywords.

4. Install project dependencies with `npm install` and run the development server with `npm run dev`.

5. Start your library development. This template comes with sample code inside the [`src` folder](./src). The only important thing to notice is that every feature your library wants to export should be defined inside [`src/core/index.ts`](./src/core/index.ts) and [`src/react/index.ts`](./src/react/index.ts). This is because [they are defined as the entry points of your library](https://github.com/d3p1/lib-ts-react-template/blob/main/vite.config.ts#L17). On top of that, every commit you do must follow this [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format: `<type>(<scope>): <description> [<issue-number>]`. This is because of the [GitHub Actions that reads and analyze every commit to generate the release](./.github/workflows/release.yml).

6. Install your library in the development site that comes with this template to do a quick validation. Go to the [`dev folder`](./dev), remove the `dependencies` from the [`package.json`](./dev/package.json), and execute `npm install ../`. This will install the local library. Update the [sample code](./dev/index.html) and visit `http://localhost:5173/dev/` to check the implementation.

7. Once your library development is completed, you can start the implementation of a demo site. This template comes with a [Next.js](https://nextjs.org/) sample site inside the [`www folder`](./www). There is a [GitHub Action that deploys it on every push](./.github/workflows/deploy-demo.yml). To begin with, update the `basePath` setting inside the [`next.config.ts`](./www/next.config.ts). It should match your repository slug (e.g. `/my-repo-name/`). Then, you can update the [sample code](./www/app) and visit `http://localhost:3000/my-repo-name` to check the implementation. Finally, remember to [enable GitHub Pages with GitHub Actions for your repository](http://localhost:3000/lib-ts-react-template).  

8. Update the [`README.md`](./README.md) so it explains what your library does and how to use it. Remember to update the `release` badge that appears at the top of this [`README.md`](./README.md) if you want to keep it. It is pointing to this repository.  

> [!NOTE]
> To gain a deeper understanding of how to use this library and how it works under the hood, visit the [wiki page](https://github.com/d3p1/lib-ts-react-template/wiki).

> [!NOTE]
> At the moment this document was written, it seems that there is no way to create more restricted `npm` tokens that can be used inside *CD* workflows. However, it is recommended to create a token that has only access to the developed library. To do this, you will need to publish the package one time so it is available in your account. For instance, you can login using `npm login` and then publish it using `npm publish`. Then, you will be able to create a token that can have access to this package only.

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