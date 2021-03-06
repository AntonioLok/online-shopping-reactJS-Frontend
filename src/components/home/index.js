import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { SECTIONS } from '../../constants/index';
import Cover from '../common/cover/index';

const Home = (props) => {
  const { history } = props;
  const items = [];
  SECTIONS.forEach(section => items.push({ caption: section, path: `/section/${section}` }));
  const coverProps = {
    history,
    img: '/assets/images/homepage/homepage.jpg',
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

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
