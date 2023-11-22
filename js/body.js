function ssunreload(){
  let currentUrl = window.location.href;
  // 判断 URL 是否包含指定的字符串
  if (currentUrl.indexOf('/home') !== -1) {
    // 执行代码 1
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'public/homepage.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 将文件内容添加到指定的 div 元素中
          let content = xhr.responseText;
          let divElement = document.getElementById('home');
          divElement.innerHTML = content;
        } else {
          console.log('错误' + xhr.status);
        }
      }
    };
    xhr.send();
  } else if (currentUrl.indexOf('/about') !== -1) {
    // 执行代码 2
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'public/aboutpage.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 将文件内容添加到指定的 div 元素中
          let content = xhr.responseText;
          let divElement = document.getElementById('aboutpage');
          divElement.innerHTML = content;
        } else {
          console.log('Error: ' + xhr.status);
          next(false);
        }
      }
    };
    xhr.send();
  } else if (currentUrl.indexOf('/download') !== -1) {
    // 执行代码 3
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'public/download.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 将文件内容添加到指定的 div 元素中
          let content = xhr.responseText;
          let divElement = document.getElementById('download');
          divElement.innerHTML = content;
        } else {
          console.log('Error: ' + xhr.status);
        }
      }
    };
    xhr.send();
  } else if (currentUrl.indexOf('/address') !== -1) {
    // 执行代码 3
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'public/address.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 将文件内容添加到指定的 div 元素中
          let content = xhr.responseText;
          let divElement = document.getElementById('address');
          divElement.innerHTML = content;
        } else {
          console.log('Error: ' + xhr.status);
        }
      }
    };
    xhr.send();
  }
};
setTimeout(function() {
  let currentUrl = window.location.href;
  // 判断 URL 是否包含指定的字符串
  if (currentUrl.indexOf('/home') !== -1) {
    // 执行代码 1
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'public/home.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 将文件内容添加到指定的 div 元素中
          let content = xhr.responseText;
          let divElement = document.getElementById('home');
          divElement.innerHTML = content;
        } else {
          console.log('错误' + xhr.status);
        }
      }
    };
    xhr.send();
  } else if (currentUrl.indexOf('/about') !== -1) {
    // 执行代码 2
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'public/aboutpage.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 将文件内容添加到指定的 div 元素中
          let content = xhr.responseText;
          let divElement = document.getElementById('aboutpage');
          divElement.innerHTML = content;
        } else {
          console.log('Error: ' + xhr.status);
          next(false);
        }
      }
    };
    xhr.send();
  } else if (currentUrl.indexOf('/download') !== -1) {
    // 执行代码 3
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'public/download.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 将文件内容添加到指定的 div 元素中
          let content = xhr.responseText;
          let divElement = document.getElementById('download');
          divElement.innerHTML = content;
        } else {
          console.log('Error: ' + xhr.status);
        }
      }
    };
    xhr.send();
  } else if (currentUrl.indexOf('/address') !== -1) {
    // 执行代码 3
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'public/address.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 将文件内容添加到指定的 div 元素中
          let content = xhr.responseText;
          let divElement = document.getElementById('address');
          divElement.innerHTML = content;
        } else {
          console.log('Error: ' + xhr.status);
        }
      }
    };
    xhr.send();
  }
}, 500)
function pageload(){
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  // 构造请求体
  const requestBody = {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second
  };
  // 创建XMLHttpRequest对象
  const xhr = new XMLHttpRequest();
  // 设置请求方法和URL
  xhr.open('POST', 'http://localhost:802/save-time');
  // 设置请求头部
  xhr.setRequestHeader('Content-Type', 'application/json');
  // 设置请求体
  xhr.send(JSON.stringify(requestBody));
  // 监听请求结果
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('Time saved successfully.');
    }
  };
};