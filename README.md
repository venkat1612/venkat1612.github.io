# Venkata Sai Kandipati — Portfolio

A personal portfolio site built with React, Vite, Tailwind CSS, Framer Motion and AOS,
styled after [Sushmitadasari/Video_portfolio](https://github.com/Sushmitadasari/Video_portfolio).

**All of the text on the site lives in one file: [`src/content.json`](src/content.json).**
You never need to touch the React code to update your site.

## Updating your content

### From your browser (no tools needed)
1. Open `src/content.json` on GitHub and click the pencil icon (Edit).
2. Change the text you want, for example add a new job to `experience.jobs`
   or a skill to one of the `skills.categories`.
3. Click **Commit changes**. GitHub Actions rebuilds and republishes the site
   automatically, usually within a minute or two.

### What you can change in `content.json`

| Section          | What it controls |
|------------------|------------------|
| `site`           | Browser tab title, logo text, **accent colour** (`accentColor`, e.g. `"#2563eb"` for blue), nav button label |
| `profile`        | Name, role, location, email, phone, photo, resume file, social links |
| `hero`           | Big headline, subheading, buttons, optional background video |
| `about`          | "Hello!" intro paragraph and the three stat blocks |
| `expertise`      | The numbered cards along the scrolling dashed line (add or remove as many as you like) |
| `experience`     | Jobs timeline: role, company, dates, project, highlights, tech tags |
| `skills`         | Skill categories and their pills |
| `certifications` | Certifications and education cards (add a `link` to make a card clickable) |
| `contact`        | Contact section text (the form opens the visitor's email app addressed to you) |
| `footer`         | Footer lines |

Tip: JSON needs double quotes and commas between items. If the site stops building
after an edit, the Actions tab on GitHub shows the line with the mistake.

### Adding a photo, video or new resume
Upload the file into the `public/` folder (GitHub: **Add file > Upload files**), then
put its file name in `content.json`:

```json
"photo": "me.jpg",
"resumeFile": "resume.pdf"
```

For the hero background, set `"video": "hero.mp4"` (keep it small, under ~10 MB).
Leave `photo` or `video` as `""` to use the built-in initials badge and animated background.
Social links with an empty `url` are hidden, so fill in LinkedIn and GitHub when ready.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:5173, live-reloads when you edit content.json
npm run build    # production build into dist/
```

## Publishing on GitHub Pages (free)
1. Create a GitHub repository and push this folder to its `main` branch.
2. In the repo go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` deploys to `https://<your-username>.github.io/<repo-name>/`.

Name the repo `<your-username>.github.io` to get the shorter address
`https://<your-username>.github.io/`. The site also works unchanged on Netlify or Vercel
(build command `npm run build`, output folder `dist`).
