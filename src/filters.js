import Vue from 'vue'
import { DateTime } from 'luxon'

Vue.filter("dateFormat", value => {
    return DateTime.fromISO(value)
        .setLocale('pt-BR')
        .toFormat('dd/MM/yyyy')
})