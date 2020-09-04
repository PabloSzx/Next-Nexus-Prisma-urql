import { NextPage } from "next";
import { AppProps } from "next/app";
import { Client, Provider } from "urql";

const client = new Client({
  url: "http://localhost:3000/api/graphql",
});

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
