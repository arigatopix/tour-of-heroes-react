import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroContext } from '../../../store/hero/hero-context';

const HeroForm = () => {
  const navigate = useNavigate();
  const heroContext = useContext(HeroContext);
  const { current, clearCurrent } = heroContext;
  const initHeroState = {
    id: null,
    name: '',
  };
  useEffect(() => {
    if (current) {
      setHero(current);
    } else {
      setHero(initHeroState);
    }
  }, [current]);

  const [hero, setHero] = useState(initHeroState);

  const { id, name } = hero;

  const onChangeHandler = e => {
    setHero({ ...hero, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    clearCurrent();
  };

  const onGoBackHandler = () => {
    navigate(-1);
    clearCurrent();
  };

  return (
    <>
      <h4>{name}</h4>
      <form onSubmit={onSubmitHandler}>
        <label className="form-label" htmlFor="name">
          Hero name
        </label>
        <input
          className="form-control"
          type="text"
          id="name"
          value={name || ''}
          onChange={onChangeHandler}
          required
        />

        <hr />
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={onGoBackHandler}>
            Back
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </>
  );
};

export default HeroForm;
