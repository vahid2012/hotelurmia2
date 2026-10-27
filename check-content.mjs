import fs from 'fs';

const ts = fs.readFileSync('src/data/hotel-content.ts', 'utf8');

// Remove interface blocks by finding 'export interface' and matching braces
function stripInterfaces(code) {
  let result = '';
  let i = 0;
  while (i < code.length) {
    const ifaceIdx = code.indexOf('export interface', i);
    if (ifaceIdx === -1) {
      result += code.slice(i);
      break;
    }
    result += code.slice(i, ifaceIdx);
    // find opening brace
    let j = code.indexOf('{', ifaceIdx);
    let depth = 1;
    j++;
    while (j < code.length && depth > 0) {
      if (code[j] === '{') depth++;
      else if (code[j] === '}') depth--;
      j++;
    }
    i = j;
    // skip optional semicolon
    while (i < code.length && /[;\s]/.test(code[i])) i++;
  }
  return result;
}

let code = stripInterfaces(ts);
code = code.replace(/export const HOTEL_CONTENT[^=]*=\s*/, 'const HOTEL_CONTENT = ');

const data = new Function(code + '; return HOTEL_CONTENT;')();

const slugs = ['jahangardi-urmia','kara-urmia','toral-urmia','ana-urmia','diako-urmia','mandegar-urmia','maah-kimia-urmia','morvarid-urmia'];
let allOk = true;
for (const slug of slugs) {
  const h = data[slug];
  if (!h) { console.log(slug, 'MISSING'); allOk = false; continue; }
  const allText = h.intro + ' ' + h.sections.map(s => s.heading + ' ' + s.body).join(' ');
  const words = allText.trim().split(/\s+/).length;
  const sections = h.sections.length;
  const faqs = h.faq.length;
  const whyBook = h.whyBook.length;
  const imgs = h.sections.filter(s => s.image).length;
  const ok = words >= 800 && sections >= 3 && faqs >= 4 && whyBook >= 4 && imgs >= 1;
  if (!ok) allOk = false;
  console.log(slug.padEnd(22), 'words:' + words, 'sec:' + sections, 'faq:' + faqs, 'whyBook:' + whyBook, 'img:' + imgs, ok ? 'OK' : 'FAIL');
}
console.log('\nALL:', allOk ? 'PASS' : 'FAIL');
process.exit(allOk ? 0 : 1);
