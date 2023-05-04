// credit : https://openjavascript.info/2022/10/18/image-url-to-blob-in-javascript/

// example url https://picsum.photos/300/300
fetch('https://picsum.photos/300/300')
    .then(res => res.blob())
    .then(blob => handler(blob))


function handler(inputBlob) {

    const url = URL.createObjectURL(inputBlob);
    // Creates URL to the image Blob in memory

    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'fetched-image.jpeg');
    // Create a download link in HTML

    a.style.display = 'none';
    document.body.appendChild(a);

    a.click(); // Simulates click

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    // Removes download link and image URL and image from memory

}
