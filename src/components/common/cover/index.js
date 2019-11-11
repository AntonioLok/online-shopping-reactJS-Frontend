import React from 'react';
import PropTypes from 'prop-types';
import Button from '../form/button';

const Cover = (props) => {
  const { history, img, items } = props;

  return (
    <div className="cover">
      <div className="section-list">
        {items.map(
          ({ caption, path }) => <Button type="button" caption={caption} onClick={() => history.push(path)} />,
        )}
      </div>
      <img src={img} alt="cover" />
    </div>
  );
};

Cover.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  img: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default Cover;
