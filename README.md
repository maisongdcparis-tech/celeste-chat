# Céleste - Sacred Archetype Guide ✧

A beautiful, mystical chat interface powered by Claude AI to help seekers discover their sacred archetype and create personalized rituals.

## Features

- 🌙 Beautiful gold/ivory aesthetic with elegant animations
- ✨ Archetype quiz with 7 sacred questions
- 🔮 Four divine archetypes: Visionary, Oracle, Alchemist, Architect
- 🌟 Human Design integration
- 📿 Personalized 5-step ritual creation
- 🔐 Secure serverless architecture with Netlify Functions

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Netlify CLI

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - The `.env` file is already configured with your API key
   - For future deployments, you can update `.env` with your own key

3. **Run locally:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8888`

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI globally (if not already installed):**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize your site:**
   ```bash
   cd celeste-chat
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Give your site a name (e.g., "celeste-archetype-guide")
   - Build command: leave empty or use `echo 'No build step'`
   - Publish directory: `public`
   - Functions directory: `netlify/functions`

4. **Set environment variable:**
   ```bash
   netlify env:set ANTHROPIC_API_KEY "YOUR_ANTHROPIC_API_KEY_HERE"
   ```

5. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via Netlify Web Interface

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Céleste chat interface"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com) and login
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Configure build settings:
     - Build command: leave empty
     - Publish directory: `public`
     - Functions directory: `netlify/functions`

3. **Add environment variable:**
   - Go to Site settings → Environment variables
   - Add variable:
     - Key: `ANTHROPIC_API_KEY`
     - Value: `YOUR_ANTHROPIC_API_KEY_HERE`

4. **Deploy:**
   - Click "Deploy site"
   - Your site will be live at `https://your-site-name.netlify.app`

## Project Structure

```
celeste-chat/
├── netlify/
│   └── functions/
│       └── chat.js          # Serverless function for Anthropic API
├── public/
│   ├── index.html           # Main HTML file
│   ├── styles.css           # Beautiful gold/ivory styling
│   └── app.js               # Chat functionality
├── .env                     # Environment variables (local)
├── .env.example             # Environment template
├── .gitignore               # Git ignore rules
├── netlify.toml             # Netlify configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## The Four Sacred Archetypes

### ✨ The Visionary
Revolutionary dreamer, paradigm shifter, divine inspiration

### 🌙 The Oracle
Intuitive seer, mystic messenger, keeper of hidden wisdom

### 🔥 The Alchemist
Sacred transformer, shadow dancer, transmutation expert

### 🏛️ The Architect
Sacred strategist, manifestation master, grounded creator

## Security Notes

- ⚠️ **Never commit your `.env` file to version control**
- The `.gitignore` file is configured to exclude it
- Always use environment variables for sensitive data
- The API key is securely stored in Netlify's environment variables

## Customization

### Modify the System Prompt
Edit the `CELESTE_SYSTEM_PROMPT` in `netlify/functions/chat.js` to customize Céleste's personality and guidance.

### Adjust Styling
Modify `public/styles.css` to change colors, fonts, or layout. The CSS uses custom properties for easy theming:
- `--ivory`: Main background color
- `--gold`: Primary accent color
- `--dark-gold`: Secondary accent color

### Update Questions
The archetype quiz questions are in the system prompt. You can modify them in `netlify/functions/chat.js`.

## Troubleshooting

### "Failed to process request" error
- Check that your environment variable is set correctly
- Verify your Anthropic API key is valid
- Check the Netlify function logs

### Styling not loading
- Ensure all files are in the `public` folder
- Check browser console for errors
- Verify file paths are correct

### Local development not working
- Make sure you're using `netlify dev` (not a regular http-server)
- Check that `.env` file exists with your API key
- Verify Node.js version is 14 or higher

## Support

For issues or questions about:
- **Anthropic API**: Visit [docs.anthropic.com](https://docs.anthropic.com)
- **Netlify Deployment**: Visit [docs.netlify.com](https://docs.netlify.com)

---

✧ May your journey be blessed with wisdom and transformation ✧
