const internal = {
    path: '',
    component: () =>
        import ('@/layouts/main-layout/MainLayout'),
    redirect: { name: 'Homepage' },
    children: [{
            path: '/',
            name: 'Homepage',
            component: () =>
                import ('@/views/homepage/Homepage'),
            meta: {
                title: 'HOMEPAGE',
                rule: 'isPublic'
            }
        },
        {
            path: '/placespage',
            name: 'Placespage',
            component: () =>
                import ('@/views/placespage/Placespage'),
            meta: {
                title: 'PLACESPAGE',
                rule: 'isPublic'
            }
        },
        {
            path: '/detailed-placepage/:id',
            name: 'DetailedPlacePage',
            component: () =>
                import ('@/views/placespage/DetailedPlacePage'),
            meta: {
                title: 'DETAILEDPLACEPAGE',
                rule: 'isPublic'
            }
        }

    ]
}

export default internal