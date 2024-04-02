# LLM Testing with Playwright
This repository contains an example Playwright test framework for using the Ollama API to interact with and test the Meta Llama2 LLM. You can read the associated blog post on [The Quality Duck](https://insertlinkhere.com) website.

## Assertions
The framework includes a simple assertions helper. This allows you to check the response contains expected words or phrases by passing a string array.

## Forbidden Words
This example framework contains a list of forbidden words. Assertions check against the list of forbidden words to ensure that replies do no include any of the words on the list. 

You can see an exmaple of a test failing because of a forbidden word in the ```basicFunctionality``` spec called ```Validate cannot be tricked into using a forbidden word```.

The forbidden words check has a bypass option, you can see this in use in the ```basicFunctionalityChat``` spec called ```Validate cannot be tricked into providing an answer```.

# Evaluator LLM
The evaluator LLM allows you to pass an the received response plus an acceptable answer back to the LLM and ask it to validate that both answers give accurate and corroborating answers to the same question providing additional confidence in the received answer in full. The evaluatorLLM spec provides examples for both passing and failing tests.