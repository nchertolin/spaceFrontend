import { NavLink, useLocation } from 'react-router-dom';
import { memo, useCallback } from 'react';
import { TabsProps } from '@mui/material';
import { BaseTab, BaseTabs, TabLabel } from '@/shared/ui/Tabs/Tabs.tsx';
import { ITab } from '@/widgets/Menu/model/ITab.ts';
import { TABS } from '@/widgets/Menu/lib/const.tsx';

export const NavigationMenu = memo((props: TabsProps) => {
    const location = useLocation();
    const path = `/${location.pathname.split('/')[1]}`;

    const render = useCallback((item: ITab) => (
        <BaseTab
            key={item.path}
            label={<TabLabel label={item.label} startIcon={item.startIcon} />}
            value={item.path}
            component={NavLink}
            to={item.path}
        />
    ), []);

    return (
        <BaseTabs
            value={path}
            {...props}
        >
            {TABS.map((item) => render(item))}
        </BaseTabs>
    );
});
