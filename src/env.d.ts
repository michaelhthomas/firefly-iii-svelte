/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly FIREFLY_III_BASE_URL: string;
	readonly FIREFLY_III_BEARER_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
