import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

import exampleImage from './react-share-pin-example.png';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');

class Demo extends Component {
  render() {
    const shareUrl = window.location;
    const title = 'News App';

    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            picture={`${String(window.location)}/${exampleImage}`}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={48}
              round />
          </FacebookShareButton>

          
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={48}
              round />
          </TwitterShareButton>

          
          
        </div>

        <div className="Demo__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TelegramIcon size={48} round />
          </TelegramShareButton>

          
           
        </div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button">
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>

          
          
        </div>

        <div className="Demo__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={48}
              round />
          </GooglePlusShareButton>

          
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={48}
              round />
          </LinkedinShareButton>

          
        </div>

        <div className="Demo__some-network">
          <PinterestShareButton
            url={String(window.location)}
            media={`${String(window.location)}/${exampleImage}`}
            windowWidth={1000}
            windowHeight={730}
            className="Demo__some-network__share-button">
            <PinterestIcon size={48} round />
          </PinterestShareButton>

          
        </div>
      </div>
    );
  }
}

export default Demo;