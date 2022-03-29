import { Button, Htag, Tag } from '../components';
import { Paragraph } from '../components/Paragraph/Paragraph';

export default function Home() {
  return (
    < >
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <Paragraph size='s'>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nullam lobortis arcu sit amet vehicula fringilla. 
      </Paragraph>
      <Paragraph size='m'>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nullam lobortis arcu sit amet vehicula fringilla. 
      </Paragraph>
      <Paragraph size='l'>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nullam lobortis arcu sit amet vehicula fringilla. 
      </Paragraph>
      <Tag size='s'>Zdarova</Tag>
      <Tag size='m' color='red'>Zdarova</Tag>
      <Tag size='m' color='green'>Zdarova</Tag>
    </>
  );
}
