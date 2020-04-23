class Form {
    constructor(){
        
    }
    display(){

        var TITLE = createElement('h1');
        TITLE.html("QUIZ OF HTML")
        TITLE.position(50,50);
        this.name = createInput("Participant Name");
        this.email = createInput("Participant Email");
        this.button = createButton('Submit');
        var tsaaa =       this.name.position(720, 165);
         var ttsa = this.email.position(720, 255);
        this.button.position(850, 300);


            var q1 = createElement('h2');
            q1.html("Q1. What is the full form of html?");
            q1.position(70,110);
            var bq1 = createRadio();     
            bq1.position(150,180);
            bq1.option('Hyper Text Markup Language');    
            bq1.option('HINDGE TEXT MARK LANGUAGE');
          //  bq1.option('JAVA');



            var q2 = createElement('h2');
            q2.html("Q2. HTML is a empty or container tag?");
            q2.position(70,200);
            var bq2 = createRadio();     
            bq2.position(150,270);
            bq2.option('EMPTY TAG');    
            bq2.option('CONTAINER TAG');

            var q3 = createElement('h2');
            q3.html("Q3. What is the latest version of HTML?");
            q3.position(70,320);
            var bq3 = createRadio();     
            bq3.position(150,370);
            bq3.option('HTML5');    
            bq3.option('HTML7.5');

            var q4 = createElement('h2');
            q4.html("Q4. What is the extension of HTML?");
            q4.position(70,420);
            var bq4 = createRadio();     
            bq4.position(150,470);
            bq4.option('.html');    
            bq4.option('.hml');

            var q5 = createElement('h2');
            q5.html("Q5. Can forms be created by HTML?");
            q5.position(70,520);
            var bq5 = createRadio();     
            bq5.position(150,570);
            bq5.option('Yes');    
            bq5.option('No');

            var q6 = createElement('h2');
            q6.html("Q6. Do image tag have any attribut except sorce?");
            q6.position(70,620);
            var bq6= createRadio();     
            bq6.position(150,670);
            bq6.option('Yes');    
            bq6.option('No');

            this.button.mousePressed(function Submit(){
                var data = {
    
                   'Name' : tsaaa.value() ,
                    'Email': ttsa.value() ,
                    'Q1' : bq1.value() ,
                    'Q2' : bq2.value() ,
                    'Q3' : bq3.value() ,
                    'Q4' : bq4.value() ,
                    'Q5' : bq5.value() ,
                    'Q6' : bq6.value()

    
                }
                ref.push(data);
            });
    }

}
