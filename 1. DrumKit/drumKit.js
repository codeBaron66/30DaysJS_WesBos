var sounds = document.getElementsByClassName("key");

// sounds.addEventListener("click", function(){
//   this.classList.add("clicked");
// });

for (i = 0; i <= sounds.length; i++) {
    sounds[i].addEventListener("click", function(){
      this.classList.add("clicked");
    });
  };
