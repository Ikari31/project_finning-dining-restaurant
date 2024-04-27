/* eslint-disable react/prop-types */
import { data, images } from '../../constants';
import { SubHeading } from '../../components';

import './Laurels.css';

const AwardCard = ({ award: {imgUrl, title, subtitle}} ) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt={title} />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
      <p></p>
    </div>
  </div>

);

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & Recognition' />
      <h1 className='headtext__cormorant'>Our Laurels</h1> 

      <div className='app__laurels_awards'>
        {data.awards.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>
    </div>

    <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels' />
    </div>
  </div>
);

export default Laurels;
