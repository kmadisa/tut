export class Person {
    person_id: number;
    first_name: string;
    last_name: string;
    birth_date: Date;
}

export class Employee extends Person {
    employee_id: number;
    person_id: number;
    employee_number: string;
    employed_date: Date;
    terminated_date: Date;
}
