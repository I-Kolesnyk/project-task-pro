export function parseDate(input, format) {
  format = format || 'dd.mm.yyyy';
  var parts = input.match(/(\d+)/g),
    i = 0,
    fmt = {};
 
  format.replace(/(yyyy|dd|mm)/g, function (part) {
    fmt[part] = i++;
  });
  return new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);
}
