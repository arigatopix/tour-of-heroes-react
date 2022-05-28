import HeroList from './HeroList';

const Heroes = () => {
  return (
    <>
      <div className="d-flex justify-content-between my-2">
        <h4>
          My Heroes <i className="shield-shaded"></i>
        </h4>

        <button className="btn btn-primary">Add</button>
      </div>
      <hr />

      <ul>
        <HeroList />
      </ul>
    </>
  );
};

export default Heroes;
