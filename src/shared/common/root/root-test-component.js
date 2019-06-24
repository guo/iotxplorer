import "jsdom-global/register";
import Styletron from "styletron-client";
import { Provider as StyleProvider } from "styletron-react";
import { Provider } from "react-redux";
import { createStore } from "redux";

export function RootTestComponent({ children }) {
  return (
    <Provider store={createStore(() => ({ base: {} }))}>
      <StyleProvider styletron={new Styletron()}>{children}</StyleProvider>
    </Provider>
  );
}
