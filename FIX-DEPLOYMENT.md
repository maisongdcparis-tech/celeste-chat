# Fix Your Netlify Deployment 🔧

I've fixed the issues! Here's what was wrong and how to deploy the fixes:

## What Was Fixed

1. **Added package.json to functions directory** - Ensures Netlify installs the Anthropic SDK
2. **Improved error handling** - Better logging to diagnose issues
3. **Added API key validation** - Checks if environment variable is set
4. **Added CORS preflight handler** - Handles OPTIONS requests properly
5. **Updated netlify.toml** - Explicitly tells Netlify how to build functions

## Option 1: Update via GitHub (Recommended)

### If you deployed via GitHub:

Your changes are already committed locally. Just push them:

```bash
cd /Users/heatherjerue/celeste-chat
git push origin main
```

Netlify will automatically rebuild your site with the fixes!

### If you haven't connected GitHub yet:

1. Create a GitHub repository at https://github.com/new
2. Name it: `celeste-chat`
3. Don't initialize with README

Then run:
```bash
cd /Users/heatherjerue/celeste-chat
git remote add origin https://github.com/YOUR_USERNAME/celeste-chat.git
git push -u origin main
```

4. In Netlify, go to: Site settings → Build & deploy → Link repository
5. Connect your GitHub repo

## Option 2: Re-deploy via Netlify CLI

```bash
cd /Users/heatherjerue/celeste-chat
npx netlify deploy --prod --dir=public --functions=netlify/functions
```

When prompted, select your existing site: `spiffy-biscuit-a55c9a`

## Option 3: Manual Deploy (Drag & Drop)

1. Open Netlify: https://app.netlify.com
2. Go to your site: spiffy-biscuit-a55c9a
3. Go to: Deploys tab
4. Drag the entire `/Users/heatherjerue/celeste-chat` folder into the deploy zone

## IMPORTANT: Verify Environment Variable

After deploying, double-check your API key is set:

1. Go to: https://app.netlify.com/sites/spiffy-biscuit-a55c9a/configuration/env
2. Verify you see: `ANTHROPIC_API_KEY`
3. If not, add it:
   - Click "Add a variable"
   - Key: `ANTHROPIC_API_KEY`
   - Value: `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`
   - Scopes: All scopes
   - Click "Create variable"

## Check Function Logs

After deploying, test your site and check the logs:

1. Go to: https://app.netlify.com/sites/spiffy-biscuit-a55c9a/functions
2. Click on the `chat` function
3. Click "Function log"
4. Send a test message in your chat
5. Watch the logs - you should see:
   - "API Key present: Yes"
   - "API Key starts with: sk-ant-api"
   - "Initializing Anthropic client..."
   - "Calling Anthropic API..."
   - "API call successful"

## If It Still Doesn't Work

Check the function logs for these specific errors:

### Error: "API key not configured"
**Fix:** Add the ANTHROPIC_API_KEY environment variable (see above)

### Error: "Cannot find module '@anthropic-ai/sdk'"
**Fix:** The build command didn't run. Try:
1. Go to: Site settings → Build & deploy → Build settings
2. Build command: `cd netlify/functions && npm install`
3. Trigger a new deploy

### Error: 404 or function not found
**Fix:** Verify the `netlify.toml` file is in the root directory
- Check: https://app.netlify.com/sites/spiffy-biscuit-a55c9a/deploys
- Click latest deploy → View file browser
- Ensure you see: `netlify.toml` and `netlify/functions/chat.js`

## Test Your Site

Once deployed, test it:

1. Go to: https://spiffy-biscuit-a55c9a.netlify.app
2. Open browser console (F12)
3. Send a message: "Hello"
4. Céleste should respond!

## Quick Deploy Command

If you're in a hurry, run this single command:

```bash
cd /Users/heatherjerue/celeste-chat && npx netlify deploy --prod --dir=public --functions=netlify/functions
```

Select your site when prompted, and you're done!

---

✧ The cosmic channels should be restored after these fixes! ✧
