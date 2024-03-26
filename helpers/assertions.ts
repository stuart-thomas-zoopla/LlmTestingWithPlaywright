import { expect } from '@playwright/test';
import { checkForForbiddenWords } from '../helpers/forbiddenWords';

export function checkResponseIncludesPhrase(response: any, expectedWords: string, bannedWords = true) {
  const responseString = JSON.stringify(response);

  expect(responseString.includes(expectedWords)).toBeTruthy(); //this is case sensitive :( need to fix that.

  if (bannedWords === true)
  {
    expect(checkForForbiddenWords(responseString)).toBeFalsy();
  }
}

export function expectOk(response) {
    expect(response.ok()).toBeTruthy();
}