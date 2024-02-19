import { post } from "../data/api.js"
import { manageSubmit, render, setUserData } from "../util.js"
import { createHome } from "./home.js"

const view = () => `<section id="form-sign-up" class="view-section">
      <form onsubmit="onRegister(event)" id="register-form" class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
        </div>

        <div class="form-group">
          <label for="repeatPassword">Repeat Password</label>
          <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
            name="repeatPassword" value="" />
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </section>`

export async function createRegister() {
    window.onRegister = manageSubmit(async data => {
        if (data.password.length < 6 || data.password != data.repeatPassword)
            throw new Error('Passwords don\'t match!')

        setUserData(await post('/users/register', data))

        render(createHome)
    })

    return view()
}