function getApiKey(callback) {
    chrome.storage.sync.get(['openaiApiKey'], function(result) {
        callback(result.openaiApiKey);
    });
}

function setApiKey(apiKey, callback) {
    chrome.storage.sync.set({ openaiApiKey: apiKey }, function() {
        callback();
    });
}

function enhanceText(apiKey, inputText, option, notes, callback) {
    const url = 'https://api.openai.com/v1/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    const data = {
        prompt: `Make this text ${option}: "${inputText}". Notes: ${notes}`,
        model: "gpt-3.5-turbo-instruct",
        max_tokens: 100,
        temperature: 0.7,
    };

    console.log('Sending request to OpenAI:', data);

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from OpenAI:', data);
        if (data.choices && data.choices.length > 0) {
            callback(data.choices[0].text.trim());
        } else {
            callback(`Error: No response from OpenAI. Details: ${JSON.stringify(data)}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        callback(`Error: Failed to fetch from OpenAI. ${error.message}`);
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'setApiKey') {
        setApiKey(request.apiKey, () => {
            sendResponse({ status: 'success' });
        });
        return true;
    } else if (request.action === 'enhanceText') {
        getApiKey((apiKey) => {
            if (!apiKey) {
                sendResponse({ status: 'error', message: 'API key not set' });
                return;
            }

            console.log('Enhancing text with API key:', apiKey);
            enhanceText(apiKey, request.inputText, request.option, request.notes, (enhancedText) => {
                sendResponse({ status: 'success', enhancedText: enhancedText });
            });
        });
        return true;
    }
});
