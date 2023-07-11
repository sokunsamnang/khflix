import { CaptureConsole, HttpClient } from "@sentry/integrations";
import * as Sentry from "@sentry/react";

import { conf } from "@/setup/config";
import { SENTRY_DSN } from "@/setup/constants";

Sentry.init({
  dsn: SENTRY_DSN,
  release: `khflix@${conf().APP_VERSION}`,
  sampleRate: 0.5,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    new Sentry.BrowserTracing(),
    new CaptureConsole(),
    new HttpClient(),
    new Sentry.Replay(),
  ],
});
