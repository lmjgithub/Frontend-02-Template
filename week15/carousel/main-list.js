import { createElement } from './framework'
import { List } from "./list.js"

let d = [
    {
        img: 'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/07/ChMkKV9YsLWIKNdDAACGybDd94wAACFbABShPcAAIbh163.jpg',
        url: "https://www.baidu.com",
        title: "1"
    },
    {
        img: 'https://zt-fd.zol-img.com.cn/t_s535x327c/g6/M00/0F/0C/ChMkKV9xq7SIRGf2AACqYpr6PpMAAC-jwM4w-EAAKp6375.jpg',
        url: "https://www.baidu.com",
        title: "11"
    },
    {
        img: 'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/06/ChMkKV9YsFWIPk_UAACONiaJcI0AACFZwP-wuoAAI5O935.jpg',
        url: "https://www.baidu.com",
        title: "111"
    },
    {
        img: 'https://zt-fd.zol-img.com.cn/t_s533x325c/g6/M00/0F/0C/ChMkKV9xqH6IAegSAAC-S471CwIAAC-jAP5k0YAAL5j029.jpg',
        url: "https://www.baidu.com",
        title: "1111"
    }

]
let a = <List data={d}>
    {(record) =>
        <div>
            <img src={record.img} />
            <a href={record.url}>{record.title}</a>
        </div>
    }
</List>

a.mountTo(document.body)