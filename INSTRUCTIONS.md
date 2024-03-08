# Instructions for adding new documentation about schematics

Thank you for your interest in contributing to our documentation. This guide will walk you through the process of creating new documentation pages using Starlight and Astro, ensuring that your contributions fit seamlessly into our project.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (version 20 or higher)

Additionally, familiarize yourself with the basics of:

- [Astro documentation](https://docs.astro.build)
- [Starlight (if applicable)](https://starlight.example.com/docs)

## Setting Up Your Environment

1. **Fork and clone the repository**:

```shell
git clone https://github.com/yourusername/your-forked-repo.git
cd your-forked-repo
```

2. **Install dependencies:**

```sh
npm install
```

3. **Start the development server:**

```sh
npm run dev
```

## Creating New Documentation

1. **Planning Your Document**

- Identify the need: Is this a tutorial, a guide, or reference documentation?
- Determine the scope: What topics will you cover? What will you not cover?
- Define your audience: Are they beginners or experienced developers?

2. **Structuring Your Document**

- **Introduction**: Clearly state the purpose of the document and what the reader will learn.
- **Prerequisites**: List any required knowledge, software, or materials.
- **Step-by-Step Guide**: Break down the process into detailed steps.
- **Examples**: Provide practical examples to illustrate your points.
- **Best Practices**: Share insights and tips for success.
- **Conclusion**: Recap the key takeaways and possibly suggest next steps.

3. **Writing in Markdown with Astro**

- Create a new file in the `src/content/docs` directory. Name it appropriately based on your content.
- Use Markdown .md files for your content. Astro allows you to embed Vue, React, Svelte, or plain HTML components within Markdown files if needed.

4. **Adding Documentation Content**

- **Headers**: Use headers to organize your content logically. Start with `#` for main titles, `##` for section titles, and so on.
- **Links**: Use relative links for internal documentation references and absolute URLs for external references.
- **Images**: Place images in the /src/assets/images directory and reference them using Markdown syntax `![Alt text](/images/your-image.png)`.

## Submitting Your Documentation

Once you've completed your documentation:

1. **Commit your changes:** Add and commit your changes with a descriptive commit message.

```sh
git add .
git commit -m "Add documentation for <feature or topic>"
```

2. **Push to GitHub**: Push your changes to your forked repository.

```sh
git push origin main
```

3. **Create a pull request**: Head to the original repository on GitHub and create a new pull request. Fill in the pull request template with details about your documentation contribution.

## Review Process

After submitting your pull request:

- The project maintainers will review your contribution. You may receive feedback or requests for changes.
- Engage in the review process if there are comments or suggestions.
Once approved, your contribution will be merged into the main documentation.

Thank you for contributing to our documentation! Your efforts help enrich the project and aid users and developers in utilizing our tools effectively.
