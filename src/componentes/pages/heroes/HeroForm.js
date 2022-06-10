import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HeroContext } from '../../../store/hero/hero-context';
import { v4 } from 'uuid';

const initHero = {
  id: null,
  name: null,
};
const HeroForm = () => {
  const params = useParams();

  const heroId = Object.keys(params).length !== 0 ? Number(params.id) : null;

  const [updatedHero, setUpdateHero] = useState(initHero);

  const navigate = useNavigate();
  const heroContext = useContext(HeroContext);
  const {
    updateHero,
    createHero,
    clearCurrent,
    getHero,
    hero,
    loading,
    error,
  } = heroContext;

  useEffect(() => {
    if (heroId) {
      getHero(heroId);
    } else {
      setUpdateHero(initHero);
    }
  }, [getHero, heroId]);

  useEffect(() => {
    if (heroId) {
      setUpdateHero(hero);
    }
  }, [hero, heroId]);

  const onChangeHandler = e => {
    setUpdateHero({ ...updatedHero, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    navigate(-1);
    clearCurrent();

    if (heroId) {
      // console.log(updatedHero);
      updateHero({ id: heroId, name: updatedHero.name });
      return;
    } else {
      createHero({ id: v4(), name: updatedHero.name });
    }

    navigate(-1);
    clearCurrent();
  };

  const onGoBackHandler = () => {
    clearCurrent();
    navigate(-1);
  };

  return (
    <>
      <h4>{updatedHero.name ? `Name: ${updatedHero.name}` : 'Create Hero'}</h4>

      {loading && !error ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <label className="form-label" htmlFor="name">
            Hero name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={updatedHero.name || ''}
            onChange={onChangeHandler}
            required
          />

          <hr />
          <div className="d-flex justify-content-between">
            <div className="btn btn-secondary" onClick={onGoBackHandler}>
              Back
            </div>
            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      )}
    </>
  );
};

export default HeroForm;
