const items = document.querySelectorAll('.chat-item');
const placeholder = document.querySelector('.chat-placeholder');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
    placeholder.innerText = `Chat with ${item.querySelector('.chat-name').innerText}`;
  });
});
