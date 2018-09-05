/**
 * by intbingbing
 * github: https://github.com/intbingbing/delete_weibo_in_batches
 */
//引入jquery
let fileref=document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", 'https://cdn.bootcss.com/jquery/3.3.1/jquery.slim.min.js');
document.getElementsByTagName("head")[0].appendChild(fileref);

//选择器
const all = "[tbinfo^='ouid='] .screen_box>a"
const originalContentDrop = "[tbinfo^='ouid=']:not([minfo^='ru=']) .screen_box>a"
const forwardContentDrop = "[tbinfo^='ouid='][minfo^='ru='] .screen_box>a"
const rmItem = "[title='删除此条微博']"
const confirmRmBtn = "a[action-type='ok']"
const nextPageSet = "a.page.next.S_txt1.S_line1" //下一页按钮
const prevPageSet = "a.page.prev.S_txt1.S_line1"
const pageSelect = "[action-type='feed_list_page_morelist']"
const pageItem = ".layer_menu_list.W_scroll ul li a"

//网络加载设置延时
const delayScroll = () => new Promise(
    resolve => {
        $(document).scrollTop(130000)
        setTimeout(() => resolve(), 3000)
    }
)

const delayClick = item => new Promise(
    resolve => {
        setTimeout(() => {
            item.click()
            resolve()
        }, 1500)
    }
)

const delayClickPage = page => new Promise(
    resolve => {
        page.click()
        setTimeout(() => resolve(), 2000)
    }
)

const delayLastPage = () => new Promise(
    resolve => {
        $(pageSelect).css('display', 'block')
        $(pageItem)[0].click()
        setTimeout(() => resolve(), 2000)
    }
)

const deleteWeiBo = async scope => {
    let arr = null
    //先跳至页底
    for(let i= 0; i < 3; i++) {
        await delayScroll()
    }

    if ($(prevPageSet).length === 0) { //判断不存在上一页按钮
        await delayLastPage() //跳转尾页
        arr = $(scope)
    } else {
        arr = $(scope)
    }

    if ($(prevPageSet).length === 1 || $(nextPageSet).length === 1) { //判断不是唯一一页
        arr.splice(arr.length-1, 1)
    }

    for(let val of arr) {
        await delayClick(val)
        const filterRmBtn = $(rmItem).filter(index => {
            if($($(rmItem)[index]).parent().first().parent().parent().css('display') === 'block'){
                return true
            }
            return false
        })
        filterRmBtn[0].click()
        $(confirmRmBtn)[0].click()
    }

    if ($(prevPageSet).length === 0 && $(nextPageSet).length === 0 && $(scope).length === 0) {
        alert('删除完成!')
    } 

    if ($(prevPageSet).length === 1) { //判断存在上一页
        const prevPage = $(prevPageSet)[0]
        await delayClickPage(prevPage)
        deleteWeiBo(scope)
    }

    if ($(prevPageSet).length === 0 && $(nextPageSet).length === 0 && $(scope).length !== 0) { //判断还剩一页未删完
        deleteWeiBo(scope)
    }
}

const main = scope => {
    fileref.onload = () => {
        deleteWeiBo(scope)
    }
}

/**
 * @param{String}all 全部内容 默认
 * @param{String}originalContentDrop 原创内容
 * @param{String}forwardContentDrop 转发内容
 */

main(all)