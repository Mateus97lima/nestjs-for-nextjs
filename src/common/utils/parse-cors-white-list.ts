export function ParseCorsWhiteList(raw: string): string[] {
  return raw
    .split(/\s+/)
    .map(url => url.replace(/\/+$/, ''))
    .filter(Boolean); // Remove entradas vazias//
}
