#  Book Store

A simple and modern **Book Store web application** built using **React.js**.
This project displays a collection of books with their title, author, category, price, and cover image.

##  Features

* Display multiple books
* Slider of image
* Book cover images
* Book title and author
* Book category
* Book price
* Responsive card layout
* Clean and modern UI
* Navigation bar with Home, Service, About, and Contact-Us
* Footer with copyright information

##  Technologies Used

* React.js
* JavaScript
* HTML
* CSS


##  Project Structure

text
Book-Store
│
├── public
│
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   └── Home.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── data.js
│
├── package.json
├── package-lock.json
└── README.md
```


## Main Components

### Header

The Header contains:

. Book Store logo
. Home
. Service
. About
. Contact-Us

### Home

The Home component displays the books using JavaScript's `.map()` method.

.js
props.myData.map((data, index) => {
    // display book
})


### Footer

The Footer displays the copyright information:


© 2026 Book Store. All Rights Reserved.


## Styling

The project uses an external CSS file for the Home page, inline CSS for Footer, internal CSS for Header. 

## video link:

https://drive.google.com/file/d/1MYs3bG3bXaWBLFHwxTKhG30Pnj1-fU-X/view?usp=sharing
