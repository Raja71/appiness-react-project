import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import React from "react";
import store from "./services/store";
import HeaderComponent from "./components/Header";

const Root = ({ children, initialState = {} }) => <Provider store={store(initialState)}>
<HeaderComponent />
{children}</Provider>;
// serviceWorker.register();
serviceWorker.unregister();

export default Root;
