const fs = require('fs');
const content = fs.readFileSync('valentine.html', 'utf8');
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/g);
if (scriptMatch) {
    scriptMatch.forEach((s, i) => {
        const code = s.replace('<script>', '').replace('</script>', '');
        try {
            new Function(code);
            console.log(`Script ${i} OK`);
        } catch (e) {
            console.error(`Script ${i} Error:`, e.message);
            // Print surrounding lines of error if possible
            const lines = code.split('\n');
            console.log('Code around error:');
            // This is hard without line numbers from Function constructor, but let's try
        }
    });
}
