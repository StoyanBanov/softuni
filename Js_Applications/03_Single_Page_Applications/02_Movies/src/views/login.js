import { post } from "../data/api.js"
import { manageSubmit, render, setUserData } from "../util.js"
import { createHome } from "./home.js"

const view = () => `<section id="form-login" class="view-section">
      <form onsubmit="onLogin(event)" id="login-form" class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </section>`

export async function createLogin() {
    window.onLogin = manageSubmit(async data => {
        setUserData(await post('/users/login', data))

        render(createHome)
    })

    return view()
}