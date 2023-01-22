
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion'

const useScroll = (threshold=0.1) => {
    const [element, view]=useInView({threshold:threshold});
    const controls= useAnimation();
    if(view){
        controls.start('show');
    }else{
        controls.start('hidden');
    }
  return [element,controls];
}

export default useScroll;