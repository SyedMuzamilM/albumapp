import { Container, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { PhotoAlbum } from "./components/photoAlbum";
import store from "./redux/store";
import "./App.css";
import { theme } from "./theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <PhotoAlbum />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
