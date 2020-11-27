
// 문제 항목
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
   

   let answer; // O버튼
   let wrongAnswer; // X버튼
   let menubarItem; // menu 버튼
   let totalScore = 0;  // 총점
   let correctCount = 0; // 맞은 개수
   let number = 0; // 문제 번호
   let checkAnswer = []; // checkAnswer : O,X 버튼 체크 판별 
   let timer; // 전체 시간
   let interval; // 시간 단위

   $(document).ready(() => {
      answer = document.getElementById('answer');  // O버튼 ID값
      wrongAnswer = document.getElementById('wrongAnswer'); //X버튼 ID값
         
      answer.addEventListener("click", () => { // O버튼 이벤트리스너 등록
         buttonEventFunc(true);
      }); 
      wrongAnswer.addEventListener("click", () => { // X버튼 이벤트리스너 등록
         buttonEventFunc(false);
      }); 

      
      $('.menubarItem li').on("click", () => {
         $('.menubarItem li').removeClass('selected');
         $(this).addClass('selected');
      }); // 각각의 li 메뉴 클릭했을 때 선택된 메뉴만 표시되도록 구현 하는게 쉽지 않다
               // * this 


         //   $('.menubar-item li:nth-child(1)').on('click', () => {

         //    $('.menubar-item li:nth-child(1)').addClass("selected");
            
         //   });
         
      
     
      showScreen(number);  // 문제 호출



   }); 
  
   
 
   // function correctAnimate() {
   //    console.log($('#answer'));
   //    $( '#answer' ).animate( {
   //       width: '100%'
   //     }, 2000, 'swing', () => {
   //       $( '#answer' ).animate( {
   //          width: '50%'
   //        }, 2000, 'swing')    
   //     } );
     
   // }


   
   function Interval(){
      let checkCount = 4;
      $('#timer').css('color', 'black');
      $('#timer').html(checkCount+' 초');
      
      interval = setInterval(() => {
         checkCount--;
         if(checkCount > 3){
            $('#timer').html(checkCount+' 초');
         } else if(checkCount > 0 && checkCount <= 3){ // 3초 남았을 때 깜빡이는 애니메이션 추가
            $('#timer').html(checkCount+' 초');
            $('#timer').css('color', 'red');
            $('#timer').addClass('timerAnimation'); 
         } else if(checkCount === 0){
            $('#timer').html('<font size="14px" color="white">Time over</font>');
         }
   
      }, 1000);

   }

   function timerCheck(){
      
      Interval();
      timer = setTimeout(() => {
         
         alert('타임아웃 되었습니다.');
         clearInterval(interval);
         $('#timer').removeClass('timerAnimation');
         number++;
         showScreen(number);
      }, 4020);

   }

   
   

  
   // O,X버튼 이벤트 리스너 함수
   function buttonEventFunc(clientAnswer){
      clearInterval(interval);
      clearTimeout(timer);
      $('#timer').removeClass('timerAnimation'); //O 또는 X를 눌러 애니메이션 클래스를 제거해도 효과는 여전히 끝날때 까지 계속. 해결X
      if(clientAnswer === true){  // 사용자가 O버튼을 클릭했다면
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
      

      } else if(clientAnswer === false){ // 사용자가 X버튼을 클릭했다면
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
         $('#menubar').remove(); // 메뉴바 제거
         $('#fingerprint').css('width','100vw'); 
         $('#question').empty(); // question에 있는 내용 제거
         $('#selectArea').remove(); // OX 버튼 영역 제거
        
         answer.removeEventListener("click", buttonEventFunc); // 이벤트리스너 제거
         wrongAnswer.removeEventListener("click", buttonEventFunc); // 이벤트리스너 제거
         $('#fingerprint p').html('<< 정답 확인 >>');
         $('#question').css({'height' : '55vh', 'line-height' : '5vh', 'font-size' : '20px'});
         $('#total').css({'display' : 'block'});

         // 글자크기, 글자간격, 문제영역 설정
        


        for(let i = 0; i < questions.length; i++){ // 전체 문제 출력
            
            if(checkAnswer[i] === questions[i].answer){
               $('#question').append(`Quiz ${i+1} : ${questions[i].question} ( ${questions[i].score}점 ) / 정답은 ${questions[i].answer}이고 고른답은 ${checkAnswer[i]} / 맞았습니다.</br>`);
            } else{
               $('#question').append(`Quiz ${i+1} : ${questions[i].question} ( ${questions[i].score}점 ) / 정답은 ${questions[i].answer}이고 고른답은 ${checkAnswer[i]} / 틀렸습니다.</br>`);
            }
            
         }

         $('#totalResult').html(`Total : ${totalScore}점<br><br>맞은 개수 : ${correctCount}/8개`); // 총점, 맞은 개수 출력

      } 
      
      else{ // 다음문제가 있을 때(문제 한 개씩 출력)
         $('#question').html(`Quiz ${number+1} : ${questions[number].question} ( ${questions[number].score}점 )`);
         timerCheck();
      }
      
      
   }
   
 
  

