import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import _ from 'lodash';
import { useDefaultTableStyles } from './useDefaultTableStyles';
import LoadMoreButton from '@/components/primitiveUI/Button/LoadMoreButton';
import { Checkbox } from '@/components/primitiveUI/Checkbox/Checkbox';

export type CellValue = string | number | React.ReactElement | React.ReactNode;
export interface DefaultTableCellType {
  value: CellValue;
  className?: string;
  onClick?: (payload: { rowIdx: number; cellKey: string; cellValue: CellValue }) => void;
}

export interface DefaultTableRowType {
  [key: string]: DefaultTableCellType | React.ReactNode | any;
}

export interface DefaultTableRowProps {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  row: DefaultTableRowType;
  columnKeys: string[];
  useSelect?: boolean;
  isRowSelected?: boolean;
  onRowSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultTableRow: React.FC<DefaultTableRowProps> = ({
  className,
  columnKeys,
  row,
  onClick,
  useSelect,
  isRowSelected,
  onRowSelected,
}) => {
  return (
    <tr onClick={onClick} className={className}>
      {useSelect && (
        <td>
          <Checkbox value={row._id} checked={isRowSelected} onChange={onRowSelected} />
        </td>
      )}
      {columnKeys.map((key, cellIdx) => {
        const cell = _.get(row, key);
        const child = _.get(cell, 'value', cell);
        return (
          <td key={cellIdx} className={_.get(cell, 'className')}>
            {child as React.ReactNode}
          </td>
        );
      })}
    </tr>
  );
};

export interface HeaderType {
  field: string;
  headerValue?: CellValue;
  className?: string;
}
export interface DefaultTableProps {
  colGroup?: React.ReactElement;
  headers: HeaderType[];
  rows: DefaultTableRowType[];
  stickyHeader?: boolean;
  className?: string;
  onRowClick?: (
    event: React.MouseEvent,
    payload: { rowIdx: number; row: DefaultTableRowType },
  ) => void;
  isLoadingMore?: boolean;
  onLoadMore?: () => void;
  hasLoadMore?: boolean;
  loadMoreLabel?: string | null;
  useSelect?: boolean;
  selected?: number[];
  onSelected?: (param: { selected: number[] }) => void;
}

const DefaultTable: React.FC<DefaultTableProps> = ({
  rows,
  headers,
  colGroup,
  className,
  onRowClick,
  stickyHeader = true,
  isLoadingMore,
  onLoadMore,
  hasLoadMore,
  useSelect,
  onSelected = () => {},
  selected: propSelected,
  loadMoreLabel,
}) => {
  const [selected, setSelected] = useState<number[]>(propSelected || []);
  const classes = useDefaultTableStyles();
  const columnKeys = useMemo(() => headers.map(({ field }) => field), [headers]);

  useEffect(() => {
    setSelected(propSelected || []);
  }, [propSelected]);

  const handleSelect = ({ rowIdx, isSelected }: { rowIdx: number; isSelected: boolean }) => {
    const selectedSet = new Set(selected);
    if (isSelected) {
      selectedSet.add(rowIdx);
    } else {
      selectedSet.delete(rowIdx);
    }
    const newSelected = Array.from(selectedSet).sort();
    setSelected(newSelected);
    onSelected({ selected: newSelected });
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selected.length === rows.length) {
      setSelected([]);
      onSelected({ selected: [] });
      return;
    }
    const allIndexes = Array.from(Array(rows.length).keys());
    setSelected(allIndexes);
    onSelected({ selected: allIndexes });
  };

  const handleLoadMore = () => {
    if (!onLoadMore) {
      return;
    }
    onLoadMore();
  };
  return (
    <>
      <table className={clsx(classes.defaultTable, className)}>
        {colGroup}
        <thead className={clsx({ [classes.stickyHeader]: stickyHeader })}>
          <tr>
            {useSelect && (
              <td>
                <Checkbox
                  onChange={handleSelectAll}
                  checked={selected.length === rows.length}
                  indeterminate={selected.length > 0}
                />
              </td>
            )}
            {headers.map((headerCell, idx) => (
              <th className={_.get(headerCell, 'className')} key={`header-${idx}`}>
                {headerCell.headerValue}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <DefaultTableRow
              className={clsx({
                [classes.rowClickable]: !!onRowClick,
              })}
              onClick={onRowClick ? (event) => onRowClick(event, { rowIdx, row }) : undefined}
              columnKeys={columnKeys}
              row={row}
              key={`default-table-row-${rowIdx}`}
              useSelect={useSelect}
              isRowSelected={selected.includes(rowIdx)}
              onRowSelected={(event) => handleSelect({ rowIdx, isSelected: event.target.checked })}
            />
          ))}
        </tbody>
      </table>
      {hasLoadMore && (
        <LoadMoreButton
          onLoadMore={handleLoadMore}
          loadMoreLabel={loadMoreLabel}
          isLoading={isLoadingMore}
        />
      )}
    </>
  );
};

export default DefaultTable;
