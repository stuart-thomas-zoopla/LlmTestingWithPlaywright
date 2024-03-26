import { test } from '@playwright/test';
import { expectOk, checkResponseIncludesPhrase } from '../helpers/assertions';
import { validateReponseWithEvaluator } from '../helpers/evaluatorLlm';
const singleGenerate = '/api/generate'
const model = 'llama2'
const stream = false

test('Validate response content accuracy for prompt: Why is the sky blue?', async ({ request }) => {
    const expectedWords = "The sky appears blue because of a phenomenon called Rayleigh scattering, which occurs when sunlight enters Earth's atmosphere. \
    The sunlight encounters tiny molecules of gases such as nitrogen and oxygen, which scatter the light in all directions. \
    The shorter, blue wavelengths are scattered more than the longer, red wavelengths, causing the sky to appear blue."

    const response = await request.post(singleGenerate, {
    data: {
      model: model,
      prompt: 'Why is the sky blue?',
      stream: stream,
    }
  });

    expectOk(response);
    const responseBody = await response.json();
    checkResponseIncludesPhrase(responseBody, "Rayleigh scattering");
     
    await validateReponseWithEvaluator(request, responseBody, expectedWords);
});