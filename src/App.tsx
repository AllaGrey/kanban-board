import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared/GlobalStyle/GlobalStyle";
import { theme } from "./theme/theme";
import Layout from "./shared/Layout/Layout";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
