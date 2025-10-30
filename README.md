# Kalman & Co — Final Build (Git Ready)

### Local preview (Dreamweaver)
- Dreamweaver → Site → Manage Sites → **Import** → choose `KalmanCo.ste`.
- Or set the local site folder to this directory and open `index.html`.
- Preview in your browser without using Netlify tokens.

### Listings source (Google Sheet CSV)
`https://docs.google.com/spreadsheets/d/e/2PACX-1vQsZyN4A56Hfw0uBQL8Bvsw5dUiyeUmKTn9m_lRtIkmhkGk7kXrec6IjeFnddA0GYrelrOfmfWdtOLn/pub?output=csv`

Columns (case-insensitive): `address, neighborhood, beds, baths, price, type, photo_url, zillow_url`

### GitHub — first push
```bash
git init
git add .
git commit -m "Initial commit - Kalman & Co FINAL v13 (Git Ready)"
git branch -M main
git remote add origin https://github.com/Skack51/kalmanandco.git
git push -u origin main
```

### Netlify
- Add new site → Import from Git → choose repo → deploy.
- Build command: *(none)*
- Publish directory: `/`
- `_redirects` included for safe routing.
