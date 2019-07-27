class MovieStore {
    constructor(){
        this.movieStore = require('./datastore.json');
    }

    // cac phuong thuc cua lop movie
    allMovie(){
        return this.movieStore;
    }

    // Tim movie theo title
    find(title){
        return this.movieStore.filter(m => m.title === title);
    }

    // Them mot movie moi vao du lieu

    add(movie){
        this.movieStore.push(movie);
    }

    has(title){
        let movie = this.find(title);

        return movie.length > 0;

    }

    update(title, new_infor){
        // check if movie exist?
        let movieExist = this.find(title);
        if(movieExist.length < 1){
            return false;
        }

        let oldMovie = movieExist.pop();
        // Copy mang bao toan toan ven du lieu voi Object.assign
        let newMoviewUpdate = Object.assign(oldMovie, new_infor);
        // loc ra mang tat ca cac phim khong trung title nhap vao 
        let list_OldMoview = this.movieStore.filter(m => m.title !== title)
        // su dung spread operator trong es6 de noi mang cach linh dong
        this.movieStore = [...list_OldMoview, newMoviewUpdate];
        return true
    }

    remove(title){
        // Loc va luu lai danh sach movie ngoai tru movie co title duoc truyen len
        this.movieStore = this.movieStore.filter(m => m.title !== title)
    }
}

module.exports = MovieStore;