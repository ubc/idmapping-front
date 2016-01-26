System.register(["angular2/core", "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var SearchService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SearchService = (function () {
                function SearchService(_http) {
                    this._http = _http;
                }
                ;
                SearchService.prototype.search = function () {
                    return this._http.get('http://192.168.99.100:8000/api/map')
                        .map(function (res) { return res.json(); });
                };
                SearchService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SearchService);
                return SearchService;
            })();
            exports_1("SearchService", SearchService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9zZWFyY2gudHMiXSwibmFtZXMiOlsiU2VhcmNoU2VydmljZSIsIlNlYXJjaFNlcnZpY2UuY29uc3RydWN0b3IiLCJTZWFyY2hTZXJ2aWNlLnNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBRUVBLHVCQUFvQkEsS0FBV0E7b0JBQVhDLFVBQUtBLEdBQUxBLEtBQUtBLENBQU1BO2dCQUFHQSxDQUFDQTs7Z0JBRW5DRCw4QkFBTUEsR0FBTkE7b0JBQ0VFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLG9DQUFvQ0EsQ0FBQ0E7eUJBQ3hEQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQVBIRjtvQkFBQ0EsaUJBQVVBLEVBQUVBOztrQ0FRWkE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQVJBLEFBUUNBLElBQUE7WUFSRCx5Q0FRQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge307XG5cbiAgc2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovLzE5Mi4xNjguOTkuMTAwOjgwMDAvYXBpL21hcCcpXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
