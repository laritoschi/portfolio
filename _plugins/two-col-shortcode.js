export default async function(ctx, cfg, content) {
  const rendered = await cfg.getFilter('renderContent').bind(ctx)(content, 'md');
  return `<div class="two-col">${rendered}</div>`;
}