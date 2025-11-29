# Simple Static Website (starter)

This is a minimal static website (HTML/CSS/JS) you can edit and deploy.

Preview locally:
- Option A (open file): open `index.html` in your browser.
- Option B (local web server - recommended):
  - Python 3: `python3 -m http.server 8000` then open http://localhost:8000
  - Node (http-server): `npx http-server -c-1` then open shown URL

Quick Git + GitHub steps:
1. Clone: `git clone https://github.com/<your-username>/<repo>.git`
2. Create branch: `git checkout -b web-starter`
3. Add files, commit, push:
   - `git add index.html styles.css script.js README.md`
   - `git commit -m "Add static website starter"`
   - `git push -u origin web-starter`
4. Open a Pull Request on GitHub and merge to main (or push directly to main if you prefer).

Deploy options:
- GitHub Pages:
  - In repo Settings → Pages, choose branch `main` (root) and save. After a minute your site will be at `https://<your-username>.github.io/<repo>/`.
- Vercel / Netlify:
  - Connect the GitHub repo (free & automatic). They detect static sites and deploy on each push.

Next steps I can do for you
- Turn this into a React/Vue app.
- Add a Node/Express backend and store form submissions.
- Hook the contact form to an email service (Formspree, EmailJS) or a serverless function.
- Help you enable GitHub Pages or deploy to Vercel with step-by-step screenshots.

Tell me which option you want (static vs React vs backend) and whether you want me to provide the exact commands to enable GitHub Pages on your repository and I'll give the exact step-by-step.