// 'login-form'이라는 id를 가진 form 요소를 찾아서 form 변수에 저장합니다.
const form = document.getElementById('login-form');

// form에서 'submit'(제출) 이벤트가 발생했을 때 실행할 함수를 연결합니다.
form.addEventListener('submit', function(event) {
    // event.preventDefault()는 form의 기본 동작(페이지 새로고침)을 막습니다.
    event.preventDefault();

    // 아이디와 비밀번호 입력창의 값을 가져옵니다.
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    // .trim()은 입력값의 양쪽 공백을 제거합니다.
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // 1. 아이디가 비어있는지 확인
    if (username === '') {
        alert('아이디를 입력해주세요.');
        return; // 함수를 여기서 종료합니다.
    }

    // 2. 비밀번호가 비어있는지 확인
    if (password === '') {
        alert('비밀번호를 입력해주세요.');
        return;
    }
    
    // 3. 비밀번호가 너무 짧은지 확인 (예: 6자 미만)
    if (password.length < 6) {
        alert('비밀번호는 6자 이상이어야 합니다.');
        return;
    }

    // 모든 확인을 통과했다면, 원래 의도대로 form을 서버로 제출합니다.
    // 지금은 서버가 없으므로 성공했다는 메시지만 띄웁니다.
    alert('로그인 시도! (서버로 전송 준비 완료)');
    
    // 실제 프로젝트에서는 이 아래에 서버로 데이터를 보내는 코드가 들어갑니다.
    // form.submit(); // 이 코드를 실행하면 실제로 form이 제출됩니다.
});