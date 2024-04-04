import fs from 'fs';

function loadForbiddenWords(): string[] {
    try {
        const data = fs.readFileSync('./helpers/forbiddenWords.json', 'utf8');
        const { forbiddenWords } = JSON.parse(data);
        return forbiddenWords;
    } catch (error) {
        console.error("Error reading forbidden words:", error);
        return [];
    }
}

export function checkForForbiddenWords(response: string): boolean {
    const forbiddenWords = loadForbiddenWords();
    const foundWords: string[] = [];
    for (const word of forbiddenWords) {
        if (response.includes(word)) {
            foundWords.push(word);
        }
    }
    if (foundWords.length > 0) {
        console.log("The response contains the following forbidden words:", foundWords.join(", "), ". Here is the full response:\n", response);
        return true;
    }
    return false;
}
