const defaults = {
  method: 'GET',
  path: '/',
  body: null,
  header: {},
  baseurl: 'http://127.0.0.1:3001',
};

function makeXHR(option) {
  const { method, path, body, header, baseurl } = Object.assign(
    {},
    defaults,
    option
  );

  const xhr = new XMLHttpRequest();

  xhr.open(method, `${baseurl}${path}`);

  [...Object.keys(header)].forEach((key) => {
    xhr.setRequestHeader(key, header[key]);
  });

  // xhr.withCredentials = true;
  xhr.send(body);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert(xhr.responseText);
      }
    }
  };
}

try {
  if (module) {
    module.exports = makeXHR;
  }
} catch (error) {}
