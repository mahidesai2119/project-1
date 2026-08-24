import "./Home.css";

function Home(props) {
    return (
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

                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="book-image"
                                />

                                <h2>{data.title}</h2>

                                <h3>{data.author}</h3>

                                <p className="category">
                                    {data.category}
                                </p>

                                <p className="price">
                                    Price : ${data.price}
                                </p>

                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Home;