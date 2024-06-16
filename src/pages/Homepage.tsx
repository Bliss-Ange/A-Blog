import React from 'react';
import { Typography } from '@mui/material';
import { containerStyle } from '@/app/containerStyle';

interface HomePageProps {
  open: boolean;
}

const Homepage = ({ open }: HomePageProps) => {
  return (
    <div style={containerStyle}>
      <main style={{ marginLeft: open ? "350px" : "10px", marginTop: "90px", transition: "margin 0.3s" }}>
        
      </main>
    </div>
  );
};

export default Homepage;