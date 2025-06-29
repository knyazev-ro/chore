import './bootstrap.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrelloPage from "./Entry/TrelloPage/TrelloPage";
import MainPage from "./Entry/Main/MainPage";
import LogIn from "./Entry/LogIn";
import NotificationPage from "./Entry/Notifications/NotificationPage";
import MessagesPage from "./Entry/Messages/MessagesPage";
import CrowdPage from "./Entry/Crowd/CrowdPage";
import NDiskPage from "./Entry/NDisk/NDiskPage";
import project from './mock/project.ts';
import NDiskDashboard from './Entry/NDisk/Pages/NDiskDashboard.tsx';

declare global {
  interface Window {
    Echo: any;
  }
}

function App() {

  window.Echo.channel('ndisk-compression')
    .listen('.ndisk.compression', (e) => {
        console.log('Ответ пришёл:', e.data.message, e.data.compressedImageModel);
    });
    
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="trello" element={<TrelloPage project={project} />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="notifications" element={<NotificationPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="crowd" element={<CrowdPage />} />
            <Route path="n-disk" element={<NDiskPage/>} />
            <Route path="n-disk/dashboard" element={<NDiskDashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
