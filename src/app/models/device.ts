import { Status } from './status';

export interface Device {
    id: string;
    name: string;
    status: Status;
}
