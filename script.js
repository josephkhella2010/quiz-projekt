let questions=[
    {
        question:"  är huvudstad av france Paris?",
        answer:[{text:"rätt", correct:"true"},
            {text:"false", correct:"false"},
        
        ],
    },
    {
        question:"är huvudstad av  spain bercelona?",
        answer:[ {text:"rätt", correct:"false"},
            {text:"false", correct:"true"}, 
        ],
    },
    {
        question:"vilken huvudstad  är av usa?",
        answer:[{text:"washington", correct:"true"},
                {text:"new york", correct:"false"},
                {text:"chicago", correct:"false"},
                {text:"san diego", correct:"false"},
        ],
    },
    {
        question:"vilken huvudstad  är av canada?",
        answer:[{text:"toronto", correct:"false"},
                {text:"ottawa", correct:"true"},
                {text:"quebec", correct:"false"},
                {text:"calgary", correct:"false"},
        ],
    },
    {
        question:"vilken huvudstad  är av austrialia?",
        answer:[{text:"melbourne", correct:"false"},
                {text:"perth", correct:"flase"},
                {text:"sydney", correct:"true"},
                {text:"adelaide", correct:"false"},
        ],
    },
    {
        question:"vilken huvudstad  är av egypt?",
        answer:[{text:"assiut", correct:"false"},
                {text:"alexandria", correct:"false"},
                {text:"sharm el shiek", correct:"false"},
                {text:"cairo", correct:"true"},
        ],
    },
    {
        question:"vilken huvudstad  är av tyskland?",
        answer:[{text:"berlin", correct:"true"},
                {text:"hamburg", correct:"false"},
                {text:"munchen", correct:"false"},
                {text:"dresden", correct:"false"},
    ],
    },{
        question:"vilken huvudstad  är av uk?",
        answer:[{text:"liverpool", correct:"false"},
                {text:"london", correct:"true"},
                {text:"leicester", correct:"false"},
                {text:"manchester", correct:"false"},
        ],
    }
    ]
    ////////////////////////
                         // global variable
    let interval;
    let ratt=0;
    let score=0;
    let wrong=0;
    let calc;
    let body=document.querySelector("body")
    // bytabackground  event listner farg for body
    
    let bytabackground=document.querySelector(".mode")
    bytabackground.addEventListener("click",(e)=>{
        body.classList.toggle("toggle")
    
        // change the name of btn with the same click 
        if (bytabackground.classList.contains('ligthmode')) {
            bytabackground.classList.remove('ligthmode');
            bytabackground.textContent = e.target.dataset.text
            bytabackground.style.color="white";
            bytabackground.style.background="black";
    
            
        } else {
            bytabackground.classList.add('ligthmode');
            bytabackground.style.color="black";
            bytabackground.style.background="orange";
            bytabackground.style.fontWeight="bolder";
            bytabackground.textContent = e.target.dataset.text1
        }
      })
    
    // create wrapper,score div ,btn
    let scorediv=document.createElement("div")
    let scorebtn=document.createElement("button");
    scorebtn.innerText="see your score"
    let wrapper=document.createElement("div");
        wrapper.className="wrapper"
        document.body.append(wrapper)
    // match timer div 
    let timer=document.querySelector(".timer")
    let clear;// to clear timer
    let resetbtn= document.createElement("button");
    
    ///// functions
    //start function
    let startbtn=document.createElement("button");
    startbtn.innerText="start"
    startbtn.classList.add("startbtn");
    let h1start=document.createElement("h1")
    h1start.innerHTML="Velkommen till Quiz Game"
    h1start.className="h1start"
    let startdiv=document.createElement("div")
    startdiv.className="startdiv"
    startdiv.append(h1start,startbtn)
    document.body.append(startdiv);
    startbtn.addEventListener("click",(e)=>{
       let name =prompt("hejsan skriva ditt name")
        e.target.parentElement.remove()
        timer.style.display="flex"
        ////////add timer function
        clear=setInterval(starttimer,1000)
    
        let nameofuser=document.createElement("p");
        nameofuser.className="nameofuser";
        document.body.append(nameofuser);
        if(name===""){
            name="unknown";
            nameofuser.innerHTML=`velkommen ${name}`
        }
        else{
            nameofuser.innerHTML=`velkommen ${name}`;
        }
    
    })
    
    // loop in all array
    
    questions.forEach((el,index)=>{
      
       let containerdiv=document.createElement("div")
        /// create  containerdiv to hold all element
    
        containerdiv.className="container"
        let h1=document.createElement("h1")
        h1.className="h1"
    h1.innerText= `${8-index} - ${el.question}`
    
    containerdiv.append(h1)
    wrapper.append(containerdiv)
    let containerbutton=document.createElement("div")
    /// class for  containerbutton
    containerbutton.className="containerbutton"
    let nextbtn=document.createElement("button")
    nextbtn.className="nextbtn"
    nextbtn.innerHTML="next"
    // loop in answer array and create buttons
    
    // bytabackground  event listner farg for containerdiv och h1
    bytabackground.addEventListener("click",()=>{
        containerdiv.classList.toggle("toggle");
    h1.classList.toggle("toggle")
    })
    /////////////////
    
    el.answer.forEach((element,index)=>{
        let btns=document.createElement("button");
        btns.className="btn"
    btns.innerHTML=element.text
    
    containerbutton.append(btns)
    containerdiv.append(containerbutton,nextbtn);
    
    // add dataset.correct for each btn
    if(element.correct){
        btns.dataset.correct=element.correct;
        btns.dataset.text=element.text;
    }
    // bytabackground  event listner button och text
    
    bytabackground.addEventListener("click",()=>{
        btns.classList.toggle("toggle");
        containerdiv.classList.toggle("toggle");
    
    })
    
    // click event fot all buttons
    btns.addEventListener("click",(e)=>{
        let answervalue=e.target.innerHTML;
    
       // function to see score and wrong
        let correctvalue=element.correct
       //console.log(correctvalue)
        
        if(correctvalue==="true"){
            score+=10
            ratt++
            containerbutton.classList.add("stop")
            let scorediv=document.createElement("div");
            let p=document.createElement("p");
            scorediv.className="scorediv"
            p.classList.add("p")
            p.classList.add("scoretext")
            e.target.classList.add("correct")
            p.innerHTML=`Rätt Svar bra gjört dina rätt svar är <span class="ratt">(${ratt})</span> dina fel svar är <span class="fel">(${wrong})</span> ` ;
            scorediv.append(p)
            containerdiv.append(scorediv)
        }
        else {
            // callback function
            trueAnswerColor();
            wrong++
            containerbutton.classList.add("stop")
            let scorediv=document.createElement("div");
            scorediv.className="scorediv"
            let p=document.createElement("p");
               p.innerHTML=`Fel Svar dina rätt svar är  <span class="ratt">(${ratt})</span> dina fel svar är <span class="fel">(${wrong})</span>` ;
            p.classList.add("p")
            p.classList.add("scoretext")
            e.target.classList.add("incorrect")
            containerdiv.append(scorediv)
            scorediv.append(p)
        }
        //  do function for loop over each button container and if dataset is true add background color and text for true answer 
        function trueAnswerColor(){
        Array.from(containerbutton.children).forEach((button)=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct")
                //console.log(button.dataset.text)
                let rattsvardiv=document.createElement("div")
                let p=document.createElement("p")
                p.classList.add("p")
                rattsvardiv.classList.add("rattsvar")
              rattsvardiv.append(p)
             containerdiv.append(rattsvardiv)
                p.innerHTML=`fel svar  rätt svar är   <span class="ratt2">${button.dataset.text}</span>`
                ;
    
            } 
        })
    }
    
    // function next  click
    nextbtn.addEventListener("click",(e)=>{
        
            e.target.parentElement.remove()
    
    })
    })
    })
    })
    
    //// end of  loop and  click funtion for button
    
    // create second div and checkbox 
    let ul=document.createElement("ul")
    
    let arr2=[{question:"10-välj två rätta svar vilka är Svenska städer ?",
    answer:[{text:"stockholm",correct:"true"},
    {text:"prag",correct:"false"},
    {text:"gavle",correct:"true"},
    {text:"paris",correct:"false"},
    ]
    },
    {question:"9-välj två rätta svar vilka är USA städer?",
    answer:[{text:"new york",correct:"true"},
    {text:"milano",correct:"false"},
    {text:"roma",correct:"false"},
    {text:"texas",correct:"true"},
    ]
    
    }
    
    ]
    //loop in main
    arr2.forEach((element,index)=>{
    //console.log(element)
    let seconddiv=document.createElement("div");
    seconddiv.className="second-container"
    
    let secondh1=document.createElement("h1")
    secondh1.innerHTML=element.question
    secondh1.className="h1"
    seconddiv.append(secondh1)
    // div.classList.add("container");
    wrapper.append(seconddiv)
    
    // create scorediv
    let scorediv=document.createElement("div");
    scorediv.className="scorediv1"
    
    //add event ligthmode
    
    bytabackground.addEventListener("click",()=>{
        seconddiv.classList.toggle("toggle");
        secondh1.classList.toggle("toggle");
    })
    
    //loop in secondary array
    element.answer.forEach((answers)=>{
        let containercheckbox=document.createElement("div")
        containercheckbox.className="containercheckbox"
    let checkbox=document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.className="checkbox"
    let labels=document.createElement("label");
    labels.innerHTML=answers.text;
    labels.className="label"
    let nextbtn=document.createElement("button")
    nextbtn.className="nextbtn"
    nextbtn.innerHTML="next"
    containercheckbox.append(checkbox,labels)
    seconddiv.append(containercheckbox,nextbtn)
    
    nextbtn.addEventListener("click",(e)=>{
    
    e.target.parentElement.remove()
    })
    
    // add dataset
    if(answers.correct){
     checkbox.dataset.correct=answers.correct;
     checkbox.dataset.text=answers.text;
     
    }
    //add event ligthmode
    
    //// ligthmode event
    bytabackground.addEventListener("click",()=>{
    
        labels.classList.toggle("toggle");
        seconddiv.classList.toggle("toggle");
    
    })
    
    //// checkbox event
    
    checkbox.addEventListener("click",(e)=>{
    // if sats to prevent press after 2 click
    if(scorediv.childElementCount<=1){
           
    if(checkbox.dataset.correct==="true"){
     //console.log("ratt")
     score+=5;
     ratt+=0.5
     let p=document.createElement("p");
     p.classList.add("p")
     p.classList.add("scoretext")
     e.target.classList.add("correct")
    
     p.innerHTML=`Rätt Svar bra gjört dina rätt svar är <span class="ratt">(${ratt})</span> dina fel svar är <span class="fel">(${wrong})</span>  ` ;
     scorediv.append(p)
     seconddiv.append(scorediv)
    }
    else{
     wrong+=0.5
     let p=document.createElement("p");
     p.classList.add("p")
     p.classList.add("scoretext")
     e.target.classList.add("correct")
    
     p.innerHTML=p.innerHTML=`Fel svar dina rätt svar är  <span class="ratt">(${ratt})</span> dina fel svar är <span class="fel">(${wrong})</span> ` ;
     ;
     scorediv.append(p)
     seconddiv.append(scorediv)
    }
    }
    else{
        e.preventDefault()
    }
    })
    
    })
    
    })
    
    
    /// fuction score click button
    
    scorebtn.addEventListener("click",(e)=>{
    
        /// clear setinterval for timer when u press score button
    
              clearInterval(clear)
    
        // call function stoppress in wrapper after u press in score button
        stoppress();
        // appear replay button
        resetbtn.style.display="block"
        let li=document.createElement("li");
        let p=document.createElement("p");
    
        li.innerHTML=`Din score är: ${score} -  du har fått ${wrong} fel svar  `
        li.style.color="white"
        if(score<50){
            p.innerHTML= `din score ar = ${score} - Underkänt` 
           p.style.color=" rgb(101, 1, 1)"
           e.target.classList.add("stop")
           scorediv.classList.add("score")
    
    
           scorediv.append(li,p)
        }
        else if(score>=50 &&score<=75){
            p.innerHTML= ` grattis din score ar = ${score} -bra`
            p.style.color="orange"
            e.target.classList.add("stop")
    
            scorediv.classList.add("score")
    ///  call funtion of appear grattis div after 2 second
       setTimeout(grattis,2000);
    
    
    
        }
        else if(score>75){
            p.innerHTML= ` grattis din score ar = ${score} -Riktigt bra`
            p.style.color="green"
            e.target.classList.add("stop")
            scorediv.classList.add("score")
            ///  call funtion of appear grattis div after 2 second
    
              setTimeout(grattis,2000);
    
        }
        scorediv.append(li,p);
    })
    document.body.append(scorebtn,scorediv)
    scorebtn.className="scorebtn"
    
    
    
    // grattis function
    function grattis(){
        let grattis=document.createElement("p");
        grattis.classList.add("grattis")
        grattis.innerHTML="grattis";
        document.body.append(grattis)
     setInterval(()=>{
      grattis.style.display="none"
     },8000)
     }
    
    ///timer variable
    
    let minute=document.querySelector(".minute");
    let second=document.querySelector(".second");
    //console.log(minute)
    //console.log(second)
    let countminute=0;
    let countsecond=0;
    
    /// fucntion timer
    function starttimer(){
        countsecond++
        if(countsecond<=9){
            second.innerHTML="0"+countsecond;
        }
        if(countsecond>9){
            second.innerHTML=countsecond;
        }
        if(countsecond>59){
            countminute++;
            minute.innerHTML="0"+countminute;
            countsecond=0;
            second.innerHTML="0"+0;
          
        }
        if(countminute>9){
            second.innerHTML=countsecond;
            minute.innerHTML=countminute;
    
        }
    }
    // function stoppress after u press in score button
    function stoppress(){
        wrapper.classList.add("stop")
    }
              // replay btn and reset function
    resetbtn.innerText="replay";
    resetbtn.classList.add("resetbtn")
    resetbtn.classList.add("btn")
    
    document.body.append(resetbtn)
    resetbtn.addEventListener("click",()=>{
        window.location.reload();
    
    })
    