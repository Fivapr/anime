import React from 'react';
import { connect } from 'react-redux';
import { getField } from './selectors';

import testSub from './test.vtt';

const Player = () => (
  <video controls>
    <source
      src="http://cool.big-sword.ga/route/?m=3318651&r=bf304ccc729b4ffddf5bd5cd11237a57e3f6cd775184112644c95a1163d44cc3f373c54fd083e25f955d8c0a01e6bb302e3afb427727cf5e4539a036dbe560ab4dabcaa3cb23a9804c759fed0bfe08274602b12ac7314eaaedb336f17998f78b"
      type="video/mp4"
    />
  <track label="Japanese" kind="subtitles" srcLang="jp" src={testSub} default style={{ 'zIndex': 1000000 }} />
  </video>
);

const mapStateToProps = state => ({ field: getField(state) });

export default connect(
  mapStateToProps,
  null,
)(Player);
