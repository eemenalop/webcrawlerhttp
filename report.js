function sortPages(pages){
    pagesArr = Object.entries(pages)
    pagesArr.sort((a,b) => {
        aHits = a[1]
        bHits = b[1]
    })
}

module.exports = {
    sortPages
}