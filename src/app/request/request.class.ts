export class Request {


    id: number= 0;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string;
    status: string = "NEW";
    total: number = 0;
    userId: number;
    

    constructor(){}
}