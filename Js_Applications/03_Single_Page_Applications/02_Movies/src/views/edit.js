import { get, put } from "../data/api.js"
import { manageSubmit, render } from "../util.js"
import { createDetails } from "./details.js"

const view = (movie) => `<section id="edit-movie" class="view-section">
      <form onsubmit="onEdit(event)" class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
          <label for="imageUrl">Image url</label>
          <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value="${movie.img}" name="img" />
        </div>
        <div class="form-group">
          <label for="title">Movie Title</label>
          <input id="title" type="text" class="form-control" placeholder="Movie Title" value="${movie.title}" name="title" />
        </div>
        <div class="form-group">
          <label for="description">Movie Description</label>
          <textarea class="form-control" placeholder="Movie Description..." name="description">${movie.description}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>`

export async function createEdit(movieId) {
  window.onEdit = manageSubmit(async data => {
    await put('/data/movies/' + movieId, data)

    render(() => createDetails(movieId))
  })

  return view(await get('/data/movies/' + movieId))
}