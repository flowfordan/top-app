import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, Rating, Tag, Paragraph, Input, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';


function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(5);
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(a => a + 1)}>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <Paragraph size='s'>
        rererereLorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nullam lobortis arcu sit amet vehicula fringilla. 
      </Paragraph>
      <Tag size='s'>Zdarova</Tag>
      <Tag size='s' color='primary'>Zdarova</Tag>
      <Tag size='m' color='red'>Zdarova</Tag>
      <Tag size='m' color='green'>Zdarova ggg</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
      <Input placeholder='text'></Input>
      <Textarea placeholder='text'></Textarea>
    </>
  );
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number;
}