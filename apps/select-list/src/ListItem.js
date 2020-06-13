// @flow

import * as React from 'react';

import { useSelectedItemsDispatch } from './SelectedItemsContext';

type Props = {|
  +color: string,
  +name: string,
|};

const ListItem = ({ color, name }: Props): React.Element<'li'> => {
  const [isSelected, setIsSelected] = React.useState(false);
  const dispatch = useSelectedItemsDispatch();

  const onClick = () => {
    setIsSelected((isSelected) => {
      const nextValue = !isSelected;

      return nextValue;
    });
  };
  React.useEffect(() => {
    dispatch({ type: isSelected ? 'add' : 'remove', payload: name });
  }, [isSelected, dispatch, name]);
  const selectedClassName = isSelected ? ' selected' : '';
  return (
    <li onClick={onClick} className={`List__item List__item--${color}${selectedClassName}`}>
      {name}
    </li>
  );
};

export default ListItem;
