type Config = {
  pages: any[];
};

export default <Config>{
  locale: {
    default: 'en',
    ru: import('./locales/ru.json'),
    en: import('./locales/en.json'),
  },
  pages: [
    {
      slides: [
        {
          media: {
            type: 'image',
            src: import('./assets/img/first.png'),
            webp: import('./assets/img/first.webp'),
            style: 'aspect-ratio: 420/465',
          },
          textAlign: 'center',
          title: '_s1.title',
          description: '_s1.description',
          button: '_s1.button',
        },
        {
          extends: 'form',
          media: {
            type: 'image',
            src: import('./assets/img/second.png'),
            webp: import('./assets/img/second.webp'),
            style: 'aspect-ratio: 2.625/1',
          },
          textAlign: 'center',
          title: '_s2.title',
          description: '_s2.description',
          form: [
            {
              id: 'name',
              placeholder: '_s2.namePlaceholder',
              type: 'text',
              style: '--tok-radius-m: 12px',
            },
            {
              id: 'age',
              placeholder: '_s2.agePlaceholder',
              type: 'number',
              inputmode: 'numeric',
              style: '--tok-radius-m: 12px',
            },
          ],
          button: '_s1.button',
        },
        {
          extends: 'form',
          media: {
            type: 'image',
            src: import('./assets/img/third.png'),
            webp: import('./assets/img/third.webp'),
            style: 'aspect-ratio: 2.625/1',
          },
          textAlign: 'center',
          title: '_s3.title',
          form: [
            {
              id: 'guided',
              placeholder: '_s3.guided',
              type: 'checkbox',
            },
            {
              id: 'mindfulness',
              placeholder: '_s3.mind',
              type: 'checkbox',
            },
            {
              id: 'transcendental',
              placeholder: '_s3.trans',
              type: 'checkbox',
            },
            {
              id: 'yoga',
              placeholder: '_s3.yoga',
              type: 'checkbox',
            },
            {
              id: 'other',
              placeholder: '_s3.other',
              type: 'checkbox',
            },
          ],
          button: '_s1.button',
        },
        {
          extends: 'list',
          media: {
            type: 'image',
            src: import('./assets/img/fourth.png'),
            webp: import('./assets/img/fourth.webp'),
            style: 'aspect-ratio: 2.625/1',
          },
          textAlign: 'center',
          title: '_s4.title',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 40,
              },
              text: '_s4.list1',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/language.svg'),
                size: 40,
              },
              text: '_s4.list2',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 40,
              },
              text: '_s4.list3',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/night.svg'),
                size: 40,
              },
              text: '_s4.list4',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 40,
              },
              text: '_s4.list5',
            },
          ],
          button: {
            content: '_s4.button',
            to: '/paywall',
          },
        },
      ],
    },
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'image',
        src: import('./assets/img/fifth.png'),
        webp: import('./assets/img/fifth.webp'),
        style: 'aspect-ratio: 420/340',
      },
      textAlign: 'center',
      title: '_paywall.title',
      description: '_paywall.description',
      main: '_paywall.main',
      product: {
        media: {
          type: 'icon',
          src: import('./assets/icons/star.svg'),
          size: 40,
        },
        title: '_paywall.product.title',
        price: 99,
        currency: 'USD',
        description: '_paywall.product.description',
      },
      links: [
        {
          text: '_paywall.policy',
          href: '_paywall.policy_href',
        },
        {
          text: '_paywall.terms',
          href: '_paywall.terms_href',
        },
      ],
    },
  ],
};
