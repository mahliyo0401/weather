export function getDate(dt, word, lang = 'ru') {
    
    const data = new Date(dt * 1000)
    
    return word == 'weekday' ? data.toLocaleString(lang, { weekday: 'short'}) :
           word == 'month'   ? data.toLocaleString(lang, { month: 'short'})   :
           word == 'monthDay' ? data.toLocaleString(lang, { day: 'numeric'})  : ''
    
}