# Troubleshooting Netlify Deployment 🔍

## How to Check What Went Wrong

### Step 1: View Deploy Logs

1. Go to: https://app.netlify.com/sites/spiffy-biscuit-a55c9a/deploys
2. Click on the most recent (failed) deploy
3. Look at the deploy log - scroll to find the error

### Common Errors & Solutions

#### Error: "Build script returned non-zero exit code"
**Cause:** Build command failed
**Solution:** Remove the build command from netlify.toml (already done in latest update)

####  Error: "Cannot find module '@anthropic-ai/sdk'"
**Cause:** Dependencies not installed
**Solution:** Netlify should auto-install from package.json in functions directory

Check if you see this in the deploy log:
```
Installing dependencies from Netlify Functions
```

If not, the package.json might not be deployed.

#### Error: "API key not configured" (in function logs)
**Cause:** Environment variable not set
**Solution:**
1. Go to: https://app.netlify.com/sites/spiffy-biscuit-a55c9a/configuration/env
2. Add: `ANTHROPIC_API_KEY` = `YOUR_ANTHROPIC_API_KEY_HERE`
3. Redeploy

#### Error: "Invalid API key" or 401
**Cause:** API key is incorrect or malformed
**Solution:** Double-check the API key matches exactly:
```
YOUR_ANTHROPIC_API_KEY_HERE
```

## Deploy Checklist

Use this to verify everything is correct:

### Files to Deploy
- [ ] `public/index.html`
- [ ] `public/styles.css`
- [ ] `public/app.js`
- [ ] `netlify/functions/chat.js`
- [ ] `netlify/functions/package.json`
- [ ] `netlify.toml`

### In Netlify Dashboard
- [ ] Site name: spiffy-biscuit-a55c9a
- [ ] Publish directory: `public`
- [ ] Functions directory: `netlify/functions`
- [ ] Environment variable `ANTHROPIC_API_KEY` is set
- [ ] Deploy completed successfully (green checkmark)

### Function Verification
- [ ] Go to Functions tab
- [ ] See `chat` function listed
- [ ] Click on function - see recent invocations
- [ ] No errors in function logs

## Quick Deploy Methods

### Method 1: Via GitHub (If connected)
```bash
cd /Users/heatherjerue/celeste-chat
git add -A
git commit -m "Fix deployment configuration"
git push origin main
```

Netlify will auto-deploy in 30-60 seconds.

### Method 2: Via Netlify UI (Drag & Drop)
1. Open: https://app.netlify.com/sites/spiffy-biscuit-a55c9a/deploys
2. Drag `/Users/heatherjerue/celeste-chat` folder onto the deploy zone
3. Wait for deployment to complete

### Method 3: Via ZIP Upload
1. Create a zip of your project:
   ```bash
   cd /Users/heatherjerue
   zip -r celeste-deploy.zip celeste-chat -x "celeste-chat/node_modules/*" -x "celeste-chat/.git/*" -x "celeste-chat/.netlify/*"
   ```

2. Go to: https://app.netlify.com/sites/spiffy-biscuit-a55c9a/deploys
3. Drag the ZIP file onto the deploy zone

## Test After Deployment

### 1. Check the Site Loads
- Go to: https://spiffy-biscuit-a55c9a.netlify.app
- Should see the beautiful gold/ivory chat interface

### 2. Test the Chat Function
- Send a message: "Hello"
- Open browser console (F12)
- Check Network tab for `/api/chat` request
- Should get 200 response with Céleste's reply

### 3. Check Function Logs
- Go to: https://app.netlify.com/sites/spiffy-biscuit-a55c9a/functions
- Click `chat` function
- See recent invocations
- Click on a log entry to see details

Look for these log messages:
- ✅ "API Key present: Yes"
- ✅ "Initializing Anthropic client..."
- ✅ "API call successful"

## Still Having Issues?

### Get the Exact Error

Please share:
1. **Deploy log:** Copy the error from the deploy log
2. **Function log:** Copy any errors from the function log
3. **Browser console:** Copy any errors from browser dev tools

### Check These Common Issues

**Issue:** Site loads but chat doesn't work
- Check: Is the environment variable set?
- Check: Are there errors in browser console?
- Check: Look at function logs for the error

**Issue:** Build fails
- Check: Deploy log for the exact error
- Check: Is netlify.toml in the root directory?
- Try: Remove any build command

**Issue:** Function not found
- Check: Does `netlify/functions/chat.js` exist in the deploy?
- Check: Is netlify.toml configured correctly?
- Try: Redeploy

## Emergency Simple Deploy

If all else fails, here's a bulletproof deployment:

1. Remove the build configuration:
   - Edit `netlify.toml`
   - Keep only: publish directory and redirects

2. Deploy just the essentials:
   - `public/` folder (frontend)
   - `netlify/functions/chat.js` (backend)
   - `netlify/functions/package.json` (dependencies)

3. Set environment variable manually in Netlify UI

4. Let Netlify handle everything else automatically

---

**Need Help?** Share the specific error message and I'll help you fix it!
