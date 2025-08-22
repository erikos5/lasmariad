# 🚀 Lasmari Restaurant - Deployment Guide

Your restaurant website is a **Progressive Web App (PWA)** that works completely offline. It's ready for deployment on **Vercel** or **Railway**.

## ✅ **What Your Website Has:**

- 🍽️ **Beautiful restaurant website** with photo slideshows
- 📱 **PWA functionality** - installable on tablets like a native app
- 💾 **Offline reservations** - works without internet
- 📊 **Admin dashboard** - view all reservations within the app
- 📁 **CSV export** - download reservation data
- 🎨 **Elegant design** - Playfair Display font, white/black theme

## 🚀 **Deployment Options**

### **Option 1: Vercel (Recommended)**

#### **Quick Deploy:**
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Lasmari Restaurant"
   git branch -M main
   git remote add origin https://github.com/yourusername/lasmari-restaurant.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed!)

#### **Direct Upload:**
1. Install Vercel CLI: `npm i -g vercel`
2. In this folder, run: `vercel`
3. Follow the prompts
4. Your site will be live instantly!

### **Option 2: Railway**

1. **Push to GitHub** (same as above)
2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "Deploy from GitHub repo"
   - Select your repository
   - Railway auto-detects it's a static site
   - Deploy automatically!

### **Option 3: Netlify**

1. **Drag & Drop:**
   - Go to [netlify.com](https://netlify.com)
   - Drag this entire folder to their deploy area
   - Instant deployment!

## 📱 **For Tablet Installation:**

Once deployed, on each tablet:

1. **Open your live website URL** in browser
2. **Look for "Add to Home Screen"** option
3. **Install as PWA** - works like a native app
4. **Works offline** - no internet needed after installation

## 🔧 **Files Included for Deployment:**

```
📁 Your Restaurant Website/
├── 🌐 index.html              ← Main website
├── ⚙️ sw.js                   ← Offline functionality  
├── 📱 manifest.json           ← PWA configuration
├── 🚀 vercel.json             ← Vercel deployment config
├── 📦 package.json            ← Project metadata
├── 🚫 .gitignore              ← Files to exclude
├── 📖 DEPLOYMENT.md           ← This guide
├── 📖 OFFLINE_SETUP.md        ← Offline setup guide
└── 📸 images/                 ← Your photos
    ├── logo/                  ← Restaurant logo
    ├── slideshow/             ← Hero photos
    └── background/            ← Booking backgrounds
```

## 🎯 **Expected Results:**

After deployment, you'll have:

- ✅ **Live website** accessible from anywhere
- ✅ **PWA installation** on tablets
- ✅ **Offline functionality** works perfectly
- ✅ **Admin dashboard** for viewing reservations
- ✅ **Professional URL** for customers

## 🆘 **Troubleshooting:**

### **PWA Not Installing:**
- Ensure you're using HTTPS (automatic on Vercel/Railway)
- Check if all images load properly
- Try different browser (Chrome, Safari, Edge)

### **Offline Features Not Working:**
- Check browser console for service worker errors
- Ensure manifest.json loads correctly
- Clear browser cache and retry

### **Images Not Loading:**
- Verify all images are in correct folders
- Check file names match exactly (case-sensitive)
- Ensure images aren't too large (< 2MB recommended)

## 🎉 **You're Ready!**

Your restaurant website is **production-ready** and will work perfectly on tablets for taking reservations, even offline!

**Recommended:** Deploy on Vercel for the best experience with PWAs.
