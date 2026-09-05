export default function(url) {
  const normalizedUrl = url.replace('/pt', '');

  if (this.page.lang === 'pt') {
    // go to english
    return normalizedUrl;
  }

  if (this.page.lang === 'en') {
    // go to português
    return `/pt${normalizedUrl}`;
  }

  return url;
}