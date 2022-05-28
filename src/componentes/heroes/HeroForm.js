import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroForm = () => {
  const navigate = useNavigate();

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  const onGoBackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <h4>Hero Name</h4>
      <form onSubmit={onSubmitHandler}>
        <label className="form-label" htmlFor="name">
          Hero Name
        </label>
        <input className="form-control" type="text" id="name" />

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
