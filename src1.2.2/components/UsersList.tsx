import {UserType} from './../types/UserType';
import React, {FC, memo} from 'react';
import {User} from './User';

type PropsType = {
  users: UserType[];
};

export const UsersList: FC<PropsType> = memo(({users}) => {
  return (
    <>
      {[].map(({id, name}) => <User key={id} id={id} name={name} />)}
    </>
  );
});
