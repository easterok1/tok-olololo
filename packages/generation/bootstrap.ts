import '@tok/ui/styles/global.scss';

import { DefinePressetsPlugin } from '@tok/generation/plugins/definePressets';
import { FormStatePlugin } from '@tok/generation/plugins/formState';
import { ThemePlugin } from '@tok/generation/plugins/theme';
import { TokI18nPlugin } from '@tok/i18n';
import { AlertsPlugin } from '@tok/ui/use/alerts';
import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';

import { BootstrapConfig } from './defineConfig';

type _App = Parameters<typeof createApp>[0];

export function bootstrap<T extends BootstrapConfig<any>>(
  App: _App,
  config: T
) {
  const { fallback, ...asyncLocales } = config.locale || {};

  const i18nOptions = {
    default: fallback || 'en',
    asyncLocales,
  };

  const pages = config.pages.map((config, index) => {
    return {
      path: index === 0 ? '/' : config.path || `/${index}`,
      component: () => import('@tok/generation/pressets/Route.vue'),
      meta: {
        config,
      },
    };
  });

  const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE || '/'),
    routes: ([] as RouteRecordRaw[]).concat(pages).concat({
      path: '/not-found',
      alias: '/:catchAll(.*)*',
      redirect: '/',
    }),
  });

  router.afterEach((to: RouteLocationNormalized) => {
    if (to.params.savedPosition) {
      return;
    }

    window.scrollTo({ top: 0 });
  });

  router.onError((error, to) => {
    const dynamicallyImportsError =
      error.message.includes('Failed to fetch dynamically imported module') ||
      error.message.includes('Importing a module script failed');

    if (error.name === 'ChunkLoadError' || dynamicallyImportsError) {
      location.href = to.fullPath;
    }
  });

  return createApp(App)
    .use(router)
    .use(AlertsPlugin)
    .use(TokI18nPlugin, i18nOptions)
    .use(ThemePlugin, config.theme || 'auto')
    .use(FormStatePlugin)
    .use(DefinePressetsPlugin, config.definePressets || {})
    .mount('#app');
}
