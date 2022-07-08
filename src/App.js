import React from "react";
import "./App.css";
import Form from './screens/Form';
import { Routes, Route } from "react-router-dom";
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5b50f5',
    },
  },
});

export default function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}