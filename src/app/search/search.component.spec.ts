/* tslint:disable:no-unused-variable */

describe('Search component', () => {
  // beforeEach(() => {
  //   addProviders([
  //     HTTP_PROVIDERS,
  //     provide(SearchService, {useClass: MockSearchService}),
  //   ]);
  // });
  //
  // beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
  //   return tcb
  //   // need this in order to override search service on the component level
  //     .overrideProviders(SearchComponent, [provide(SearchService, {useClass: MockSearchService})])
  //     .createAsync(SearchComponent)
  //     .then((componentFixture: ComponentFixture<SearchComponent>) => {
  //       this.fixture = componentFixture;
  //       this.element = this.fixture.nativeElement;
  //       this.instance = this.fixture.debugElement.componentInstance;
  //     });
  // })));

  // it('should not populate search section', () => {
  //   expect(this.element.querySelector('#search-section')).toBe(null);
  //   expect(this.element.querySelectorAll('paper-dropdown-menu').length).toBe(2);
  // });
  // it('should populate search section after tool and search type are selected', () => {
  //   this.instance.selectedTool = 'Edx';
  //   this.instance.selectedFunction = 'Individual Students';
  //   this.fixture.detectChanges();
  //   expect(this.element.querySelector('#search-section')).not.toBe(null);
  //   expect(this.element.querySelectorAll('#search-section table').length).toBe(1);
  // });
  //
  // it('should fetch the search result from search service', () => {
  //   let q = {student_id: '1234567'};
  //   this.instance.selectedTool = 'Edx';
  //   this.instance.selectedFunction = 'Individual Students';
  //   this.instance.query = q;
  //   this.fixture.detectChanges();
  //   this.instance.search();
  //   expect(this.instance._searchService.query).toEqual(q);
  //   this.instance.listResult.subscribe(data => {
  //     expect(data).toEqual(queryFixture);
  //   });
  //   // expect(this.element.querySelectorAll('#search-section tr').length).toBe(2);
  // });
});
