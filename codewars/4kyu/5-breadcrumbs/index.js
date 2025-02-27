const ignoreWords = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];

export function generateBC(url, separator) {
  let urlArr = url.split('://');
  urlArr = urlArr.length > 1 ? urlArr[1] : urlArr[0];
  urlArr = urlArr.split('/')

  const prepare = makeLinks(urlArr);

  return prepare.join(separator);
}

const makeLinks = (arr) => {
  let newArr = arr.filter(item => !item.includes('index') && item);

  return newArr.map((item, index) => {
    if(newArr.length === 1) {
      return makeSpan(prepareSpanText('HOME'))
    }
    
    if (index === 0) {
      return makeLink('/', 'HOME')
    }
    if (index === newArr.length - 1) {
      return makeSpan(prepareSpanText(item))
    }

    return makeLink(prepareLink(newArr, index), `${prepareHrefText(item)}`)
  });
}

const prepareLink = (arr, index) => {
  const res = arr.slice(1, index + 1).join('/');

  return `/${res}/`;
}

const prepareHrefText = (text) => {
  const res = text.length > 30
   ? text.split('-').filter(item => !ignoreWords.includes(item)).map((item) => item[0]).join('')
   : text.replace(/[^a-zA-Z]/g, ' ').toUpperCase();

  return res.toUpperCase();
}

const prepareSpanText = (text) => {
  let textContent = text.split('.')[0];
  textContent = textContent.split('?')[0]
  textContent = textContent.split('#')[0]


  const res = textContent.length > 30
  ? textContent.split('-').filter(item => !ignoreWords.includes(item)).map((item) => item[0]).join('')
  : textContent.replace(/[^a-zA-Z]/g, ' ');

  console.log(res);

  return res.toUpperCase()
}

const makeSpan = (text) => {
  return `<span class="active">${text}</span>`
}

const makeLink = (href, text) => {
  return `<a href="${href}">${text}</a>`
}