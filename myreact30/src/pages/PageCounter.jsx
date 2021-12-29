import Counter from '../components/Counter';
import Lotto from '../components/Lotto';

function PageCounter() {
  return (
    <>
      <h2>Counter</h2>
      <Lotto />
      <Counter initial={10} color={'blue'} />
      <Counter initial={10} color={'red'} />
      <Counter initial={10} color={'green'} />
    </>
  );
}

export default PageCounter;