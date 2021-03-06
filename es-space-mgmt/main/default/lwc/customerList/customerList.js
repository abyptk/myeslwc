import { LightningElement } from 'lwc';

export default class CustomerList extends LightningElement {
    
    customers = [
        {
            "name": "Test 1",
            "email": "test1@example.com",
            "city": "NY",
            "state": "NY",
            "status": "Open",
            "Id": "0000000"
        },
        {
            "name": "Test 2",
            "email": "test2@example.com",
            "city": "NY",
            "state": "NY",
            "status": "Open",
            "Id": "0000001"
        },
        {
            "name": "Test 3",
            "email": "test3@example.com",
            "city": "NY",
            "state": "NY",
            "status": "Open",
            "Id": "0000002"
        }
    ];

}