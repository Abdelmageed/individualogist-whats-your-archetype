import { Component } from 'preact';
import hs from 'preact-hyperstyler';
import hh from 'preact-hyperscript-h';
import linkstate from 'linkstate';
import markup from 'preact-markup';
import Youtube from 'react-youtube';
import Fade from 'preact-fade';
import styles from './style.styl';

const h = hs(styles);

export default class ReportFree extends Component {
  componentWillMount() {
    this.changeBackground();
    document.body.onkeyup = e => e.keyCode === 32 && this.playPause();
  }
  componentWillUnmount() {
    delete document.body.onkeyup;
  }

  componentDidMount() {
    if ('seekTo' in url.query) {
      this.audioEl.currentTime = parseInt(url.query.seekTo, 10);
    }
    this.playPause();
    window.scrollTo(0, 0);
  }

  cueAction(action, opts, transcriptLine) {
    this[action](opts, transcriptLine);
  }

  displayImage(opts, transcriptLine) {
    if (opts.fadeOut) {
      this.hideImage();
    } else {
      try {
        this.setState({
          img: require(`../../assets/` + opts.path),
          imgClass: opts.class,
        });
      } catch (error) {
        this.hideImage();
        console.error(error);
      }
    }
  }
  hideImage() {
    this.setState({
      img: '',
      imgClass: [],
    });
  }


  playPause() {
    if (this.audioEl.paused) {
      this.audioEl.play();
      this.setState({
        audioPaused: false,
        lastBackgroundChangeTime: +new Date(),
      });
    } else {
      this.audioEl.pause();
      this.setState({
        audioPaused: true,
        lastBackgroundChangeTime: +new Date(),
      });
    }
  }

  changeBackground() {
    if (!this.state.lastBackgroundChangeTime || (this.state.lastBackgroundChangeTime + 4000 < new Date())) {
      const cbg = this.state.currentBackgroundIndex || 0;
      const nbg = cbg >= 4 ? 1 : cbg + 1;
      this.setState({
        background: require(`../../assets/images/backgrounds/quiz-slider-${nbg}.jpg`),
        currentBackgroundIndex: nbg,
        lastBackgroundChangeTime: +new Date(),
      });
    }
  }

  componentWillUpdate() {
    this.changeBackground();
  }

  render() {
    const archetype = this.props.quizData.archetype;
    if (!archetype) {
      return 'Need to have an archetype before this component could be rendered';
    }

    let audioSrc;
    try {
      audioSrc = require(`../../assets/audios/${archetype}.mp3`);
    } catch (error) {
      return `Cannot load the audio file: '${archetype}.mp3'`;
    }

    let transcript;
    try {
      transcript = require(`../../assets/audios/${archetype}.json`);
    } catch (error) {
      return `Cannot load the transcript file: '${archetype}.json'`;
    }

    // console.log(this.state.currentLine);

    const audioEl = h.audio({
      // controls: true,
      src: audioSrc,
      ref: ref => this.audioEl = ref,
      ontimeupdate: e => {
        const currentTime = e.target.currentTime;
        // for (const line of transcript) {
        for (let i = 0; i < transcript.length; i++) {
          const line = transcript[i];
          const nextLine = transcript[i + 1];
          if (currentTime < (line.end - 1)) {
            let currentLine = line.text;
            if (this.state.currentLine === currentLine) {

            } else {
              for (const key of line.keys) {
                if (key.key) {
                  if (this.props.formData[key.key]) {
                    currentLine = currentLine.substring(0, key.index)
                      + this.props.formData[key.key]
                      + currentLine.substring(key.index);
                  }
                } else if (key.js) {
                  this.cueAction(key.js.fn, key.js, line);
                }
              }
              // this.changeBackground();
              this.setState({ currentTime, currentLine, currentLineOpts: line })

              // preload next image(s)
              if (nextLine && nextLine.keys) {
                nextLine.keys.forEach(key => {
                  if (key.js && key.fn === 'displayImage' && key.js.path) {
                    const image = new Image();
                    image.src = key.js.path;
                  }
                })
              }
            }
            break;
          }
        }
      },
    });



    const headerEl = h.header([
      h.img({ src: require(`../../assets/images/logos/large-text.png`) }),
    ]);

    const mainContentEl = h.div('.content', {
      onclick: e => this.playPause(),
      class: this.state.currentLineOpts && this.state.currentLineOpts.class || [],
      style: { backgroundImage: `url(${this.state.background})` }
    }, [
      h.div('.play-pause', { class: this.state.audioPaused ? 'visible' : '' }),
      h.div('.text', [this.state.currentLine
        ? h(Fade, {
          changed: this.state.currentLine,
          // fadeInDuration: '2000ms',
          // fadeOutDuration: '1000ms',
        }, [
          h(markup, { markup: this.state.currentLine })
        ])
        : h.p('Loading...'),
      ]),
      audioEl,
      h.div('.image', [
        h.div('.foreground', [h.div('.foreground-container', [
          h(Fade, {
            changed: this.state.img,
            fadeInDuration: '2000ms',
            fadeOutDuration: '1000ms',
          }, [h.div({
            class: ['img'].concat(this.state.imgClass || []),
            style: {
              backgroundImage: `url(${this.state.img})`
            },
          })])
        ])]),
      ]),
    ]);

    const restEl = h.div('.rest', [
      h.div('.action-1', [
        h.div('.img', [h.img({ src: require(`../../assets/images/pop-up/new-deluxe-archetype-report-with-bonuses.png`) }), ]),
        h.div([
          h.p(`Get Your Deluxe Archetype Report For Only $37.00 Now!`),
          h.button('Click Here To Order Now'),
        ]),
      ]),
      h.div('.testimonial', [
        h.p(`“Reading it felt almost as if I was reliving my entire life. What’s even crazier is that it showed me things about myself that I didn’t even know before!”`),
        h('div.youtube', [
          h(Youtube, { videoId: 'jWWB3adrqro' }),
          // h.iframe({ src: 'https://www.youtube.com/watch?v=jWWB3adrqro', width: 420 }),
        ]),
      ]),
      h.div('.action-2', [
        h.div('.img', [h.img({ src: require(`../../assets/images/pop-up/new-deluxe-archetype-report-with-bonuses.png`) })]),
        h.div('.side', [
          h.div('.heading', `Get Your Deluxe Archetype Report For Only $37.00 Now!`),
          h.div('.delivery', [
            h.div('.label', [
              h.div('Delivery E-mail:'),
              h.div('Full name:'),
            ]),
            h.div('.data', [
              h.div(this.props.formData.email),
              h.div(this.props.formData.name),
            ])
          ]),
          h.button('Order Now'),
          h.div('.shield', [
            h.img({ src: require('../../assets/images/pop-up/shield.png') }),
            h.p('All payments are secure'),
          ]),
          h.div('.footer', `Order now and you’ll receive the Deluxe Archetype Report instantly. We know for a fact that you’ll gain an enormous amount of value from this detailed report. But  if you decide that this product isn’t for you, we’ll give you a 100% refund within the next 60 days of purchase. No questions asked.`),
        ]),
      ]),
      h.div('.ribbon', [
        h.img({ src: require('../../assets/images/pop-up/60-day-money-back-guarantee.png') }),
        h.p(`Take your time to look through your Deluxe Archetype Report and everything else that comes with it. If you decide within the next 60 days that you’re not completely satisfied with your Deluxe Archetype Report, just drop us an e-mail at contact@individualogist.com and we’ll issue you a full refund. No questions nor explanations will be necessary.`),
        h.p(`I’m making this guarantee because I’m 100% certain that this report has the capacity to truly turn your life around. That’s how much I believe in the process of individuation, and that’s how much I believe you will benefit from it. So, no matter what, you’ve got the longer end of the stick. There is absolutely no risk involved, and it’s all up to you and whether you decide to take this life-changing path.`),
      ]),
    ]);

    return h.div('.wrapper', [h.div('.container', [
      headerEl,
      mainContentEl,
      restEl,
      // h.pre([JSON.stringify(this.state, null, 1)]),
      // h.pre([JSON.stringify(this.state.currentLine, null, 1)]),
    ])]);
  }
}
