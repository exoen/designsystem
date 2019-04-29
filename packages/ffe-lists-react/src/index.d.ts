import * as React from 'react';

export interface BaseListItemProps {
    children?: React.ReactNode;
    className?: string;
}

export interface BaseListProps {
    children: React.ReactNode;
    className?: string;
}

export interface BulletListProps extends BaseListProps {
    condensed?: boolean;
}

export interface CheckListItemProps extends BaseListItemProps {
    isCross?: boolean;
}

export interface CheckListProps extends BaseListProps {
    columns?: 1 | 2 | '1' | '2';
}

export interface NumberedListProps extends BaseListProps {
    condensed?: boolean;
}

export interface DescriptionListProps extends BaseListProps {
    medium?: boolean;
    large?: boolean;
}

declare class BulletList extends React.Component<
    BulletListProps & React.HTMLProps<HTMLUListElement>,
    any
> {}
declare class BulletListItem extends React.Component<
    BaseListItemProps & React.HTMLProps<HTMLLIElement>,
    any
> {}
declare class CheckList extends React.Component<
    CheckListProps & React.HTMLProps<HTMLUListElement>,
    any
> {}
declare class CheckListItem extends React.Component<
    CheckListItemProps & React.HTMLProps<HTMLLIElement>,
    any
> {}
declare class NumberedList extends React.Component<
    NumberedListProps & React.HTMLProps<HTMLOListElement>,
    any
> {}
declare class NumberedListItem extends React.Component<
    BaseListItemProps & React.HTMLProps<HTMLLIElement>,
    any
> {}
declare class StylizedNumberedList extends React.Component<
    BaseListProps & React.HTMLProps<HTMLOListElement>,
    any
> {}
declare class StylizedNumberedListItem extends React.Component<
    BaseListItemProps & React.HTMLProps<HTMLLIElement>,
    any
> {}
declare class DescriptionList extends React.Component<
    DescriptionListProps & React.HTMLProps<HTMLDListElement>,
    any
> {}
declare class DescriptionListMultiCol extends React.Component<
    BaseListProps & React.HTMLProps<HTMLDivElement>,
    any
> {}
declare class DescriptionListTerm extends React.Component<
    BaseListItemProps & React.HTMLProps<HTMLElement>,
    any
> {}
declare class DescriptionListDescription extends React.Component<
    BaseListItemProps & React.HTMLProps<HTMLElement>,
    any
> {}
