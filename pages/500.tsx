import { Htag } from '../components';
import { withLayout } from '../layout/Layout';


function Error500(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>500 Error! There is no such page</Htag>
    </>
  );
}

export default withLayout(Error500);