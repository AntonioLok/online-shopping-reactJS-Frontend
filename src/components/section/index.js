import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { TYPES } from '../../constants/index';
import Cover from '../common/cover/index';

const Section = (props) => {
  const { history, match: { params: { section } } } = props;

  const items = [];
  TYPES[section].forEach(type => items.push({ caption: type, path: `/products/${section}/${type}` }));
  const coverProps = {
    history,
    img: `/assets/images/section/${section}.jpg`,
    items,
  };

  return (
    <div className="os--home">
      <Grid>
        <Row>
          <Col xs={12}>
            <Cover {...coverProps} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

Section.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      section: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Section;
