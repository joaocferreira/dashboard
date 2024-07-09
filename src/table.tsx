import { FunctionComponent } from 'react';
import TableHeader from './table-header'
import TableBody from './table-body'
import { Item } from './types';

type Props = {
  headers: string[],
  items: Item[]
}
const Table: FunctionComponent<Props> = (props) => {
  return (
    <table className='table table-hover'>
      <TableHeader headers={props.headers}/>
      <TableBody headers={props.headers} items={props.items} />
    </table>
  )
}

export default Table;
