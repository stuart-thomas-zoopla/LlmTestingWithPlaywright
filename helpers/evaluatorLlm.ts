import { checkResponseIncludes } from '../helpers/assertions';
const singleGenerate = '/api/generate'
const model = 'llama2'
const stream = false

async function validateReponseWithEvaluator(request, response, expectedResponse) {
    const originalResponse = JSON.stringify(response.response)
    const evaluatorResponse = await request.post(singleGenerate, {
        data: {
            model: model,
            prompt: "If the following 2 statements appear to give accurate and corroborating answers to the same question and do not give conflicting information respond \
            'Yes, the statements are similar'. Statement 1 - " + originalResponse + " - end of statement 1. Statement 2 - " + expectedResponse + " - end of statement2",
            stream: stream,
        }
    });

    const evaluatorAnswer = await evaluatorResponse.json();
    checkResponseIncludes(evaluatorAnswer, ["Yes, the statements are similar"]);
}

export { validateReponseWithEvaluator };