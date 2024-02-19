import { post } from "../data/api.js";
import { manageSubmit, render } from "../util.js";
import { createHome } from "./home.js";

const view = () => `<section id="add-movie" class="view-section">
      <form onsubmit="onCreate(event)" id="add-movie-form" class="text-center border border-light p-5" action="#" method="">
        <h1>Add Movie</h1>
        <div class="form-group">
          <label for="title">Movie Title</label>
          <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="" />
        </div>
        <div class="form-group">
          <label for="description">Movie Description</label>
          <textarea class="form-control" placeholder="Description" name="description"></textarea>
        </div>
        <div class="form-group">
          <label for="imageUrl">Image url</label>
          <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="img" value="" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>`

export async function createCreate() {
    if (sessionStorage.getItem('token') === null)
        return createHome()

    window.onCreate = manageSubmit(async data => {
        await post('/data/movies', data)

        render(createHome)
    })

    return view()
}