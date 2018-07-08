import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),
    model() {
        return this.store.createRecord('bc');
    },
    actions: {
        didTransition() {
            this.checkSession();
        },
        willTransition() {
            this.checkSession();
        },
        redirect(category) {
            // $(".page_wrapper").fadeOut(200);
            //var r = category.name.toLowerCase();
            //this.get('router').transitionTo(r);
        },
        toHome() {
            this.get('router').transitionTo('/');
        },
        populateDropdown(cats) {
            document.getElementById('ddc').style.display = 'block';
            document.getElementById('link-list').innerHTML = "<h3>" + cats.name + "</h3>";

            for (var i = 0; i < cats.subcategories.length; i++) {
                document.getElementById('link-list').innerHTML += "<a>" + cats.subcategories[i] + "</a>";
            }
            document.getElementById('link-list-image-container').innerHTML = "<img class='link-list-image' src='" + cats.image + "' alt=''>";
        },
        closeDropdown() {
            document.getElementById('ddc').style.display = 'none';
        },
        openDropdown() {
            document.getElementById('ddc').style.display = 'block';
        },
    }
});
