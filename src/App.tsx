import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './pages/Feed';
import { ThemeProvider } from "@/components/mycomponents/theme-provider";
import Login from './pages/Login';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Message from './pages/Message';

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Login />} />
              <Route path="feed" element={<Feed />} />
              <Route path="profile/me" element={<Profile />} />
              <Route path="messages" element={<Messages />} />
              <Route path="messages/:slug" element={<Message />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
