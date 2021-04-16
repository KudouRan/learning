import React, { useEffect, useRef } from 'react';
import { toBottom } from '../../libs/utils';

function Item(props) {
  const { data, user } = props;
  const isMine = data.user === user;

  const itemScroll = useRef();

  useEffect(() => {
    toBottom(itemScroll.current);
  }, [data]);

  return (
    <li className={isMine ? 'mine-msg' : ''} ref={itemScroll}>
      {!isMine ? <span>{data.user}</span> : ''}
      <div className="msg">{data.msg}</div>
    </li>
  );
}

export default function List(props) {
  const { data, user } = props;

  return (
    <ul className="item-scroll">
      {data.map((item, i) => (
        <Item data={item} key={i.toString()} user={user} />
      ))}
    </ul>
  );
}
