import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './pages/Feed';
import { ThemeProvider } from "@/components/mycomponents/theme-provider";
import Login from './pages/Login';

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Login />} />
              <Route path="feed" element={<Feed />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
