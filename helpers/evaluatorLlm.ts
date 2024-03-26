import { checkResponseIncludesPhrase } from '../helpers/assertions';
const singleGenerate = '/api/generate'
const model = 'llama2'
const stream = false

async function validateReponseWithEvaluator(request, response, expectedWords) {
    const originalResponse = JSON.stringify(response.response)
    const evaluatorResponse = await request.post(singleGenerate, {
        data: {
            model: model,
            prompt: "If the following 2 statements appear to give accurate and corroborating answers to the same question respond 'Yes, the statements are similar'. Statement 1 - " + originalResponse + " - end of statement 1. Statement 2 - " + expectedWords + " - end of statement2",
            stream: stream,
        }
    });

    const evaluatorAnswer = await evaluatorResponse.json();
    checkResponseIncludesPhrase(evaluatorAnswer, "Yes, the statements are similar");
}

export { validateReponseWithEvaluator };