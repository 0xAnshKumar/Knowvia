type AnalyticsProperties = Record<string, unknown>;

export function initAnalytics() {
  // Analytics disabled.
}

export function captureEvent(_event: string, _properties?: AnalyticsProperties) {
  // Analytics disabled.
}

export function identifyUser(
  _userId: string,
  _properties?: {
    email?: string | null;
    name?: string | null;
  },
) {
  // Analytics disabled.
}

export function resetAnalytics() {
  // Analytics disabled.
}

export function captureException(_error: unknown, _properties?: AnalyticsProperties) {
  // Analytics disabled.
}
