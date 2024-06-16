import { useContext } from "react";
import { AppContext, App } from "~/app-providers/index";

export const useAppContext = () => {
  const app: App = useContext(AppContext);

  return {
    app,
    signals: app.signals,
    fb: app.firebase,
    db: app.firebase.db,
  };
};
