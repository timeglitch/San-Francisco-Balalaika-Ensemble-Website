# San Francisco Balalaika Ensemble Website

A simple static website for the San Francisco Balalaika Ensemble featuring a clean red and white color theme.

I chose to use a simple static site without a framework to make this maximally easy to deploy and have as much longevity as possible.

## Project Structure

```
├── index.html          # Main HTML file
├── .nojekyll          # Prevents GitHub Pages Jekyll processing
├── css/
│   └── style.css      # Stylesheet (red & white theme)
├── js/
│   └── script.js      # JavaScript functionality
├── images/            # Directory for photos and images
│   ├── icons/         # Favicon and icons
│   └── README.md      # Image guidelines
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

- Responsive design that works on desktop and mobile
- Smooth scrolling navigation
- Clean red and white color theme
- Image placeholders ready for photos and icons
- Photo gallery grid layout
- Modern, professional design
- Easy to customize and extend

## Adding Images

1. Place your images in the `images/` directory
2. Add icons (favicon, etc.) to `images/icons/`
3. Uncomment the image sections in `index.html`:
   - Logo in navigation
   - Hero background image
   - About section photo
   - Performance gallery images
4. See `images/README.md` for recommended image sizes

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
