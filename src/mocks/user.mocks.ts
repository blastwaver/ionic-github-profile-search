import { User } from '../medels/user.interface';

const userList: User[] = [
    {
        name:'Kyeongho',
        company: 'PWH',
        location: 'Duraham, UK',
        bio:'I make vifeo',
        avatar_url: 'http://i.imgur.com/TzWcihb.png',
        email: 'blastwaver@naver.com'
    },
    {
        name:'JonhDoe  na',
        company: 'Doe and Co,',
        location: 'Seoul, KOR',
        bio:'I make MMMM',
        avatar_url: 'http://i.imgur.com/TzWcihb.png',
        email: 'JonhDoe@naver.com'
    }
   
];

export const USER_LIST = userList;