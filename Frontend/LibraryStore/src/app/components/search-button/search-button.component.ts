import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {
  isLoading: any;
  books: any;

  constructor(private bookSearch: CrudService) { }

  ngOnInit(): void {
  }

  onSearch(form: NgForm) {
    this.isLoading = true;
    const value = form.value.search;
    this.bookSearch.GetBook(value).subscribe(resData => {
      this.books = resData.items;
      console.log(resData);
      this.isLoading = false;
    });
  }

}
