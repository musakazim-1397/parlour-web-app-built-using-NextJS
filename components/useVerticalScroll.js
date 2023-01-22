
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion'

const useVerticalScroll = () => {
    const [element, view]=useInView({rootMargin: '25px 0px 25px 0px'});
    const controls= useAnimation();
    if(view){
        controls.start('show');
    }else{
        controls.start('hidden');
    }
  return [element,controls];
}

export default useVerticalScroll;