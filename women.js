const women_prod = () => {
    let w_prod = [
        {img: "https://static.zara.net/assets/public/3525/1e4c/4077474abd23/5d67481b219e/04174317505-a2/04174317505-a2.jpg?ts=1707478089863&w=449", des: "FITTED CROPPED T-SHIRT", price: "₹ 999.00"},
        {img: "https://static.zara.net/assets/public/6a1c/8e52/ddc546758801/d799a4bed501/03431301620-a1/03431301620-a1.jpg?ts=1708507160553&w=607", des: "SHORT SLEEVE T-SHIRT", price: "₹ 1,190.00"},
        {img: "https://static.zara.net/assets/public/429a/e48e/abd04d8e9c57/1299aeaf75e6/01014306712-a1/01014306712-a1.jpg?ts=1707243316055&w=449", des: "SEAMLESS RIBBED FADED CROP TOP", price: "₹ 1,590.00"},
        {img: "https://static.zara.net/assets/public/1e65/b898/762d458996ef/9bb3b767010f/02180304745-e1/02180304745-e1.jpg?ts=1704711641768&w=449", des: "DRAPED NECK DRESS", price: "₹ 2,990.00"},
        {img: "https://static.zara.net/assets/public/e7e4/b298/695b42cfb565/dec8ca82c170/03600288607-e1/03600288607-e1.jpg?ts=1717494914327&w=449", des: "CUT-OUT TAFFETA DRESS WITH BOW", price: "₹ 4,990.00"},
        {img: "https://static.zara.net/assets/public/09e6/9196/5aa4465eac9e/472b82a72c20/06895079518-p/06895079518-p.jpg?ts=1715804532720&w=449", des: "PRINTED HALTER DRESS", price: "₹ 4,990.00"},
        {img: "https://static.zara.net/assets/public/4723/0085/be86497f8ca4/4d346230b321/07969027712-a1/07969027712-a1.jpg?ts=1710435730939&w=449", des: "SEMI-SHEER MATCHING SLIP DRESS", price: "₹ 4,990.00"},
        {img: "https://static.zara.net/assets/public/08f6/444e/e90c4a478224/38a6d9eff2ab/04174340250-p/04174340250-p.jpg?ts=1710950012331&w=449", des: "CONTRAST OFF-THE-SHOULDER DRESS", price: "₹ 2,290.00"},
        {img: "https://static.zara.net/assets/public/e99a/ea17/332a48b5b812/2ad2c38b754f/07521086800-a3/07521086800-a3.jpg?ts=1718796614895&w=449", des: "POPLIN HALTER TOP", price: "₹ 2,950.00"},
        {img: "https://static.zara.net/assets/public/d900/c64a/919a4d299543/fe2f3f7bf45f/07901313044-p/07901313044-p.jpg?ts=1707233852708&w=607", des: "SEAMLESS CROP TOP", price: "₹ 1,990.00"},
        {img: "https://static.zara.net/assets/public/93e9/1905/1b8043fb9523/e0bf26d37279/00858017712-a3/00858017712-a3.jpg?ts=1704992298423&w=449", des: "SOFT DRAPED TOP", price: "₹ 2,590.00"},
        {img: "https://static.zara.net/assets/public/f8cf/0e19/0adc4bf58397/f38b6908bde5/02405349406-a5/02405349406-a5.jpg?ts=1715170797982&w=449", des: "LINEN BLEND STRAIGHT-FIT TROUSERS", price: "₹ 7,590.00"},
        {img: "https://static.zara.net/assets/public/ec58/aef2/f0a144a2abca/b977a9eddb17/09929022800-015-p/09929022800-015-p.jpg?ts=1708075330091&w=449", des: "FLARED TROUSERS", price: "₹ 3,590.00"},
        {img: "https://static.zara.net/assets/public/3b9d/d3a5/d4584edcb2e3/7e1e848dc7b4/02405235620-15-p/02405235620-15-p.jpg?ts=1709120686288&w=607", des: "STRAIGHT-FIT SUIT TROUSERS", price: "₹ 7,590.00"},
        {img: "https://static.zara.net/assets/public/4c77/eb3d/9dcc4a058ebb/3076761b7ac5/05520019811-e1/05520019811-e1.jpg?ts=1705421405749&w=449", des: "LOW-RISE WIDE-LEG TRF BOXER JEANS", price: "₹ 4,990.00"},
        {img: "https://static.zara.net/assets/public/f6c7/b5aa/a0d841dc8458/3ef7b7f572e9/05862059811-p/05862059811-p.jpg?ts=1711387287527&w=449", des: "HIGH-WAIST WIDE-LEG JOGGER JEANS", price: "₹ 2,990.00"},
        {img: "https://static.zara.net/assets/public/b0f3/6865/7dc0437d88c8/7f79baa43749/09863041712-002-p/09863041712-002-p.jpg?ts=1705594252501&w=449", des: "STRAIGHT-LEG LOW-RISE VELVET UEANS", price: "₹ 7,590.00"},
        {img: "https://static.zara.net/assets/public/76c5/cc5f/54614c03bb73/ade5c0eaca72/05520008802-e1/05520008802-e1.jpg?ts=1713860218919&w=449", des: "DENIM-EFFECT WIDE-LEG TROUSERS", price: "₹ 3,590.00"},
        {img: "https://static.zara.net/assets/public/0af0/7f6a/de5e49e9907e/3ed12dce27fa/13300110087-e1/13300110087-e1.jpg?ts=1703233144811&w=358", des: "VINYL HEELED SANDALS", price: "₹ 3,290.00"},
        {img: "https://static.zara.net/assets/public/4c80/e2ec/3bf043159599/2263341ba6ea/13336315808-e1/13336315808-e1.jpg?ts=1712915148139&w=358", des: "HIGH-HEEL SANDALS WITH BOW", price: "₹ 4,290.00"},
        {img: "https://static.zara.net/assets/public/031f/3b09/dcec4535b7b1/681f10e1120c/15017210001-e1/15017210001-e1.jpg?ts=1704356771154&w=634", des: "RUNNING TRAINERS WITH CONTRAST DETAILS", price: "₹ 3,590.00"},
        {img: "https://static.zara.net/assets/public/cea7/d5df/d4f849fb879a/1f0201220539/02910071610-p/02910071610-p.jpg?ts=1716368652209&w=474", des: "TIE-DYE BIKINI BOTTOMS", price: "₹ 1,990.00"},
        {img: "https://static.zara.net/assets/public/49aa/e396/836643c6936d/d6779872219a/00167204732-a4/00167204732-a4.jpg?ts=1716362366746&w=474", des: "BIKINI BOTTOMS", price: "₹ 1,990.00"},
        {img: "https://static.zara.net/assets/public/d7bb/e7d2/1fe14b58b412/7edf11a230c9/02856061800-p/02856061800-p.jpg?ts=1715073786458&w=474", des: "ANIMAL PRINT THONG BIKINI BOTTOMS", price: "₹ 1,990.00"},
    ];

    let content = "";

    w_prod.forEach(function (product, index) {
        content += `<div class="product_card mx-auto text-xs">
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
     
    document.querySelector("#w_products").innerHTML = content;
}
women_prod();   
