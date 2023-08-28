import './Spinner.scss';

function Spinner() {
  return (
    <div className='container' data-testid='spinner'>
      <div className="loader mx-auto" />
    </div>
  );
}

export default Spinner;
