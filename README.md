# GalleryGlimpse

GalleryGlimpse is a responsive image browsing web app built with React, JavaScript, and pure CSS. It allows users to explore a collection of images, manage their favorites, and interact with detailed modals. The app also offers user registration and a theme switcher.

## Pages

### 1. Home Page

- **Purpose**: Introduces the app and its features.
  - **Hero Section**: Visually appealing banner with the tagline "A Picture for Every Story, A Glimpse into Beauty".
  - **Navigation**: Menu with links to all pages and a dropdown for external tools (e.g., image editing).
  - **Theme Switcher**: Light/Dark mode toggle.
- **Features**:
  - **Browse Images**: Gallery feature.
  - **Favorites**: Mark images as favorites.
  - **Comments**: Add comments via modals.

### 2. Gallery Page

- **Purpose**: Displays the image collection and add comments.
  - **Image Grid**: Cards showing images, titles, and descriptions.
  - **Interactions via Modal**: Clicking the button `View Details` opens a modal with:
    - Large image preview, upload date, description, and comments.
    - Options to add/remove from favorites and a form to submit comments.

### 3. Membership Page

- **Purpose**: User registration form.
  - **Conditional Dropdown**: Displays the newsletter frequency selection when the checkbox is checked.
  - **Form Validation**: Input fields with error messages displayed dynamically onBlur.
  - After successful submission, the user is redirected to a **Success Page** with a message confirming the registration.

### 4. Success Page

- **Purpose**: Confirmation message after successful form submission.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/galleryglimpse.git
   ```

2. Install dependencies:
   ```bash
   cd galleryglimpse
   npm install
   ```
3. Start the app:
   ```bash
   npm start
   ```

## Tech Stacks

- React
- JavaScript
- CSS

## Screenshots

### Mobile View

<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/b-sm-home.png" alt="home in dark mode on small screen" width="200px" style="margin: 5px;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/b-sm-member.png" alt="membership" width="200px" style="margin: 8px;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/b-sm-hamburger_dropdown.png" alt="hamburger menu" width="200px" style="margin: 8px;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/b-sm-gallery.png" alt="gallery" width="200px" style="margin: 8px;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/b-sm-modal.png" alt="modal" width="200px" style="margin: 8px;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/w-sm-home.png" alt="home in light mode" width="200px" style="margin: 8px;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/w-sm-gallery.png" alt="gallery in light mode" width="200px" style="margin: 8px;">
</div>

### Medium Screens

<img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/b-md-gallery.png" alt="gallery on medium screen" width="300px" style="margin: 5px;">

### Large Screens

<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/b-md-gallery.png" alt="gallery on medium screen" width="500px" style="margin: 10px;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/w-lg-gallery.png" alt="gallery on large screen" width="500px" style="margin: 10px;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/w-lg-modal.png" alt="modal on large screen" width="500px" style="margin: 10px;">
  <img src="https://github.com/lorraineC26/gallery-glimpse/blob/main/public/app-screenshots/b-lg-member.png" alt="membership on large screen" width="500px" style="margin: 10px;">
</div>
