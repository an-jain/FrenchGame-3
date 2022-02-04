class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    this.button = createButton('Submit');
  }

  setElementsPosition() {
   // this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    //this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
  
      this.question = createElement('h1');
      this.question.html("Question:- Je _____ (parler)" );
      this.question.position(640, 80);
         

      this.option1 = createElement('h2');
      this.option1.html("Parles");
      this.option1.position(640, 120);

      this.option2 = createElement('h2');
      this.option2.html("Parlent");
      this.option2.position(640, 150);

      this.option3 = createElement('h2');
      this.option3.html("Parle");
      this.option3.position(900, 120);

      this.option4 = createElement('h2');
      this.option4.html("Parlez");
      this.option4.position(900, 150);

      this.access1 = createInput("Type your answer")
      this.access1.position(640, 680);
      this.access1.style('background', 'white'); 
      this.access1.size(400, 100);
      

      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      gameState = 1;
      player.name = this.input.value();
      player.index = playerCount;
      //player.addPlayer();
      //player.updateCount(playerCount);
      //player.getDistance();

    });
  }
  
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.button.position(820, 650);

    this.button.mousePressed(()=> {
     this.message.html("Right Answer");
     this.message.position(250, 350);
    });
  }
}
