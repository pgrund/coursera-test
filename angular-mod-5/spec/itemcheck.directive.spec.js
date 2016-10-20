describe('itemcheck directive', function(){

  var $compile;
  var $rootScope;
  var $q;
  var form;
  var service;

  beforeEach(module('common', function($provide) {
     $provide.value('loadingHttpInterceptor', {
      request: function(mock){ return mock; },
      response: function(mock){ console.log("http",mock);return mock; },
      responseError: function(mock){ return mock; }
    });
  }));

  beforeEach(function(){
    inject(function ($injector) {
      // $httpBackend = $injector.get('$httpBackend');
      // ApiPath = $injector.get('ApiPath');
      $q = $injector.get('$q');
      service = $injector.get('MenuService');
    });
  });
  beforeEach(function() {
    inject(function(_$compile_, _$rootScope_) {
        $rootScope = _$rootScope_.$new();
        elem = angular.element('<form name="signupForm">\
        <input menuitem type="text" name="favoriteDish" ng-model="favorite">\
    </form>');
        $compile = _$compile_;
        $compile(elem)($rootScope);
        form = $rootScope.signupForm;
    });
  });

  it('allows untouched empty value', function(){
    $rootScope.$digest();
    expect($rootScope.favorite).toBeUndefined();
    expect(form.favoriteDish.$valid).toBe(true);
  });

  it('accepts existing menu item shortname', function(){
    spyOn(service, "getCheckMenuItem").and.returnValue($q.resolve({
        id: 1,
        short_name:"valid"
      }));
    form.favoriteDish.$setViewValue('valid');
    $rootScope.$digest();

    expect(service.getCheckMenuItem).toHaveBeenCalled();
    expect(form.favoriteDish.$valid).toBe(true);
    expect($rootScope.favorite).toBe('valid');
  });

  it('rejects not existing menu item shortname', function(){
    spyOn(service, "getCheckMenuItem").and.returnValue($q.resolve(undefined));
    form.favoriteDish.$setViewValue('invalid');
    $rootScope.$digest();
    expect($rootScope.favorite).toBeUndefined();
    expect(form.favoriteDish.$valid).toBe(false);
  });
});
