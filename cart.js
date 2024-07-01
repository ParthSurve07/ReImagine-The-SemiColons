

const add = () => {
    let content = "";
    products.forEach((product) => {
        content += `<div class="main_cart flex gap-x-8 relative py-4">
                    <div class="cart_image w-[17%]">
                        <img src="${product.img}"
                            alt="">
                    </div>
                    <div class="cart_details w-[50%] py-[0.6rem] bg-red-">
                        <div class="cart_description">
                            <p>${product.des}</p>
                            <p>${product.size}</p>
                        </div>
                        <div class="cart_price my-[4%]">
                            <p>₹ ${product.price}</p>
                        </div>
                    </div>
                    <div
                        class="cart_quantity absolute right-0 top-0 w-[15%] h-[100%] py-[2rem] flex flex-col justify-between items-center">
                        <div class="quantity w-[60%] relative">
                            <select class="qty_cont">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                            </select>
                            <i class='bx bxs-down-arrow absolute pointer-events-none'></i>
                        </div>
                        <div class="remove_btn">
                            <button class="remove">Remove</button>
                        </div>
                    </div>
                </div>`
    })
    
    document.querySelector("#section1").innerHTML = content;
}
