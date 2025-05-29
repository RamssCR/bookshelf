import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Bookshelf } from './views/Bookshelf'
import { BookDetails } from './views/BookDetails'
import { Discover } from './views/Discover'
import { Login } from './views/Login'
import { Profile } from './views/Profile'
import { Register } from './views/Register'
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/books/:id" element={<BookDetails />} />
        <Route path="/your-books" element={<YourBooks />} />
        <Route path="/your-books/books/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  )
}