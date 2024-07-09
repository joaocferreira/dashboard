import { FunctionComponent } from 'react';

type Props = { headers: string[] }

const TableHeader: FunctionComponent<Props> = (props) => {
  return (
    <thead>
      <tr>
        { props.headers.map(header => <th key={header}>{header}</th>) }
      </tr>
    </thead>
  )
}

export default TableHeader;
