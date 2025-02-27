export function generateBC(url, separator) {
  let urlArr = url.split('://');
  urlArr = urlArr[urlArr.length - 1].split('/')

  return makeLinks(urlArr).join(separator);
}

const makeLinks = (arr) => {
  let newArr = arr.filter(item => !item.includes('index') && item);

  return newArr.map((item, index) => {
    if(newArr.length === 1) {
      return makeSpan(prepareText('HOME'))
    }
    
    if (index === 0) {
      return makeLink('/', 'HOME')
    }

    if (index === newArr.length - 1) {
      return makeSpan(prepareText(item))
    }

    return makeLink(prepareLink(newArr, index), `${prepareText(item)}`)
  });
}

const prepareLink = (arr, index) => {
  return `/${arr.slice(1, index + 1).join('/')}/`;
}

const prepareText = (text) => {
  const ignoreWords = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
  let textContent = text.split(/[.?#]/)[0];

  const res = textContent.length > 30
  ? textContent.split('-').filter(item => !ignoreWords.includes(item)).map((item) => item[0]).join('')
  : textContent.replace(/[^a-zA-Z]/g, ' ');

  return res.toUpperCase()
}

const makeSpan = (text) => {
  return `<span class="active">${text}</span>`;
}

const makeLink = (href, text) => `<a href="${href}">${text}</a>`