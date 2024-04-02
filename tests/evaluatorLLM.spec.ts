import { test } from '@playwright/test';
import { expectOk, checkResponseIncludes } from '../helpers/assertions';
import { validateReponseWithEvaluator } from '../helpers/evaluatorLlm';
const singleGenerate = '/api/generate'
const model = 'llama2'
const stream = false

test('Validate response content accuracy for prompt: Why is the sky blue?', async ({ request }) => {
    const expectedResponse = "The sky appears blue because of a phenomenon called Rayleigh scattering, which occurs when sunlight enters Earth's atmosphere."

    const response = await request.post(singleGenerate, {
    data: {
      model: model,
      prompt: 'Why is the sky blue?',
      stream: stream,
    }
  });

    expectOk(response);
    const responseBody = await response.json();
    checkResponseIncludes(responseBody, ["Rayleigh scattering"]);
     
    await validateReponseWithEvaluator(request, responseBody, expectedResponse);
});

test('Failing exmaple of: Why is the sky blue?', async ({ request }) => {
  const expectedResponse = "Because of Sonic the Hedgehog."

  const response = await request.post(singleGenerate, {
  data: {
    model: model,
    prompt: 'Why is the sky blue?',
    stream: stream,
  }
});

  expectOk(response);
  const responseBody = await response.json();
  checkResponseIncludes(responseBody, ["Rayleigh scattering"]);
   
  await validateReponseWithEvaluator(request, responseBody, expectedResponse);
});