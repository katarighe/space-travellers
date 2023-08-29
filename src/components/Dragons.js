// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import fetchDragons from '../redux/dragons/dragonsSlice';

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(fetchDragons());
// }, [dispatch]);

// const allDragons = useSelector((state) => state.dragons);
const Dragons = () => (
  <ul className="container">
    Dragons
    {/* {allDragons.map((dragon) => (
        <li key={dragon.id} className="dragon_id">
          <div className="dragon">
            <img
              src={dragon.flickr_images[0]}
              alt="dragon"
              style={{ width: '250px', height: '200px' }}
              className="p-0"
            />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5em' }}>{dragon.name}</h2>
            <p>{dragon.description}</p>
            <button type="button" className="btn btn-primary">
              Reserve Dragon
            </button>
          </div>
        </li>
      ))} */}
  </ul>
);
export default Dragons;
