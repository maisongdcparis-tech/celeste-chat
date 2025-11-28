# Deploy Céleste to Netlify - Step-by-Step Guide 🚀

## Method 1: Deploy via Netlify UI (Recommended - 5 minutes)

### Step 1: Create a Zip File for Deployment

Your project is ready to deploy from: `/Users/heatherjerue/celeste-chat`

You have two options:

#### Option A: Deploy from GitHub (Best for updates)

1. **Initialize Git (if not already done):**
   ```bash
   cd /Users/heatherjerue/celeste-chat
   git init
   git add .
   git commit -m "Initial commit - Céleste archetype guide"
   ```

2. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it: `celeste-chat` (or your preference)
   - Don't initialize with README (we already have files)
   - Click "Create repository"

3. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/celeste-chat.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your `celeste-chat` repository
   - Configure build settings:
     - **Build command:** leave empty
     - **Publish directory:** `public`
     - **Functions directory:** `netlify/functions`
   - Click "Deploy site"

5. **Add Environment Variable:**
   - In Netlify, go to: Site settings → Environment variables
   - Click "Add a variable"
   - Key: `ANTHROPIC_API_KEY`
   - Value: `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`
   - Click "Create variable"

6. **Redeploy (to pick up the environment variable):**
   - Go to: Deploys tab
   - Click "Trigger deploy" → "Deploy site"

#### Option B: Manual Deploy via Netlify Drop Zone

1. **Go to Netlify Drop:**
   - Visit: https://app.netlify.com/drop

2. **Drag the entire `celeste-chat` folder** into the drop zone

3. **Important:** After the site deploys, you need to:
   - Click "Site settings"
   - Go to "Environment variables"
   - Add: `ANTHROPIC_API_KEY` = `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`
   - Go to "Deploys" and click "Trigger deploy"

## Method 2: Deploy via Netlify CLI (Alternative)

If you want to retry the CLI approach:

```bash
cd /Users/heatherjerue/celeste-chat

# Create the site manually on Netlify.com first, then:
npx netlify link

# Set environment variable
npx netlify env:set ANTHROPIC_API_KEY "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"

# Deploy
npx netlify deploy --prod --dir=public --functions=netlify/functions
```

## After Deployment

### Test Your Live Site

1. **Get your URL:**
   - It will be something like: `https://celeste-archetype-guide.netlify.app`
   - Or a random name like: `https://amazing-unicorn-123456.netlify.app`

2. **Test the chat:**
   - Open the URL in your browser
   - Send a message to Céleste
   - Verify she responds

3. **Check the function logs:**
   - In Netlify: Functions tab → View function logs
   - Ensure no errors appear

### Customize Your Domain (Optional)

1. Go to: Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to connect your domain

## Troubleshooting

### "Failed to process request" error:
- **Cause:** Environment variable not set
- **Fix:** Go to Site settings → Environment variables → Add `ANTHROPIC_API_KEY`
- **Then:** Trigger a new deploy

### Functions not working:
- **Check:** Deploys tab → Latest deploy → Check "Functions" section
- **Should see:** `chat` function listed
- **If not:** Verify `netlify.toml` is in the root directory

### CSS not loading:
- **Check:** All files from `public/` folder were deployed
- **Verify:** Go to the deployed site, view source, check file paths

## Your Deployment Checklist

- [ ] Code is ready (✓ Already done!)
- [ ] Deployed to Netlify (via GitHub or Drop)
- [ ] Environment variable `ANTHROPIC_API_KEY` is set
- [ ] Triggered a redeploy after adding environment variable
- [ ] Tested the live URL
- [ ] Chat interface loads correctly
- [ ] Céleste responds to messages
- [ ] Shared the URL with users

## Quick Reference

**Your Project Location:** `/Users/heatherjerue/celeste-chat`

**Your API Key:** `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`

**Required Environment Variable:**
- Name: `ANTHROPIC_API_KEY`
- Value: Your API key above

**Netlify Settings:**
- Publish directory: `public`
- Functions directory: `netlify/functions`
- Build command: (leave empty)

---

✧ Once deployed, your Céleste chat will be accessible to seekers worldwide! ✧
