import { FunctionComponent } from 'react';
import TableItem from './table-item';
import { Item } from './types';

type Props = { items: Item[], headers: string[] }

const TableBody: FunctionComponent<Props> = (props) => {
  return (
    <tbody>
      { props.items.map(item => <TableItem key={item['team' as keyof Item]} item={item} headers={props.headers} />) }
    </tbody>
  )
}

export default TableBody;
