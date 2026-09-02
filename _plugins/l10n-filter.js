import pt from '../_data/locales/pt.js';
import en from '../_data/locales/en.js';

export default function(key) {
  if (this.page.lang === 'en') return en[key] || key;
  if (this.page.lang === 'pt') return pt[key] || key;
  return key;
}