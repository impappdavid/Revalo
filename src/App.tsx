import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './pages/Feed';
import { ThemeProvider } from "@/components/mycomponents/theme-provider";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={`Hello World`} />
              <Route path="feed" element={<Feed />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
