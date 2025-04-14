// Purpose: App component to render the application
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from "@apollo/client";
  import { setContext } from "@apollo/client/link/context";
  import { Outlet } from "react-router-dom";
  import { useState, useEffect } from "react";

  import "../src/index.css";

  function App() {

    const [token, setToken] = useState(null);

    const httpLink = createHttpLink({
      uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    useEffect(() => {
      const token = localStorage.getItem("id_token");
      if (token) {
        setToken(token);
      }
    }, []);

    return (
      <ApolloProvider client={client}>
        <Outlet />
      </ApolloProvider>
    );
  }

  // export the App component
export default App;