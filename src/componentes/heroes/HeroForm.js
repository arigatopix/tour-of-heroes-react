import React from 'react';

const HeroForm = () => {
  const onSubmitHandler = e => {
    e.preventDefault();
  };

  return (
    <>
      <h4>Hero Name</h4>
      <form onSubmit={onSubmitHandler}>
        <label class="form-label" for="name">
          Hero Name
        </label>
        <input class="form-control" type="text" id="name" />

        <hr />
        <div class="d-flex justify-content-between">
          <button class="btn btn-secondary">Back</button>
          <button class="btn btn-primary">Save</button>
        </div>
      </form>
    </>
  );
};

export default HeroForm;
