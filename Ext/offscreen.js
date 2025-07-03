chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
    if (msg.action !== "copy" || typeof msg.text !== "string") {
        sendResponse({ success: false, error: "Invalid message" });
        return;
    }

    try {
        const textEl = document.querySelector('#text');
        textEl.value = msg.text;
        textEl.focus();
        textEl.select();

        const success = document.execCommand('copy');
        if (success) {
            sendResponse({ success: true });
        } else {
            sendResponse({ success: false, error: "execCommand failed" });
        }
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
    }
});