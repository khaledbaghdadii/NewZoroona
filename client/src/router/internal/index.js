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

    ]
}

export default internal