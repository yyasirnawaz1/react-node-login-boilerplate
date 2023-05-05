import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";

// Tailwind css
import "./tailwind.css";

// i18n (needs to be bundled)
import "./i18n";

import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";
import CustomRoute from "./router/index";
import { AuthContextProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

// https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <CustomRoute />
          </Provider>
        </QueryClientProvider>
      </AuthContextProvider>
    </Suspense>
  </React.StrictMode>
);
