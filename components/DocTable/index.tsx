import React from "react";
import "./index.css";

export interface Column {
  title: string;
  dataIndex: string;
  width?: number;
  render?: (data: any) => any;
}

export type Columns = Column[];

export type DataSource = {
  [key: string]: unknown;
};

interface Props {
  columns: Columns;
  dataSource: DataSource[];
}

const DocTable: React.FC<Props> = ({ columns, dataSource }) => {
  const renderColumn = (column: Column, rowData: DataSource) => {
    if (column.render) {
      return column.render(rowData[column.dataIndex]);
    }
    return rowData[column.dataIndex];
  };

  return (
    <div className="doc-table-list">
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th
                  key={column.dataIndex}
                  style={{ width: column.width + "px" }}
                >
                  {column.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, key: number) => {
            return (
              <tr key={key}>
                {columns.map((column) => {
                  return (
                    <td key={column.dataIndex}>{renderColumn(column, data)}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DocTable;
