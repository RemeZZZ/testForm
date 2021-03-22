export const isPhone = phone => {
    return (phone[0] === '7' && phone.length === 11)
}
    
export const isName = name => {
    return !(name.length !== 0 && /[0-9]/.test(name))
}

export const isIndex = index => {
    return ((index.length >= 5 && index.length <= 10) || index.length === 0)
}

export const isDocumentSeries = series => {
    return (series.length === 4 || series.length === 0)
}

export const isDocumentIndex = index => {
    return (index.length === 6 || index.length === 0)
}
