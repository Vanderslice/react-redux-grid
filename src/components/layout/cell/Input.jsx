import React, { PropTypes } from 'react';

import { updateCellValue } from './../../../actions/plugins/editor/EditorActions';

export const Input = ({ cellData, column, editorState, rowId, store }) => {

    const colName = column.name;

    const value = editorState
        && editorState.row
        && editorState.row.values
        && editorState.row.values[colName]
        ? editorState.row.values[colName]
        : cellData;

    const inputProps = {
        onChange: handleChange.bind(null, column, rowId, store),
        type: 'text',
        value: value
    };

    return (
        <input { ...inputProps } />
    );
};

export const handleChange = (columnDefinition, rowId, store, reactEvent) => {
    store.dispatch(updateCellValue(reactEvent.target.value, columnDefinition.name));
};

Input.propTypes = {
    cellData: PropTypes.string,
    column: PropTypes.object,
    store: PropTypes.object
};