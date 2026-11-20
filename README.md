# Life Sciences Progression Workshops

The official website of the Life Sciences Progression Workshops, run by student mentors in the School of Life Sciences, University of Sussex.

It's a plain static site: HTML and CSS, with no build step.

- `index.html`: the home page, listing all workshops
- `workshop-1/index.html`: Workshop 1, Scientific Report Writing
- `workshop-1/files/`: handouts as PDF and Word
- `assets/`: shared styles and the Easier reading toggle

## Adding a workshop

1. Copy the `workshop-1` folder and rename it (for example `workshop-2`).
2. Edit the text in its `index.html` and swap the files in its `files` folder.
3. Add a card for it on the home page (`index.html`), replacing the "Coming soon" card.
4. Commit and push. Vercel redeploys automatically.

## Handing the site over

Transfer this repository to the next organiser on GitHub (Settings, then Transfer ownership). They import it into their own Vercel account. To keep the same address, delete the project from the old Vercel account first, then claim the name `lifesci-progression` in the new one.

## Privacy

Never add anything from the sign-up responses, mentor answer keys, or any unanonymised student work.
