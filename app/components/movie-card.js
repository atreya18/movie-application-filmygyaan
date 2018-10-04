import Component from '@ember/component';

export default Component.extend({
    actions: {
        del(movie) {
            this.delete(movie)
        }
    }
});  
