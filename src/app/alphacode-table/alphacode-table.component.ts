import { Component, Injectable } from '@angular/core';


@Component({
  selector: 'app-alphacode-table',
  templateUrl: './alphacode-table.component.html',
  styleUrl: './alphacode-table.component.css'
})




export class AlphacodeTableComponent {
  deleteUser(tableUser: User) {
    console.log('deletando' + tableUser.name);
  }
  editUser(tableUser: User) {
    console.log('editando' + tableUser.name);
  }


  constructor(public usersService: UsersService) { }
  users: User[] = [];
  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      name: 'Alice Maria fernandes ferreira',
      date: new Date('2000-01-01'),
      email: 'alice@example.com',
      cell: '11 99999-9999',
    },
    {
      name: 'Bob',
      date: new Date('2001-02-02'),
      email: 'bob@example.com',
      cell: '11 98888-8888',
    },
    {
      name: 'Charlie',
      date: new Date('2002-03-03'),
      email: 'charlie@example.com',
      cell: '11 97777-7777',
    },
    {
      name: 'bro',
      date: new Date('2002-03-03'),
      email: 'charlie@example.com',
      cell: '11 97777-7777',
    },
    {
      name: 'bro',
      date: new Date('2002-03-03'),
      email: 'charlie@example.com',
      cell: '11 97777-7777',
    },
    {
      name: 'bro',
      date: new Date('2002-03-03'),
      email: 'charlie@example.com',
      cell: '11 97777-7777',
    },
    {
      name: 'bro',
      date: new Date('2002-03-03'),
      email: 'charlie@example.com',
      cell: '11 97777-7777',
    },
    {
      name: 'bro',
      date: new Date('2002-03-03'),
      email: 'charlie@example.com',
      cell: '11 97777-7777',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
}

export class User {
  name: string;
  date: Date;
  email: string;
  cell: string;

  constructor(name: string, date: Date, email: string, cell: string) {
    this.name = name;
    this.date = date;
    this.email = email;
    this.cell = cell;
  }
}