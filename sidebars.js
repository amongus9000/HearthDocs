module.exports = {


    docs: [

        {
            type: 'link',
            label: 'Website',
            href: 'https://hearthcraft.net/'
        },
     
        {
            type: 'link',
            label: 'Rules',
            href: 'https://hearthcraft.net/rules'
        },

        {
            type: 'link',
            label: 'Discord',
            href: 'https://discord.hearthcraft.net/',
        },

        {
            type: 'category',
            label: 'Welcome',
            items: [
                'intro',
            ],
        },

        {
            type: 'category',
            label: 'Plugins',
            collapsed: true,
            items: [
                {
                type: 'category',
                label: 'Core Features',
                collapsed: true,
                items: [
                    'Plugins/GriefPrevention',
                 ]
                },
                {
                type: 'category',
                label: 'Lesser Features',
                collapsed: true,
                items: [
                    'Plugins/AdvancedGift',
                 ]
                },
                {
                type: 'category',
                label: 'Quality of Life',
                collapsed: true,
                items: [
                    'Plugins/BetterSleeping',
                 ]
                },
                {
                type: 'category',
                label: 'Back-end',
                collapsed: true,
                items: [
                    'Plugins/AAC',
                 ]
                },
                {
                type: 'category',
                label: 'Chat & Interface',
                collapsed: true,
                items: [
                    'Plugins/DeluxeTags',
                 ]
                },
            ],
        },
    ]
}
//'editing-account-details'
