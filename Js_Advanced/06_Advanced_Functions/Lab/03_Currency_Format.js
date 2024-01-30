(spr, sym, symF, fn) => fn.bind(null, spr, sym, symF);

(spr, sym, symF, fn) => (val) => fn(spr, sym, symF, val)