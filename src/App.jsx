import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./config/Routing/AppRouter";

function App() {
  return (
    <>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </>
  );
}

export default App;
