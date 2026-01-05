# San Francisco Balalaika Ensemble Website

A simple static website for the San Francisco Balalaika Ensemble.

I chose to use a simple static site without a framework to make this maximally easy to deploy and have as much longevity as possible.

## Project Structure

```
├── index.html          # Main HTML file
├── .nojekyll          # Prevents GitHub Pages Jekyll processing
├── css/
│   └── style.css      # Stylesheet (red & white theme)
├── js/
│   └── script.js      # JavaScript functionality & slideshow config
├── images/
│   ├── slideshow/     # Slideshow photos (auto-rotating carousel)
│   ├── icons/         # Favicon and icons
│   └── logo.jpg       # Header logo
└── README.md          # This file
```

## Getting Started

To view the website locally, simply open `index.html` in your web browser.

### Option 1: Direct File Opening
- Double-click `index.html` in your file explorer

### Option 2: Using a Local Server (Recommended)
Using a local server prevents CORS issues and provides a better development experience.

**With Python:**
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

**With Node.js (http-server):**
```bash
npx http-server -p 8000
```

**With VS Code:**
- Install the "Live Server" extension
- Right-click `index.html` and select "Open with Live Server"

## Features

- **Auto-rotating slideshow** with blurred backgrounds for mixed aspect ratios
- Responsive design that works on desktop and mobile
- Smooth scrolling navigation
- Clean red and white color theme (crimson #dc143c)
- CSS scroll-snap carousel with 5-second intervals
- Modern, professional design
- Easy to customize and extend

## Adding Photos to the Slideshow

The hero slideshow automatically displays all images configured in `js/script.js`. To add new photos:

### Step 1: Add Image Files
Place your image files in the `images/slideshow/` directory. Supported formats: JPG, PNG, WebP.

### Step 2: Update the Configuration
Open `js/script.js` and find the `SLIDESHOW_CONFIG` object. Add your new images to the `images` array:

```javascript
const SLIDESHOW_CONFIG = {
  images: [
    "hero-bg.jpg",
    "Balalaika_935d.jpg",
    "Balalaika_944c.jpg",
    // ... existing images ...
    "your-new-image.jpg"  // Add your new image filename here
  ],
  folderPath: "images/slideshow/",
  intervalMs: 5000
};
```

### Step 3: Save and Test
Save the file and refresh your browser. Your new image will automatically appear in the rotation.

## Customization

- **Content**: Edit `index.html` to update text and structure
- **Styling**: Modify `css/style.css` to change colors, fonts, and layout
- **Images**: Add photos to `images/` directory and uncomment placeholders
- **Functionality**: Add interactive features in `js/script.js`

## Deployment

This static website is deployed with GitHub Pages:

1. Push your changes to the main branch
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose `main` branch
4. Your site will be live at `https://timeglitch.github.io/San-Francisco-Balalaika-Ensemble-Website/`

The `.nojekyll` file ensures GitHub Pages serves your files directly without Jekyll processing.

## License

See LICENSE file for details.
