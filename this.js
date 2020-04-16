const cameras = {
    price: 600,
    weight : 3000,
    brand: "cannon",
    mydes: function(){
        return `This cannon camer is of ${(this.price)}$`
    }
}

console.log(cameras.mydes())