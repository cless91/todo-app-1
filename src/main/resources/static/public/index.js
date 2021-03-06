
Vue.component('button-create-item', {
    data() {
        return{
            name: null
        }
    },
    template: '#createItem'
})

new Vue({
    el: '#app',
    data() {
        return {
            items: [],
            newItemName: null,
            currentUser: null,
        }
    },
    mounted() {
        axios
            .get(backUrl+'/listItems')
            .then(response => (this.items = response.data.items))
            .catch(reason => (alert(reason)));
        axios
            .get(backUrl+'/currentUser')
            .then(response => (this.currentUser = response.data))
            .catch(reason => (alert(reason)));
    },
    methods:{
        createItem: function() {
            var data = {name: this.newItemName, state: 'todo'};
            axios
                .post(backUrl+'/createItem', data)
                .then(response => {
                    this.newItemName = '';
                    return (this.items.push(response.data));
                })
                .catch(reason => (alert(reason)))
        },
        deleteItem: function (itemId) {
            axios
                .delete(backUrl+'/item/'+itemId)
                .then(response => {
                    var removeIndex = this.items.map(function(item) { return item.id; }).indexOf(itemId);
                    this.items.splice(removeIndex, 1);
                })
                .catch(reason => (alert(reason)))
        },
        changeState: function (item, newState) {
            axios
                .post(backUrl+'/item/'+item.id+'/changeState/'+newState, null)
                .then(response => {
                    item.state = newState
                })
                .catch(reason => (alert(reason)))
        }
    }
})

