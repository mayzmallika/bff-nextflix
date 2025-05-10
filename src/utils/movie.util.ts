export function getHighQualityPosterUrl(url: string): string {
  return url.replace(/(_V1).*?(\.jpg)/, '$1$2');
}
