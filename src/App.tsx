import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Bookshelf } from './views/Bookshelf'
import { BookDetails } from './views/BookDetails'
import { BookReader } from '@views/BookReader'
import { Discover } from './views/Discover'
import { Login } from './views/Login'
import { Profile } from './views/Profile'
import { Protected } from './layouts/Protected'
import { Register } from './views/Register'
import { Toaster } from './components/ui/toaster'
import { YourBooks } from './views/YourBooks'
import { useThemeEffect } from './hooks/useThemeEffect'

export const App = () => {
  useThemeEffect()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Landing</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/discover/books/:slug" element={<BookDetails />} />
          <Route path="/discover/books/read/:slug/:chapter?" element={<BookReader />} />
          <Route path="/your-books" element={<YourBooks />} />
          <Route path="/your-books/books/:slug" element={<BookDetails />} />
          <Route path="/your-books/books/read/:slug/:chapter?" element={<BookReader />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}