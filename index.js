const myElement = document.getElementById('test123');
const res = []
for (let i = 0; i < myElement.children.length; i++) { 
  var author = myElement.children[i].children[3].children[0].getAttribute('title'); 
  var name =  myElement.children[i].children[1].getElementsByTagName('b')[0].getAttribute('title'); 
  res.push(`${name} - ${author}`);
}

function save(data, filename) {
  if (!data) {
      console.error('Console.save: No data');
      return;
  }
  if (!filename) {
      filename = 'console.json';
  }
  if (typeof data === 'object') {
      data = JSON.stringify(data, undefined, 4);
  }
  var blob = new Blob([data], {type: 'text/json'}),
      e    = document.createEvent('MouseEvents'),
      a    = document.createElement('a');
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(e);
}

save([res], 'mylist')
