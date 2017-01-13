import {Map, fromJS} from 'immutable';

import {
  EDIT_CIRCLE,
  ADD_CIRCLE,
  ADD_CIRCLES
} from '../constants/circle_constants';

import circle_reducer from './circle_reducer';

const default_state = fromJS({
  "cixv2izc800306ynyrs25y5j7": {
    "id": "cixv2izc800306ynyrs25y5j7",
    "last_modified": "2017-01-13T00:31:07.176Z",
    "circle_name": "male-accounts-112",
    "created_by": "cixv2izc7001r6ynyzoyup48g",
    "withdrawal_amount": 280,
    "contribution_amount": 35,
    "__v": 0,
    "created": "2017-01-13T00:31:07.121Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-03-13T00:31:07.112Z",
        "_id": "cixv2ize000c56yny7585v3aq"
      },
      {
        "date": "2017-03-27T00:31:07.112Z",
        "_id": "cixv2ize200c66ynyoqzzsk5l"
      },
      {
        "date": "2017-04-10T00:31:07.112Z",
        "_id": "cixv2ize200c76ynyrl2dehtb"
      },
      {
        "date": "2017-04-24T00:31:07.112Z",
        "_id": "cixv2ize200c86yny92w2xzd1"
      },
      {
        "date": "2017-05-08T00:31:07.112Z",
        "_id": "cixv2ize200c96ynybmul3m5h"
      },
      {
        "date": "2017-05-22T00:31:07.112Z",
        "_id": "cixv2ize200ca6yny7webv13v"
      },
      {
        "date": "2017-06-05T00:31:07.112Z",
        "_id": "cixv2ize200cb6ynyla1bdvg3"
      },
      {
        "date": "2017-06-19T00:31:07.112Z",
        "_id": "cixv2ize300cc6yny0ss9aru1"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc7001r6ynyzoyup48g",
      "cixv2izc700236yny8kltx0zg",
      "cixv2izc4000c6ynyfgvhrpur",
      "cixv2izc7001i6yny3497zkmx",
      "cixv2izc7002l6yny327dr4ue"
    ],
    "start_date": "2017-03-13T00:31:07.112Z",
    "cycle_period": "bi-weekly",
    "participant_count": 8
  },
  "cixv2izc800366yny9nc7y0p0": {
    "id": "cixv2izc800366yny9nc7y0p0",
    "last_modified": "2017-01-13T00:31:07.182Z",
    "circle_name": "concerned-tacks-112",
    "created_by": "cixv2izc400096ynyuwp8jhbh",
    "withdrawal_amount": 370,
    "contribution_amount": 46.25,
    "__v": 0,
    "created": "2017-01-13T00:31:07.126Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-04-16T00:31:07.112Z",
        "_id": "cixv2ize600cd6yny4c3x8txw"
      },
      {
        "date": "2017-05-16T00:31:07.112Z",
        "_id": "cixv2ize700ce6ynyqqihsusu"
      },
      {
        "date": "2017-06-16T00:31:07.112Z",
        "_id": "cixv2ize700cf6yny4uchmhlh"
      },
      {
        "date": "2017-07-16T00:31:07.112Z",
        "_id": "cixv2ize700cg6ynyuhoyenef"
      },
      {
        "date": "2017-08-16T00:31:07.112Z",
        "_id": "cixv2ize700ch6yny37oyzb52"
      },
      {
        "date": "2017-09-16T00:31:07.112Z",
        "_id": "cixv2ize800ci6ynysnjxdfi3"
      },
      {
        "date": "2017-10-16T00:31:07.112Z",
        "_id": "cixv2ize800cj6ynyrkh611yv"
      },
      {
        "date": "2017-11-16T01:31:07.112Z",
        "_id": "cixv2ize800ck6ynyf7osdsjf"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc7001l6ynymx0dwzvw",
      "cixv2izc600156ynyncn9a80n",
      "cixv2izc7001r6ynyzoyup48g",
      "cixv2izc400096ynyuwp8jhbh",
      "cixv2izc400036ynykdy4nu0s"
    ],
    "start_date": "2017-04-16T00:31:07.112Z",
    "cycle_period": "monthly",
    "participant_count": 8
  },
  "cixv2izc8003b6ynym01i1mip": {
    "id": "cixv2izc8003b6ynym01i1mip",
    "last_modified": "2017-01-13T00:31:07.185Z",
    "circle_name": "nervous-self-113",
    "created_by": "cixv2izc5000q6ynyj7j35r5p",
    "withdrawal_amount": 250,
    "contribution_amount": 25,
    "__v": 0,
    "created": "2017-01-13T00:31:07.127Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-04-12T00:31:07.112Z",
        "_id": "cixv2ize900cl6yny78itv26z"
      },
      {
        "date": "2017-04-19T00:31:07.112Z",
        "_id": "cixv2ize900cm6ynyoo5w7xq4"
      },
      {
        "date": "2017-04-26T00:31:07.112Z",
        "_id": "cixv2ize900cn6yny2plpm8ij"
      },
      {
        "date": "2017-05-03T00:31:07.112Z",
        "_id": "cixv2izea00co6ynypjb3c955"
      },
      {
        "date": "2017-05-10T00:31:07.112Z",
        "_id": "cixv2izea00cp6ynyxwwx7i6p"
      },
      {
        "date": "2017-05-17T00:31:07.112Z",
        "_id": "cixv2izea00cq6ynyjvz9i9qb"
      },
      {
        "date": "2017-05-24T00:31:07.112Z",
        "_id": "cixv2izea00cr6ynys7gg42q8"
      },
      {
        "date": "2017-05-31T00:31:07.112Z",
        "_id": "cixv2izea00cs6yny6yjsizxl"
      },
      {
        "date": "2017-06-07T00:31:07.112Z",
        "_id": "cixv2izea00ct6ynyghg7060v"
      },
      {
        "date": "2017-06-14T00:31:07.112Z",
        "_id": "cixv2izea00cu6ynyl7t41ohc"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc6001a6ynyft5zpawo",
      "cixv2izc7001x6ynym5kai8mr",
      "cixv2izc400036ynykdy4nu0s",
      "cixv2izc5000q6ynyj7j35r5p"
    ],
    "start_date": "2017-04-12T00:31:07.112Z",
    "cycle_period": "weekly",
    "participant_count": 10
  },
  "cixv2izc9003i6yny4vtz3jgp": {
    "id": "cixv2izc9003i6yny4vtz3jgp",
    "last_modified": "2017-01-13T00:31:07.187Z",
    "circle_name": "delicious-registers-113",
    "created_by": "cixv2izc400076yny5cqrx3sq",
    "withdrawal_amount": 300,
    "contribution_amount": 27.272727272727273,
    "__v": 0,
    "created": "2017-01-13T00:31:07.127Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-03-05T00:31:07.113Z",
        "_id": "cixv2izec00cv6ynyrxmh6i2v"
      },
      {
        "date": "2017-03-12T00:31:07.113Z",
        "_id": "cixv2izec00cw6yny1z6s6p2r"
      },
      {
        "date": "2017-03-19T00:31:07.113Z",
        "_id": "cixv2izec00cx6ynyu1y6ivu6"
      },
      {
        "date": "2017-03-26T00:31:07.113Z",
        "_id": "cixv2izec00cy6ynyur53fzkp"
      },
      {
        "date": "2017-04-02T00:31:07.113Z",
        "_id": "cixv2izec00cz6ynyz1a2unb1"
      },
      {
        "date": "2017-04-09T00:31:07.113Z",
        "_id": "cixv2izec00d06yny1qeaz1f5"
      },
      {
        "date": "2017-04-16T00:31:07.113Z",
        "_id": "cixv2izec00d16ynyklnjt7xa"
      },
      {
        "date": "2017-04-23T00:31:07.113Z",
        "_id": "cixv2izec00d26yny0k7w5lex"
      },
      {
        "date": "2017-04-30T00:31:07.113Z",
        "_id": "cixv2ized00d36ynypx5wkqdh"
      },
      {
        "date": "2017-05-07T00:31:07.113Z",
        "_id": "cixv2ized00d46ynyutxpr0kx"
      },
      {
        "date": "2017-05-14T00:31:07.113Z",
        "_id": "cixv2ized00d56ynytemw9v0m"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc7002a6ynyuf98l1rk",
      "cixv2izc400076yny5cqrx3sq",
      "cixv2izc7002k6yny8ixrl9rh",
      "cixv2izc7002b6ynydg9abqjh",
      "cixv2izc4000g6ynytzl4jobs",
      "cixv2izc6001g6ynyjom3e18d"
    ],
    "start_date": "2017-03-05T00:31:07.113Z",
    "cycle_period": "weekly",
    "participant_count": 11
  },
  "cixv2izc9003q6ynygwy7fz11": {
    "id": "cixv2izc9003q6ynygwy7fz11",
    "last_modified": "2017-01-13T00:31:07.193Z",
    "circle_name": "scattered-typist-113",
    "created_by": "cixv2izc7001q6ynyjjhq6x9p",
    "withdrawal_amount": 460,
    "contribution_amount": 51.111111111111114,
    "__v": 0,
    "created": "2017-01-13T00:31:07.128Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-02-23T00:31:07.113Z",
        "_id": "cixv2izeh00d66ynyjabuxn12"
      },
      {
        "date": "2017-03-02T00:31:07.113Z",
        "_id": "cixv2izeh00d76ynyujapgppp"
      },
      {
        "date": "2017-03-09T00:31:07.113Z",
        "_id": "cixv2izeh00d86ynyjaeyzmkp"
      },
      {
        "date": "2017-03-16T00:31:07.113Z",
        "_id": "cixv2izei00d96ynyqqxtrdo3"
      },
      {
        "date": "2017-03-23T00:31:07.113Z",
        "_id": "cixv2izei00da6ynyiinjbr5s"
      },
      {
        "date": "2017-03-30T00:31:07.113Z",
        "_id": "cixv2izei00db6ynys0n9ic3z"
      },
      {
        "date": "2017-04-06T00:31:07.113Z",
        "_id": "cixv2izei00dc6ynyagvwju0y"
      },
      {
        "date": "2017-04-13T00:31:07.113Z",
        "_id": "cixv2izei00dd6ynykgxv0goh"
      },
      {
        "date": "2017-04-20T00:31:07.113Z",
        "_id": "cixv2izej00de6ynyuauhb0ho"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc7002g6ynybxsrqos9",
      "cixv2izc6001c6yny1ybdzyup",
      "cixv2izc700246ynyksv444mo",
      "cixv2izc7001q6ynyjjhq6x9p",
      "cixv2izc7001j6ynyrldzelte",
      "cixv2izc700256ynyw2odev7p",
      "cixv2izc6001f6ynydtd88y67"
    ],
    "start_date": "2017-02-23T00:31:07.113Z",
    "cycle_period": "weekly",
    "participant_count": 9
  },
  "cixv2izc9003v6ynyxj58s3ri": {
    "id": "cixv2izc9003v6ynyxj58s3ri",
    "last_modified": "2017-01-13T00:31:07.195Z",
    "circle_name": "wrong-brooms-113",
    "created_by": "cixv2izc700266ynyaa2b62h1",
    "withdrawal_amount": 500,
    "contribution_amount": 50,
    "__v": 0,
    "created": "2017-01-13T00:31:07.128Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-04-06T00:31:07.113Z",
        "_id": "cixv2izej00df6ynyo58th1xt"
      },
      {
        "date": "2017-04-13T00:31:07.113Z",
        "_id": "cixv2izek00dg6yny9sgmlyzb"
      },
      {
        "date": "2017-04-20T00:31:07.113Z",
        "_id": "cixv2izek00dh6ynyyordqd6q"
      },
      {
        "date": "2017-04-27T00:31:07.113Z",
        "_id": "cixv2izek00di6ynyogxuscus"
      },
      {
        "date": "2017-05-04T00:31:07.113Z",
        "_id": "cixv2izek00dj6ynykgxfr0n2"
      },
      {
        "date": "2017-05-11T00:31:07.113Z",
        "_id": "cixv2izek00dk6ynybgk72lp8"
      },
      {
        "date": "2017-05-18T00:31:07.113Z",
        "_id": "cixv2izek00dl6ynygevjgkvo"
      },
      {
        "date": "2017-05-25T00:31:07.113Z",
        "_id": "cixv2izek00dm6ynyxnmcwdiw"
      },
      {
        "date": "2017-06-01T00:31:07.113Z",
        "_id": "cixv2izek00dn6yny49h4eqc2"
      },
      {
        "date": "2017-06-08T00:31:07.113Z",
        "_id": "cixv2izek00do6ynyvxtst2wz"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc400086ynyj1nlqwva",
      "cixv2izc7002r6ynyamrz2ox5",
      "cixv2izc700266ynyaa2b62h1",
      "cixv2izc7002b6ynydg9abqjh"
    ],
    "start_date": "2017-04-06T00:31:07.113Z",
    "cycle_period": "weekly",
    "participant_count": 10
  },
  "cixv2izc9003x6ynyefbof4sz": {
    "id": "cixv2izc9003x6ynyefbof4sz",
    "last_modified": "2017-01-13T00:31:07.197Z",
    "circle_name": "dusty-tolerance-113",
    "created_by": "cixv2izc7002l6yny327dr4ue",
    "withdrawal_amount": 320,
    "contribution_amount": 32,
    "__v": 0,
    "created": "2017-01-13T00:31:07.130Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-03-25T00:31:07.113Z",
        "_id": "cixv2izel00dp6ynyam64cp5i"
      },
      {
        "date": "2017-04-25T00:31:07.113Z",
        "_id": "cixv2izel00dq6ynyl39o50xi"
      },
      {
        "date": "2017-05-25T00:31:07.113Z",
        "_id": "cixv2izel00dr6yny6g3j9pls"
      },
      {
        "date": "2017-06-25T00:31:07.113Z",
        "_id": "cixv2izel00ds6ynypu3hmpol"
      },
      {
        "date": "2017-07-25T00:31:07.113Z",
        "_id": "cixv2izel00dt6yny48xlbhdg"
      },
      {
        "date": "2017-08-25T00:31:07.113Z",
        "_id": "cixv2izel00du6yny4oua1uja"
      },
      {
        "date": "2017-09-25T00:31:07.113Z",
        "_id": "cixv2izem00dv6ynyek9a1gyl"
      },
      {
        "date": "2017-10-25T00:31:07.113Z",
        "_id": "cixv2izem00dw6yny7k81epcd"
      },
      {
        "date": "2017-11-25T01:31:07.113Z",
        "_id": "cixv2izem00dx6ynyrgcw182m"
      },
      {
        "date": "2017-12-25T01:31:07.113Z",
        "_id": "cixv2izem00dy6yny9mmyk2a7"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc7002l6yny327dr4ue"
    ],
    "start_date": "2017-03-25T00:31:07.113Z",
    "cycle_period": "monthly",
    "participant_count": 10
  },
  "cixv2izc900486yny1klzawyg": {
    "id": "cixv2izc900486yny1klzawyg",
    "last_modified": "2017-01-13T00:31:07.200Z",
    "circle_name": "proposed-operators-113",
    "created_by": "cixv2izc7002l6yny327dr4ue",
    "withdrawal_amount": 480,
    "contribution_amount": 48,
    "__v": 0,
    "created": "2017-01-13T00:31:07.131Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-03-14T00:31:07.113Z",
        "_id": "cixv2izeo00dz6yny8yx3bm6x"
      },
      {
        "date": "2017-03-28T00:31:07.113Z",
        "_id": "cixv2izep00e06ynyk3iacwcy"
      },
      {
        "date": "2017-04-11T00:31:07.113Z",
        "_id": "cixv2izep00e16ynyj9guwbew"
      },
      {
        "date": "2017-04-25T00:31:07.113Z",
        "_id": "cixv2izep00e26ynymacf2zt1"
      },
      {
        "date": "2017-05-09T00:31:07.113Z",
        "_id": "cixv2izep00e36ynyu9fh8uhg"
      },
      {
        "date": "2017-05-23T00:31:07.113Z",
        "_id": "cixv2izep00e46ynyc5ss60y4"
      },
      {
        "date": "2017-06-06T00:31:07.113Z",
        "_id": "cixv2izep00e56ynyd73vk869"
      },
      {
        "date": "2017-06-20T00:31:07.113Z",
        "_id": "cixv2izep00e66yny0pwb9tev"
      },
      {
        "date": "2017-07-04T00:31:07.113Z",
        "_id": "cixv2izep00e76ynyq9cymcx9"
      },
      {
        "date": "2017-07-18T00:31:07.113Z",
        "_id": "cixv2izep00e86ynyzh0m3tql"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc7001i6yny3497zkmx",
      "cixv2izc700236yny8kltx0zg",
      "cixv2izc600176ynytmd3yhnk",
      "cixv2izc7002l6yny327dr4ue",
      "cixv2izc400086ynyj1nlqwva",
      "cixv2izc5000s6yny7dtesl4s",
      "cixv2izc4000h6ynyeolx6zmo",
      "cixv2izc700266ynyaa2b62h1",
      "cixv2izc7002h6yny0qc6gsv0",
      "cixv2izc6001a6ynyft5zpawo"
    ],
    "start_date": "2017-03-14T00:31:07.113Z",
    "cycle_period": "bi-weekly",
    "participant_count": 10
  },
  "cixv2izc9004c6ynymcpnej3s": {
    "id": "cixv2izc9004c6ynymcpnej3s",
    "last_modified": "2017-01-13T00:31:07.203Z",
    "circle_name": "active-injector-113",
    "created_by": "cixv2izc7002j6yny25527wf7",
    "withdrawal_amount": 390,
    "contribution_amount": 48.75,
    "__v": 0,
    "created": "2017-01-13T00:31:07.132Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-04-20T00:31:07.113Z",
        "_id": "cixv2izer00e96ynyvkz46mn3"
      },
      {
        "date": "2017-05-04T00:31:07.113Z",
        "_id": "cixv2izer00ea6ynykk044pm5"
      },
      {
        "date": "2017-05-18T00:31:07.113Z",
        "_id": "cixv2izer00eb6yny6fhnb9ex"
      },
      {
        "date": "2017-06-01T00:31:07.113Z",
        "_id": "cixv2izer00ec6ynyv0et2awn"
      },
      {
        "date": "2017-06-15T00:31:07.113Z",
        "_id": "cixv2izes00ed6ynyjgaphhtw"
      },
      {
        "date": "2017-06-29T00:31:07.113Z",
        "_id": "cixv2izes00ee6ynygawpbewh"
      },
      {
        "date": "2017-07-13T00:31:07.113Z",
        "_id": "cixv2izes00ef6ynybhyl94bm"
      },
      {
        "date": "2017-07-27T00:31:07.113Z",
        "_id": "cixv2izes00eg6ynyvcij4klb"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc7002j6yny25527wf7",
      "cixv2izc7002o6ynyi29mybha",
      "cixv2izc7001i6yny3497zkmx"
    ],
    "start_date": "2017-04-20T00:31:07.113Z",
    "cycle_period": "bi-weekly",
    "participant_count": 8
  },
  "cixv2izc9004i6ynyfj3x50uy": {
    "id": "cixv2izc9004i6ynyfj3x50uy",
    "last_modified": "2017-01-13T00:31:07.205Z",
    "circle_name": "fine-performance-113",
    "created_by": "cixv2izc7001r6ynyzoyup48g",
    "withdrawal_amount": 330,
    "contribution_amount": 41.25,
    "__v": 0,
    "created": "2017-01-13T00:31:07.133Z",
    "savings_goals": [],
    "payout_events": [
      {
        "date": "2017-03-07T00:31:07.113Z",
        "_id": "cixv2izet00eh6ynyr621nsxm"
      },
      {
        "date": "2017-03-14T00:31:07.113Z",
        "_id": "cixv2izeu00ei6yny9z2yc5g3"
      },
      {
        "date": "2017-03-21T00:31:07.113Z",
        "_id": "cixv2izeu00ej6ynyj26n55od"
      },
      {
        "date": "2017-03-28T00:31:07.113Z",
        "_id": "cixv2izeu00ek6ynyyq3dzcru"
      },
      {
        "date": "2017-04-04T00:31:07.113Z",
        "_id": "cixv2izeu00el6ynyyrxvcqrk"
      },
      {
        "date": "2017-04-11T00:31:07.113Z",
        "_id": "cixv2izeu00em6ynyru67s7ae"
      },
      {
        "date": "2017-04-18T00:31:07.113Z",
        "_id": "cixv2izeu00en6ynyuv74aub4"
      },
      {
        "date": "2017-04-25T00:31:07.113Z",
        "_id": "cixv2izeu00eo6ynysa0duex3"
      }
    ],
    "activity": [],
    "is_public": true,
    "members": [
      "cixv2izc7002c6ynyzm7znzv9",
      "cixv2izc7002f6ynyvtucvbh1",
      "cixv2izc7001l6ynymx0dwzvw",
      "cixv2izc5000k6ynyf6e0jgnu",
      "cixv2izc7001r6ynyzoyup48g"
    ],
    "start_date": "2017-03-07T00:31:07.113Z",
    "cycle_period": "weekly",
    "participant_count": 8
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
