const INITIAL_STATE = {
    sections:[
        {
            title: "tables",
            imageUrl: "https://cdn.home-designing.com/wp-content/uploads/2019/06/Low-Square-Modern-Minimalist-Coffee-Table-Metal-Silver-No-Assembly-Required-1024x683.jpg",
            id: 1,
            linkUrl: 'tables'
        },
        {
            title: "sofas",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81P0-pvTSdL._AC_SX522_.jpg",
            id: 2 ,
            linkUrl: 'sofas'
        },
        {
            title: "chairs",
            imageUrl: "https://cdn.shopify.com/s/files/1/2505/7782/products/sika-design-romantica-rattan-wicker-arm-chair-antique-lifestyle-photo_1571324808_1200x.jpg?v=1579096423",
            id: 3,
            linkUrl: 'chaires'
        },
        {
            title: "home",
            imageUrl: "https://blog.modsy.com/wp-content/uploads/2019/11/658170_D1_LivingRoom_AllWhiteLivingRoom_Cam1.jpg",
            size: 'large',
            id: 4,
            linkUrl: 'home'
        },
        {
            title: "garden",
            imageUrl: "https://abeautifulspace.co.uk/wp-content/uploads/2015/07/sail-garden.jpg",
            size: 'large',
            id: 5,
            linkUrl: 'garden'
        },

]
};


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer