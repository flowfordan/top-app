import { Htag } from '../components';
import { withLayout } from '../layout/Layout';


function Error404(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>404 Error! There is no such page</Htag>
    </>
  );
}

export default withLayout(Error404);