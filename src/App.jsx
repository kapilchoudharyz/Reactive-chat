import LoginPage from "./LoginPage.jsx";
import MainPage from "./MainPage.jsx";
import ChatPage from "./components/ChatPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={"app min-h-screen w-screen  "}>
        <BrowserRouter>
          <Routes>
            <Route></Route>
          </Routes>
          <LoginPage></LoginPage>
          {/*  <MainPage ></MainPage>*/}
          {/*<ChatPage></ChatPage>*/}
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}
export default App;
