function RemoveParagraph(selector) {
    this.words = document.querySelector(selector);
    this.originalWords = this.words.textContent;
    this.split = this.originalWords.split(" ");
    this.count = [...Array(this.split.length).keys()];
    this.baseInterval = 500;
    this.startInterval();
  }
  
  RemoveParagraph.prototype = {
    hideWord: function(idx) {
      this.split[idx] = `<span class='hide'>${this.split[idx]}</span>`;
    },
  
    startInterval: function() {
      this.removeInterval = setTimeout(this.removeWords.bind(this), this.randomInterval());
    },
    
    randomInterval: function() {
      return Math.random() * this.baseInterval;
    },
    
    randomIdx: function(nums) {
      return Math.floor(Math.random() * (nums.length - 1));
    },
  
    removeWords: function() {
      clearTimeout(this.removeInterval);
      const wordIdx = this.randomIdx(this.count);
      this.hideWord(this.count.splice(wordIdx, 1)[0]);
      this.words.innerHTML = this.split.join(" ");
  
      if (this.count.length === 0) {
        this.words.innerHTML = '<h1></h1>';
      } else {
        this.startInterval();
      }
    }
  };
  
  new RemoveParagraph(".paragraph .words");
  