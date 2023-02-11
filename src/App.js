
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Box } from '@mui/material';
import './App.css';
import {Navbar,Feed,ChannelDetail,SearchFeed,VideoDetail} from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:id" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
