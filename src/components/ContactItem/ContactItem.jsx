import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRef } from 'react';

import { deleteContact } from 'redux/operations';

import { DeleteBtn, Info } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const btn = useRef();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    btn.current.disabled = true;

    toast.info(`Сontact ${name} has been deleted`);
  };

  return (
    <Info>
      {name}: {phone}
      <DeleteBtn type="button" ref={btn} onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </Info>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
