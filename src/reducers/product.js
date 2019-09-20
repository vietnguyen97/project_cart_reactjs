var initialState = [
    {
        id : 1, 
        name : 'Iphone 7',
        image : 'https://znews-photo.zadn.vn/w660/Uploaded/ynssi/2016_08_16/1.png',
        description : 'Sản phẩm của Apple',
        price : 400,
        inventory : 10,
        rating : 4
    },
    {
        id : 2, 
        name : 'Iphone 8',
        image : 'http://giadinh.mediacdn.vn/thumb_w/640/2018/4/13/photo-0-1523611755662575266474.jpg',
        description : 'Sản phẩm của Apple',
        price : 500,
        inventory : 15,
        rating : 4
    },
    {
        id : 3, 
        name : 'Iphone 10',
        image : 'https://znews-photo.zadn.vn/w660/Uploaded/OFH_oazszstq/2017_09_12/Screen_Shot_20170912_at_155047.jpg',
        description : 'Sản phẩm của Apple',
        price : 600,
        inventory : 20,
        rating : 5
    }
]
const products = (state = initialState, action) =>{
    switch (action.type){
        default : return [...state];
    }
}
export default products;