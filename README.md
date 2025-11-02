# LoTUS-BF

**Location-or-Term Unified Search for Brain Functions**

A brain function search and visualization tool specifically designed for researchers, enabling them to search for relevant studies using **terms** or **brain coordinate locations** and visualize brain activation foci on a 3D brain image. **LoTUS-BF** aims to make brain function research simpler and more intuitive.

-----

## 🚀 Key Features

### 🔍 Search Capabilities

  * **Term Search**: Select from a rich lexicon of terms or directly input keywords.
  * **Coordinate Search**: Search for studies in specific brain regions using MNI coordinates (e.g., `[-22,-4,18]`).
  * **Complex Queries**: Supports logical operators like `AND`, `OR`, and `NOT` to create complex search conditions.
      * Example: `emotion AND memory NOT pain`
      * Example: `[-22,-4,18] NOT emotion`

### 📊 Research Result Management

  * **Detailed Study List**: Displays Year, Title, Journal, Author, and PubMed ID.
  * **Filtering**: Quickly filter studies using the **Year Filter** to select specific year ranges.
  * **Sorting**: Sort results by year (ascending/descending).
  * **Pagination**: Supports custom display quantity per page (20/50/100).
  * **Bookmarks & Export**: Mark important studies and click the **Export** button to download the marked list.
  * **Direct Link**: Click on the PubMed ID to directly navigate to the PubMed website.

### 🧠 3D Brain Image Visualization

  * **Multi-View Display**: Simultaneously shows Axial, Coronal, and Sagittal cross-sections.
  * **Interactive Navigation**:
      * Click anywhere on the image or move the mouse to adjust the crosshair position.
      * Directly input MNI coordinates to localize a specific point (e.g., `-22`, `-4`, `18`).
      * Use `−` and `+` buttons to navigate different slices.
  * **Advanced Controls**: Click the **Advance** button to open advanced options for adjusting settings like overlay opacity, threshold mode, and Gaussian smoothing parameters (FWHM).
  * **Download Map**: Click **Download map** to download the current brain map in NIfTI format.

-----

## 🛠️ Technical Architecture

### Frontend Technologies

  * **React 19**: A modern UI framework.
  * **Vite 7**: A fast frontend build tool.
  * **NiiVue**: Used for displaying and manipulating NIfTI format brain images.

### Backend API

The project connects to a backend API service through proxy:

  * Base URL: `https://mil.psy.ntu.edu.tw:5000`
  * Main Endpoints:
      * `GET /terms` - Get all term list
      * `GET /query/{query}/studies` - Search studies
      * `GET /query/{query}/nii` - Get brain image maps (supports `voxel`, `fwhm`, `kernel`, `r` parameters)

-----

## 📝 Usage Guide

### Basic Search

1.  Enter search conditions in the **Query Builder**.
      * **Direct term input**: `emotion`
      * **Coordinate input**: `[-22,-4,18]`
      * **Combined queries**: `memory AND emotion`
2.  Press Enter or wait for automatic search.
3.  View search results in the **Studies** panel on the left.
4.  View the **NIfTI Viewer** on the right to observe brain activation locations.

### Using the Term Library

  * Browse or search terms in the **Terms** panel.
  * Click on a term to add it to the query condition.

### Filtering Studies

  * Use **Year Filter** to select specific year ranges.
  * Use the bookmark feature in the top right to mark important studies.
  * Click **Export** button to export marked studies.

### Operating Brain Images

  * **Move View**: Move mouse on the image or click directly on a position.
  * **Input Coordinates**: Enter MNI coordinates in the coordinate input fields (e.g., `-22`, `-4`, `18`).
  * **Switch Slices**: Use `−` and `+` buttons to navigate different slices.
  * **Adjust Settings**: Click **Advance** button to open advanced control options.
  * **Download Map**: Click **Download map** to download the current brain map.

-----

## 💻 Installation & Setup

### Prerequisites

  * **Node.js**: LTS version recommended (18 or above)
  * **npm**: Node.js package manager

### Installation Steps

1.  **Install Node.js (if not already installed)**
    ```bash
    # Using nvm (recommended)
    nvm install --lts
    nvm use --lts
    ```
2.  **Install project dependencies**
    ```bash
    npm install
    ```
3.  **Start development server**
    ```bash
    npm run dev
    ```
4.  **Open in browser**
    Open the application at the URL shown in the terminal (typically `http://localhost:5173`).

### Build and Preview

**Build for Production**

```bash
npm run build
```

The built files will be output to the `dist/` directory.

**Preview Production Build**

```bash
npm run preview
```

-----

## ⚠️ Troubleshooting

If you encounter installation issues, dependency errors, or need to perform a clean environment setup, you can try the following steps:

1.  **Perform a clean installation and update Vite:**
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    npm i -D vite@latest
    ```
2.  **Restart the development server:**
    ```bash
    npm run dev
    ```

-----

## ⚙️ Development

### Code Linting

```bash
npm run lint
```

### Style Guidelines

The project uses **ESLint** for code checking. Please ensure code passes lint checks before committing.

-----

## 📂 Project Structure

This project follows a standard React/Vite frontend structure.

```
lotus-bf/
├── src/
│   ├── components/          # Primary **React components**
│   │   ├── AppGrid.jsx      # Main app grid layout
│   │   ├── QueryBuilder.jsx # Query builder
│   │   ├── Studies.jsx      # Study list
│   │   ├── NiiViewer.jsx    # 3D brain image viewer
│   │   ├── Terms.jsx        # Term selector
│   │   └── YearFilter.jsx   # Year filter
│   ├── hooks/               # Custom React hooks
│   │   └── useUrlQueryState.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
│   ├── static/              # NIfTI files (MNI template)
│   └── ...                  # Other assets
├── package.json             # Project configuration and dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```
