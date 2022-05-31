import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroContext } from '../../../store/hero/hero-context';
import { v4 } from 'uuid';

const HeroForm = () => {
  const nameInputRef = useRef();
  const navigate = useNavigate();
  const heroContext = useContext(HeroContext);
  const { updateHero, createHero, current, clearCurrent } = heroContext;
  const initHeroState = {
    id: null,
    name: '',
  };

  const [hero, setHero] = useState(initHeroState);

  useEffect(() => {
    if (current) {
      setHero(current);
    } else {
      setHero(initHeroState);
    }
  }, [current]);

  const { id, name } = hero;

  const onChangeHandler = e => {
    setHero({ ...hero, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (id) {
      updateHero({ id: id, name: nameInputRef.current.value });
    } else {
      createHero({ id: v4(), name: nameInputRef.current.value });
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
      <h4>{name}</h4>
      <form onSubmit={onSubmitHandler}>
        <label className="form-label" htmlFor="name">
          Hero name
        </label>
        <input
          ref={nameInputRef}
          className="form-control"
          type="text"
          id="name"
          value={name || ''}
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
    </>
  );
};

export default HeroForm;
