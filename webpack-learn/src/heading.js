import './heading.css'
export default () => {
    const element = document.createElement('h2');
    element.textContent = 'hello world';
    element.className = 'heading'
    element.addEventListener('click', () => {
        console.log('hello webpack')
    })
    return element;
}