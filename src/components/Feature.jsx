import React from 'react';
import FeatureBox from './FeatureBox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

const Feature = () => {
    return (
        <div id='features'>
            <h1>FEATURES</h1>
            <div className='a-container'>
                <FeatureBox image={fimage1} title='Weight Lifting' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, lectus vel feugiat molestie, ipsum elit convallis mauris, id sollicitudin dolor libero vel nisl. Pellentesque scelerisque, risus id dapibus pharetra, lectus augue auctor erat, sed cursus mi metus et nibh.'/>
                <FeatureBox image={fimage2} title='Specific Muscle' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, lectus vel feugiat molestie, ipsum elit convallis mauris, id sollicitudin dolor libero vel nisl. Pellentesque scelerisque, risus id dapibus pharetra, lectus augue auctor erat, sed cursus mi metus et nibh.'/>
                <FeatureBox image={fimage3} title='Flex Your Muscle' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, lectus vel feugiat molestie, ipsum elit convallis mauris, id sollicitudin dolor libero vel nisl. Pellentesque scelerisque, risus id dapibus pharetra, lectus augue auctor erat, sed cursus mi metus et nibh.'/>
                <FeatureBox image={fimage4} title='Cardio Exercise' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, lectus vel feugiat molestie, ipsum elit convallis mauris, id sollicitudin dolor libero vel nisl. Pellentesque scelerisque, risus id dapibus pharetra, lectus augue auctor erat, sed cursus mi metus et nibh.'/>
            </div>
            
        </div>
    );
};

export default Feature;