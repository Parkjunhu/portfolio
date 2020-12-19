
let questionsType = location.href.slice().split('?')[1].split('=')[0]; // 문제 유형
// let health1Question = questionsType // 건강1 문제
// let health2Question = questionsType // 건강2 문제



switch(questionsType){

   
   case "food" :
   foodQuestion();
   break;
   
   case "body" :
   bodyQuestion();
   break;

   case "diseasePrevention" : 
   diseasePreventionQuestion();
   break;

   case "sports" :
   sportsQuestion();
   break;

}


function foodQuestion(){

   questionsType = [

   
      {
         question : '양배추는 공복혈당을 낮추는데 도움이 되는 채소이다.',
         answer : 'O',
         score : 20
      },
      {
         question : '매일 한개의 옥수수는 내장지방을 빼는데 효과적이다.',
         answer : 'O',
         score : 15
      },
      {
         question : '계란은 식욕을 증진 시키는데에 도움이 되는 음식이다.',
         answer : 'X',
         score : 20
      },
      {
         question : '고구마에는 비타민 F와 비타민 D가 풍부하다.',
         answer : 'X',
         score : 15
      },
      {
         question : '싹이 난 감자에는 "솔라닌" 이라는 성분이 복통, 현기증을 유발시킨다.',
         answer : 'O',
         score : 5
      },
      {
         question : '두부에는 식물성 단백질이 들어 있으며 포만감이 풍부해 다이어트에 좋다.',
         answer : 'O',
         score : 10
      },
      {
         question : '견과류에는 알파리놀렌산이라는 인지능력을 높이는 성분과 \n두뇌회전을 향상 시키는 레시틴 성분이 들어 있다.',
         answer : 'O',
         score : 10
      },
      {
         question : '김치에는 동물성 유산균이 풍부하다.',
         answer : 'X',
         score : 5
      }
      
      
   ]; 

}

function bodyQuestion(){

   questionsType = [

   
      {
         question : '제 2의 뇌라고 지칭하는 장은 좋지 않을 시 빈혈과 같은 어지러움을 유발 시킨다.',
         answer : 'O',
         score : 10
      },
      {
         question : '검은색 음식을 먹으면 탈모예방을 할 수 있다.',
         answer : 'X',
         score : 15
      },
      {
         question : '나트륨을 과다하게 섭취하면 고혈압에 걸릴 확률이 높아진다.',
         answer : 'O',
         score : 15
      },
      {
         question : '계단을 올라갈 때는 체중의 5배, 내려올 때는 체중의 3배 정도 무릎에 하중이 실린다.',
         answer : 'X',
         score : 30
      },
      {
         question : '감기에는 비타민C를 많이 먹는 것이 좋다.',
         answer : 'X',
         score : 10
      },
      {
         question : '두통에는 머리띠를 매는 것이 도움이 된다.',
         answer : 'O',
         score : 10
      },
      {
         question : '코로나에 무적이 되는 방법은 외출을 하지 않는 것이다.',
         answer : 'O',
         score : 5
      },
      {
         question : '어둡거나 흔들리는 곳에서 책을 보면 눈이 나빠진다.',
         answer : 'X',
         score : 5
      }
      
      
   ]; 

}

function diseasePreventionQuestion(){

 
      questionsType = [
   
      
         {
            question : '급성 간염 환자들은 대부분 특별한 치료 없이 충분한 휴식과 영양 섭취만으로도 회복 된다.',
            answer : 'O',
            score : 10
         },
         {
            question : '알레르기 비염의 증세가 심할 때는 항히스타민제나 코에 뿌리는 국소용 스테로이드 등의 약물을 사용하면 호전된다. ',
            answer : 'O',
            score : 15
         },
         {
            question : '고혈압 환자는 우선 체중 조절, 염분 섭취 제한, 알코올 섭취 제한 등 생활습관을 교정하도록 노력해야 한다.',
            answer : 'O',
            score : 15
         },
         {
            question : '류마티스성 열을 치료하려면 A군 연쇄상구균을 제거해야 한다.',
            answer : 'O',
            score : 30
         },
         {
            question : '만성피로 증후군 치료에는 점진적인 유산소 운동보다는 격렬한 운동을 하는 것이 좋다.',
            answer : 'X',
            score : 10
         },
         {
            question : '두통에는 초콜릿, 땅콩 등을 먹으면 호전될 수 있다.',
            answer : 'X',
            score : 10
         },
         {
            question : '식중독 증상으로 발생하는 설사와 구토에 의한 탈수를 치료하기 위해 경구나 정맥주사를 통해 수분을 충분히 공급 한다.',
            answer : 'O',
            score : 5
         },
         {
            question : '저체온증이 발생한 경우, 수분을 빠르게 공급하고 체온에 따른 재가온을 시행 한다.',
            answer : 'O',
            score : 5
         }
         
         
      ]; 
   

}

function sportsQuestion(){

 
   questionsType = [

   
      {
         question : '손흥민은 현재 프리미어리그(PL) 13R 기준, 11골 공동1위 이다.',
         answer : 'O',
         score : 10
      },
      {
         question : 'FIFA 올해의 선수상 최다 수상자는 크리스티아누 호날두이다.',
         answer : 'X',
         score : 15
      },
      {
         question : '손흥민은 현재 토트넘 핫스퍼 소속으로 경기하고 있다.',
         answer : 'O',
         score : 15
      },
      {
         question : '03/04시즌 아스널 무패우승의 주역은 티에리 앙리이다.',
         answer : 'O',
         score : 30
      },
      {
         question : '프랭크 램파드의 포지션은 수비형 미드필더이다.',
         answer : 'X',
         score : 10
      },
      {
         question : '2002년 월드컵 국가대표 감독은 거스 히딩크이다.',
         answer : 'O',
         score : 10
      },
      {
         question : '안필드의 기적이란 4강 1차전 0:3으로 패한 리버풀이 2차전 4:0으로 스윕한 경기이다.',
         answer : 'O',
         score : 5
      },
      {
         question : '가레스 베일은 현재 임대 영입으로 토트넘에 소속되어 있다.',
         answer : 'O',
         score : 5
      }
      
      
   ]; 




}




   

   let answer; // O버튼
   let wrongAnswer; // X버튼
   let menubarItem; // menu 버튼
   let totalScore = 0;  // 총점
   let correctCount = 0; // 맞은 개수
   let number = 0; // 문제 번호
   let checkAnswer = []; // checkAnswer : O,X 버튼 체크 판별 
   let timer; // 전체 시간
   let interval; // 시간 단위 
   let progressFill = 0;// 진행 표시
   let progressValue;// 진행 표시
   let resultCheck;
   $(document).ready(() => {
      answer = document.getElementById('answer');  // O버튼 ID값
      wrongAnswer = document.getElementById('wrongAnswer'); //X버튼 ID값
      progressValue = document.getElementById('progressValue'); // 진행바 값 ID
      resultCheck = document.getElementById('resultCheck');

      answer.addEventListener("click", () => { // O버튼 이벤트리스너 등록
         buttonEventFunc(true);
        
      }); 
      wrongAnswer.addEventListener("click", () => { // X버튼 이벤트리스너 등록
         buttonEventFunc(false);
         
      }); 

      resultCheck.addEventListener("click", () => { // 결과버튼 이벤트리스너 등록
         resultCheckFunc();
         
      }); 


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
      let checkCount = 10;
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
            $('#timer').html('<font size="14px">Time over</font>');
           
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
      }, 10020);

   }
  
   // O,X버튼 이벤트 리스너 함수
   function buttonEventFunc(clientAnswer){
      clearInterval(interval);
      clearTimeout(timer);
      $('#timer').removeClass('timerAnimation'); //O 또는 X를 눌러 애니메이션 클래스를 제거해도 효과는 여전히 끝날때 까지 계속. 해결X
      if(clientAnswer === true){  // 사용자가 O버튼을 클릭했다면
         if(questionsType[number].answer === 'O'){ // 정답이 O라면
            checkAnswer.push('O');  // 사용자가 체크한 O 값을 checkAnswer 배열에 push(추가) = 요소 추가
            totalScore = totalScore + questionsType[number].score;
            correctCount++;
           
   
         } else{
            checkAnswer.push('O');
          
         }
      

      } else if(clientAnswer === false){ // 사용자가 X버튼을 클릭했다면
         if(questionsType[number].answer === 'X'){ // 정답이 X라면
            checkAnswer.push('X'); // 사용자가 체크한 X 값을 checkAnswer 배열에 push(추가) = 요소 추가 / Push는 자동으로 인덱스번호를 증가 시켜준다.
            totalScore = totalScore + questionsType[number].score;
            correctCount++;
           

         } else{
            checkAnswer.push('X');

         }

        
      }

      number++;
      showScreen(number);
      
   }
   

   /* 한 문제씩 출력해주고 O,X버튼 이벤트리스너 해제하는 함수.  
      모든 문제가 끝나면 전체 문제 출력(답까지) */  
   function showScreen(number){
      
     
      if(number === questionsType.length){  // 다음문제가 없을 때(전체 문제 출력)
         
         alert('모든 문제가 끝났습니다!');
         progressFill = progressFill+100; // 
         $('#progressFill').width(progressFill);
         $('#progressFill').css({'background-color' : 'green', 'border-top-right-radius' : '10px'
         ,'border-bottom-right-radius' : '10px'});
         progressValue.innerText = (Number)(progressValue.innerText)+12;
         $('#progressValue').css({'font-size' : '24px', 'font-weight' : 'bold'});
         $('#question').html('모든 문제를 다 푸셨습니다. 정답 확인을 눌러주세요!');
         $('#selectArea').remove(); // ox버튼 영역 제거
         $('#resultCheck').css({'display' : 'block'});
     
      } 
      
      else{ // 다음문제가 있을 때(문제 한 개씩 출력)
         
         
         $('#question').html(`Quiz ${number+1} : ${questionsType[number].question} ( ${questionsType[number].score}점 )`);
         if(number > 0 && number < 8){
            progressFill = progressFill+100;
            $('#progressFill').width(progressFill);
         }
         
         if(number > 0 && number <= 4){
            
            progressValue.innerText = (Number)(progressValue.innerText)+13;
            
         } else if(number > 4){
            
            progressValue.innerText = (Number)(progressValue.innerText)+12;
         }
         
         
        timerCheck();
         
      }
     
      
   }

   function resultCheckFunc(){

        // answer.removeEventListener("click", buttonEventFunc); // 이벤트리스너 제거
         // wrongAnswer.removeEventListener("click", buttonEventFunc); // 이벤트리스너 제거

         $('#progressArea').remove(); // 진행바 제거
         $('#question').empty(); // question에 있는 내용 제거
         $('#resultCheck').remove() // 결과 확인창 제거
         
         $('#goBackButton').css({'display' : 'block'}); 
        

         $('#fingerprint').css({'width' : '90vw', 'background-color' : 'black'});
         $('#fingerprint i').remove();
         $('#fingerprint p').css('color','white');
         $('#fingerprint p').html('정답 확인');
         $('#question').css({'height' : '55vh', 'line-height' : '5vh', 'font-size' : '20px'});
         $('#total').css({'display' : 'block'});

        for(let i = 0; i < questionsType.length; i++){ // 전체 문제 출력
            
            if(checkAnswer[i] === questionsType[i].answer){
               $('#question').append(`Quiz ${i+1} : ${questionsType[i].question} ( ${questionsType[i].score}점 ) / 정답은 ${questionsType[i].answer}이고 고른답은 ${checkAnswer[i]} / 맞았습니다.</br>`);
            } else{
               $('#question').append(`Quiz ${i+1} : ${questionsType[i].question} ( ${questionsType[i].score}점 ) / 정답은 ${questionsType[i].answer}이고 고른답은 ${checkAnswer[i]} / 틀렸습니다.</br>`);
            }
            
         }

         $('#totalResult').html(`Total : ${totalScore}점<br><br>맞은 개수 : ${correctCount}/8개`); // 총점, 맞은 개수 출력
         

   }
   
 
  

