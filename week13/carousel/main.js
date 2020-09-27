import { createElement } from './framework.js';
import { Carousel } from './carousel.js';
import { Timeline, Animation } from './animation.js';

let d = [
  'https://static001.geekbang.org/resource/image/15/b0/153c6456a919c059ab916e885d4d4db0.jpg',
  'https://static001.geekbang.org/resource/image/35/54/35cb65d74b24e70501967b672702ba54.jpg',
  'https://static001.geekbang.org/resource/image/71/41/7121e6eea47da51285c9f844fae64f41.jpg',
  'https://static001.geekbang.org/resource/image/0a/60/0aceeaa0134ae8ebbd520017e8587160.jpg',
];

let a = <Carousel src={d} />;

//document.body.appendChild(a);
a.mountTo(document.body);

let tl = new Timeline();

window.tl = tl;
window.animation = new Animation(
  {
    set a(v) {
      console.log(v);
    },
  },
  'a',
  0,
  100,
  1000,
  null
);

//tl.add(new Animation({ set a(v) {console.log(v)}}, "a", 0, 100, 1000, null));

tl.start();
