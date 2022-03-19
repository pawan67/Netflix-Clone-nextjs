import { UserContextProvider } from "../context/userContext";
import { store } from "../features/store";
import "../styles/globals.css";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </Provider>
  );
}

export default MyApp;
