import { expect } from '@playwright/test';
import { checkForForbiddenWords } from '../helpers/forbiddenWords';

export function checkResponseIncludes(response: any, expectedWords: string[], bannedWords = true) {
  const responseString = JSON.stringify(response);

  for (const word of expectedWords) {
    expect(responseString.includes(word)).toBeTruthy(); //this is case sensitive :( need to fix that.
  }
  
  if (bannedWords === true)
  {
    expect(checkForForbiddenWords(responseString)).toBeFalsy();
  }
}

export function expectOk(response) {
    expect(response.ok()).toBeTruthy();
}