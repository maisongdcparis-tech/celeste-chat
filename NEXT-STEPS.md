# 🚀 Deploy Céleste - Final Steps

Your code is ready and committed to Git! Here's exactly what to do:

## Step 1: Create GitHub Repository (2 minutes)

1. **Go to GitHub:**
   - Visit: https://github.com/new

2. **Create the repository:**
   - Repository name: `celeste-chat` (or your choice)
   - Description: "Céleste - Sacred Archetype Guide powered by Claude AI"
   - **Important:** Do NOT check "Add a README file" (we already have one)
   - Click "Create repository"

3. **Copy the repository URL** - it will look like:
   ```
   https://github.com/YOUR_USERNAME/celeste-chat.git
   ```

## Step 2: Push Your Code (30 seconds)

Run these commands in Terminal (replace YOUR_USERNAME with your GitHub username):

```bash
cd /Users/heatherjerue/celeste-chat

git remote add origin https://github.com/YOUR_USERNAME/celeste-chat.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy on Netlify (3 minutes)

1. **Go to Netlify:**
   - Visit: https://app.netlify.com

2. **Import your project:**
   - Click "Add new site" → "Import an existing project"
   - Click "GitHub"
   - Find and select your `celeste-chat` repository

3. **Configure build settings:**
   - **Build command:** leave empty (or enter: `echo 'No build'`)
   - **Publish directory:** `public`
   - Click "Show advanced" → "New variable"
     - Key: `ANTHROPIC_API_KEY`
     - Value: `YOUR_ANTHROPIC_API_KEY_HERE`

4. **Deploy:**
   - Click "Deploy site"
   - Wait 30-60 seconds for deployment to complete

## Step 4: Get Your Live URL

Once deployed:
- Your site URL will appear at the top
- It will be something like: `https://adorable-unicorn-123456.netlify.app`
- **Save this URL!**

## Step 5: Test Your Live Site

1. Open your Netlify URL in a browser
2. You should see the beautiful Céleste interface
3. Send a test message: "Hello, I want to discover my archetype"
4. Céleste should respond within a few seconds

## Optional: Customize Your Domain

1. In Netlify, go to: Site settings → Domain management
2. Click "Options" → "Edit site name"
3. Change to something like: `celeste-archetype-guide`
4. Your new URL: `https://celeste-archetype-guide.netlify.app`

## Troubleshooting

### If the site loads but chat doesn't work:

1. Check if you added the environment variable:
   - Go to: Site settings → Environment variables
   - Should see: `ANTHROPIC_API_KEY`
   - If not, add it and trigger a new deploy

2. Check function logs:
   - Go to: Functions tab
   - Should see: `chat` function listed
   - Click on it to see logs
   - Look for any errors

### If CSS looks broken:

- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check browser console for errors

## You're Done! 🎉

Your Céleste archetype guide is now live and accessible to anyone with the URL!

Share it with your community and watch seekers discover their sacred archetypes.

---

**Your Project:** `/Users/heatherjerue/celeste-chat`

**API Key:** Already configured in `.env` (local) - add to Netlify environment variables

**Support Files:**
- `DEPLOY-INSTRUCTIONS.md` - Detailed deployment guide
- `README.md` - Full project documentation
- `QUICKSTART.md` - Local development guide

✧ May Céleste guide many seekers to their divine purpose ✧
