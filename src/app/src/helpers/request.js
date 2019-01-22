import API from './API';

function POST(apiRoute, data){
  return this.createRequest('POST', API[apiRoute] );
}

function GET(apiRoute, apiUrl){
  return this.createRequest('GET',  apiUrl || API[apiRoute] );
}

function createRequest(type, apiRoute, data) {
  return new Promise((resolve, reject) => {

    let xhr = new XMLHttpRequest();
    xhr.open(type, apiRoute);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(data || '');

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };


  });
}

export default {
  POST, GET, createRequest
}
