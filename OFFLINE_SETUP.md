# 🍽️ Lasmari Restaurant - Offline Setup Guide

Your restaurant website is now a **Progressive Web App (PWA)** that works completely offline! Here's how to set it up on tablets and run it locally.

## ✨ Features

- ✅ **Works 100% Offline** - No internet required after initial setup
- ✅ **Installable on Tablets** - Looks like a native app
- ✅ **Local Reservations** - Saves bookings locally, exports to CSV
- ✅ **Beautiful Slideshows** - Your restaurant photos cycle automatically
- ✅ **Professional Design** - Elegant Playfair Display font

## 🚀 Quick Start

### Option 1: Python Server (Recommended)

1. **On your computer, run:**
   ```bash
   python3 server.py
   ```

2. **You'll see output like:**
   ```
   📱 On this device:     http://localhost:8000
   📲 On tablets/phones:  http://192.168.1.100:8000
   ```

3. **On each tablet:**
   - Connect to the same WiFi network
   - Open browser and go to the IP address shown
   - Install as PWA (see instructions below)

### Option 2: Any Web Server

If you have another web server, just serve this folder and ensure:
- Service Worker is enabled
- HTTPS is used (for full PWA features)

## 📲 Installing on Tablets

### iPad/iPhone (Safari):
1. Open the website in Safari
2. Tap the Share button (📤)
3. Scroll down and tap "Add to Home Screen"
4. Choose a name and tap "Add"

### Android Tablet (Chrome):
1. Open the website in Chrome
2. Tap the menu (⋮) 
3. Tap "Add to Home screen" or "Install app"
4. Confirm installation

### Windows Tablet (Edge):
1. Open the website in Edge
2. Click the "+" in the address bar
3. Click "Install this site as an app"

## 🔧 Local Network Setup

### For Restaurant Use:

1. **Connect all devices to same WiFi network**
2. **Run the server on one device** (computer/tablet)
3. **Install on all tablet stations**
4. **Test offline functionality** by disconnecting internet

### Files You Need:
```
📁 Restaurant Website/
├── index.html          ← Main website
├── manifest.json       ← PWA configuration  
├── sw.js              ← Offline functionality
├── server.py          ← Local server
└── 📁 images/
    ├── 📁 logo/       ← Your logo
    ├── 📁 slideshow/  ← Hero images
    └── 📁 background/ ← Booking form backgrounds
```

## 💾 Offline Functionality

### What Works Offline:
- ✅ Full website display
- ✅ Photo slideshows
- ✅ Reservation form
- ✅ Time slot selection
- ✅ Local data storage
- ✅ CSV export

### Reservation Management:
- **Bookings save locally** on each tablet
- **Export to CSV** to collect reservations
- **Merge data** from multiple tablets as needed
- **No data loss** even without internet

## 🔄 Updates & Maintenance

### To Update the Website:
1. Replace files in the folder
2. Restart the server
3. Force refresh on tablets (Ctrl+F5 or clear cache)

### To Add More Images:
1. Add images to appropriate folders
2. Update `index.html` with new filenames
3. Update `sw.js` cache list if needed

## 🆘 Troubleshooting

### "Service Worker Not Working"
- Ensure you're running from a server (not file://)
- Check browser console for errors
- Try clearing browser cache

### "Can't Install on Tablet"
- Ensure you're using HTTPS or localhost
- Try different browser (Chrome, Safari, Edge)
- Check if PWA criteria are met

### "Images Not Loading"
- Verify image filenames match exactly
- Check case sensitivity (JPG vs jpg)
- Ensure images are in correct folders

### "Reservations Not Saving"
- Check if localStorage is enabled
- Verify browser supports local storage
- Clear cache and try again

## 📞 Technical Support

If you need help:
1. Check browser console for error messages
2. Verify all files are in correct locations
3. Test on different devices/browsers
4. Contact your developer with specific error details

---

🎉 **Your restaurant website is now ready for offline use!** Enjoy taking reservations even without internet connectivity.
