class DateHelper {

    constructor(){
        throw new Error('Essa classe não deve ser instanciada!')
    }

    static textForDate(text){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(text)) throw new Error('A data deve estar no formato: yyyy-mm-dd')
    
        return new Date(...text.split('-'));
    }


    static dateForText(date){
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }
}