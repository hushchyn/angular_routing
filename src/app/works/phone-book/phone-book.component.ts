import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {

  public input = true
  public myContacts: Array <IContact> = [
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      phone: '0631111111'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      phone: '0631222222'
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      phone: '0635555555'
    },
    {
      firstName: 'Ira',
      lastName: 'Tytar',
      phone: '0636666666'
    },
    {
      firstName: 'Sofia',
      lastName: 'Zhuk',
      phone: '0977777777'
    }
  ]

  public field!: any;
  public modal = false
  public firstName!: string;
  public lastName!: string;
  public phone!: string;
  public index!: number;
  public add = true;
  public sortField = 'firstName'
  public arrow!: boolean
  public firstColumnDirection = false
  public secondColumnDirection = false
  public thirdColumnDirection = false
  public sortPhoneBook = {
    sort: true,
    column: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    this.modal = !this.modal
  }

  addContact():void{
    if(this.firstName && this.lastName && this.phone){
    let newContact = new Contacts ( this.firstName, this.lastName, this.phone)
    this.myContacts.push(newContact)
    this.firstName = ''
    this.lastName = ''
    this.phone = ''
    this.modal = false    
    }
    else{
      this.input = !this.input
    }
  }

  saveContact():void{
    this.myContacts[this.index].firstName = this.firstName
    this.myContacts[this.index].lastName = this.lastName
    this.myContacts[this.index].phone = this.phone
    this.modal = false
    this.add = true
    this.firstName = ''
    this.lastName = ''
    this.phone = ''
  }

  edit(index:number):void{
    this.firstName = this.myContacts[index].firstName
    this.lastName = this.myContacts[index].lastName
    this.phone = this.myContacts[index].phone
    this.index = index
    this.modal = true
    this.add = !this.add
  }

  deleteContact(index:number):void{
    this.myContacts.splice(index , 1)
  }

  sortList(sort:string, reverse:string){
    if (this.sortPhoneBook.sort){
      this.sortPhoneBook.column = sort;
      this.sortPhoneBook.sort = false
      this.arrow = true
    }else{
      this.sortPhoneBook.column = reverse;
      this.sortPhoneBook.sort = true
      this.arrow = false
    }
    this.showDirection()
  }

  showDirection(){
    if ( this.sortPhoneBook.column == 'first' ||  this.sortPhoneBook.column == 'reverseFirst' ){
      this.firstColumnDirection = true
      this.secondColumnDirection = false
      this.thirdColumnDirection = false
    }else if( this.sortPhoneBook.column == 'last' ||  this.sortPhoneBook.column == 'reverseLast' ){
      this.firstColumnDirection = false
      this.secondColumnDirection = true
      this.thirdColumnDirection = false
    }else if ( this.sortPhoneBook.column == 'number' ||  this.sortPhoneBook.column == 'reverseNumber' ){
      this.firstColumnDirection = false
      this.secondColumnDirection = false
      this.thirdColumnDirection = true
    }
  }

}

export class Contacts implements IContact{
  firstName: string;
  lastName: string;
  phone: string;
  constructor( name:string, sName:string, phone:string ){
    this.firstName = name
    this.lastName = sName
    this.phone = phone
  }
}