const isNode = typeof window === 'undefined';

const toSnakeCase = (str) => {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};

const getEnv = (key) => {
  const value = import.meta.env[key];
  if (!value) {
    console.error(`[ENV ERROR] ${key} is not defined`);
  }
  return value;
};

const getUrlParam = (paramName) => {
  if (isNode) return null;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
};

const getStorage = (key) => {
  if (isNode) return null;
  return window.localStorage.getItem(key);
};

const setStorage = (key, value) => {
  if (isNode) return;
  window.localStorage.setItem(key, value);
};

const clearStorage = (key) => {
  if (isNode) return;
  window.localStorage.removeItem(key);
};

const resolveParam = (paramName, envKey) => {
  const storageKey = `base44_${toSnakeCase(paramName)}`;

  // 1. URL tem prioridade máxima
  const urlValue = getUrlParam(paramName);
  if (urlValue) {
    setStorage(storageKey, urlValue);
    return urlValue;
  }

  // 2. ENV (fonte confiável)
  const envValue = getEnv(envKey);
  if (envValue) {
    return envValue;
  }

  // 3. fallback: localStorage
  const stored = getStorage(storageKey);
  if (stored) {
    return stored;
  }

  return null;
};

const getAppParams = () => {
  const appId = resolveParam("app_id", "VITE_BASE44_APP_ID");
  const token = resolveParam("access_token", null);
  const functionsVersion = resolveParam(
    "functions_version",
    "VITE_BASE44_FUNCTIONS_VERSION"
  );
  const appBaseUrl = resolveParam(
    "app_base_url",
    "VITE_BASE44_APP_BASE_URL"
  );

  // Validação crítica
  if (!appBaseUrl) {
    throw new Error(
      "[FATAL] appBaseUrl is not defined. Check your .env (VITE_BASE44_APP_BASE_URL)"
    );
  }

  console.log("[DEBUG] Base44 Config:", {
    appId,
    functionsVersion,
    appBaseUrl,
  });

  return {
    appId,
    token,
    functionsVersion,
    appBaseUrl,
    fromUrl: isNode ? null : window.location.href,
  };
};

export const appParams = {
  ...getAppParams(),
};