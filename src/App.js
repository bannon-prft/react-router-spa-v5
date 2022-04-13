import { Route, Routes, Navigate, Link } from 'react-router-dom'

import Quotes from './pages/Quotes'
import QuoteDetail from './pages/QuoteDetail'
import NewQuote from './pages/NewQuote'
import Layout from './components/layout/Layout'
import NotFound from './pages/NotFound'
import Comments from './components/comments/Comments'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
          <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path="/quotes/new" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
