// localStorage bloklanıbsa (məxfi rejim və s.) səssizcə işləməyə davam edir.
export const storage = {
  get: (key, fallback) => {
    try { return localStorage.getItem(key) || fallback } catch { return fallback }
  },
  set: (key, value) => {
    try { localStorage.setItem(key, value) } catch { /* yoxdur */ }
  },
}
