import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import Layout from "./components/layout/layout";
import AppContextProvider from "./context/app-context";
const App = () => {
  const routing = useRoutes(routes);
  return (
    <AppContextProvider>
      <Layout>{routing}</Layout>
    </AppContextProvider>
  );
};

export default App;
