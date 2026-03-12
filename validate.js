const fs = require('fs');
const html = fs.readFileSync('c:\\Users\\PC\\Downloads\\خدماتي!\\مستقل\\kinder\\index.html', 'utf8');
const tags = [];
const selfClosing = new Set(['img', 'input', 'br', 'hr', 'link', 'meta', 'source', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr']);
const regex = /<\/?([a-zA-Z0-9]+)[^>]*>/g;
let match;
while ((match = regex.exec(html)) !== null) {
    const fullTag = match[0];
    const tagName = match[1].toLowerCase();

    if (fullTag.startsWith('</')) {
        if (tags.length === 0) {
            console.log('Unmatched closing tag:', tagName);
        } else {
            const last = tags.pop();
            if (last !== tagName) {
                console.log('Mismatched tags:', last, tagName, 'at index', match.index);
            }
        }
    } else {
        if (!selfClosing.has(tagName) && !fullTag.endsWith('/>')) {
            tags.push(tagName);
        }
    }
}
console.log('Remaining unclosed tags:', tags);
