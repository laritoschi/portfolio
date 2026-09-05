export default function(url) {
  const normalizedUrl = url.replace('/pt', '');

  if (this.page.lang === 'en') {
    // keep in english
    return normalizedUrl;
  }

  if (this.page.lang === 'pt') {
    // keep in português
    return `/pt${normalizedUrl}`;
  }

  return url;
}