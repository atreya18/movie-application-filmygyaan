import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    debugger
    return this.store.findAll('myfavourite')
  },
  setUpController(controller, model) {
    this._super(controller, model)
  },
  actions : {
    transitionToDetails(movie) {
      this.transitionTo("details", movie.get("id"));
    }
  }

});
