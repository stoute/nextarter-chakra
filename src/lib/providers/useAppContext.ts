import { useContext } from 'react';

import type { App } from '~/lib/providers/index';
import { AppContext } from '~/lib/providers/index';

export const useAppContext = () => {
  const app: App = useContext(AppContext);

  return {
    app,
    signals: app.signals,
    fb: app.firebase,
    db: app.firebase.db,
  };
};
