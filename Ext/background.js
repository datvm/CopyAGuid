chrome.browserAction.onClicked.addListener(() => {
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    const span = document.createElement("span");
    span.innerText = uuid;
    document.body.appendChild(span);

    const sel = window.getSelection();
    const range = document.createRange();
    try {
        range.selectNode(span);
    
        sel.removeAllRanges();
        sel.addRange(range);

        document.execCommand('copy');
    } catch(e) {
        console.error(e);
    } finally {
        span.remove();
        sel.removeAllRanges();
    }
    
});