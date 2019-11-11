import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import Button from '../common/form/button';
import { SECTIONS } from '../../constants/index';

const Home = (props) => {
  const { history } = props;
  return (
    <div className="os--home">
      <Grid>
        <Row>
          <Col xs={12}>
            <div className="cover">
              <div className="section-list">
                {SECTIONS.map(
                  section => <Button type="button" caption={section} onClick={() => history.push(`/section/${section}`)} />,
                )}
              </div>
              <img src="/assets/images/homepage/homepage.jpg" alt="homepage" />
            </div>
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
