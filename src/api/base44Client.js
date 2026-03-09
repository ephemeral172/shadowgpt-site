import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

// Заглушка, когда Base44 не настроен (нет VITE_BASE44_APP_ID и т.д.) — приложение работает без бэкенда
const noBase44Stub = {
  auth: {
    me: () => Promise.resolve(null),
    logout: () => {},
    redirectToLogin: () => {}
  }
};

const hasBase44 = appId != null && String(appId).trim() !== '';

export const base44 = hasBase44
  ? createClient({
      appId,
      token,
      functionsVersion,
      serverUrl: '',
      requiresAuth: false,
      appBaseUrl
    })
  : noBase44Stub;
