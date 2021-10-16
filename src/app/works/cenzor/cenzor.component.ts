import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {

  public newArr: Array<string>=[];
  public words: string = '';
  public txtArea: string = '';
  public wrong = true;
  public active = true;
  

  constructor() { }

  ngOnInit(): void {
  }

  addWords() {
    if(this.words){
      this.newArr.push(this.words)
      this.words = ''
      this.wrong = true
      }
    else{
      this.wrong = !this.wrong
      
    }
  }

  addStars():void{
    if (this.txtArea){
    let wordList = this.txtArea.split(' ')
    wordList.forEach( (wordFromList, wordIndex ) => {
      let cenzorWord = this.newArr.find((cenzor) => cenzor === wordFromList)
      if (cenzorWord){
        let stars = ''
        for (let i = 0; i < cenzorWord.length; i++){
          stars += "*"
        }
        wordList[wordIndex] = stars;
      }
    })
    let result = wordList.join(' ')
    this.txtArea = result
    this.active = true;
  }
  else {
    this.active = false
  }
}

  

}
