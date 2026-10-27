// Sinifləri birləşdirir: cx(a, cond && b, c)
export const cx = (...parts) => parts.filter(Boolean).join(' ')
