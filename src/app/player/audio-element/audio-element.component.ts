import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-audio-element',
  templateUrl: './audio-element.component.html',
  styleUrls: ['./audio-element.component.css']
})
export class AudioElementComponent implements OnInit, OnChanges {
  @Input() SourceUrl;
  ShowPlayer: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // This is a hack to require the browser to reload the html audio element.
    // If we do not do so, the browser will not find the right source of the
    // audio, if angular changes only the source-element of the audio tag.
    this.ShowPlayer = false;

    new Promise(
      () => {
        setTimeout(() => {
          this.ShowPlayer = true;
        }, 100);  // Keep the timeout high enough to require the
                          // browser to reload the html element.
      }
    );
  }

}
