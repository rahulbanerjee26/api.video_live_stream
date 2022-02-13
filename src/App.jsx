import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <h1>Welcome to my Live Stream</h1>
              <iframe 
                src="https://embed.api.video/live/li0133grn2X8KbXhiF1spqed" 
                className='videoPlayer'
                width="100%"
                height="100%" 
                frameborder="0" 
                scrolling="no" 
                allowfullscreen="true">
              </iframe>
    </main>
  );
}

export default App;