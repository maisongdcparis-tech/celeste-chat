# Fix: Update Netlify Build Image ⚡

## The Problem

Your deployment was failing because your Netlify site is using Ubuntu 14.04 Trusty Tahr, which was deprecated and is no longer supported.

**Error message:**
```
UNSUPPORTED BUILD IMAGE
The build image for this site uses Ubuntu 14.04 Trusty Tahr, which is no longer supported.
```

## The Solution (2 minutes)

### Step 1: Update Build Image

**Quick Link:**
https://app.netlify.com/sites/spiffy-biscuit-a55c9a/configuration/deploys#build-image-selection

**Or navigate:**
1. Go to your Netlify site dashboard
2. Click "Site settings"
3. Click "Build & deploy"
4. Scroll to "Build image selection"

**Select:**
- Choose: **Ubuntu Focal 20.04** (recommended)
- Or: **Ubuntu Jammy 22.04** (latest)
- Click "Save"

### Step 2: Redeploy

1. Go to: Deploys tab
2. Click "Trigger deploy" → "Deploy site"
3. Wait for deployment to complete (30-60 seconds)

### Step 3: Test

1. Site should deploy successfully now!
2. Visit: https://spiffy-biscuit-a55c9a.netlify.app
3. Chat with Céleste to verify everything works

## What Changed?

**Old:** Ubuntu 14.04 (2014, end of life)
**New:** Ubuntu 20.04 or 22.04 (modern, supported)

This gives you:
- ✅ Latest Node.js versions
- ✅ Modern build tools
- ✅ Security updates
- ✅ Continued Netlify support

## Verification Checklist

After updating and redeploying:

- [ ] Build image updated to Ubuntu 20.04 or newer
- [ ] Deploy completed with green checkmark
- [ ] Site loads at https://spiffy-biscuit-a55c9a.netlify.app
- [ ] Chat function works (send "Hello" to test)
- [ ] No errors in function logs

## Still Not Working?

If you still see errors after updating the build image:

1. **Check environment variable:**
   - Site settings → Environment variables
   - Verify `ANTHROPIC_API_KEY` is set
   - Value: `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`

2. **Check function logs:**
   - Functions tab → Click `chat` function
   - Look for specific error messages

3. **Check deploy logs:**
   - Deploys tab → Click latest deploy
   - Read the full log for errors

## Quick Reference

**Your Site:** spiffy-biscuit-a55c9a.netlify.app
**Build Image Setting:** https://app.netlify.com/sites/spiffy-biscuit-a55c9a/configuration/deploys#build-image-selection
**Recommended Image:** Ubuntu Focal 20.04 (default)

---

✧ After this fix, your Céleste chat should deploy perfectly! ✧
