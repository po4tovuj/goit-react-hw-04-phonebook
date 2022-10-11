import PropTypes from 'prop-types';
// import { Component } from 'react';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts = [], handleDelete = () => ({}) }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
// export class ContactsList extends Component {
//   static defaultProps = {
//     contacts: [],
//   };
//   static defaultPropTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//       })
//     ),
//   };

//   render() {
//     const { handleDelete, contacts } = this.props;

//     return (
//       <ul>
//         {contacts.map(({ id, name, number }) => {
//           return (
//             <ContactItem
//               key={id}
//               id={id}
//               name={name}
//               number={number}
//               handleDelete={handleDelete}
//             />
//           );
//         })}
//       </ul>
//     );
//   }
// }
