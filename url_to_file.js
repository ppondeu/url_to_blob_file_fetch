// credit : https://openjavascript.info/2022/10/18/image-url-to-blob-in-javascript/
async function URLtoFile(url) {

  const res = await fetch(url);
  const blob = await res.blob();
  // Gets URL data and read to blob

  console.log(blob);

  const mime = blob.type;
  const ext = mime.slice(mime.lastIndexOf("/") + 1, mime.length);
  // Gets blob MIME type (e.g. image/png) and extracts extension
      
  const file = new File([blob], `filename.${ext}`, {
      type: mime,
  })
  // Creates new File object using blob data, extension and MIME type

  console.log(file);

}

URLtoFile('https://picsum.photos/300/300');
// File { 
//    name: filename.jpeg, 
//    lastModified: 1674215820866, 
//    webkitRelativePath: "", 
//    size: 8912, 
//    type: "image/jpeg" 
// }

URLtoFile('https://httpbin.org/get');
// File { 
//   name: "filename.json", 
//   lastModified: 1674217178035, 
//   webkitRelativePath: "",
//   size: 560, 
//   type: "application/json" 
// }
