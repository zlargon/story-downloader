const download = async (url) => {
  const filename = url.match(/([^\\/]+\.[^\\/]+)\?/)[1];
  const blob = await fetch(url).then(res => res.blob());
  const blobUrl = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = filename;
  a.click();

  window.URL.revokeObjectURL(blobUrl);
}

document.addEventListener('keydown', function (e) {

  // Shift + D
  if (e.keyCode == 68 && e.shiftKey) {
    let url;
    try {
      // video
      url = document.getElementsByTagName('source')[0].src;
    } catch (e) {
      // image
      url = document.getElementsByTagName('img')[1].currentSrc;
    }

    download(url);
  }
}, true);
