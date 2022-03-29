import { useEffect, useState } from 'react';
import { Button, Htag, Rating, Tag } from '../components';
import { Paragraph } from '../components/Paragraph/Paragraph';

export default function Home() {

  const [counter, setCounter] = useState<number>(0)

 useEffect(() => {
   console.log(counter);
   return function cleanup(){
     console.log('Unmount');
   }
  }, []);


  return (
    < >
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(a => a + 1)}>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <Paragraph size='s'>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nullam lobortis arcu sit amet vehicula fringilla. 
      </Paragraph>
      <Tag size='s'>Zdarova</Tag>
      <Tag size='m' color='red'>Zdarova</Tag>
      <Tag size='m' color='green'>Zdarova</Tag>
      <Rating rating={4} isEditable/>
    </>
  );
}
