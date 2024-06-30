const men_prod = () => {
    let m_prod = [
        {img: "https://static.zara.net/assets/public/be96/6f0c/1f65478bb228/8ca3ac8e7845/07446405707-a1/07446405707-a1.jpg?ts=1705596522651&w=449", des: "CHECK FLANNEL SHIRT", price: "₹ 3,99.00"},
        {img: "https://static.zara.net/assets/public/fc89/924c/68664559b5b3/dfafe1e3a7bd/03277402250-a1/03277402250-a1.jpg?ts=1715329120095&w=449", des: "VISCOSE/LINEN BLEND SHIRT", price: "₹ 3,290.00"},
        {img: "https://static.zara.net/assets/public/77be/0050/511e4e5d88f6/3f71e2e5bf4c/03090402403-a1/03090402403-a1.jpg?ts=1709726897231&w=449", des: "TEXTURED COTTON BLEND SHIRT", price: "₹ 2,990.00"},
        {img: "https://static.zara.net/assets/public/4744/bbcf/66de486c81ed/7dc137354abb/00975402075-a1/00975402075-a1.jpg?ts=1708691143780&w=449", des: "RELAXED FIT STRIPED SHIRT", price: "₹ 3,590.00"},
        {img: "https://static.zara.net/assets/public/697d/24d6/027b4c44b0f3/5562f7a30b4b/02142305330-a1/02142305330-a1.jpg?ts=1717139978110&w=449", des: "TIE-DYE PRINTED KNIT T-SHIRT", price: "₹ 2,450.00"},
        {img: "https://static.zara.net/assets/public/eb5f/ebfa/bf4b442691e1/8495d6004bb3/00761417700-a1/00761417700-a1.jpg?ts=1703147484391&w=449", des: "T-SHIRT IN CHECK TEXTURE", price: "₹ 1,550.00"},
        {img: "https://static.zara.net/assets/public/05e4/f650/c4e34d60aece/8e80bbf5702c/04877307712-a1/04877307712-a1.jpg?ts=1709724495185&w=449", des: "TROUSERS WITH UTILITY POCKETS", price: "₹ 4,990.00"},
        {img: "https://static.zara.net/assets/public/e32e/9726/6de4480fb13c/1cbf1b14a0f2/04240493705-a1/04240493705-a1.jpg?ts=1707236806382&w=449", des: "SLIM FIT SUIT TROUSERS", price: "₹ 4,990.00"},
        {img: "https://static.zara.net/assets/public/44a4/1fe4/d30d4f76b795/82d57385bdc9/00706125500-a1/00706125500-a1.jpg?ts=1710928426791&w=449", des: "RELAXED FIT TROUSERS WITH BELT", price: "₹ 4,950.00"},
        {img: "https://static.zara.net/assets/public/3888/b3bc/7dc8416c9c7c/1d5eb539e435/05575471436-a1/05575471436-a1.jpg?ts=1707305335757&w=449", des: "UTILITY JEANS WITH POCKETS", price: "₹ 5,990.00"},
        {img: "https://static.zara.net/assets/public/dfdb/6f8d/927b4a2da8e3/b4c8376497fb/04410003406-a1/04410003406-a1.jpg?ts=1709894344315&w=449", des: "100% LINEN BERMUDA SHORTS", price: "₹ 3,290.00"},
        {img: "https://static.zara.net/assets/public/e6d7/2ebf/706a4377a4ae/10fba3719d4e/05597760505-a1/05597760505-a1.jpg?ts=1717595388887&w=449", des: "LINEN CARGO BERMUDA SHORTS", price: "₹ 4,950.00"},
        {img: "https://static.zara.net/assets/public/e706/7925/097142e18701/9940259a87c8/05520400806-a1/05520400806-a1.jpg?ts=1713519715784&w=449", des: "UTILITY CARGO BERMUDA SHORTS", price: "₹ 3,590.00"},
        {img: "https://static.zara.net/assets/public/ac88/1f52/e9d44b67b5d4/d2dc4153e83a/00495413641-e1/00495413641-e1.jpg?ts=1714032698509&w=449", des: "CHERRY PRINT SWIMMING TRUNKS", price: "₹ 2,990.00"},
        {img: "https://static.zara.net/assets/public/3a58/5bcd/3f6e4074a5c4/0d0ca38dc066/00495412485-e1/00495412485-e1.jpg?ts=1715869204247&w=449", des: "LONG SPRAY PRINT SWIMMING TRUNKS", price: "₹ 2,990.00"},
        {img: "https://static.zara.net/assets/public/f417/dc99/1acb40859176/a48d39ba61a5/13126220800-e1/13126220800-e1.jpg?ts=1704791619731&w=958", des: "TECHNICAL BOWLING BAG", price: "₹ 2,890.00"},
        {img: "https://static.zara.net/assets/public/06b8/6134/f23d406589c1/d8d6966009e3/13253220800-e1/13253220800-e1.jpg?ts=1706868248200&w=449", des: "MULTI-POCKET NYLON BACKPACK", price: "₹ 4,990.00"},
        {img: "https://static.zara.net/assets/public/f949/99e2/5be4495892dd/a17a60561478/4000.jpg?ts=1693923782539&w=449", des: "RUBBERISED MULTI-POCKET BACKPACK", price: "₹ 5,990.00"},
        {img: "https://static.zara.net/assets/public/ba5e/c1fb/9d9f49babe04/ce43a756b0eb/12215320203-e1/12215320203-e1.jpg?ts=1701946827521&w=449", des: "MULTI-PIECE SNEAKERS", price: "₹ 3,290.00"},
        {img: "https://static.zara.net/assets/public/0897/e33a/db4743abb83e/597525e01e20/4000.jpg?ts=1693476988742&w=449", des: "MULTIPIECE RUNNING SNEAKERS", price: "₹ 4,990.00"},
        {img: "https://static.zara.net/assets/public/e372/8e94/91fb4a238369/0e022485437d/1689762774226/1689762774226.jpg?ts=1703746845395&w=449", des: "CONTRAST RUNNING SNEAKERS", price: "₹ 2,250.00"},
    ];

    let content = "";

    m_prod.forEach(function (product, index) {
        content += `<div class="product_card mx-auto">
                        <img src="${product.img}" alt="">
                        <div id="product_info" class="btn_contain relative p-1 text-wrap w-[100%]">
                            <div class="w-[90%]">
                                <p>${product.des}</p>
                                <p>${product.price}</p>
                            </div>
                            <div data-index="${index}" class="plus_btn absolute top-[27%] right-[5%] cursor-pointer">
                                <i data-index="${index}" class="fa-solid fa-plus plus_btn"></i>
                            </div> 
                        </div>
                    </div>`
    });
     
    document.querySelector("#m_products").innerHTML = content;
}
men_prod();   
