'use strict';

{
  const text = document.querySelector('#text');
  const save = document.querySelector('#save');
  const clear = document.querySelector('#clear');
  const message = document.querySelector('#message');

  if (localStorage.getItem('memo') === null) {
    text.value = '';
  } else {
    text.value = localStorage.getItem('memo');
  }
  
  save.addEventListener('click', () => {
    localStorage.setItem('memo', text.value);
    // メッセージを表示するためのクラスを追加
    message.classList.remove('opacity-0', '-translate-y-2');
    message.classList.add('opacity-100', 'translate-y-0');

    // メッセージを一定時間後に非表示にする
    setTimeout(() => {
      message.classList.remove('opacity-100', 'translate-y-0');
      message.classList.add('opacity-0', '-translate-y-2');
    }, 2000); 
  });

    clear.addEventListener('click', () => {
      if (confirm('本当に削除しますか？') === true) {
        text.value = '';
        localStorage.removeItem('memo');
      }
    });
}