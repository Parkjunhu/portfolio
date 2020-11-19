
let questions = [

   {
      question : '인간은 동물이다.',
      answer : 'O',
      score : 5
   },
   {
      question : '손흥민은 야구선수다.',
      answer : 'X',
      score : 15
   },
   {
      question : '박지성은 2005년에 PSV에서 맨유로 이적하였다.',
      answer : 'O',
      score : 20
   },
   {
      question : '양배추는 공복혈당을 낮추는데 도움이 되는 채소이다.',
      answer : 'O',
      score : 20
   },
   {
      question : '고구려는 백제 장군 김유신에게 멸망하였다.',
      answer : 'X',
      score : 15
   },
   {
      question : '테란 유닛의 벌처 마인 데미지는 100이다.',
      answer : 'X',
      score : 15
   },
   {
      question : '이영호의 주종은 테란이다.',
      answer : 'O',
      score : 5
   },
   {
      question : '고양이는 그루밍을 하는 동물이다.',
      answer : 'O',
      score : 5
   }
   
   
]; 

  

   const answer = document.getElementById('answer');  // O버튼 ID값
   const wrongAnswer = document.getElementById('wrongAnswer'); //X버튼 ID값
   let totalScore = 0;  // 총점
   let correctCount = 0; // 맞은 개수
   let number = 0; // 문제 번호
   let checkAnswer = []; // checkAnswer : O,X 버튼 체크 판별 
   
   answer.addEventListener("click", buttonEventFunc); // O버튼 이벤트리스너 등록
   wrongAnswer.addEventListener("click", buttonEventFunc); // X버튼 이벤트리스너 등록
   $('#question').html(`${number+1}번 문제 : ${questions[number].question} (${questions[number].score}점)`); // 첫 번째 문제 세팅

   
   // O,X버튼 이벤트 리스너 함수
   function buttonEventFunc(){
      if(this.id === 'answer'){  // 사용자가 O버튼을 클릭했다면
         if(questions[number].answer === 'O'){ // 정답이 O라면
            alert('정답입니다!');
            checkAnswer.push('O');  // 사용자가 체크한 O 값을 checkAnswer 배열에 push(추가) = 요소 추가
            totalScore = totalScore + questions[number].score;
            correctCount++;
            number++;
            showScreen(number);
   
         } else{
            alert('O를 선택하셨으나 정답은 X입니다.');
            checkAnswer.push('O');
            number++;
            showScreen(number);
         }
      

      } else if(this.id === 'wrongAnswer'){ // 사용자가 X버튼을 클릭했다면
         if(questions[number].answer === 'X'){ // 정답이 X라면
            alert('정답입니다!');
            checkAnswer.push('X'); // 사용자가 체크한 X 값을 checkAnswer 배열에 push(추가) = 요소 추가 / Push는 자동으로 인덱스번호를 증가 시켜준다.
            totalScore = totalScore + questions[number].score;
            correctCount++;
            number++;
            showScreen(number);
   
         } else{
            alert('X를 선택하셨으나 정답은 O입니다.');
            checkAnswer.push('X');
            number++;
            showScreen(number);
         }
         
      }
      
   }
   

   /* 한 문제씩 출력해주고 O,X버튼 이벤트리스너 해제하는 함수.  
      모든 문제가 끝나면 전체 문제 출력(답까지) */  
   function showScreen(number){
      
      
      if(number === questions.length){  // 다음문제가 없을 때(전체 문제 출력)
         alert('모든 문제가 끝났습니다!');
         $('#question').empty(); // question에 있는 내용 제거
         $('#selectArea').remove(); // OX 버튼 영역 제거
         answer.removeEventListener("click", buttonEventFunc); // 이벤트리스너 제거
         wrongAnswer.removeEventListener("click", buttonEventFunc); // 이벤트리스너 제거
         $('#fingerprint p').html('<< 정답 확인 >>');
         $('#question').css({'font-size' : '20px', 'line-height' : '7vh', 'height' : '70vh', 'font-family' : 'Quicksand, sans-serif'}); // 글자크기, 글자간격, 문제영역 설정
         $('#total').css({'display' : 'block', 'background-color' : 'black', 'position' : 'absolute'}); // 총점, 맞은 개수 영역 값
         $('#totalResult').css({'font-size' : '24px','color' : 'yellow', 'text-align' : 'center', 'position' : 'relative',  // // 총점, 맞은 개수 위치 값
         'top' : '50%', 'left' : '50%', 'transform' : 'translate(-50%, -50%)'});

        for(let i = 0; i < questions.length; i++){ // 전체 문제 출력
            
            if(checkAnswer[i] === questions[i].answer){
               $('#question').append(`${i+1}번 문제 : ${questions[i].question} (${questions[i].score}점) / 정답은 ${questions[i].answer}이고 고른답은 ${checkAnswer[i]} / 맞았습니다.</br>`);
            } else{
               $('#question').append(`${i+1}번 문제 : ${questions[i].question} (${questions[i].score}점) / 정답은 ${questions[i].answer}이고 고른답은 ${checkAnswer[i]} / 틀렸습니다.</br>`);
            }
            
         }

         $('#totalResult').html(`Total : ${totalScore}점<br><br>맞은 개수 : ${correctCount}/8개`); // 총점, 맞은 개수 출력

      } 
      
      else{ // 다음문제가 있을 때(문제 한 개씩 출력)
         $('#question').html(`${number+1}번 문제 : ${questions[number].question} (${questions[number].score}점)`);
      }
      
      
   }
   
 
  

