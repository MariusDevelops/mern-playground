const Props = (props) => {
  const car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2022,
  };
  const busName = 'Blue Bus Bus Bus';

  return (
    <div>
      <h1>Props</h1>
      <h2>Who lives in my garage?</h2>
      <Car carInfo={car} />
      <Bus busInfo={busName} />
    </div>
  );
};

function Car(props) {
  return (
    <div>
      <h2>
        Who? who? object of three props: {props.carInfo.brand}{' '}
        {props.carInfo.model} ({props.carInfo.year}
        )!
      </h2>
    </div>
  );
}

function Bus(props) {
  return (
    <div>
      <h2>Bus name - {props.busInfo}!</h2>
    </div>
  );
}

export default Props;
