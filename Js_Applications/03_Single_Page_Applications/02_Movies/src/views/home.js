import { get } from "../data/api.js"
import { render } from "../util.js"
import { createDetails } from "./details.js"

const view = (movies) => `<section id="home-page" class="view-section">
      <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40">
        <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
          class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px" />
        <h1 class="display-4">Movies</h1>
        <p class="lead">
          Unlimited movies, TV shows, and more. Watch anywhere. Cancel
          anytime.
        </p>
      </div>

      <h1 class="text-center">Movies</h1>

      <section id="add-movie-button" class="user">
        <a href="#" class="btn btn-warning">Add Movie</a>
      </section>

      <section id="movie">
        <div class="mt-3">
          <div class="row d-flex d-wrap">
            <ul id="movies-list" class="card-deck d-flex justify-content-center">
              
                ${movies.map(movieView).join('\n')}

            </ul>
          </div>
        </div>
      </section>
    </section>`

const movieView = (movie) => `<li style="list-style-type: none;">
                <div style="height: 30vw;" class="row bg-light text-dark">
                  <div style="height: 100%;">
                    <img style="object-fit: contain; width: 20vw; height: 25vw" class="img-thumbnail"
                      src="${movie.img}" alt="Movie" />
                    <h3>${movie.title}</h2>
                      <div>
                        <a onclick="onDetails(event)" class="btn btn-primary" data-id="${movie._id}" href="/details/${movie._id}">Details</a>
                      </div>
                  </div>
              </li>`

export async function createHome() {
    const movies = await get('/data/movies')

    window.onDetails = function (e) {
        render(() => createDetails(movies.find(m => m._id.toString() == e.target.dataset.id)))
    }

    return view(movies)
}