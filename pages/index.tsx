import Image from 'next/image';
import { Button, Htag } from '../components';

export default function Home() {
  return (
    < >
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
    </>
  );
}
