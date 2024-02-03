async function submitRagChain() {
    // Change cursor to "wait" while waiting for the response
    document.body.style.cursor = 'wait';

    var url = document.getElementById("url").value;
    var question = document.getElementById("question").value;

    try {
        const response = await fetch('/rag-chain', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'url': url, 'question': question }),
        });

        const data = await response.json();
        document.getElementById("response").innerText = data.response;
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Revert cursor to default after the response is received
        document.body.style.cursor = 'default';
    }
}