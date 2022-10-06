import { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact, DeleteBtn } from './ContactItem.styled';

export class ContactItem extends Component {
  static defaultPropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    handleDelete: PropTypes.func,
  };
  static defaultProps = {
    name: '',
    number: '',
    id: '',
    handleDelete: () => ({}),
  };
  onDeleteClick = () => {
    this.props.handleDelete(this.props.id);
  };
  render() {
    const { name, number } = this.props;
    return (
      <li>
        <Contact>
          {name}: {number}
          <DeleteBtn onClick={this.onDeleteClick}> Delete </DeleteBtn>
        </Contact>
      </li>
    );
  }
}
