import mixpanel from "mixpanel-browser";
import { hotjar } from "react-hotjar";
import ReactGA from "react-ga";

export const GoogleAnalyticsID = "UA-102732788-7";

function initializeMixpanel(mixpanelPageViewProps?: Record<string, string>) {
  mixpanel.init("4b0e7a406c99710357a1b6aad2d9ad9f", {
    track_pageview: false,
  });
  mixpanel.track("pageview", mixpanelPageViewProps);
}

function initializeHotJar() {
  hotjar.initialize(2710334, 6);
}

function initializeGoogleAnalytics() {
  ReactGA.initialize(GoogleAnalyticsID, { titleCase: false });
  ReactGA.ga("set", "anonymizeIp", true);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function enableGoogleAnalytics(enabled: boolean): void {
  // https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out
  const kDisable = `ga-disable-${GoogleAnalyticsID}`;
  const w = window as any;
  if (enabled) {
    delete w[kDisable];
  } else {
    w[kDisable] = true;
  }
}

export function initialize(
  mixpanelPageViewProps?: Record<string, string>
): void {
  const canTrack = allowsTracking();
  enableGoogleAnalytics(canTrack);

  if (canTrack) {
    initializeMixpanel(mixpanelPageViewProps);
    initializeGoogleAnalytics();
    initializeHotJar();
  }
}

export function track(
  category: string,
  action: string,
  props: { label: string } | Record<string, string | undefined> = {}
): void {
  const name = `${category} ${action}`;

  mixpanel.track(name, props);

  ReactGA.event({
    category,
    action,
    label: "label" in props ? props.label : undefined,
  });
}

const optOutKey = "allow-tracking";

export function hasMadeTrackingDecision(): boolean | undefined {
  try {
    return localStorage[optOutKey] !== undefined;
  } catch {
    return undefined;
  }
}

export function allowsTracking(): boolean {
  try {
    return localStorage[optOutKey] !== "false";
  } catch {
    // If we cannot read localStorage, assume no tracking
    return false;
  }
}

export function setAllowTracking(allow: boolean = true): void {
  try {
    localStorage[optOutKey] = allow;
  } catch {
    // Pass
  }
  if (allow) {
    mixpanel.opt_in_tracking();
    enableGoogleAnalytics(true);
  } else {
    mixpanel.opt_out_tracking();
    enableGoogleAnalytics(false);
  }
}

export function optOutOfTracking(): void {
  setAllowTracking(false);
}
