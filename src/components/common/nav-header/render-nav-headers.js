import React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { TYPES } from '../../../constants/index';

const renderSections = section => (
  <MenuItem key={section} eventKey={section}>{section}</MenuItem>
);

class RenderNavHeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  enterMenu() {
    this.setState({ show: true });
  }

  leaveMenu() {
    this.setState({ show: false });
  }

  handleSelect(eventKey) {
    const { history, section } = this.props;
    history.push(`/${section}/${eventKey}`);
  }

  render() {
    const { section } = this.props;
    const { show } = this.state;

    return (
      <ButtonToolbar>
        <DropdownButton
          bsStyle="nav-header"
          title={section}
          noCaret
          onMouseEnter={() => this.enterMenu()}
          onMouseLeave={() => this.leaveMenu()}
          open={show}
          onToggle={() => {}} // get rid of onToggle error not being set.
          onSelect={this.handleSelect}
          id={section}
        >
          {TYPES[section].map(type => renderSections(type))}
        </DropdownButton>
      </ButtonToolbar>
    );
  }
}

RenderNavHeaders.propTypes = {
  section: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default RenderNavHeaders;
