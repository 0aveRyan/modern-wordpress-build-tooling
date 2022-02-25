module.exports = {
    border: {
        customColor: true,
		customRadius: true,
		customStyle: true,
		customWidth: true,
    },
    color: {
        duotone: [],
        gradients: [],
        link: true,
        palette: [
            {
                slug: 'light-blue',
                color: '#BEF5FF',
                name: 'Light Blue',
            },
            {
                slug: 'white',
                color: '#F0E6C8',
                name: 'White',
            },
            {
                slug: 'black',
                color: '#24242A',
                name: 'Black',
            },
        ]
    },
    custom: {
        'border-radius': {
            one: '74% 4% 77% 23% / 7% 16% 11% 93%',
            two: '59% 25% 45% 51% / 30% 10% 40% 20%',
            three: '7% 44% 45% 41% / 7% 25% 22% 48%',
            four: '21% 79% 8% 10% / 16% 26% 25% 5%',
        },
        'type-scale': {
            step: 1.333,
            micro: 'calc(var(--wp--custom--type-scale--tiny) * 0.9)',
            tiny:
                'calc(var(--wp--custom--type-scale--small) / var(--wp--custom--type-scale--step))',
            small:
                'calc(var(--wp--custom--type-scale--normal) / var(--wp--custom--type-scale--step))',
            normal: '1.333rem',
            medium:
                'calc(var(--wp--custom--type-scale--normal) * var(--wp--custom--type-scale--step))',
            large:
                'calc(var(--wp--custom--type-scale--medium) * var(--wp--custom--type-scale--step))',
            'extra-large':
                'calc(var(--wp--custom--type-scale--large) * var(--wp--custom--type-scale--step))',
            huge:
                'calc(var(--wp--custom--type-scale--extra-large) * var(--wp--custom--type-scale--step))',
            gigantic:
                'calc(var(--wp--custom--type-scale--huge) * var(--wp--custom--type-scale--step))',
            colossal:
                'calc(var(--wp--custom--type-scale--gigantic) * var(--wp--custom--type-scale--step))',
        },
        spacing: {
            'block-gap': '1.666rem',
            letter: {
                tight: '-0.0333rem',
                snug: '-0.0266rem',
                loose: '0.0133rem',
                wide: '0.0135rem',
            },
            line: {
                tight: 1.04,
                snug: 1.1,
                loose: 1.24,
                wide: 1.48,
            },
        },
    }
}