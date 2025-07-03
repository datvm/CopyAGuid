async function ensureOffscreenDocument() {
    if (await chrome.offscreen.hasDocument()) { return; }

    await chrome.offscreen.createDocument({
        url: "offscreen.html",
        reasons: ["CLIPBOARD"],
        justification: "Need to write to clipboard"
    });
}

async function writeToClipboard(text) {
    await ensureOffscreenDocument();
    chrome.runtime.sendMessage({ action: "copy", text });
}

chrome.action.onClicked.addListener(async () => {
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    await writeToClipboard(uuid);
});