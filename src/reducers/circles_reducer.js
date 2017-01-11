import {Map, fromJS} from 'immutable';

import {
  EDIT_CIRCLE,
  ADD_CIRCLE,
  ADD_CIRCLES
} from '../constants/circle_constants';

import circle_reducer from './circle_reducer';

const default_state = fromJS({
  cixpewwlt002zypnytwum30rd: {
    'circle_name': 'dusty-techniques-89',
    'created_by': 'cixpewwlp000jypnyiz1xxr2c',
    'withdrawal_amount': 360,
    'contribution_amount': 45,
    'last_modified': '2017-01-09T01: 31: 15.161Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.088Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-02-15T01: 31: 15.088Z',
            '_id': 'cixpewwnt00chypnyop5ur6c1'
        },
        {
            'date': '2017-03-15T00: 31: 15.088Z',
            '_id': 'cixpewwnu00ciypnybo3q99bu'
        },
        {
            'date': '2017-04-15T00: 31: 15.088Z',
            '_id': 'cixpewwnu00cjypny4hz3lzi5'
        },
        {
            'date': '2017-05-15T00: 31: 15.088Z',
            '_id': 'cixpewwnu00ckypnyp4ilierq'
        },
        {
            'date': '2017-06-15T00: 31: 15.088Z',
            '_id': 'cixpewwnv00clypnyux4bdkly'
        },
        {
            'date': '2017-07-15T00: 31: 15.088Z',
            '_id': 'cixpewwnv00cmypny0d7reatx'
        },
        {
            'date': '2017-08-15T00: 31: 15.088Z',
            '_id': 'cixpewwnv00cnypnyerrppqmm'
        },
        {
            'date': '2017-09-15T00: 31: 15.088Z',
            '_id': 'cixpewwnv00coypnyxfbv0dxx'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwls002bypnyesn8fbex',
        'cixpewwls001zypny2maqkwmj',
        'cixpewwlp000jypnyiz1xxr2c',
        'cixpewwls0023ypnyqzp65agw'
    ],
    'start_date': '2017-02-15T01: 31: 15.088Z',
    'cycle_period': 'monthly',
    'participant_count': 8
  },
  'cixpewwlt003bypnyiu2k5y3q': {
    'circle_name': 'tender-inquiries-89',
    'created_by': 'cixpewwlo0007ypnykt54v7hj',
    'withdrawal_amount': 490,
    'contribution_amount': 40.833333333333336,
    'last_modified': '2017-01-09T01: 31: 15.166Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.089Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-04-13T01: 31: 15.089Z',
            '_id': 'cixpewwny00cpypnys0v6ioxy'
        },
        {
            'date': '2017-04-27T01: 31: 15.089Z',
            '_id': 'cixpewwnz00cqypnyxkrlgwh4'
        },
        {
            'date': '2017-05-11T01: 31: 15.089Z',
            '_id': 'cixpewwnz00crypnyw5hwd3vz'
        },
        {
            'date': '2017-05-25T01: 31: 15.089Z',
            '_id': 'cixpewwnz00csypnypnznokze'
        },
        {
            'date': '2017-06-08T01: 31: 15.089Z',
            '_id': 'cixpewwnz00ctypnyfuk1yi8d'
        },
        {
            'date': '2017-06-22T01: 31: 15.089Z',
            '_id': 'cixpewwo000cuypny0yq3hpyx'
        },
        {
            'date': '2017-07-06T01: 31: 15.089Z',
            '_id': 'cixpewwo000cvypny7rtb0al7'
        },
        {
            'date': '2017-07-20T01: 31: 15.089Z',
            '_id': 'cixpewwo000cwypnyi8fq98js'
        },
        {
            'date': '2017-08-03T01: 31: 15.089Z',
            '_id': 'cixpewwo000cxypnyogb3md47'
        },
        {
            'date': '2017-08-17T01: 31: 15.089Z',
            '_id': 'cixpewwo000cyypnyqqan0q19'
        },
        {
            'date': '2017-08-31T01: 31: 15.089Z',
            '_id': 'cixpewwo000czypny5itsebly'
        },
        {
            'date': '2017-09-14T01: 31: 15.089Z',
            '_id': 'cixpewwo000d0ypnyb94g68up'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwlo0009ypnymkj37c9i',
        'cixpewwlr001aypnyt8xso4cc',
        'cixpewwlp000dypny9pzmhtqd',
        'cixpewwlp000gypnyb8r4bjky',
        'cixpewwlq000typnyoshj9nb5',
        'cixpewwls002qypny3tuwlhoc',
        'cixpewwlp000mypnyucpn3hbl',
        'cixpewwlp000iypny41off1ba',
        'cixpewwlq000qypny894850jb',
        'cixpewwlo0007ypnykt54v7hj',
        'cixpewwlp000hypnyduigewq1'
    ],
    'start_date': '2017-04-13T01: 31: 15.089Z',
    'cycle_period': 'bi-weekly',
    'participant_count': 12
  },
  'cixpewwlt003gypnymfkum5wi': {
    'circle_name': 'victorious-letterhead-89',
    'created_by': 'cixpewwlq000xypnyob5rmiei',
    'withdrawal_amount': 460,
    'contribution_amount': 51.111111111111114,
    'last_modified': '2017-01-09T01: 31: 15.169Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.089Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-02-05T01: 31: 15.089Z',
            '_id': 'cixpewwo100d1ypnymp01nipc'
        },
        {
            'date': '2017-02-12T01: 31: 15.089Z',
            '_id': 'cixpewwo100d2ypnyk9wt1bfc'
        },
        {
            'date': '2017-02-19T01: 31: 15.089Z',
            '_id': 'cixpewwo200d3ypnycu2zs0mv'
        },
        {
            'date': '2017-02-26T01: 31: 15.089Z',
            '_id': 'cixpewwo200d4ypnysmsrmcf1'
        },
        {
            'date': '2017-03-05T01: 31: 15.089Z',
            '_id': 'cixpewwo200d5ypnylmbj7cpw'
        },
        {
            'date': '2017-03-12T01: 31: 15.089Z',
            '_id': 'cixpewwo200d6ypnyx3fo85u2'
        },
        {
            'date': '2017-03-19T01: 31: 15.089Z',
            '_id': 'cixpewwo200d7ypnyo04pa4yy'
        },
        {
            'date': '2017-03-26T01: 31: 15.089Z',
            '_id': 'cixpewwo200d8ypnyux8xod4h'
        },
        {
            'date': '2017-04-02T01: 31: 15.089Z',
            '_id': 'cixpewwo200d9ypnyij15o4o0'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwlr001uypnyqro6nidk',
        'cixpewwlp000nypnye3sh98yv',
        'cixpewwlq000xypnyob5rmiei',
        'cixpewwlo0007ypnykt54v7hj'
    ],
    'start_date': '2017-02-05T01: 31: 15.089Z',
    'cycle_period': 'weekly',
    'participant_count': 9
  },
  'cixpewwlt003kypny58i06578': {
    'circle_name': 'young-shotline-89',
    'created_by': 'cixpewwlr001vypnykvaq3ar4',
    'withdrawal_amount': 460,
    'contribution_amount': 41.81818181818182,
    'last_modified': '2017-01-09T01: 31: 15.171Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.089Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-04-15T01: 31: 15.089Z',
            '_id': 'cixpewwo300daypnya9zmfsti'
        },
        {
            'date': '2017-05-15T01: 31: 15.089Z',
            '_id': 'cixpewwo300dbypnyv5u2a91z'
        },
        {
            'date': '2017-06-15T01: 31: 15.089Z',
            '_id': 'cixpewwo300dcypnyiktfjgj7'
        },
        {
            'date': '2017-07-15T01: 31: 15.089Z',
            '_id': 'cixpewwo400ddypny4lndxw3q'
        },
        {
            'date': '2017-08-15T01: 31: 15.089Z',
            '_id': 'cixpewwo400deypny0olqhsz2'
        },
        {
            'date': '2017-09-15T01: 31: 15.089Z',
            '_id': 'cixpewwo400dfypny64ecnst5'
        },
        {
            'date': '2017-10-15T01: 31: 15.089Z',
            '_id': 'cixpewwo400dgypny176ne2ab'
        },
        {
            'date': '2017-11-15T02: 31: 15.089Z',
            '_id': 'cixpewwo400dhypnyzwl7yqav'
        },
        {
            'date': '2017-12-15T02: 31: 15.089Z',
            '_id': 'cixpewwo400diypnya6u3qf1v'
        },
        {
            'date': '2018-01-15T02: 31: 15.089Z',
            '_id': 'cixpewwo400djypnyb4g0s9s9'
        },
        {
            'date': '2018-02-15T02: 31: 15.089Z',
            '_id': 'cixpewwo400dkypnyogb55qqt'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwls001wypnyy56z5cnz',
        'cixpewwlo0008ypnyjjzqmy13',
        'cixpewwlr001vypnykvaq3ar4'
    ],
    'start_date': '2017-04-15T01: 31: 15.089Z',
    'cycle_period': 'monthly',
    'participant_count': 11
  },
  'cixpewwlt003vypnyl4k0jquf': {
    'circle_name': 'sad-safety-89',
    'created_by': 'cixpewwls002rypny3zol1oqb',
    'withdrawal_amount': 410,
    'contribution_amount': 34.166666666666664,
    'last_modified': '2017-01-09T01: 31: 15.175Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.089Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-02-12T01: 31: 15.089Z',
            '_id': 'cixpewwo700dlypnysmbhnq9t'
        },
        {
            'date': '2017-02-26T01: 31: 15.089Z',
            '_id': 'cixpewwo800dmypny1acxmkvg'
        },
        {
            'date': '2017-03-12T01: 31: 15.089Z',
            '_id': 'cixpewwo800dnypnys0ybhwz7'
        },
        {
            'date': '2017-03-26T01: 31: 15.089Z',
            '_id': 'cixpewwo800doypny5xkkftjy'
        },
        {
            'date': '2017-04-09T01: 31: 15.089Z',
            '_id': 'cixpewwo800dpypnyxq8lgcka'
        },
        {
            'date': '2017-04-23T01: 31: 15.089Z',
            '_id': 'cixpewwo800dqypnyz47lp862'
        },
        {
            'date': '2017-05-07T01: 31: 15.089Z',
            '_id': 'cixpewwo800drypny0rock7fv'
        },
        {
            'date': '2017-05-21T01: 31: 15.089Z',
            '_id': 'cixpewwo900dsypnyd9gbnrcx'
        },
        {
            'date': '2017-06-04T01: 31: 15.089Z',
            '_id': 'cixpewwo900dtypny73alfhql'
        },
        {
            'date': '2017-06-18T01: 31: 15.089Z',
            '_id': 'cixpewwo900duypnyjbdiu89s'
        },
        {
            'date': '2017-07-02T01: 31: 15.089Z',
            '_id': 'cixpewwo900dvypnyznup8vn4'
        },
        {
            'date': '2017-07-16T01: 31: 15.089Z',
            '_id': 'cixpewwo900dwypnyqxb0zoey'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwls0020ypnyctq04wah',
        'cixpewwls0029ypnyhiksrwnl',
        'cixpewwls002qypny3tuwlhoc',
        'cixpewwlr0017ypnyyaap77en',
        'cixpewwlp000oypnywxqgse7u',
        'cixpewwlp000kypnynuk0qg46',
        'cixpewwlo0006ypny715zlxi4',
        'cixpewwls002rypny3zol1oqb',
        'cixpewwlr001mypnyhz94ooiv',
        'cixpewwls001zypny2maqkwmj'
    ],
    'start_date': '2017-02-12T01: 31: 15.089Z',
    'cycle_period': 'bi-weekly',
    'participant_count': 12
  },
  'cixpewwlt0044ypnyhenuwoun': {
    'circle_name': 'ltd-retirement-89',
    'created_by': 'cixpewwlo0006ypny715zlxi4',
    'withdrawal_amount': 360,
    'contribution_amount': 30,
    'last_modified': '2017-01-09T01: 31: 15.179Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.089Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-02-19T01: 31: 15.089Z',
            '_id': 'cixpewwob00dxypny6rbss92g'
        },
        {
            'date': '2017-02-26T01: 31: 15.089Z',
            '_id': 'cixpewwob00dyypnykazva17e'
        },
        {
            'date': '2017-03-05T01: 31: 15.089Z',
            '_id': 'cixpewwoc00dzypny4mkk5iz9'
        },
        {
            'date': '2017-03-12T01: 31: 15.089Z',
            '_id': 'cixpewwoc00e0ypnyiewxsj4j'
        },
        {
            'date': '2017-03-19T01: 31: 15.089Z',
            '_id': 'cixpewwoc00e1ypnyn03n2nho'
        },
        {
            'date': '2017-03-26T01: 31: 15.089Z',
            '_id': 'cixpewwoc00e2ypnyo8uv441s'
        },
        {
            'date': '2017-04-02T01: 31: 15.089Z',
            '_id': 'cixpewwoc00e3ypnyfudyfd2i'
        },
        {
            'date': '2017-04-09T01: 31: 15.089Z',
            '_id': 'cixpewwod00e4ypnyyvsojp5j'
        },
        {
            'date': '2017-04-16T01: 31: 15.089Z',
            '_id': 'cixpewwod00e5ypnyb9905eij'
        },
        {
            'date': '2017-04-23T01: 31: 15.089Z',
            '_id': 'cixpewwod00e6ypnywgy5q8x3'
        },
        {
            'date': '2017-04-30T01: 31: 15.089Z',
            '_id': 'cixpewwod00e7ypny5qq6wjmc'
        },
        {
            'date': '2017-05-07T01: 31: 15.089Z',
            '_id': 'cixpewwoe00e8ypny4fjny9ks'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwls0021ypnyeo6x21ci',
        'cixpewwlq0015ypny8ur2gpse',
        'cixpewwlp000oypnywxqgse7u',
        'cixpewwls002dypnycrnv3ore',
        'cixpewwlo0006ypny715zlxi4',
        'cixpewwlq000qypny894850jb',
        'cixpewwls002typnyicofrc2p',
        'cixpewwlr001eypnyckl9vcbr'
    ],
    'start_date': '2017-02-19T01: 31: 15.089Z',
    'cycle_period': 'weekly',
    'participant_count': 12
  },
  'cixpewwlt004aypnyh9zgwxzy': {
    'circle_name': 'able-encounter-89',
    'created_by': 'cixpewwlr001iypnywf72986v',
    'withdrawal_amount': 250,
    'contribution_amount': 31.25,
    'last_modified': '2017-01-09T01: 31: 15.182Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.089Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-03-23T01: 31: 15.089Z',
            '_id': 'cixpewwoe00e9ypnyyvmi9s25'
        },
        {
            'date': '2017-04-23T01: 31: 15.089Z',
            '_id': 'cixpewwof00eaypnyz0jfo82t'
        },
        {
            'date': '2017-05-23T01: 31: 15.089Z',
            '_id': 'cixpewwof00ebypnyy6mqkhlo'
        },
        {
            'date': '2017-06-23T01: 31: 15.089Z',
            '_id': 'cixpewwof00ecypny23ixj7wa'
        },
        {
            'date': '2017-07-23T01: 31: 15.089Z',
            '_id': 'cixpewwof00edypnyyiwehbu3'
        },
        {
            'date': '2017-08-23T01: 31: 15.089Z',
            '_id': 'cixpewwof00eeypnytioj94ks'
        },
        {
            'date': '2017-09-23T01: 31: 15.089Z',
            '_id': 'cixpewwof00efypny64p2d3lx'
        },
        {
            'date': '2017-10-23T01: 31: 15.089Z',
            '_id': 'cixpewwog00egypnyfl8q1ejc'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwlo000cypnyaopxzt1j',
        'cixpewwls002oypny35pbgwts',
        'cixpewwls002sypny71trtnf7',
        'cixpewwlp000kypnynuk0qg46',
        'cixpewwlr001iypnywf72986v'
    ],
    'start_date': '2017-03-23T01: 31: 15.089Z',
    'cycle_period': 'monthly',
    'participant_count': 8
  },
  'cixpewwlt004fypny6njc0z0x': {
    'circle_name': 'bloody-outline-89',
    'created_by': 'cixpewwlq000xypnyob5rmiei',
    'withdrawal_amount': 410,
    'contribution_amount': 41,
    'last_modified': '2017-01-09T01: 31: 15.184Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.089Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-03-19T01: 31: 15.089Z',
            '_id': 'cixpewwog00ehypnyeq81rvtc'
        },
        {
            'date': '2017-04-19T01: 31: 15.089Z',
            '_id': 'cixpewwog00eiypnylfrwr8bk'
        },
        {
            'date': '2017-05-19T01: 31: 15.089Z',
            '_id': 'cixpewwog00ejypnycxkiqg7d'
        },
        {
            'date': '2017-06-19T01: 31: 15.089Z',
            '_id': 'cixpewwoh00ekypnyxes4jkbq'
        },
        {
            'date': '2017-07-19T01: 31: 15.089Z',
            '_id': 'cixpewwoh00elypnyk5pdbo54'
        },
        {
            'date': '2017-08-19T01: 31: 15.089Z',
            '_id': 'cixpewwoh00emypny736hyei6'
        },
        {
            'date': '2017-09-19T01: 31: 15.089Z',
            '_id': 'cixpewwoh00enypny8t5zdvpz'
        },
        {
            'date': '2017-10-19T01: 31: 15.089Z',
            '_id': 'cixpewwoi00eoypnyw5ubtz90'
        },
        {
            'date': '2017-11-19T02: 31: 15.089Z',
            '_id': 'cixpewwoi00epypny5jjxmklw'
        },
        {
            'date': '2017-12-19T02: 31: 15.089Z',
            '_id': 'cixpewwoi00eqypnysm9maaye'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwlo0004ypny1uz5oyhh',
        'cixpewwlq000xypnyob5rmiei',
        'cixpewwlr001iypnywf72986v',
        'cixpewwlo0006ypny715zlxi4'
    ],
    'start_date': '2017-03-19T01: 31: 15.089Z',
    'cycle_period': 'monthly',
    'participant_count': 10
  },
  'cixpewwlt004nypnyxii4lyfz': {
    'circle_name': 'apparent-forts-89',
    'created_by': 'cixpewwls002hypnyn2z1rrk7',
    'withdrawal_amount': 360,
    'contribution_amount': 36,
    'last_modified': '2017-01-09T01: 31: 15.187Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.089Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-01-12T01: 31: 15.089Z',
            '_id': 'cixpewwoj00erypnyi45bqkll'
        },
        {
            'date': '2017-01-26T01: 31: 15.089Z',
            '_id': 'cixpewwoj00esypnya8hyj7yq'
        },
        {
            'date': '2017-02-09T01: 31: 15.089Z',
            '_id': 'cixpewwoj00etypnyo6f2dwsi'
        },
        {
            'date': '2017-02-23T01: 31: 15.089Z',
            '_id': 'cixpewwoj00euypnykyz2a2w6'
        },
        {
            'date': '2017-03-09T01: 31: 15.089Z',
            '_id': 'cixpewwok00evypnyv4lwiv61'
        },
        {
            'date': '2017-03-23T01: 31: 15.089Z',
            '_id': 'cixpewwok00ewypnyz2hxum2e'
        },
        {
            'date': '2017-04-06T01: 31: 15.089Z',
            '_id': 'cixpewwok00exypnycs6mw0kr'
        },
        {
            'date': '2017-04-20T01: 31: 15.089Z',
            '_id': 'cixpewwok00eyypnyhz6e1sqh'
        },
        {
            'date': '2017-05-04T01: 31: 15.089Z',
            '_id': 'cixpewwok00ezypnydhvogseg'
        },
        {
            'date': '2017-05-18T01: 31: 15.089Z',
            '_id': 'cixpewwok00f0ypnyjohwdu81'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwls002hypnyn2z1rrk7',
        'cixpewwls002qypny3tuwlhoc',
        'cixpewwlr0016ypnyf6tfkluz',
        'cixpewwlp000hypnyduigewq1',
        'cixpewwlr001hypnywtcf7jqy',
        'cixpewwlp000oypnywxqgse7u',
        'cixpewwlr001typnyeic8ag41'
    ],
    'start_date': '2017-01-12T01: 31: 15.089Z',
    'cycle_period': 'bi-weekly',
    'participant_count': 10
  },
  'cixpewwlt004yypnyegte6syj': {
    'circle_name': 'stable-replacements-89',
    'created_by': 'cixpewwls0023ypnyqzp65agw',
    'withdrawal_amount': 480,
    'contribution_amount': 40,
    'last_modified': '2017-01-09T01: 31: 15.197Z',
    '__v': 0,
    'created': '2017-01-09T01: 31: 15.089Z',
    'savings_goals': [],
    'payout_events': [
        {
            'date': '2017-04-18T01: 31: 15.089Z',
            '_id': 'cixpewwot00f1ypnyfm8srn1l'
        },
        {
            'date': '2017-04-25T01: 31: 15.089Z',
            '_id': 'cixpewwot00f2ypnyejompqr6'
        },
        {
            'date': '2017-05-02T01: 31: 15.089Z',
            '_id': 'cixpewwot00f3ypnykf0nivg4'
        },
        {
            'date': '2017-05-09T01: 31: 15.089Z',
            '_id': 'cixpewwot00f4ypnysf9langz'
        },
        {
            'date': '2017-05-16T01: 31: 15.089Z',
            '_id': 'cixpewwou00f5ypnycw5ab91u'
        },
        {
            'date': '2017-05-23T01: 31: 15.089Z',
            '_id': 'cixpewwou00f6ypnyezukdll2'
        },
        {
            'date': '2017-05-30T01: 31: 15.089Z',
            '_id': 'cixpewwou00f7ypny0gx6xyc9'
        },
        {
            'date': '2017-06-06T01: 31: 15.089Z',
            '_id': 'cixpewwou00f8ypnyfgmn2nrl'
        },
        {
            'date': '2017-06-13T01: 31: 15.089Z',
            '_id': 'cixpewwou00f9ypnywil253vk'
        },
        {
            'date': '2017-06-20T01: 31: 15.089Z',
            '_id': 'cixpewwou00faypnyq720scv3'
        },
        {
            'date': '2017-06-27T01: 31: 15.089Z',
            '_id': 'cixpewwou00fbypnyzr2v1v5m'
        },
        {
            'date': '2017-07-04T01: 31: 15.089Z',
            '_id': 'cixpewwou00fcypny8bebvkop'
        }
    ],
    'activity': [],
    'is_public': true,
    'members': [
        'cixpewwlq0012ypnyy6xbayqn',
        'cixpewwlr001sypnyt85buq0l',
        'cixpewwlo0009ypnymkj37c9i',
        'cixpewwlq000typnyoshj9nb5',
        'cixpewwlo0008ypnyjjzqmy13',
        'cixpewwls0023ypnyqzp65agw',
        'cixpewwlp000nypnye3sh98yv',
        'cixpewwlq000wypnytqewjovy',
        'cixpewwlp000eypnysvvlgp7z',
        'cixpewwlo0002ypnyutuw0ka4'
    ],
    'start_date': '2017-04-18T01: 31: 15.089Z',
    'cycle_period': 'weekly',
    'participant_count': 12
  }
});

export default (state = default_state, action) => {
  switch (action.type) {
    case EDIT_CIRCLE:
      return action.circle_id && state.get(action.circle_id) ?
        state.update(action.circle_id, c => circle_reducer(c, action)) :
        state;
    case ADD_CIRCLE:
      return action.circle_data && action.circle_data.id ?
        state.set(action.circle_data.id, fromJS(action.circle_data).delete('id')) :
        state;
    case ADD_CIRCLES:
      return action.circle_list.reduce((new_state, circle) => new_state.set(circle.id, fromJS(circle).delete('id')), state);
    default:
      return state;
  }
};
