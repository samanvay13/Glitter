document.addEventListener('DOMContentLoaded', function () {
    const apiKeyInput = document.getElementById('apiKeyInput');
    const apiKeySaveBtn = document.getElementById('apiKeySaveBtn');

    apiKeySaveBtn.addEventListener('click', function () {
        const apiKey = apiKeyInput.value;
        chrome.storage.sync.set({ openaiApiKey: apiKey }, function () {
            console.log("API Key: ", apiKey);
            alert('API key saved successfully!');
        });
    });

    chrome.storage.sync.get('openaiApiKey', function (data) {
        if (data.openaiApiKey) {
            apiKeyInput.value = data.openaiApiKey;
        }
    });
});
