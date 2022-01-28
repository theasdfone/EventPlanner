import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({title, handleAction}) {
    return (
        // 4. The handleAction function gets called when the Login/Register button gets clicked
        <Button onClick={handleAction}>{title}</Button>
    );
}