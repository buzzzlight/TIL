'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //querySelectorAll 모든 클래스 선택됨

const openModal = function () {
  // console.log('Button clicked');
  // modal의 hidden 클래스 없애는 함수 작성 (클래스 이름 앞에 . 붙이는건 selector만)
  modal.classList.remove('hidden');
  // overlay의 hidden 클래스 없애기
  overlay.classList.remove('hidden');

  // modal.style.display = 'block'; 이렇게 하면 스타일 하나하나 다바꿔야되므로 X
};

// 모든 버튼에 함수적용
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// modal 닫는 함수
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// modal 닫기 버튼
btnCloseModal.addEventListener('click', closeModal);
// 바깥쪽 클릭하면 modal 닫히게
overlay.addEventListener('click', closeModal);

// 81. Keypress Event
// 키보드이벤트는 글로벌 이벤트임
// keydown, keypress, keyup 세가지 이벤트가 있음
document.addEventListener('keydown', function (e) {
  // console.log(e.key); // key 확인

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // ()는 함수를 호출한다는 뜻
  }
});
