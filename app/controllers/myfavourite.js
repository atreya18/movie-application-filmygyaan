import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteFavourites(movie){
      //console.log(movie.get('id'));
      debugger
      this.store.findRecord('myfavourite', parseInt(movie.get('id')), { backgroundReload: false }).then(function(data){
        data.destroyRecord()
        // this.transitionTo('myFavourite')
        // data.save()
      });
      
      // this.transitionTo('myfavourite');
      // this.get('controller.model').destroyRecord().then(function() {
      //   controller.transitionToRoute('model.index');})
    }
  }
});
