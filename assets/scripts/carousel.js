class Carousel {
    banner;
    // 需要轮播的图像数组
    items;
    // 选择的Radio
    radio;

    constructor(target) {

        this.banner = target;
        this.items = this.banner.getElementsByClassName("container");
        this.radio = this.banner.getElementsByTagName("input");
        this.initLocal();
        // 上一页的鼠标事件
        let pre = this.banner.querySelector("#pre");
        pre.addEventListener("click", this.preHandler);
        // 下一页的鼠标事件
        let next = this.banner.querySelector("#next")
        next.addEventListener("click", this.nextHandler);

        // 对所有的 radio 设置 change 事件
        for (let index = 0; index < this.radio.length; index++) {
            const element = this.radio[index];
            element.addEventListener("change", (event) => {
                // 因为change事件发出之前，选择已经生效
                console.log(event);
                // 重新设置一下位置
                this.initLocal();
            })
        }

        // 自动播放，
        // 鼠标进入停止自动轮播
        // 鼠标离开继续轮播
        let autoPlayKey = -1;
        autoPlayKey = setInterval(this.nextHandler, 3000);
        this.banner.addEventListener("mouseover", (event) => {
            if (autoPlayKey !== -1) {
                clearInterval(autoPlayKey);
                autoPlayKey = -1;
            }
        })
        this.banner.addEventListener("mouseout", (event) => {
            if (autoPlayKey === -1) {
                autoPlayKey = setInterval(this.nextHandler, 3000);
            }
        })
    }

    // 初始化方法
    initLocal() {
        // 记录选择的图像
        let selectedItem;
        // 记录选择的Radio
        let selectedRadio;
        for (let index = 0; index < this.radio.length; index++) {
            const element = this.radio[index];
            const item = this.items[index];
            // 初始化的切换和直接选择的，不需要动画
            item.style.transition = "none"; // 取消过度
            item.style.left = "0px";
            item.style.zIndex = "-10";
            // 因为 CSS3 过度极致，是需要时间去判断和处理
            // 延时 50 毫秒，让位置先设置进去，然后再允许有过度的计时
            // 如果没有延时，前面清除过度的语句就会被忽略，没生效
            setTimeout(() => {
                // 在style参数生效之后设置过度
                item.style.transition = "left 0.5s linear";
            }, 50);
            // 判断哪个 radio 是被选择的
            if (element.checked) {
                // 记录已选择的图像
                selectedItem = item;
                // 记录已选择的Radio
                selectedRadio = element;
                // 设置一下图层的顺序，让选中的在最上面
                selectedItem.style.zIndex = "-1";
            }
        }
        // 将选择的前一个图像，放到当前图像的左边
        let preItem = this.getPre(this.items, selectedItem);
        preItem.style.transition = "none"; // 取消过度
        preItem.style.left = "-100%";
        preItem.style.zIndex = "-2";

        // 将选择的后一个图像，放到当前图像的右边
        let nextItem = this.getNext(this.items, selectedItem);
        nextItem.style.transition = "none"; // 取消过度
        nextItem.style.left = "100%";
        nextItem.style.zIndex = "-2";
        setTimeout(() => {
            // 在style参数生效之后设置过度
            preItem.style.transition = "left 0.5s linear";
            nextItem.style.transition = "left 0.5s linear";
        }, 50);

    }


    // 获取指定item元素的前一个元素
    getPre(arr, item) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (item === element) {
                // 如果是第一个，选最后一个
                if (index === 0) return arr[arr.length - 1];
                else return arr[index - 1];
            }
        }
    }

    // 获取指定item元素的后一个元素
    getNext(arr, item) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (item === element) {
                // 如果是最后一个，选第一个
                if (index === arr.length - 1) return arr[0];
                else return arr[index + 1];
            }
        }
    }

    timeoutKey = -1;

    preHandler = (event) => {
        if (this.timeoutKey != -1) return;
        // 让鼠标点击不能连续，有一个冷却时间
        this.timeoutKey = setTimeout(() => { this.timeoutKey = -1 }, 600);

        let selectedItem;
        let selectedRadio;
        for (let index = 0; index < this.radio.length; index++) {
            const element = this.radio[index];
            const item = this.items[index];

            // 先全部将位置置为0
            item.style.left = "0px";
            item.style.zIndex = "-10";
            // 判断哪个 radio 是被选择的
            if (element.checked) {
                // 如果是第一个，选最后一个
                if (index === 0) {
                    selectedItem = this.items[this.items.length - 1];
                    selectedRadio = this.radio[this.radio.length - 1];
                } else {
                    selectedItem = this.items[index - 1];
                    selectedRadio = this.radio[index - 1];
                }
            }
        }
        // 让选择的图像在最上面
        selectedItem.style.zIndex = "-1";
        // 修改选择的 Radio, 直接用js修改是不会有change事件
        selectedRadio.checked = true;
        // 这是原来选择的那张图像
        let preItem = this.getPre(this.items, selectedItem);
        // 将前面的往左边过度
        preItem.style.left = "-100%";
        // 前面一张的z-index 是 -1；
        // 设置当前选择图像图层为-1时；前面一张的z-index会被压下一层变成-2

        let nextItem = this.getNext(this.items, selectedItem);
        // 设置下一张在右边
        nextItem.style.left = "100%";
        // 让下一张直接在当前选择图像的下一层
        nextItem.style.zIndex = "-2";
        // 前面一张的z-index 是 -2；
        // 设置当前下一张图像图层为-2时；前面一张的z-index会被压下一层变成-3
    };

    nextHandler = (event) => {
        if (this.timeoutKey != -1) return;
        this.timeoutKey = setTimeout(() => { this.timeoutKey = -1 }, 600);
        let selectedItem;
        let selectedRadio;
        for (let index = 0; index < this.radio.length; index++) {
            const element = this.radio[index];
            const item = this.items[index];

            item.style.left = "0px";
            item.style.zIndex = "-10";
            // 判断哪个 radio 是被选择的
            if (element.checked) {
                // 如果是最后一个 选第一个
                if (index == this.radio.length - 1) {
                    selectedItem = this.items[0];
                    selectedRadio = this.radio[0];
                } else {
                    selectedItem = this.items[index + 1];
                    selectedRadio = this.radio[index + 1];
                }
            }
        }

        // 让当前的图像在最前面
        selectedItem.style.zIndex = "-1";
        selectedRadio.checked = true;
        let preItem = this.getPre(this.items, selectedItem);
        // 让选择图像的上一张在左边
        preItem.style.left = "-100%";
        // 让上一张直接在当前选择图像的下一层
        preItem.style.zIndex = "-2";
        // 这是原来选择的那张图像
        let nextItem = this.getNext(this.items, selectedItem);
        // 让当前图像往右边移动
        nextItem.style.left = "100%";
    };

}






export default Carousel;