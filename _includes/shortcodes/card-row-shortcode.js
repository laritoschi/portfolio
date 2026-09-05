export default async function(ctx, cfg, content, cols = 3) {
  const rendered = await cfg.getFilter('renderContent').bind(ctx)(content, 'md');
  return `<div class="card-row" style="--columns: ${cols}">${rendered}</div>`;
}