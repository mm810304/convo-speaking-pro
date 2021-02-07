import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import cx from 'classnames';

import AudioPlayer from '../components/AudioPlayer';
import Dialogue from '../components/Dialogue';
import Directions from '../components/Directions';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Vocabulary from '../components/Vocabulary';
import styles from './lesson.module.css';

const LessonPage = ({ data: { lesson }, pageContext }) => {
  const { title, dialogue, vocabulary, character_one_name, character_two_name } = lesson;
  const charOneImg = lesson.character_one_image.asset.fluid;
  const charTwoImg = lesson.character_two_image.asset.fluid;
  const fullAudio = lesson.full_audio.asset.url;
  const speakCharOneAudio = lesson.speak_part_one_audio.asset.url;
  const speakCharTwoAudio = lesson.speak_part_two_audio.asset.url;

  const SEOImage = lesson.lesson_image.asset.fluid;

  const [currentAudio, setCurrentAudio] = useState(fullAudio);
  const [autoPlayState, setAutoPlayState] = useState(false);
  const [activeAudio, setActiveAudio] = useState('full');

  const charOneSelectHandler = () => {
    setCurrentAudio(speakCharOneAudio);
    setActiveAudio('charOne');
    setAutoPlayState(false);
  };

  const charTwoSelectHandler = () => {
    setCurrentAudio(speakCharTwoAudio);
    setActiveAudio('charTwo');
    setAutoPlayState(false);
  };

  const fullAudioSelectHandler = () => {
    setCurrentAudio(fullAudio);
    setAutoPlayState(false);
    setActiveAudio('full');
  };

  return (
    <React.Fragment>
      <SEO 
        title={title}
        description={`Practice speaking English on your own with a natural English conversation.  This conversation focuses on the English vocabulary '${title}'.`}
        image={SEOImage.src}
        location={`https://www.convospeakingpro/${pageContext.categorySlug}/${pageContext.lessonSlug}`}
      />
      <Layout>
        <main className={styles.wrapper}>
          <div className={styles.lessonHeader}>
            <h1 className={styles.title}>{title}</h1>
            <Directions />
          </div>
          <div className={styles.choicesWrapper}>
            <div className={styles.charWrapper}>
              <div 
                className={cx(
                  styles.imgWrapper,
                  {
                    [styles.charActive]: activeAudio === 'charOne'
                  }
                )}
                onClick={charOneSelectHandler}
              >
                <Img 
                  fluid={charOneImg}
                  alt="Character One"
                  className={styles.charImg}
                />
                <div className={styles.nameCentered}>
                {`Speak as ${character_one_name}`}
                </div>
              </div>
              <div 
                className={cx(
                  styles.imgWrapper,
                  {
                    [styles.charActive]: activeAudio === 'charTwo'
                  }
                )}
                onClick={charTwoSelectHandler}
              >
                <Img 
                  fluid={charTwoImg}
                  alt="Character Two"
                  className={styles.charImg}
                  
                />
                <div className={styles.nameCentered}>
                  {`Speak as ${character_two_name}`}
                </div>
              </div>
            </div>
            <div className={styles.wholeConvoButton}>
              <button 
                type="button"
                onClick={fullAudioSelectHandler}
                className={cx(
                  styles.fullAudioTextBtn,
                  {
                    [styles.fullAudioActive]: activeAudio === 'full'
                  }  
                )}
              >
                  LISTEN TO THE WHOLE CONVERSATION
              </button>
            </div>
          </div>
          <div>
            <AudioPlayer 
              audioFile={currentAudio}
              autoPlayState={autoPlayState}
            />
          </div>
          <Dialogue dialogue={dialogue} />
          <Vocabulary vocabulary={vocabulary} />
        </main>
      </Layout>
    </React.Fragment>
    
  );
};

export const query = graphql`
  query($lessonId: String) {
    lesson: sanityLessons(id: {
      eq: $lessonId
    }) {
      title
      dialogue
      vocabulary
      character_one_name
      character_two_name
      lesson_image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      character_one_image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      character_two_image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      full_audio {
        asset {
          title
          url
          source {
            id
            name
            url
          }
        }
      }
      speak_part_one_audio {
        asset {
          title
          url
          source {
            id
            name
            url
          }
        }
      }
      speak_part_two_audio {
        asset {
          title
          url
          source {
            id
            name
            url
          }
        }
      }
    }
  }
`;

export default LessonPage;