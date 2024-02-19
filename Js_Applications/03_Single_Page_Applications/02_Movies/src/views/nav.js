const view = (email) => `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand text-light" href="/">Movies</a>
        <ul class="navbar-nav ml-auto">
        ${email
    ? `<li class="nav-item user">
            <a class="nav-link" id="welcome-msg">Welcome, ${email}</a>
          </li>
          <li class="nav-item user">
            <a class="nav-link" href="javascript:void(0)">Logout</a>
          </li>`
    : `<li class="nav-item guest">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item guest">
            <a class="nav-link" href="/register">Register</a>
          </li>`
  }
     </ul>
     </nav>`

export async function createNav() {
  return view(sessionStorage.getItem('email'))
}