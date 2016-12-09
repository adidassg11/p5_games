class Drop {
    //float x, y, r;
    this.x = 2;
    this.y = 2;
    this.r = 8;

//    Drop( float x, float y ){
    Drop(  ){
        /*
        this.x = x;
        this.y = y;
        this.r = 8;
        */
    }

    void show() {
        noStroke();
        fill(150, 0, 255);
        ellipse(this.x, this.y, this.r*2);
    }
}

