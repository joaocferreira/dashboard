import { FunctionComponent } from 'react';
import { Item, Headers } from './types';


const TableItem: FunctionComponent<{ item: Item, headers: Headers }> = (props) => {
  const { item, headers } = props;
  return (
    <tr>
      { headers.map((key: any) => {
        let content: any = '.';
        if (key === 'team' && item['url' as keyof Item]) {
          content = <a href={item['url' as keyof Item] as any} target="_blank"> {item[key as keyof Item] as string} </a>;
        } else if (key in item) {
          content = item[key as keyof Item] as string;
        }

        return <td key={`${item['team']}_${key}`}> {content}</td>;
      })}
    </tr>
  )
}

export default TableItem;
