// import {model} from './model'
// import {App} from './classes/app'
// import './styles/main.css'

// new App(model).init()

import { productList } from './productList'
import { tamplates, summ, table } from './function'

const $sidebarLeft = document.querySelector('#sidebarLeft')
const $sidebarRight = document.querySelector('#sidebarRight')
const $tableCalc = document.querySelector('#tableCalc')

productList.forEach((block) => {
    const toHTML = tamplates[block.type]

    if (toHTML) {
        if (block.column === 'left') {
            $sidebarLeft.insertAdjacentHTML('beforeend', toHTML(block))
        } else {
            $sidebarRight.insertAdjacentHTML('beforeend', toHTML(block))
        }
    }
})

productList.forEach((block) => {
    const toHTML = table[block.type]

    if (toHTML) {
        $tableCalc.insertAdjacentHTML('beforeend', toHTML(block))
    }
})

summ()

document.querySelector('#calculete').addEventListener('change', summ)

// console.log(productList)
