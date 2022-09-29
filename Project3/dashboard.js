class Dashboard {
    constructor(sidebar, content){
        this.sidebar = sidebar;
        this.content = content;
    }

    render(){

    }
}

var dashboard = new Dashboard('sidebar','content');
dashboard.render('Home','Account','Message','Support');