const actions = [
    {
        name: 'createAdmin',
        displayName: 'Create Admin',
        link: '/user/create',
        icon: 'user-plus',
        forwardState: true,
        state: {
            userType: 'admin'
        }
    },
    {
        name: 'viewMembers',
        displayName: 'Members',
        link: '/members',
        icon: 'users',
        forwardState: false
    },
    {
        name: 'viewUsers',
        displayName: 'Users',
        link: '/user',
        icon: 'users-cog',
        forwardState: false
    },
]
export default actions;
