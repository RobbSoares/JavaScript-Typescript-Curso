const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // xhr.open('GET', 'URL', true);
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });     
    });
}

document.addEventListener('click', e => {
    
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if(tag === 'a') {
        e.preventDefault();
        loadPage(el);
    }
});

async function loadPage(el) {
    const href = el.getAttribute('href');
    
    const objConf = {
        method: 'GET',
        url: href
    }

    try {
        const response = await request(objConf);
        loadResult(response);
    } catch (err) {
        console.log(err);
    }
}

function loadResult(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}

// Jeito antigo
// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     // xhr.open('GET', 'URL', true);
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText);
//         } else {
//             obj.error(xhr.statusText);
//         }
//     });
// };

// document.addEventListener('click', e => {
    
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();
    
//     if(tag === 'a') {
//         e.preventDefault();
//         loadPage(el);
//     }
// });

// function loadPage(el) {
//     const href = el.getAttribute('href');
    
//     request({
//         method: 'GET',
//         url: href,

//         success(response) {
//             loadResult(response);
//         },
//         error(errorText) {
//             console.log(errorText);
//         }
//     });
// }

// function loadResult(response) {
//     const result = document.querySelector('.result');
//     result.innerHTML = response;
// }







