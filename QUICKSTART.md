# Céleste Chat - Quick Start Guide 🌙

## What's Been Built

Your Céleste chat interface is **ready to use** and **fully functional**! Here's what you have:

### ✨ Features
- Beautiful gold/ivory themed chat interface
- Archetype discovery quiz (7 sacred questions)
- Four archetypes: Visionary, Oracle, Alchemist, Architect
- Human Design integration
- 5-step personalized ritual creation
- Secure serverless backend via Netlify Functions
- Environment variables configured with your API key

### 📁 Project Structure
```
celeste-chat/
├── public/
│   ├── index.html      # Beautiful chat interface
│   ├── styles.css      # Gold/ivory aesthetic
│   └── app.js          # Chat functionality
├── netlify/functions/
│   └── chat.js         # API integration with Céleste's system prompt
├── .env                # Your API key (configured)
├── netlify.toml        # Netlify configuration
└── package.json        # Dependencies
```

## Local Testing (Already Running! ✓)

The application is currently running at: **http://localhost:8888**

You can:
1. Open http://localhost:8888 in your browser
2. Start chatting with Céleste
3. Try the archetype quiz
4. Test all features

To stop the server: Press Ctrl+C in the terminal

To restart:
```bash
cd /Users/heatherjerue/celeste-chat
npm run dev
```

## Deploy to Netlify (5 Minutes)

### Option 1: Quick Deploy via Netlify CLI

```bash
cd /Users/heatherjerue/celeste-chat

# Login to Netlify
npx netlify login

# Initialize and deploy
npx netlify init

# When prompted:
# - Choose "Create & configure a new site"
# - Select your team
# - Site name: celeste-archetype-guide (or your preferred name)
# - Build command: leave empty
# - Publish directory: public
# - Functions directory: netlify/functions

# Set your API key in Netlify
npx netlify env:set ANTHROPIC_API_KEY "YOUR_ANTHROPIC_API_KEY_HERE"

# Deploy!
npx netlify deploy --prod
```

Your site will be live at: `https://your-site-name.netlify.app`

### Option 2: Deploy via GitHub + Netlify UI

1. **Push to GitHub:**
```bash
cd /Users/heatherjerue/celeste-chat
git init
git add .
git commit -m "Initial commit - Céleste chat interface"
# Create a new repo on GitHub, then:
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub, select your repo
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `public`
     - Functions directory: `netlify/functions`

3. **Add environment variable:**
   - Site settings → Environment variables → Add a variable
   - Key: `ANTHROPIC_API_KEY`
   - Value: `YOUR_ANTHROPIC_API_KEY_HERE`

4. **Deploy!**

## Customization

### Change Colors
Edit `public/styles.css`:
```css
:root {
    --ivory: #FFFFF0;
    --gold: #D4AF37;
    --dark-gold: #B8941E;
}
```

### Modify Céleste's Personality
Edit the system prompt in `netlify/functions/chat.js` (line 3-139)

### Update Quiz Questions
Edit the questions in `netlify/functions/chat.js` (lines 11-52)

## Testing Checklist

- [x] Chat interface loads correctly
- [x] Messages send and receive properly
- [x] Céleste responds with mystical tone
- [x] Beautiful gold/ivory aesthetic displays
- [x] Loading indicators work
- [x] Mobile responsive design

## Important Notes

🔐 **Security:**
- Your API key is stored in `.env` (git-ignored)
- Never commit `.env` to version control
- In Netlify, the API key is stored securely in environment variables

🎨 **Styling:**
- Uses Google Fonts: Cinzel (headings) and Cormorant Garamond (body)
- Responsive design works on mobile and desktop
- Smooth animations and transitions

⚡ **Performance:**
- Serverless functions eliminate CORS issues
- Fast static file serving
- Efficient API calls with conversation history

## Troubleshooting

**Issue:** Chat not responding
- Check browser console for errors
- Verify the Netlify dev server is running
- Ensure environment variables are set

**Issue:** Styling looks broken
- Clear browser cache
- Check that all files in `public/` folder are present

**Issue:** Deployment fails
- Verify environment variable is set in Netlify dashboard
- Check build logs for specific errors

## Next Steps

1. **Test locally** - Open http://localhost:8888 and try the full quiz
2. **Deploy to Netlify** - Follow Option 1 or 2 above
3. **Share with users** - Send them your Netlify URL
4. **Customize** - Adjust colors, questions, or personality as desired

---

✧ Your Céleste chat interface is ready to guide seekers on their sacred journey! ✧
