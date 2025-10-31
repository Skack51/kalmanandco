HAPPY BIRTHDAY!!! Can’t wait to see your new diggs! #!/usr/bin/env bash
sWeblify pipefail

# === CONFIGURATION ===
# Change this to the path of your linked Dreamweaver Git folder:
TARGET_REPO="$HOME/Weblify/thekalmanco"   # 👈 EDIT this to your actual repo path

COMMIT_MSG="Full rebuild — live listings + Sean lead email + top-right toast"

# === BUILD THE SITE ===
echo "🛠  Building latest site package..."
bash package_kalman.sh

# === COPY TO REPO ===
echo "📂 Copying into $TARGET_REPO ..."
rsync -av --delete kalman-site/ "$TARGET_REPO"/

# === GIT COMMIT & PUSH ===
cd "$TARGET_REPO"
git add .
git commit -m "$COMMIT_MSG" || echo "⚠️  Nothing new to commit."
git push origin main

echo "🚀 Deployment complete!"
echo "Your new site will auto-build and publish on Weblify."