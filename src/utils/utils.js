const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

function formatToDays(isoDate) {
  const targetDate = new Date(isoDate);
  const now = new Date();

  const diffMs = targetDate - now;

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return `${diffDays} days`;
}

export { cn, formatToDays };
