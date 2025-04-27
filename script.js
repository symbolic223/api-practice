async function generateDiagram() {
    const type = document.getElementById('diagramType').value;
    const text = document.getElementById('diagramText').value;

    const response = await fetch(`https://kroki.io/${type}/svg`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: text
    });

    const svg = await response.text();
    document.getElementById('result').innerHTML = svg;
}

