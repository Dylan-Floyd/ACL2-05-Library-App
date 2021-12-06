import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/books">Book List</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/books/:id" render={(renderProps) => <BookDetail renderProps />} />
            <Route path="/books" render={(renderProps) => <BookList renderProps />} />
            <Route path="/">books</Route>
          </Switch>
        </div>
      </Router>
    </main>
  )
}

export default App
