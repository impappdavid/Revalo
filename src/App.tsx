import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './pages/Feed';
import { ThemeProvider } from "@/components/mycomponents/theme-provider";
import Login from './pages/Login';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Message from './pages/Message';
import Communities from './pages/Communities';
import Photos from './pages/Photos';
import Clips from './pages/Clips';
import { Analytics } from "@vercel/analytics/react"
import Music from './pages/Music';
import Jobs from './pages/Jobs';
import Market from './pages/Market';

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
              <Route path="communities" element={<Communities />} />
              <Route path="photos" element={<Photos />} />
              <Route path="clips" element={<Clips />} />
              <Route path="music" element={<Music />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="market" element={<Market />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default App
