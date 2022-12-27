export function getSkip(page, limit) {
  return ((+page || 1) - 1) * (+limit || 10);
}

export function getLimit(limit) {
  return +limit || 10;
}
