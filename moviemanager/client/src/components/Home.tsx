import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Home = () => {
return(
<main>
<section className="my-5">
                <header>
                    <h1>
                        <FontAwesomeIcon
                            icon={faFilm}
                            rotation={270}
                            className="me-2"
                        />
                        Movies on Tip
                    </h1>
                </header>
                <hr />
                <p>
                    Welcome to Movies on Tip. You can find movies in your locality.

                    <div className="my-3">
                        <small>
                            <strong>NOTE</strong>: You can even add movies to your favourites.
                        </small>
                    </div>
                </p>
            </section>
</main>

)


}

export default Home;
