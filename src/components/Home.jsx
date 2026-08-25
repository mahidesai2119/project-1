import "./Home.css";

function Home(props) {
    return (
        <>

    <div id="bookCarousel" className="carousel slide book-carousel" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>

        <button
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide-to="1"
        ></button>

        <button
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1600&q=80"
            className="d-block w-100"
            alt="Books"
          />

          <div className="carousel-caption">
            <h1>Discover Your Next Story</h1>
            <p>
              Every book opens the door to a new adventure.
            </p>
            <button className="shop-btn">
              Explore Books
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80"
            className="d-block w-100"
            alt="Library"
          />

          <div className="carousel-caption">
            <h1>Lost in a Good Book</h1>
            <p>
              Find stories that stay with you forever.
            </p>
            <button className="shop-btn">
              Browse Collection
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1600&q=80"
            className="d-block w-100"
            alt="Stack of books"
          />

          <div className="carousel-caption">
            <h1>Books. Stories. Inspiration.</h1>
            <p>
              Your perfect reading journey starts here.
            </p>
            <button className="shop-btn">
              Shop Now
            </button>
          </div>
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bookCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bookCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>



                      <section className="home">

                <main className="home-heading">
                    <h1>Book Store</h1>
                    <p>Explore Your Favorite Books</p>
                </main>

                <div className="card-container">
                    {
                        props.myData.map((data, index) => {
                            return (
                                <div className="card" key={index}>

                                    <img src={data.image} alt={data.title} className="book-image"/>                                  
                                    <h2>{data.title}</h2>
                                    <h3>{data.author}</h3>

                                    <p className="category"> {data.category}</p>

                                    <p className="price">Price : ${data.price}</p>

                                </div>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default Home;