import { USER_LIST } from './user.mocks';
import { Repository } from './../medels/repository.interface';

const repositoryList: Repository[] = [
    {
        name: 'Iomic 3 Camera',
        description: 'This is repository shows usages of the Camera functionality within Ionic3',
        owner: USER_LIST[0]
    },
    {
        name: 'Larla',
        description: 'This is repository shows usages of the Camera functionality within Ionic3',
        owner: USER_LIST[0]
    },
    {
        name: 'Hellow world',
        description: 'This is repository shows usages of the Camera functionality within Ionic3',
        owner: USER_LIST[1]
    },
    {
        name: 'A-yo App',
        description: 'This is repository shows usages of the Camera functionality within Ionic3',
        owner: USER_LIST[1]
    }
];


export const REPOSITORY_LIST = repositoryList;
