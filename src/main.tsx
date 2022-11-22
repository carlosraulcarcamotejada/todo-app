import React from "react";
import ReactDOM from "react-dom/client";
import { TodoistApp } from "./TodoistApp";
import "./index.css";
import "/fonts/Courgette/Courgette-Regular.ttf";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TodoistApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
