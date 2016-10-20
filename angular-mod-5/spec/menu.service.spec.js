describe('menu service', function(){

  var menuservice;
  var $httpBackend;
  var ApiPath;

  beforeEach(module('common', function($provide) {
     $provide.value('loadingHttpInterceptor', {
      request: function(mock){ return mock; },
      response: function(mock){ return mock; },
      responseError: function(mock){ return mock; }
    });
  }));

  beforeEach(function(){
    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
      menuservice = $injector.get('MenuService');
    });
  });

  it('should not find invalid item', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items.json').respond(200, {
      menu_items:[
        {short_name:"valid"}
      ]});
    menuservice.getCheckMenuItem('invalid').then(function(response) {
      expect(response).toBe(undefined);
    });
    $httpBackend.flush();
  });

  it('should find valid item', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items.json').respond(200,{
      menu_items:[
        { id: 1,
          short_name:"valid"
        }
      ]});
    menuservice.getCheckMenuItem('valid').then(function(response) {
      expect(response).not.toBe(undefined);
      expect(response.id).toBe(1);
    });
    $httpBackend.flush();
  });
});
