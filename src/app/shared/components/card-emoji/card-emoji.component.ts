import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-card-emoji',
  template: `
  <div class="card">
    <div class="emoji--emoji">{{ emoji }}</div>
    <div class="emoji--text">{{ emojiDescription }}</div>
  </div>
`,
  styles: [`
  /* layout spacing */
  :host {
    height: 12.5rem;
    width: 10.5rem;
    border: 2px solid black;
    margin-right: 1rem;
    display: flex;
    animation: emojifadein 0.5s;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  @keyframes emojifadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* placeholder for the rendered emoji */
  .emoji--emoji {
    height: 7rem;
    width: 7rem;
    font-size: 5rem;
  }

  /* placeholder for emoji descriptor text */
  .emoji--text {
    width: 8rem;
    height: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    color: black;
    margin-top: 1.5rem;
  }
`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardEmojiComponent implements OnInit {

  @Input() emoji: string = '🙃';
  @Input() emojiDescription: string = 'Upside Down';


  constructor() { };

  ngOnInit() {
  }

}
