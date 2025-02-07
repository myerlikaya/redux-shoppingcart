"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

const store = makeStore();
export default function ReduxProvider({ children }: { children: ReactNode }) {
    
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}