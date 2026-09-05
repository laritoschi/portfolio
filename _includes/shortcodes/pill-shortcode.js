export default function(label, type = '') {
  return `<span class="pill ${type}">${label}</span>`;
}