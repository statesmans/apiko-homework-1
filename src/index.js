function createElement(tagName, props, content) {
    let currentTag = document.createElement(tagName);
  
    if (props) {
      for (let prop in props) {
        if (prop === 'style') {
          for (let cssRule in props[prop]) {
            console.log(props[prop][cssRule]);
            currentTag.style[cssRule] = props[prop][cssRule];
          }
        } else {
          currentTag[prop] = props[prop];
        }
      }
    }
  
    if (content && Array.isArray(content)) {
      content.map((el, i) => {
        if (typeof el === 'string') {
          el = document.createTextNode(el);
          currentTag.appendChild(el);
        } else {
          currentTag.appendChild(el);
        }
  
        return el;
      });
    } else if (content) {
      currentTag.innerText = content;
    }
    return currentTag;
  }
  
  function render(component, parentNode) {
    parentNode.appendChild(component);
  }
  
  const React = {
    createElement,
    render,
  };
  
  const app = React.createElement(
    'div',
    { style: { backgroundColor: 'red' } },
    [
      React.createElement('span', undefined, 'Hello world'),
      React.createElement('br'),
      'This is just a text node',
      React.createElement('div', { textContent: 'Text content' }),
    ],
  );
  
  React.render(app, document.getElementById('app'));
  