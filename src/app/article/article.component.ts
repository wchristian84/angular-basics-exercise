import { Component } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})

export class ArticleComponent {
  title: string = "This is the title!";
  content: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga magnam? Dicta minus, perferendis fuga quis eaque harum dignissimos eos esse facilis beatae nesciunt dolorum quaerat hic perspiciatis saepe sint?";
  isTechRelated: boolean = true;
  techPara: string = "Tech Related";
  notTechPara: string = 'Not Tech Related';

  changeTechRelated() {
    if (this.isTechRelated === true) {
      this.isTechRelated = false;
    }
    else {
      this.isTechRelated = true;
    };
  }

  getTechRelatedColor () {
    return this.isTechRelated ? "blue" : "yellow";
  }
}
