import { FC } from 'react';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

declare const Page: FC<PageProps>;

export { Page };
