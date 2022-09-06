type T = (key: string | number) => string

interface MenuItem {
  title: string
  path: string
  icon?: string
  child?: MenuItem[]
}

const getMenuList = (t: T): MenuItem[] => {
  const list: MenuItem[] = [
    // 菜单-1
    {
      title: t('menu_1.title'),
      path: '/',
      icon: 'icon-menu',
      child: [
        {
          title: t('menu_1.item_1'),
          path: '/',
        },
        {
          title: t('menu_1.item_2.title'),
          path: '/item-2',
          child: [
            {
              title: t('menu_1.item_2.item_1'),
              path: '/item-2/item-1',
            },
          ],
        },
      ],
    },
    // 菜单-2
    {
      title: t('menu_2.title'),
      path: '/menu-2',
      icon: 'icon-menu',
      child: [
        {
          title: t('menu_2.item_1'),
          path: '/menu-2/item-1',
        },
        {
          title: t('menu_2.item_2'),
          path: '/menu-2/item-2',
        },
      ],
    },
    // 菜单3
    {
      title: t('menu_3.title'),
      path: '/menu-3',
      icon: 'icon-menu',
    },
  ]
  return list
}

export { getMenuList, MenuItem }
