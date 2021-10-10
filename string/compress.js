const compress = str =>
  str.replace(/(.)\1+/g, match =>
    match.length < 2 ? match : match[0] + match.length
  );
console.log(compress('ABBCCCE'));
