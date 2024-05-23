import { ReactNode } from 'react';
import { Stack, StackProps } from '@mui/material';

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode,
}

function List<T>(props: ListProps<T> & StackProps) {
    const { items, render, ...otherProps } = props;
    return (
        <Stack {...otherProps}>
            {items.map((item) => render(item))}
        </Stack>
    );
}

export const BaseList = List;
