const artists = [
  {
    'id': '5b11f4ce-a62d-471e-81fc-a69a8278c7da',
    'type': 'Group',
    'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
    'score': 100,
    'name': 'Nirvana',
    'sort-name': 'Nirvana',
    'country': 'US',
    'area': {
      'id': '489ce91b-6658-3307-9877-795b68554c98',
      'type': 'Country',
      'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
      'name': 'United States',
      'sort-name': 'United States',
      'life-span': {
        'ended': null
      }
    },
    'begin-area': {
      'id': 'a640b45c-c173-49b1-8030-973603e895b5',
      'type': 'City',
      'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
      'name': 'Aberdeen',
      'sort-name': 'Aberdeen',
      'life-span': {
        'ended': null
      }
    },
    'disambiguation': '90s US grunge band',
    'life-span': {
      'begin': '1988-01',
      'end': '1994-04-05',
      'ended': true
    },
    'aliases': [
      {
        'sort-name': 'ニルヴァーナ',
        'type-id': '894afba6-2816-3c24-8072-eadb66bd04bc',
        'name': 'ニルヴァーナ',
        'locale': 'ja',
        'type': 'Artist name',
        'primary': true,
        'begin-date': null,
        'end-date': null
      },
      {
        'sort-name': 'Nirvana US',
        'name': 'Nirvana US',
        'locale': null,
        'type': null,
        'primary': null,
        'begin-date': null,
        'end-date': null
      }
    ],
    'tags': [
      {
        'count': 13,
        'name': 'rock'
      },
      {
        'count': 6,
        'name': 'alternative rock'
      },
      {
        'count': 1,
        'name': '90s'
      },
      {
        'count': 2,
        'name': 'punk'
      },
      {
        'count': 6,
        'name': 'american'
      },
      {
        'count': 1,
        'name': 'experimental'
      },
      {
        'count': 2,
        'name': 'seattle'
      },
      {
        'count': 19,
        'name': 'grunge'
      },
      {
        'count': 0,
        'name': 'band'
      },
      {
        'count': 1,
        'name': 'usa'
      },
      {
        'count': 0,
        'name': 'alternative'
      },
      {
        'count': 0,
        'name': 'américain'
      },
      {
        'count': 0,
        'name': 'legendary'
      },
      {
        'count': 2,
        'name': 'acoustic rock'
      },
      {
        'count': 2,
        'name': 'noise rock'
      },
      {
        'count': 0,
        'name': '90'
      },
      {
        'count': 0,
        'name': 'northwest'
      },
      {
        'count': 0,
        'name': 'rock and indie'
      },
      {
        'count': 0,
        'name': 'united states'
      },
      {
        'count': 0,
        'name': 'nirvana'
      },
      {
        'count': 0,
        'name': 'kurt cobain'
      }
    ]
  }
];

export const getArtists = () => {
  return Promise.resolve({
    // totalPages: 25,
    artists
  });
};
