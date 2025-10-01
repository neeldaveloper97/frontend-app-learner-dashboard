const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

function formatToDays(isoDate) {
const targetDate = new Date(isoDate);
  const now = new Date();
  return Math.floor((targetDate - now) / (1000 * 60 * 60 * 24));
}

export { cn, formatToDays };
