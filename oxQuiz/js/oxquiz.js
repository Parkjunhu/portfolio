
let questions = [

   {
      question : '인간은 동물이다.',
      answer : true,
      score : 5
   },
   {
      question : '손흥민은 야구선수다.',
      answer : false,
      score : 15
   },
   {
      question : '박지성은 2005년에 PSV에서 맨유로 이적하였다.',
      answer : true,
      score : 20
   },
   {
      question : '양배추는 공복혈당을 낮추는데 도움이 되는 채소이다.',
      answer : true,
      score : 20
   },
   {
      question : '고구려는 백제 장군 김유신에게 멸망하였다.',
      answer : false,
      score : 15
   },
   {
      question : '테란 유닛의 벌처 마인 데미지는 100이다.',
      answer : false,
      score : 15
   },
   {
      question : '이영호의 주종은 테란이다.',
      answer : true,
      score : 5
   },
   {
      question : '고양이는 그루밍을 하는 동물이다.',
      answer : true,
      score : 5
   }
   
   
]; 

  

   const answer = document.getElementById('answer');  // O버튼 ID값
   const wrongAnswer = document.getElementById('wrongAnswer'); //X버튼 ID값
   let totalScore = 0;  // 총점
   let correctCount = 0; // 맞은 개수
   let number = 0; // 문제 번호
   let marking = []; // marking : 오답 판별하는 배열
   
   answer.addEventListener("click", correctAnswerFunc); // O버튼 이벤트리스너 등록
   wrongAnswer.addEventListener("click", wrongAnswerFunc); // X버튼 이벤트리스너 등록
   $('#question').html(`${number+1}번 문제 : ${questions[number].question} (${questions[number].score}점)`); // 첫 번째 문제 세팅

   // O버튼 이벤트리스너 함수
   function correctAnswerFunc(){

      if(questions[number].answer === true){
         alert('정답입니다!');
         marking.push('정답');
         totalScore = totalScore + questions[number].score;
         correctCount++;
         number++;
         showScreen(number);

      } else{
         alert('O를 선택하셨으나 정답은 X입니다.');
         marking.push('오답');
         number++;
         showScreen(number);
      }

   }

   // X버튼 이벤트리스너 함수
   function wrongAnswerFunc(){
      
      if(questions[number].answer === false){
         alert('정답입니다!');
         marking.push('정답');
         totalScore = totalScore + questions[number].score;
         correctCount++;
         number++;
         showScreen(number);

      } else{
         alert('X를 선택하셨으나 정답은 O입니다.');
         marking.push('오답');
         number++;
         showScreen(number);
      }

   }
   

   /* 한 문제씩 출력해주고 O,X버튼 이벤트리스너 해제하는 함수.  
      모든 문제가 끝나면 전체 문제 출력(답까지) */  
   function showScreen(number){
      
      if(number === questions.length){  // 다음문제가 없을 때(전체 문제 출력)
         alert('모든 문제가 끝났습니다!');
         $('#question').empty(); // question에 있는 내용 제거
         $('#selectArea').remove(); // OX 버튼 영역 제거
         answer.removeEventListener("click", correctAnswerFunc); // O버튼 이벤트리스너 제거
         wrongAnswer.removeEventListener("click", wrongAnswerFunc);  // X버튼 이벤트리스너 제거
         $('#fingerprint p').html('<< 정답 확인 >>');
         $('#question').css({'font-size' : '20px', 'line-height' : '7vh', 'height' : '70vh', 'font-family' : 'Quicksand, sans-serif'}); // 글자크기, 글자간격, 문제영역 설정
         $('#total').css({'display' : 'block', 'background-color' : 'black', 'position' : 'absolute'}); // 총점, 맞은 개수 영역 값
         $('#totalResult').css({'font-size' : '24px','color' : 'yellow', 'text-align' : 'center', 'position' : 'relative',  // // 총점, 맞은 개수 위치 값
         'top' : '50%', 'left' : '50%', 'transform' : 'translate(-50%, -50%)'});

        for(let i = 0; i < questions.length; i++){ // 전체 문제 출력
            
            if(marking[i] === '정답' && questions[i].answer === true){
               $('#question').append(`${i+1}번 문제 : ${questions[i].question} (${questions[i].score}점) 답 : O / 맞았습니다.</br>`);
            } else if(marking[i] === '정답' && questions[i].answer === false){
               $('#question').append(`${i+1}번 문제 : ${questions[i].question} (${questions[i].score}점) 답 : X / 맞았습니다.</br>`);
            } else if(marking[i] === '오답' && questions[i].answer === true){
               $('#question').append(`${i+1}번 문제 : ${questions[i].question} (${questions[i].score}점) 답 : O </br>`);
            } else if(marking[i] === '오답' && questions[i].answer === false){
               $('#question').append(`${i+1}번 문제 : ${questions[i].question} (${questions[i].score}점) 답 : X </br>`);
            }
            
         }

         $('#totalResult').html(`Total : ${totalScore}점<br><br>맞은 개수 : ${correctCount}/8개`); // 총점, 맞은 개수 출력

      } 
      
      else{ // 다음문제가 있을 때(문제 한 개씩 출력)
         $('#question').html(`${number+1}번 문제 : ${questions[number].question} (${questions[number].score}점)`);
      }
      
      
   }
   
 
  

