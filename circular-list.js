export default class circular_list {
    constructor(array) {
        this.array = array;
        this.current_index = 0;
    }

    get_current_index() {
        return this.current_index;
    }

    go_previous() {
        this.current_index -= 1;
        if (this.current_index < 0){
            this.current_index = this.array.length - 1;
        }
    }

    get_previous() {
        let idx = this.current_index - 1;
        if (idx < 0){
            idx = this.array.length - 1;
        }
    }

    go_next() {
        this.current_index += 1;
        if(this.current_index > this.array.length - 1) {
            this.current_index = 0;
        }
    }

    get_next() {
        let idx = this.current_index + 1;
        if (idx > this.array.length - 1){
            idx = 0;
        }
    }

    get(index) {
        return this.array[index];
    }

    get_current() {
        return this.array[this.current_index];
    }

}