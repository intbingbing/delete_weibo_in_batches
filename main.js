//选择器
const all = "[tbinfo^='ouid='] .screen_box>a"
const originalContentDrop = "[tbinfo^='ouid=']:not([minfo^='ru=']) .screen_box>a"
const forwardContentDrop = "[tbinfo^='ouid='][minfo^='ru='] .screen_box>a"
const rmItem = "[title='删除此条微博']"
const confirmRmBtn = "a[action-type='ok']"
const nextPageSet = "a.page.next.S_txt1.S_line1"

//网络加载设置延时
const delayScroll = () => new Promise(
    resolve => {
        $(document).scrollTop(130000)
        setTimeout(() => resolve(), 2000)
    }
)

const delayClick = item => new Promise(
    resolve => {
        setTimeout(() => {
            item.click()
            resolve()
        }, 1000)
    }
)

const delayNextPage = next => new Promise(
    resolve => {
        next.click()
        setTimeout(() => resolve(), 2000)
    }
)

const deleteWeiBo = async scope => {
    for(let i= 0; i < 3; i++) {
        await delayScroll()
    }
    const arr = $(scope)

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

    if($(nextPageSet).length === 0) {
        console.log('Over!')
    } else {
        const nextPage = $(nextPageSet)[0]
        await delayNextPage(nextPage);
        deleteWeiBo(scope)
    }
}

const main = scope => {
    deleteWeiBo(scope)
}

/**
 * @param{String}all 全部内容 默认
 * @param{String}originalContentDrop 原创内容
 * @param{String}forwardContentDrop 转发内容
 */

main(all)